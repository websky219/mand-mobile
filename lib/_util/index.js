(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './debug', './env', './store', './lang', './dom'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./debug'), require('./env'), require('./store'), require('./lang'), require('./dom'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.debug, global.env, global.store, global.lang, global.dom);
    global.index = mod.exports;
  }
})(this, function (exports, _debug, _env, _store, _lang, _dom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_debug).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _debug[key];
      }
    });
  });
  Object.keys(_env).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _env[key];
      }
    });
  });
  Object.keys(_store).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _store[key];
      }
    });
  });
  Object.keys(_lang).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _lang[key];
      }
    });
  });
  Object.keys(_dom).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _dom[key];
      }
    });
  });
});