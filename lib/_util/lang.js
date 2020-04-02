(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './env'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./env'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.env);
    global.lang = mod.exports;
  }
})(this, function (exports, _env) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.noop = noop;
  exports.requireRemoteScript = requireRemoteScript;
  exports.getDpr = getDpr;
  exports.functionToUrl = functionToUrl;
  exports.randomId = randomId;
  exports.transformCamelCase = transformCamelCase;
  exports.debounce = debounce;
  exports.throttle = throttle;
  exports.strFormatToDate = strFormatToDate;
  exports.dateAdd = dateAdd;
  exports.dateToStr = dateToStr;
  exports.isArray = isArray;
  exports.isString = isString;
  exports.isDate = isDate;
  exports.isNull = isNull;
  exports.sortBy = sortBy;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function noop() {}

  /**
   * Include external script dynamically
   */
  function requireRemoteScript(src, callback) {
    var doc = document;
    var head = doc.head || doc.getElementsByTagName('head')[0];

    var node = doc.createElement('script');
    var supportOnload = 'onload' in node;
    var onload = function onload() {
      node = null;
      typeof callback === 'function' && callback();
    };

    if (supportOnload) {
      node.onload = onload;
    } else {
      node.onreadystatechange = function () {
        if (/loaded|complete/.test(node.readyState)) {
          onload();
        }
      };
    }

    node.async = true;
    node.crossOrigin = true;
    node.charset = 'utf-8';
    node.src = src;
    head.appendChild(node);
  }

  function getDpr() {
    var getParam = function getParam(name, str) {
      var reg = new RegExp('(^|,)' + name + '=([^,]*)(,|$)', 'i');
      var r = str.match(reg);
      if (r != null) {
        return r[2];
      }
      return null;
    };

    var viewPort = _env.inBrowser ? document.querySelector('meta[name=viewport]') : null;

    if (!viewPort) {
      return 1;
    }

    var viewPortContent = viewPort.getAttribute('content');
    var initialScale = +(getParam('initial-scale', viewPortContent) || 1);
    var maximumScale = +(getParam('maximum-scale', viewPortContent) || 1);
    var minimumScale = +(getParam('minimum-scale', viewPortContent) || 1);

    return 1 / Math.min(initialScale, maximumScale, minimumScale);
  }

  /**
   * transform a Function to Blob Url
   */
  function functionToUrl(fn) {
    var blob = new Blob(['(' + fn.toString() + ')(null)'], {
      type: 'application/javascript'
    });
    return URL.createObjectURL(blob);
  }

  /**
   * generate random id
   */
  function randomId() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;

    return process.env.NODE_ENV !== 'test' ? prefix + '-' + parseInt(Math.random() * Math.pow(10, length)) : '';
  }

  /**
   * kebab-case -> camelCase
   */
  function transformCamelCase(str) {
    var re = /-(\w)/g;
    return str.replace(re, function ($0, $1) {
      return $1.toUpperCase();
    });
  }

  /**
   * Creates a debounced function that delays invoking fn until after delay milliseconds
   */
  function debounce() {
    var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

    var timer = null;

    return function () {
      var context = this;
      var args = arguments;

      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }

  /**
   * Creates a throttled function that only invokes fn at most once per every interval milliseconds
   */
  function throttle() {
    var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

    var last = 0;

    return function () {
      var context = this;
      var now = Date.now();

      if (now - last > interval) {
        last = now;
        fn.apply(context, arguments);
      }
    };
  }

  function strFormatToDate(formatStr, dateStr) {
    var year = 0;
    var start = -1;
    var len = dateStr.length;
    if ((start = formatStr.indexOf('yyyy')) > -1 && start < len) {
      year = dateStr.substr(start, 4);
    }
    var month = 0;
    if ((start = formatStr.indexOf('MM')) > -1 && start < len) {
      month = parseInt(dateStr.substr(start, 2)) - 1;
    }
    var day = 0;
    if ((start = formatStr.indexOf('dd')) > -1 && start < len) {
      day = parseInt(dateStr.substr(start, 2));
    }
    var hour = 0;
    if (((start = formatStr.indexOf('HH')) > -1 || (start = formatStr.indexOf('hh')) > 1) && start < len) {
      hour = parseInt(dateStr.substr(start, 2));
    }
    var minute = 0;
    if ((start = formatStr.indexOf('mm')) > -1 && start < len) {
      minute = dateStr.substr(start, 2);
    }
    var second = 0;
    if ((start = formatStr.indexOf('ss')) > -1 && start < len) {
      second = dateStr.substr(start, 2);
    }
    return new Date(year, month, day, hour, minute, second);
  }

  function dateAdd(strInterval, num, date) {
    date = arguments[2] || new Date();
    switch (strInterval) {
      case 's':
        return new Date(date.getTime() + 1000 * num);
      case 'n':
        return new Date(date.getTime() + 60000 * num);
      case 'h':
        return new Date(date.getTime() + 3600000 * num);
      case 'd':
        return new Date(date.getTime() + 86400000 * num);
      case 'w':
        return new Date(date.getTime() + 86400000 * 7 * num);
      case 'm':
        return new Date(date.getFullYear(), date.getMonth() + num, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
      case 'y':
        return new Date(date.getFullYear() + num, date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }

  function dateToStr(formatStr, date) {
    formatStr = arguments[0] || 'yyyy-MM-dd HH:mm:ss';
    date = arguments[1] || new Date();
    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    str = str.replace(/yyyy|YYYY/, date.getFullYear());
    str = str.replace(/yy|YY/, date.getYear() % 100 > 9 ? (date.getYear() % 100).toString() : '0' + date.getYear() % 100);
    str = str.replace(/MM/, date.getMonth() >= 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1));
    str = str.replace(/M/g, date.getMonth());
    str = str.replace(/w|W/g, Week[date.getDay()]);

    str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate());
    str = str.replace(/d|D/g, date.getDate());

    str = str.replace(/hh|HH/, date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours());
    str = str.replace(/h|H/g, date.getHours());
    str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes());
    str = str.replace(/m/g, date.getMinutes());

    str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds());
    str = str.replace(/s|S/g, date.getSeconds());
    return str;
  }

  function getType(obj) {
    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    if (type !== 'object') {
      return type;
    }
    return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');
  }

  function isArray(val) {
    return getType(val) === 'Array';
  }

  function isString(val) {
    return getType(val) === 'String';
  }

  function isDate(val) {
    return getType(val) === 'Date';
  }

  function isNull(val) {
    return val === undefined || val === null;
  }

  function sortBy(arr, prop, desc) {
    if (!(arr instanceof Array)) {
      console.error('sortBy Error:', 'arr is not an array');
    }
    var newArr = [];
    var props = [];
    var sortNumber = false;

    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      var propData = item && item[prop] || '';
      // eslint-disable-next-line no-new-wrappers
      (props[i] = new String(propData))._obj = item;
    }

    for (var _i = 0; _i < arr.length; _i++) {
      if (typeof arr[_i][prop] === 'number') {
        sortNumber = true;
        break;
      } else {
        if (typeof arr[_i][prop] === 'string') {
          sortNumber = false;
          break;
        }
      }
    }
    if (sortNumber) {
      props.sort(function (a, b) {
        return a - b;
      });
    } else {
      props.sort();
    }

    for (var _i2 = 0; _i2 < arr.length; _i2++) {
      newArr[_i2] = props[_i2]._obj;
    }
    if (desc === 'desc') {
      newArr.reverse();
    }
    return newArr;
  }
});