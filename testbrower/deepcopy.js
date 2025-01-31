/*!
 * @license deepcopy.js Copyright(c) 2013 sasa+1
 * https://github.com/sasaplus1/deepcopy.js
 * Released under the MIT license.
 *
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e = e || self).deepcopy = t());
})(this, function() {
  'use strict';
  var e =
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  var t,
    n = ((function(t, n) {
      var r, o, i, a, f, u, c, l, p, y, s, b, d, g, w, m, S, j, O, A;
      t.exports = ((r = 'function' == typeof Promise),
      (o = 'object' == typeof self ? self : e),
      (i = 'undefined' != typeof Symbol),
      (a = 'undefined' != typeof Map),
      (f = 'undefined' != typeof Set),
      (u = 'undefined' != typeof WeakMap),
      (c = 'undefined' != typeof WeakSet),
      (l = 'undefined' != typeof DataView),
      (p = i && void 0 !== Symbol.iterator),
      (y = i && void 0 !== Symbol.toStringTag),
      (s = f && 'function' == typeof Set.prototype.entries),
      (b = a && 'function' == typeof Map.prototype.entries),
      (d = s && Object.getPrototypeOf(new Set().entries())),
      (g = b && Object.getPrototypeOf(new Map().entries())),
      (w = p && 'function' == typeof Array.prototype[Symbol.iterator]),
      (m = w && Object.getPrototypeOf([][Symbol.iterator]())),
      (S = p && 'function' == typeof String.prototype[Symbol.iterator]),
      (j = S && Object.getPrototypeOf(''[Symbol.iterator]())),
      (O = 8),
      (A = -1),
      function(e) {
        var t = typeof e;
        if ('object' !== t) return t;
        if (null === e) return 'null';
        if (e === o) return 'global';
        if (Array.isArray(e) && (!1 === y || !(Symbol.toStringTag in e)))
          return 'Array';
        if ('object' == typeof window && null !== window) {
          if ('object' == typeof window.location && e === window.location)
            return 'Location';
          if ('object' == typeof window.document && e === window.document)
            return 'Document';
          if ('object' == typeof window.navigator) {
            if (
              'object' == typeof window.navigator.mimeTypes &&
              e === window.navigator.mimeTypes
            )
              return 'MimeTypeArray';
            if (
              'object' == typeof window.navigator.plugins &&
              e === window.navigator.plugins
            )
              return 'PluginArray';
          }
          if (
            ('function' == typeof window.HTMLElement ||
              'object' == typeof window.HTMLElement) &&
            e instanceof window.HTMLElement
          ) {
            if ('BLOCKQUOTE' === e.tagName) return 'HTMLQuoteElement';
            if ('TD' === e.tagName) return 'HTMLTableDataCellElement';
            if ('TH' === e.tagName) return 'HTMLTableHeaderCellElement';
          }
        }
        var n = y && e[Symbol.toStringTag];
        if ('string' == typeof n) return n;
        var i = Object.getPrototypeOf(e);
        return i === RegExp.prototype
          ? 'RegExp'
          : i === Date.prototype
          ? 'Date'
          : r && i === Promise.prototype
          ? 'Promise'
          : f && i === Set.prototype
          ? 'Set'
          : a && i === Map.prototype
          ? 'Map'
          : c && i === WeakSet.prototype
          ? 'WeakSet'
          : u && i === WeakMap.prototype
          ? 'WeakMap'
          : l && i === DataView.prototype
          ? 'DataView'
          : a && i === g
          ? 'Map Iterator'
          : f && i === d
          ? 'Set Iterator'
          : w && i === m
          ? 'Array Iterator'
          : S && i === j
          ? 'String Iterator'
          : null === i
          ? 'Object'
          : Object.prototype.toString.call(e).slice(O, A);
      });
    })((t = { exports: {} }), t.exports),
    t.exports);
  const r = 'undefined' != typeof Buffer,
    o = r && void 0 !== Buffer.from,
    i = r
      ? function(e) {
          return Buffer.isBuffer(e);
        }
      : function() {
          return !1;
        },
    a = o
      ? function(e) {
          return Buffer.from(e);
        }
      : r
      ? function(e) {
          return new Buffer(e);
        }
      : function(e) {
          return e;
        };
  function f(e) {
    return i(e) ? 'Buffer' : n(e);
  }
  const u = new Set(['Arguments', 'Array', 'Map', 'Object', 'Set']);
  function c(e, t, n = null) {
    switch (n || f(e)) {
      case 'Arguments':
      case 'Array':
      case 'Object':
        return e[t];
      case 'Map':
        return e.get(t);
      case 'Set':
        return t;
    }
  }
  function l(e) {
    return u.has(e);
  }
  function p(e, t, n, r = null) {
    switch (r || f(e)) {
      case 'Arguments':
      case 'Array':
      case 'Object':
        e[t] = n;
        break;
      case 'Map':
        e.set(t, n);
        break;
      case 'Set':
        e.add(n);
    }
    return e;
  }
  const y =
      'undefined' != typeof globalThis &&
      null !== globalThis &&
      globalThis.Object === Object &&
      globalThis,
    s =
      'undefined' != typeof global &&
      null !== global &&
      global.Object === Object &&
      global,
    b =
      'undefined' != typeof self &&
      null !== self &&
      self.Object === Object &&
      self,
    d = y || s || b || Function('return this')();
  function g(e, t) {
    return d[t].from(e);
  }
  function w(e) {
    return e;
  }
  function m() {
    return [];
  }
  var S = new Map([
    [
      'ArrayBuffer',
      function(e) {
        return e.slice(0);
      },
    ],
    [
      'Boolean',
      function(e) {
        return new Boolean(e.valueOf());
      },
    ],
    [
      'Buffer',
      function(e) {
        return a(e);
      },
    ],
    [
      'DataView',
      function(e) {
        return new DataView(e.buffer);
      },
    ],
    [
      'Date',
      function(e) {
        return new Date(e.getTime());
      },
    ],
    [
      'Number',
      function(e) {
        return new Number(e);
      },
    ],
    [
      'RegExp',
      function(e) {
        return new RegExp(e.source || '(?:)', e.flags);
      },
    ],
    [
      'String',
      function(e) {
        return new String(e);
      },
    ],
    ['Float32Array', g],
    ['Float64Array', g],
    ['Int16Array', g],
    ['Int32Array', g],
    ['Int8Array', g],
    ['Uint16Array', g],
    ['Uint32Array', g],
    ['Uint8Array', g],
    ['Uint8ClampedArray', g],
    ['Array Iterator', w],
    ['Map Iterator', w],
    ['Promise', w],
    ['Set Iterator', w],
    ['String Iterator', w],
    ['function', w],
    ['global', w],
    ['WeakMap', w],
    ['WeakSet', w],
    ['boolean', w],
    ['null', w],
    ['number', w],
    ['string', w],
    ['symbol', w],
    ['undefined', w],
    ['Arguments', m],
    ['Array', m],
    [
      'Map',
      function() {
        return new Map();
      },
    ],
    [
      'Object',
      function() {
        return {};
      },
    ],
    [
      'Set',
      function() {
        return new Set();
      },
    ],
  ]);
  function j(e, t = null, n = function() {}) {
    2 === arguments.length && 'function' == typeof t && ((n = t), (t = null));
    const r = t || f(e),
      o = S.get(r);
    if ('Object' === r) {
      const t = n(e, r);
      if (void 0 !== t) return t;
    }
    return o ? o(e, r) : e;
  }
  function O(e, t, n, r, o) {
    const i = f(e),
      a = j(e, i);
    if (!l(i)) return a;
    let u;
    switch (i) {
      case 'Arguments':
      case 'Array':
        u = Object.keys(e);
        break;
      case 'Object':
        (u = Object.keys(e)).push(...Object.getOwnPropertySymbols(e));
        break;
      case 'Map':
      case 'Set':
        u = e.keys();
    }
    for (let a of u) {
      const u = c(e, a, i);
      if (r.has(u)) p(t, a, n.get(u), i);
      else {
        const e = f(u),
          c = j(u, e);
        l(e) && (n.set(u, c), r.add(u)), p(t, a, O(u, c, n, r, o), i);
      }
    }
    return t;
  }
  return function(e, t = {}) {
    'function' == typeof t && (t = { customizer: t });
    const { customizer: n } = t,
      r = f(e);
    if (!l(r)) return O(e, null, null, null, n);
    const o = j(e, r, n);
    return O(e, o, new WeakMap([[e, o]]), new WeakSet([e]), n);
  };
});
