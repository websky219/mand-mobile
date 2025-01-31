(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './index', './animate'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./index'), require('./animate'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.index, global.animate);
    global.scroller = mod.exports;
  }
})(this, function (exports, _index, _animate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _animate2 = _interopRequireDefault(_animate);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var members = {
    _isSingleTouch: false,
    _isTracking: false,
    _didDecelerationComplete: false,
    _isGesturing: false,
    _isDragging: false,
    _isDecelerating: false,
    _isAnimating: false,
    _clientLeft: 0,
    _clientTop: 0,
    _clientWidth: 0,
    _clientHeight: 0,
    _contentWidth: 0,
    _contentHeight: 0,
    _snapWidth: 100,
    _snapHeight: 100,
    _refreshHeight: null,
    _refreshActive: false,
    _refreshActivate: null,
    _refreshDeactivate: null,
    _refreshStart: null,
    _zoomLevel: 1,
    _scrollLeft: 0,
    _scrollTop: 0,
    _maxScrollLeft: 0,
    _maxScrollTop: 0,
    _scheduledLeft: 0,
    _scheduledTop: 0,
    _lastTouchLeft: null,
    _lastTouchTop: null,
    _lastTouchMove: null,
    _positions: null,
    _minDecelerationScrollLeft: null,
    _minDecelerationScrollTop: null,
    _maxDecelerationScrollLeft: null,
    _maxDecelerationScrollTop: null,
    _decelerationVelocityX: null,
    _decelerationVelocityY: null
    /* istanbul ignore next */
  };
  var Scroller = function () {
    function Scroller() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.noop;
      var options = arguments[1];

      _classCallCheck(this, Scroller);

      this.options = {
        scrollingX: true,
        scrollingY: true,
        animating: true,
        animationDuration: 250,
        inRequestAnimationFrame: false,
        bouncing: true,
        locking: true,
        paging: false,
        snapping: false,
        snappingVelocity: 4,
        zooming: false,
        minZoom: 0.5,
        maxZoom: 3,
        speedMultiplier: 1,
        scrollingComplete: _index.noop,
        penetrationDeceleration: 0.03,
        penetrationAcceleration: 0.08
      };
      (0, _index.extend)(this.options, options);
      this._callback = callback;
    }

    /**
     * Configures the dimensions of the client (outer) and content (inner) elements.
     * Requires the available space for the outer element and the outer size of the inner element.
     * All values which are falsy (null or zero etc.) are ignored and the old value is kept.
     *
     * @param clientWidth {Integer ? null} Inner width of outer element
     * @param clientHeight {Integer ? null} Inner height of outer element
     * @param contentWidth {Integer ? null} Outer width of inner element
     * @param contentHeight {Integer ? null} Outer height of inner element
     */


    _createClass(Scroller, [{
      key: 'setDimensions',
      value: function setDimensions(clientWidth, clientHeight, contentWidth, contentHeight) {
        // Only update values which are defined
        if (clientWidth === +clientWidth) {
          this._clientWidth = clientWidth;
        }

        if (clientHeight === +clientHeight) {
          this._clientHeight = clientHeight;
        }

        if (contentWidth === +contentWidth) {
          this._contentWidth = contentWidth;
        }

        if (contentHeight === +contentHeight) {
          this._contentHeight = contentHeight;
        }

        // Refresh maximums
        this._computeScrollMax();

        // Refresh scroll position
        this.scrollTo(this._scrollLeft, this._scrollTop, true);
      }
    }, {
      key: 'setPosition',
      value: function setPosition(left, top) {
        this._clientLeft = left || 0;
        this._clientTop = top || 0;
      }
    }, {
      key: 'setSnapSize',
      value: function setSnapSize(width, height) {
        this._snapWidth = width;
        this._snapHeight = height;
      }
    }, {
      key: 'getValues',
      value: function getValues() {
        return {
          left: this._scrollLeft,
          top: this._scrollTop,
          zoom: this._zoomLevel
        };
      }
    }, {
      key: 'getScrollMax',
      value: function getScrollMax() {
        return {
          left: this._maxScrollLeft,
          top: this._maxScrollTop
        };
      }
    }, {
      key: 'activatePullToRefresh',
      value: function activatePullToRefresh(height, activateCallback, deactivateCallback, startCallback) {
        this._refreshHeight = height;
        this._refreshActivate = activateCallback;
        this._refreshDeactivate = deactivateCallback;
        this._refreshStart = startCallback;
      }
    }, {
      key: 'triggerPullToRefresh',
      value: function triggerPullToRefresh() {
        // Use publish instead of scrollTo to allow scrolling to out of boundary position
        // We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
        this._publish(this._scrollLeft, -this._refreshHeight, this._zoomLevel, true);

        if (this._refreshStart) {
          this._refreshStart();
        }
      }
    }, {
      key: 'finishPullToRefresh',
      value: function finishPullToRefresh() {
        this._refreshActive = false;

        if (this._refreshDeactivate) {
          this._refreshDeactivate();
        }

        this.scrollTo(this._scrollLeft, this._scrollTop, true);
      }
    }, {
      key: 'scrollTo',
      value: function scrollTo(left, top, animate) {
        var zoom = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

        // Stop deceleration
        if (this._isDecelerating) {
          _animate2.default.stop(this._isDecelerating);
          this._isDecelerating = false;
        }

        // Correct coordinates based on new zoom level
        if (zoom != null && zoom !== this._zoomLevel) {
          if (!this.options.zooming) {
            (0, _index.warn)('Zooming is not enabled!');
          }
          zoom = zoom ? zoom : 1;
          left *= zoom;
          top *= zoom;

          // // Recompute maximum values while temporary tweaking maximum scroll ranges
          this._computeScrollMax(zoom);
        } else {
          // Keep zoom when not defined
          zoom = this._zoomLevel;
        }

        if (!this.options.scrollingX) {
          left = this._scrollLeft;
        } else {
          if (this.options.paging) {
            left = Math.round(left / this._clientWidth) * this._clientWidth;
          } else if (this.options.snapping) {
            left = Math.round(left / this._snapWidth) * this._snapWidth;
          }
        }

        if (!this.options.scrollingY) {
          top = this._scrollTop;
        } else {
          if (this.options.paging) {
            top = Math.round(top / this._clientHeight) * this._clientHeight;
          } else if (this.options.snapping) {
            top = Math.round(top / this._snapHeight) * this._snapHeight;
          }
        }

        // Limit for allowed ranges
        left = Math.max(Math.min(this._maxScrollLeft, left), 0);
        top = Math.max(Math.min(this._maxScrollTop, top), 0);

        // Don't animate when no change detected, still call publish to make sure
        // that rendered position is really in-sync with internal data
        if (left === this._scrollLeft && top === this._scrollTop) {
          animate = false;
        }
        // Publish new values
        if (!this._isTracking) {
          this._publish(left, top, zoom, animate);
        }
      }
    }, {
      key: 'zoomTo',
      value: function zoomTo(level, animate, originLeft, originTop, callback) {
        if (!this.options.zooming) {
          (0, _index.warn)('Zooming is not enabled!');
        }

        // Add callback if exists
        if (callback) {
          this._zoomComplete = callback;
        }

        // Stop deceleration
        if (this._isDecelerating) {
          _animate2.default.stop(this._isDecelerating);
          this._isDecelerating = false;
        }

        var oldLevel = this._zoomLevel;

        // Normalize input origin to center of viewport if not defined
        if (originLeft == null) {
          originLeft = this._clientWidth / 2;
        }

        if (originTop == null) {
          originTop = this._clientHeight / 2;
        }

        // Limit level according to configuration
        level = Math.max(Math.min(level, this.options.maxZoom), this.options.minZoom);

        // Recompute maximum values while temporary tweaking maximum scroll ranges
        this._computeScrollMax(level);

        // Recompute left and top coordinates based on new zoom level
        var left = (originLeft + this._scrollLeft) * level / oldLevel - originLeft;
        var top = (originTop + this._scrollTop) * level / oldLevel - originTop;

        // Limit x-axis
        if (left > this._maxScrollLeft) {
          left = this._maxScrollLeft;
        } else if (left < 0) {
          left = 0;
        }

        // Limit y-axis
        if (top > this._maxScrollTop) {
          top = this._maxScrollTop;
        } else if (top < 0) {
          top = 0;
        }

        // Push values out
        this._publish(left, top, level, animate);
      }
    }, {
      key: 'doTouchStart',
      value: function doTouchStart(touches, timeStamp) {
        // Array-like check is enough here
        if (touches.length == null) {
          (0, _index.warn)('Invalid touch list: ' + touches);
        }
        if (timeStamp instanceof Date) {
          timeStamp = timeStamp.valueOf();
        }
        if (typeof timeStamp !== 'number') {
          (0, _index.warn)('Invalid timestamp value: ' + timeStamp);
        }

        // Reset interruptedAnimation flag
        this._interruptedAnimation = true;

        // Stop deceleration
        if (this._isDecelerating) {
          _animate2.default.stop(this._isDecelerating);
          this._isDecelerating = false;
          this._interruptedAnimation = true;
        }

        // Stop animation
        if (this._isAnimating) {
          _animate2.default.stop(this._isAnimating);
          this._isAnimating = false;
          this._interruptedAnimation = true;
        }

        // Use center point when dealing with two fingers
        var isSingleTouch = touches.length === 1;
        var currentTouchLeft = void 0,
            currentTouchTop = void 0;

        if (isSingleTouch) {
          currentTouchLeft = touches[0].pageX;
          currentTouchTop = touches[0].pageY;
        } else {
          currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
          currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
        }

        // Store initial positions
        this._initialTouchLeft = currentTouchLeft;
        this._initialTouchTop = currentTouchTop;

        // Store current zoom level
        this._zoomLevelStart = this._zoomLevel;

        // Store initial touch positions
        this._lastTouchLeft = currentTouchLeft;
        this._lastTouchTop = currentTouchTop;

        // Store initial move time stamp
        this._lastTouchMove = timeStamp;

        // Reset initial scale
        this._lastScale = 1;

        // Reset locking flags
        this._enableScrollX = !isSingleTouch && this.options.scrollingX;
        this._enableScrollY = !isSingleTouch && this.options.scrollingY;

        // Reset tracking flag
        this._isTracking = true;

        // Reset deceleration complete flag
        this._didDecelerationComplete = false;

        // Dragging starts directly with two fingers, otherwise lazy with an offset
        this._isDragging = !isSingleTouch;

        // Some features are disabled in multi touch scenarios
        this._isSingleTouch = isSingleTouch;

        // Clearing data structure
        this._positions = [];
      }
    }, {
      key: 'doTouchMove',
      value: function doTouchMove(touches, timeStamp, scale) {
        // Array-like check is enough here
        if (touches.length == null) {
          (0, _index.warn)('Invalid touch list: ' + touches);
        }

        if (timeStamp instanceof Date) {
          timeStamp = timeStamp.valueOf();
        }

        if (typeof timeStamp !== 'number') {
          (0, _index.warn)('Invalid timestamp value: ' + timeStamp);
        }

        // Ignore event when tracking is not enabled (event might be outside of element)
        if (!this._isTracking) {
          return;
        }

        var currentTouchLeft = void 0,
            currentTouchTop = void 0;

        // Compute move based around of center of fingers
        if (touches.length === 2) {
          currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
          currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
        } else {
          currentTouchLeft = touches[0].pageX;
          currentTouchTop = touches[0].pageY;
        }

        var positions = this._positions;

        // Are we already is dragging mode?
        if (this._isDragging) {
          // Compute move distance
          var moveX = currentTouchLeft - this._lastTouchLeft;
          var moveY = currentTouchTop - this._lastTouchTop;

          // Read previous scroll position and zooming
          var scrollLeft = this._scrollLeft;
          var scrollTop = this._scrollTop;
          var level = this._zoomLevel;

          // Work with scaling
          if (scale != null && this.options.zooming) {
            var oldLevel = level;

            // Recompute level based on previous scale and new scale
            level = level / this._lastScale * scale;

            // Limit level according to configuration
            level = Math.max(Math.min(level, this.options.maxZoom), this.options.minZoom);

            // Only do further compution when change happened
            if (oldLevel !== level) {
              // Compute relative event position to container
              var currentTouchLeftRel = currentTouchLeft - this._clientLeft;
              var currentTouchTopRel = currentTouchTop - this._clientTop;

              // Recompute left and top coordinates based on new zoom level
              scrollLeft = (currentTouchLeftRel + scrollLeft) * level / oldLevel - currentTouchLeftRel;
              scrollTop = (currentTouchTopRel + scrollTop) * level / oldLevel - currentTouchTopRel;

              // Recompute max scroll values
              this._computeScrollMax(level);
            }
          }

          if (this._enableScrollX) {
            scrollLeft -= moveX * this.options.speedMultiplier;
            var maxScrollLeft = this._maxScrollLeft;

            if (scrollLeft > maxScrollLeft || scrollLeft < 0) {
              // Slow down on the edges
              if (this.options.bouncing) {
                scrollLeft += moveX / 2 * this.options.speedMultiplier;
              } else if (scrollLeft > maxScrollLeft) {
                scrollLeft = maxScrollLeft;
              } else {
                scrollLeft = 0;
              }
            }
          }

          // Compute new vertical scroll position
          if (this._enableScrollY) {
            scrollTop -= moveY * this.options.speedMultiplier;
            var maxScrollTop = this._maxScrollTop;
            if (scrollTop > maxScrollTop || scrollTop < 0) {
              // Slow down on the edges
              if (this.options.bouncing) {
                scrollTop += moveY / 2 * this.options.speedMultiplier;
                // Support pull-to-refresh (only when only y is scrollable)
                if (!this._enableScrollX && this._refreshHeight != null) {
                  if (!this._refreshActive && scrollTop <= -this._refreshHeight) {
                    this._refreshActive = true;
                    if (this._refreshActivate) {
                      this._refreshActivate();
                    }
                  } else if (this._refreshActive && scrollTop > -this._refreshHeight) {
                    this._refreshActive = false;
                    if (this._refreshDeactivate) {
                      this._refreshDeactivate();
                    }
                  }
                }
              } else if (scrollTop > maxScrollTop) {
                scrollTop = maxScrollTop;
              } else {
                scrollTop = 0;
              }
            }
          }

          // Keep list from growing infinitely (holding min 10, max 20 measure points)
          if (positions.length > 60) {
            positions.splice(0, 30);
          }

          // Track scroll movement for decleration
          positions.push(scrollLeft, scrollTop, timeStamp);

          // Sync scroll position
          this._publish(scrollLeft, scrollTop, level);

          // Otherwise figure out whether we are switching into dragging mode now.
        } else {
          var minimumTrackingForScroll = this.options.locking ? 3 : 0;
          var minimumTrackingForDrag = 5;

          var distanceX = Math.abs(currentTouchLeft - this._initialTouchLeft);
          var distanceY = Math.abs(currentTouchTop - this._initialTouchTop);

          this._enableScrollX = this.options.scrollingX && distanceX >= minimumTrackingForScroll;
          this._enableScrollY = this.options.scrollingY && distanceY >= minimumTrackingForScroll;

          positions.push(this._scrollLeft, this._scrollTop, timeStamp);

          this._isDragging = (this._enableScrollX || this._enableScrollY) && (distanceX >= minimumTrackingForDrag || distanceY >= minimumTrackingForDrag);
          if (this._isDragging) {
            this._interruptedAnimation = false;
          }
        }

        // Update last touch positions and time stamp for next event
        this._lastTouchLeft = currentTouchLeft;
        this._lastTouchTop = currentTouchTop;
        this._lastTouchMove = timeStamp;
      }
    }, {
      key: 'doTouchEnd',
      value: function doTouchEnd(timeStamp) {
        if (timeStamp instanceof Date) {
          timeStamp = timeStamp.valueOf();
        }

        if (typeof timeStamp !== 'number') {
          (0, _index.warn)('Invalid timestamp value: ' + timeStamp);
        }
        // Ignore event when tracking is not enabled (no touchstart event on element)
        // This is required as this listener ('touchmove') sits on the document and not on the element itthis.
        if (!this._isTracking) {
          return;
        }

        // Not touching anymore (when two finger hit the screen there are two touch end events)
        this._isTracking = false;

        // Be sure to reset the dragging flag now. Here we also detect whether
        // the finger has moved fast enough to switch into a deceleration animation.
        if (this._isDragging) {
          // Reset dragging flag
          this._isDragging = false;

          // Start deceleration
          // Verify that the last move detected was in some relevant time frame
          if (this._isSingleTouch && this.options.animating && timeStamp - this._lastTouchMove <= 100) {
            // Then figure out what the scroll position was about 100ms ago
            var positions = this._positions;
            var endPos = positions.length - 1;
            var startPos = endPos;

            // Move pointer to position measured 100ms ago
            for (var i = endPos; i > 0 && positions[i] > this._lastTouchMove - 100; i -= 3) {
              startPos = i;
            }

            // If start and stop position is identical in a 100ms timeframe,
            // we cannot compute any useful deceleration.
            if (startPos !== endPos) {
              // Compute relative movement between these two points
              var timeOffset = positions[endPos] - positions[startPos];
              var movedLeft = this._scrollLeft - positions[startPos - 2];
              var movedTop = this._scrollTop - positions[startPos - 1];

              // Based on 50ms compute the movement to apply for each render step
              this._decelerationVelocityX = movedLeft / timeOffset * (1000 / 60);
              this._decelerationVelocityY = movedTop / timeOffset * (1000 / 60);

              // How much velocity is required to start the deceleration
              var minVelocityToStartDeceleration = this.options.paging || this.options.snapping ? this.options.snappingVelocity : 0.01;

              // Verify that we have enough velocity to start deceleration
              if (Math.abs(this._decelerationVelocityX) > minVelocityToStartDeceleration || Math.abs(this._decelerationVelocityY) > minVelocityToStartDeceleration) {
                // Deactivate pull-to-refresh when decelerating
                if (!this._refreshActive) {
                  this._startDeceleration(timeStamp);
                }
              } else {
                this.options.scrollingComplete();
              }
            } else {
              this.options.scrollingComplete();
            }
          } else if (timeStamp - this._lastTouchMove > 100) {
            !this.options.snapping && this.options.scrollingComplete();
          }
        }

        // If this was a slower move it is per default non decelerated, but this
        // still means that we want snap back to the bounds which is done here.
        // This is placed outside the condition above to improve edge case stability
        // e.g. touchend fired without enabled dragging. This should normally do not
        // have modified the scroll positions or even showed the scrollbars though.
        if (!this._isDecelerating) {
          if (this._refreshActive && this._refreshStart) {
            // Use publish instead of scrollTo to allow scrolling to out of boundary position
            // We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
            this._publish(this._scrollLeft, -this._refreshHeight, this._zoomLevel, true);

            if (this._refreshStart) {
              this._refreshStart();
            }
          } else {
            if (this._interruptedAnimation || this._isDragging) {
              this.options.scrollingComplete();
            }

            this.scrollTo(this._scrollLeft, this._scrollTop, true, this._zoomLevel);
            // Directly signalize deactivation (nothing todo on refresh?)
            if (this._refreshActive) {
              this._refreshActive = false;
              if (this._refreshDeactivate) {
                this._refreshDeactivate();
              }
            }
          }
        }

        // Fully cleanup list
        this._positions.length = 0;
      }
    }, {
      key: '_publish',
      value: function _publish(left, top) {
        var _this = this;

        var zoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var animate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        // Remember whether we had an animation, then we try to continue based on the current "drive" of the animation
        var wasAnimating = this._isAnimating;

        if (wasAnimating) {
          _animate2.default.stop(wasAnimating);
          this._isAnimating = false;
        }

        if (animate && this.options.animating) {
          // Keep scheduled positions for scrollBy/zoomBy functionality
          this._scheduledLeft = left;
          this._scheduledTop = top;
          this._scheduledZoom = zoom;

          var oldLeft = this._scrollLeft;
          var oldTop = this._scrollTop;
          var oldZoom = this._zoomLevel;

          var diffLeft = left - oldLeft;
          var diffTop = top - oldTop;
          var diffZoom = zoom - oldZoom;

          var step = function step(percent, now, render) {
            if (render) {
              _this._scrollLeft = oldLeft + diffLeft * percent;
              _this._scrollTop = oldTop + diffTop * percent;
              _this._zoomLevel = oldZoom + diffZoom * percent;
              // Push values out
              if (_this._callback) {
                _this._callback(_this._scrollLeft, _this._scrollTop, _this._zoomLevel);
              }
            }
          };

          var verify = function verify(id) {
            return _this._isAnimating === id;
          };

          var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
            if (animationId === _this._isAnimating) {
              _this._isAnimating = false;
            }

            if (_this._didDecelerationComplete || wasFinished) {
              _this.options.scrollingComplete();
            }

            if (_this.options.zooming) {
              _this._computeScrollMax();
              if (_this._zoomComplete) {
                _this._zoomComplete();
                _this._zoomComplete = null;
              }
            }
          };

          var doAnimation = function doAnimation() {
            // When continuing based on previous animation we choose an ease-out animation instead of ease-in-out
            _this._isAnimating = _animate2.default.start(step, verify, completed, _this.options.animationDuration, wasAnimating ? _animate.easeOutCubic : _animate.easeInOutCubic);
          };

          if (this.options.inRequestAnimationFrame) {
            _animate2.default.requestAnimationFrame(function () {
              doAnimation();
            });
          } else {
            doAnimation();
          }
        } else {
          this._scheduledLeft = this._scrollLeft = left;
          this._scheduledTop = this._scrollTop = top;
          this._scheduledZoom = this._zoomLevel = zoom;

          // Push values out
          if (this._callback) {
            this._callback(left, top, zoom);
          }

          // Fix max scroll ranges
          if (this.options.zooming) {
            this._computeScrollMax();
            if (this._zoomComplete) {
              this._zoomComplete();
              this._zoomComplete = null;
            }
          }
        }
      }
    }, {
      key: '_computeScrollMax',
      value: function _computeScrollMax(zoomLevel) {
        if (zoomLevel == null) {
          zoomLevel = this._zoomLevel;
        }

        this._maxScrollLeft = Math.max(this._contentWidth * zoomLevel - this._clientWidth, 0);
        this._maxScrollTop = Math.max(this._contentHeight * zoomLevel - this._clientHeight, 0);
      }
    }, {
      key: '_startDeceleration',
      value: function _startDeceleration(timeStamp) {
        var _this2 = this;

        if (this.options.paging) {
          var scrollLeft = Math.max(Math.min(this._scrollLeft, this._maxScrollLeft), 0);
          var scrollTop = Math.max(Math.min(this._scrollTop, this._maxScrollTop), 0);
          var clientWidth = this._clientWidth;
          var clientHeight = this._clientHeight;

          // We limit deceleration not to the min/max values of the allowed range, but to the size of the visible client area.
          // Each page should have exactly the size of the client area.
          this._minDecelerationScrollLeft = Math.floor(scrollLeft / clientWidth) * clientWidth;
          this._minDecelerationScrollTop = Math.floor(scrollTop / clientHeight) * clientHeight;
          this._maxDecelerationScrollLeft = Math.ceil(scrollLeft / clientWidth) * clientWidth;
          this._maxDecelerationScrollTop = Math.ceil(scrollTop / clientHeight) * clientHeight;
        } else {
          this._minDecelerationScrollLeft = 0;
          this._minDecelerationScrollTop = 0;
          this._maxDecelerationScrollLeft = this._maxScrollLeft;
          this._maxDecelerationScrollTop = this._maxScrollTop;
        }

        // Wrap class method
        var step = function step(percent, now, render) {
          _this2._stepThroughDeceleration(render);
        };

        // How much velocity is required to keep the deceleration running
        var minVelocityToKeepDecelerating = this.options.snapping ? this.options.snappingVelocity : 0.01;

        // Detect whether it's still worth to continue animating steps
        // If we are already slow enough to not being user perceivable anymore, we stop the whole process here.
        var verify = function verify() {
          var shouldContinue = Math.abs(_this2._decelerationVelocityX) >= minVelocityToKeepDecelerating || Math.abs(_this2._decelerationVelocityY) >= minVelocityToKeepDecelerating;
          if (!shouldContinue) {
            _this2._didDecelerationComplete = true;
          }
          return shouldContinue;
        };

        var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
          _this2._isDecelerating = false;
          // if (this._didDecelerationComplete) {
          //   this.options.scrollingComplete()
          // }

          // Animate to grid when snapping is active, otherwise just fix out-of-boundary positions
          _this2.scrollTo(_this2._scrollLeft, _this2._scrollTop, _this2.options.snapping);
        };

        // Start animation and switch on flag
        this._isDecelerating = _animate2.default.start(step, verify, completed);
      }
    }, {
      key: '_stepThroughDeceleration',
      value: function _stepThroughDeceleration(render) {
        //
        // COMPUTE NEXT SCROLL POSITION
        //

        // Add deceleration to scroll position
        var scrollLeft = this._scrollLeft + this._decelerationVelocityX;
        var scrollTop = this._scrollTop + this._decelerationVelocityY;

        //
        // HARD LIMIT SCROLL POSITION FOR NON BOUNCING MODE
        //

        if (!this.options.bouncing) {
          var scrollLeftFixed = Math.max(Math.min(this._maxDecelerationScrollLeft, scrollLeft), this._minDecelerationScrollLeft);
          if (scrollLeftFixed !== scrollLeft) {
            scrollLeft = scrollLeftFixed;
            this._decelerationVelocityX = 0;
          }
          var scrollTopFixed = Math.max(Math.min(this._maxDecelerationScrollTop, scrollTop), this._minDecelerationScrollTop);
          if (scrollTopFixed !== scrollTop) {
            scrollTop = scrollTopFixed;
            this._decelerationVelocityY = 0;
          }
        }

        //
        // UPDATE SCROLL POSITION
        //

        if (render) {
          this._publish(scrollLeft, scrollTop, this._zoomLevel);
        } else {
          this._scrollLeft = scrollLeft;
          this._scrollTop = scrollTop;
        }

        //
        // SLOW DOWN
        //

        // Slow down velocity on every iteration
        if (!this.options.paging) {
          // This is the factor applied to every iteration of the animation
          // to slow down the process. This should emulate natural behavior where
          // objects slow down when the initiator of the movement is removed
          var frictionFactor = 0.95;
          this._decelerationVelocityX *= frictionFactor;
          this._decelerationVelocityY *= frictionFactor;
        }

        //
        // BOUNCING SUPPORT
        //

        if (this.options.bouncing) {
          var scrollOutsideX = 0;
          var scrollOutsideY = 0;

          // This configures the amount of change applied to deceleration/acceleration when reaching boundaries
          var penetrationDeceleration = this.options.penetrationDeceleration;
          var penetrationAcceleration = this.options.penetrationAcceleration;

          // Check limits
          if (scrollLeft < this._minDecelerationScrollLeft) {
            scrollOutsideX = this._minDecelerationScrollLeft - scrollLeft;
          } else if (scrollLeft > this._maxDecelerationScrollLeft) {
            scrollOutsideX = this._maxDecelerationScrollLeft - scrollLeft;
          }

          if (scrollTop < this._minDecelerationScrollTop) {
            scrollOutsideY = this._minDecelerationScrollTop - scrollTop;
          } else if (scrollTop > this._maxDecelerationScrollTop) {
            scrollOutsideY = this._maxDecelerationScrollTop - scrollTop;
          }

          // Slow down until slow enough, then flip back to snap position
          if (scrollOutsideX !== 0) {
            if (scrollOutsideX * this._decelerationVelocityX <= 0) {
              this._decelerationVelocityX += scrollOutsideX * penetrationDeceleration;
            } else {
              this._decelerationVelocityX = scrollOutsideX * penetrationAcceleration;
            }
          }

          if (scrollOutsideY !== 0) {
            if (scrollOutsideY * this._decelerationVelocityY <= 0) {
              this._decelerationVelocityY += scrollOutsideY * penetrationDeceleration;
            } else {
              this._decelerationVelocityY = scrollOutsideY * penetrationAcceleration;
            }
          }
        }
      }
    }]);

    return Scroller;
  }();

  exports.default = Scroller;


  (0, _index.extend)(Scroller.prototype, members);
});