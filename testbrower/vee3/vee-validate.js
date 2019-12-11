!(function(e, r) {
  'object' == typeof exports && 'undefined' != typeof module
    ? r(exports, require('vue'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'vue'], r)
    : r(((e = e || self).VeeValidate = {}), e.Vue);
})(this, function(e, r) {
  'use strict';
  r = r && r.hasOwnProperty('default') ? r.default : r;
  var t = {
      code: 'en',
      messages: {
        alpha: 'The {_field_} field may only contain alphabetic characters',
        alpha_num:
          'The {_field_} field may only contain alpha-numeric characters',
        alpha_dash:
          'The {_field_} field may contain alpha-numeric characters as well as dashes and underscores',
        alpha_spaces:
          'The {_field_} field may only contain alphabetic characters as well as spaces',
        between: 'The {_field_} field must be between {min} and {max}',
        confirmed: 'The {_field_} field confirmation does not match',
        digits:
          'The {_field_} field must be numeric and exactly contain {length} digits',
        dimensions:
          'The {_field_} field must be {width} pixels by {height} pixels',
        email: 'The {_field_} field must be a valid email',
        excluded: 'The {_field_} field is not a valid value',
        ext: 'The {_field_} field is not a valid file',
        image: 'The {_field_} field must be an image',
        integer: 'The {_field_} field must be an integer',
        length: 'The {_field_} field must be {length} long',
        max_value: 'The {_field_} field must be {max} or less',
        max: 'The {_field_} field may not be greater than {length} characters',
        mimes: 'The {_field_} field must have a valid file type',
        min_value: 'The {_field_} field must be {min} or more',
        min: 'The {_field_} field must be at least {length} characters',
        numeric: 'The {_field_} field may only contain numeric characters',
        oneOf: 'The {_field_} field is not a valid value',
        regex: 'The {_field_} field format is invalid',
        required_if: 'The {_field_} field is required',
        required: 'The {_field_} field is required',
        size: 'The {_field_} field size must be less than {size}KB',
      },
    },
    i = {
      en: /^[A-Z]*$/i,
      cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
      da: /^[A-ZÆØÅ]*$/i,
      de: /^[A-ZÄÖÜß]*$/i,
      es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
      fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
      it: /^[A-Z\xC0-\xFF]*$/i,
      lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
      nl: /^[A-ZÉËÏÓÖÜ]*$/i,
      hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
      pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
      pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
      ru: /^[А-ЯЁ]*$/i,
      sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
      sr: /^[A-ZČĆŽŠĐ]*$/i,
      sv: /^[A-ZÅÄÖ]*$/i,
      tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
      uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
      ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
      az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
    },
    a = {
      en: /^[A-Z\s]*$/i,
      cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
      da: /^[A-ZÆØÅ\s]*$/i,
      de: /^[A-ZÄÖÜß\s]*$/i,
      es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
      fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
      it: /^[A-Z\xC0-\xFF\s]*$/i,
      lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
      nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
      hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
      pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
      pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
      ru: /^[А-ЯЁ\s]*$/i,
      sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
      sr: /^[A-ZČĆŽŠĐ\s]*$/i,
      sv: /^[A-ZÅÄÖ\s]*$/i,
      tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
      uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
      ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
      az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
    },
    s = {
      en: /^[0-9A-Z]*$/i,
      cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
      da: /^[0-9A-ZÆØÅ]$/i,
      de: /^[0-9A-ZÄÖÜß]*$/i,
      es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
      fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
      it: /^[0-9A-Z\xC0-\xFF]*$/i,
      lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
      hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
      nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
      pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
      pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
      ru: /^[0-9А-ЯЁ]*$/i,
      sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
      sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
      sv: /^[0-9A-ZÅÄÖ]*$/i,
      tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
      uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
      ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
      az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
    },
    u = {
      en: /^[0-9A-Z_-]*$/i,
      cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
      da: /^[0-9A-ZÆØÅ_-]*$/i,
      de: /^[0-9A-ZÄÖÜß_-]*$/i,
      es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
      fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
      it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
      lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
      nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
      hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
      pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
      pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
      ru: /^[0-9А-ЯЁ_-]*$/i,
      sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
      sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
      sv: /^[0-9A-ZÅÄÖ_-]*$/i,
      tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
      uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
      ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
      az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
    },
    o = function(r, e) {
      var t = (void 0 === e ? {} : e).locale,
        n = void 0 === t ? '' : t;
      return Array.isArray(r)
        ? r.every(function(e) {
            return o(e, { locale: n });
          })
        : n
        ? (i[n] || i.en).test(r)
        : Object.keys(i).some(function(e) {
            return i[e].test(r);
          });
    },
    n = { validate: o, params: [{ name: 'locale' }] },
    l = function(r, e) {
      var t = (void 0 === e ? {} : e).locale,
        n = void 0 === t ? '' : t;
      return Array.isArray(r)
        ? r.every(function(e) {
            return l(e, { locale: n });
          })
        : n
        ? (u[n] || u.en).test(r)
        : Object.keys(u).some(function(e) {
            return u[e].test(r);
          });
    },
    c = { validate: l, params: [{ name: 'locale' }] },
    d = function(r, e) {
      var t = (void 0 === e ? {} : e).locale,
        n = void 0 === t ? '' : t;
      return Array.isArray(r)
        ? r.every(function(e) {
            return d(e, { locale: n });
          })
        : n
        ? (s[n] || s.en).test(r)
        : Object.keys(s).some(function(e) {
            return s[e].test(r);
          });
    },
    f = { validate: d, params: [{ name: 'locale' }] },
    v = function(r, e) {
      var t = (void 0 === e ? {} : e).locale,
        n = void 0 === t ? '' : t;
      return Array.isArray(r)
        ? r.every(function(e) {
            return v(e, { locale: n });
          })
        : n
        ? (a[n] || a.en).test(r)
        : Object.keys(a).some(function(e) {
            return a[e].test(r);
          });
    },
    h = { validate: v, params: [{ name: 'locale' }] },
    m = function(e, r) {
      var t = void 0 === r ? {} : r,
        n = t.min,
        i = t.max;
      return Array.isArray(e)
        ? e.every(function(e) {
            return !!m(e, { min: n, max: i });
          })
        : Number(n) <= e && Number(i) >= e;
    },
    p = { validate: m, params: [{ name: 'min' }, { name: 'max' }] },
    g = {
      validate: function(e, r) {
        var t = r.target;
        return String(e) === String(t);
      },
      params: [{ name: 'target', isTarget: !0 }],
    },
    y = function(e, r) {
      var t = r.length;
      if (Array.isArray(e))
        return e.every(function(e) {
          return y(e, { length: t });
        });
      var n = String(e);
      return /^[0-9]*$/.test(n) && n.length === t;
    },
    b = {
      validate: y,
      params: [
        {
          name: 'length',
          cast: function(e) {
            return Number(e);
          },
        },
      ],
    },
    _ = {
      validate: function(e, r) {
        var s = r.width,
          u = r.height,
          t = [];
        e = Array.isArray(e) ? e : [e];
        for (var n = 0; n < e.length; n++) {
          if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(e[n].name))
            return Promise.resolve(!1);
          t.push(e[n]);
        }
        return Promise.all(
          t.map(function(e) {
            return (
              (t = e),
              (n = s),
              (i = u),
              (a = window.URL || window.webkitURL),
              new Promise(function(e) {
                var r = new Image();
                (r.onerror = function() {
                  return e(!1);
                }),
                  (r.onload = function() {
                    return e(r.width === n && r.height === i);
                  }),
                  (r.src = a.createObjectURL(t));
              })
            );
            var t, n, i, a;
          })
        ).then(function(e) {
          return e.every(function(e) {
            return e;
          });
        });
      },
      params: [
        {
          name: 'width',
          cast: function(e) {
            return Number(e);
          },
        },
        {
          name: 'height',
          cast: function(e) {
            return Number(e);
          },
        },
      ],
    },
    A = {
      validate: function(e, r) {
        var t = (void 0 === r ? {} : r).multiple,
          n = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (
          t &&
            !Array.isArray(e) &&
            (e = String(e)
              .split(',')
              .map(function(e) {
                return e.trim();
              })),
          Array.isArray(e)
            ? e.every(function(e) {
                return n.test(String(e));
              })
            : n.test(String(e))
        );
      },
      params: [{ name: 'multiple', default: !1 }],
    };
  function $(e) {
    return e != e;
  }
  function O(e) {
    return null == e;
  }
  function x(e) {
    return Array.isArray(e) && 0 === e.length;
  }
  var Z = function(e) {
    return null !== e && e && 'object' == typeof e && !Array.isArray(e);
  };
  function R(r, t) {
    if (r instanceof RegExp && t instanceof RegExp)
      return R(r.source, t.source) && R(r.flags, t.flags);
    if (Array.isArray(r) && Array.isArray(t)) {
      if (r.length !== t.length) return !1;
      for (var e = 0; e < r.length; e++) if (!R(r[e], t[e])) return !1;
      return !0;
    }
    return Z(r) && Z(t)
      ? Object.keys(r).every(function(e) {
          return R(r[e], t[e]);
        }) &&
          Object.keys(t).every(function(e) {
            return R(r[e], t[e]);
          })
      : !(!$(r) || !$(t)) || r === t;
  }
  function w(e) {
    return '' !== e && !O(e);
  }
  function E(e) {
    return 'function' == typeof e;
  }
  function k(e) {
    return E(e) && !!e.__locatorRef;
  }
  function j(e, r) {
    var t = Array.isArray(e) ? e : S(e);
    if (E(t.findIndex)) return t.findIndex(r);
    for (var n = 0; n < t.length; n++) if (r(t[n], n)) return n;
    return -1;
  }
  function T(e, r) {
    return -1 !== e.indexOf(r);
  }
  function S(e) {
    return E(Array.from)
      ? Array.from(e)
      : (function(e) {
          for (var r = [], t = e.length, n = 0; n < t; n++) r.push(e[n]);
          return r;
        })(e);
  }
  function z(r) {
    return E(Object.values)
      ? Object.values(r)
      : Object.keys(r).map(function(e) {
          return r[e];
        });
  }
  function q(r, t) {
    return (
      Object.keys(t).forEach(function(e) {
        if (Z(t[e])) return r[e] || (r[e] = {}), void q(r[e], t[e]);
        r[e] = t[e];
      }),
      r
    );
  }
  function V() {
    return {
      untouched: !0,
      touched: !1,
      dirty: !1,
      pristine: !0,
      valid: !1,
      invalid: !1,
      validated: !1,
      pending: !1,
      required: !1,
      changed: !1,
      passed: !1,
      failed: !1,
    };
  }
  function N(e) {
    return e;
  }
  function F(t, n, i) {
    return (
      void 0 === n && (n = 0),
      void 0 === i && (i = { cancelled: !1 }),
      0 === n
        ? t
        : function() {
            for (var e = [], r = 0; r < arguments.length; r++)
              e[r] = arguments[r];
            clearTimeout(a),
              (a = setTimeout(function() {
                (a = void 0), i.cancelled || t.apply(void 0, e);
              }, n));
          }
    );
    var a;
  }
  function I(e, t) {
    return e.replace(/{([^}]+)}/g, function(e, r) {
      return r in t ? t[r] : '{' + r + '}';
    });
  }
  function M(e) {
    return x(e) || T([!1, null, void 0], e) || !String(e).trim().length;
  }
  var D = function(r, t) {
      return Array.isArray(r)
        ? r.every(function(e) {
            return D(e, t);
          })
        : S(t).some(function(e) {
            return e == r;
          });
    },
    B = { validate: D },
    P = {
      validate: function(e, r) {
        return !D(e, r);
      },
    },
    C = {
      validate: function(e, r) {
        var t = new RegExp('.(' + r.join('|') + ')$', 'i');
        return Array.isArray(e)
          ? e.every(function(e) {
              return t.test(e.name);
            })
          : t.test(e.name);
      },
    },
    L = {
      validate: function(e) {
        var r = /\.(jpg|svg|jpeg|png|bmp|gif)$/i;
        return Array.isArray(e)
          ? e.every(function(e) {
              return r.test(e.name);
            })
          : r.test(e.name);
      },
    },
    W = {
      validate: function(e) {
        return Array.isArray(e)
          ? e.every(function(e) {
              return /^-?[0-9]+$/.test(String(e));
            })
          : /^-?[0-9]+$/.test(String(e));
      },
    },
    H = {
      validate: function(e, r) {
        return e === r.other;
      },
      params: [{ name: 'other' }],
    },
    U = {
      validate: function(e, r) {
        return e !== r.other;
      },
      params: [{ name: 'other' }],
    },
    G = {
      validate: function(e, r) {
        var t = r.length;
        return (
          !O(e) &&
          ('number' == typeof e && (e = String(e)),
          e.length || (e = S(e)),
          e.length === t)
        );
      },
      params: [
        {
          name: 'length',
          cast: function(e) {
            return Number(e);
          },
        },
      ],
    },
    K = function(e, r) {
      var t = r.length;
      return O(e)
        ? 0 <= t
        : Array.isArray(e)
        ? e.every(function(e) {
            return K(e, { length: t });
          })
        : String(e).length <= t;
    },
    Y = {
      validate: K,
      params: [
        {
          name: 'length',
          cast: function(e) {
            return Number(e);
          },
        },
      ],
    },
    J = function(e, r) {
      var t = r.max;
      return (
        !O(e) &&
        '' !== e &&
        (Array.isArray(e)
          ? 0 < e.length &&
            e.every(function(e) {
              return J(e, { max: t });
            })
          : Number(e) <= t)
      );
    },
    Q = {
      validate: J,
      params: [
        {
          name: 'max',
          cast: function(e) {
            return Number(e);
          },
        },
      ],
    },
    X = {
      validate: function(e, r) {
        var t = new RegExp(r.join('|').replace('*', '.+') + '$', 'i');
        return Array.isArray(e)
          ? e.every(function(e) {
              return t.test(e.type);
            })
          : t.test(e.type);
      },
    },
    ee = function(e, r) {
      var t = r.length;
      return (
        !O(e) &&
        (Array.isArray(e)
          ? e.every(function(e) {
              return ee(e, { length: t });
            })
          : String(e).length >= t)
      );
    },
    re = {
      validate: ee,
      params: [
        {
          name: 'length',
          cast: function(e) {
            return Number(e);
          },
        },
      ],
    },
    te = function(e, r) {
      var t = r.min;
      return (
        !O(e) &&
        '' !== e &&
        (Array.isArray(e)
          ? 0 < e.length &&
            e.every(function(e) {
              return te(e, { min: t });
            })
          : Number(e) >= t)
      );
    },
    ne = {
      validate: te,
      params: [
        {
          name: 'min',
          cast: function(e) {
            return Number(e);
          },
        },
      ],
    },
    ie = /^[٠١٢٣٤٥٦٧٨٩]+$/,
    ae = /^[0-9]+$/,
    se = {
      validate: function(e) {
        function r(e) {
          var r = String(e);
          return ae.test(r) || ie.test(r);
        }
        return Array.isArray(e) ? e.every(r) : r(e);
      },
    },
    ue = function(e, r) {
      var t = r.regex;
      return Array.isArray(e)
        ? e.every(function(e) {
            return ue(e, { regex: t });
          })
        : t.test(String(e));
    },
    oe = {
      validate: ue,
      params: [
        {
          name: 'regex',
          cast: function(e) {
            return 'string' == typeof e ? new RegExp(e) : e;
          },
        },
      ],
    },
    le = {
      validate: function(e, r) {
        var t = (void 0 === r ? { allowFalse: !0 } : r).allowFalse,
          n = { valid: !1, required: !0 };
        return (
          O(e) ||
            x(e) ||
            (!1 === e && !t) ||
            (n.valid = !!String(e).trim().length),
          n
        );
      },
      params: [{ name: 'allowFalse', default: !0 }],
      computesRequired: !0,
    },
    ce = {
      validate: function(e, r) {
        var t,
          n = r.target,
          i = r.values;
        return (t =
          i && i.length
            ? (Array.isArray(i) || 'string' != typeof i || (i = [i]),
              i.some(function(e) {
                return e == String(n).trim();
              }))
            : !M(n))
          ? { valid: !M(e), required: t }
          : { valid: !0, required: t };
      },
      params: [{ name: 'target', isTarget: !0 }, { name: 'values' }],
      computesRequired: !0,
    },
    de = {
      validate: function(e, r) {
        var t = r.size;
        if (isNaN(t)) return !1;
        var n = 1024 * t;
        if (!Array.isArray(e)) return e.size <= n;
        for (var i = 0; i < e.length; i++) if (e[i].size > n) return !1;
        return !0;
      },
      params: [
        {
          name: 'size',
          cast: function(e) {
            return Number(e);
          },
        },
      ],
    },
    fe = Object.freeze({
      __proto__: null,
      alpha_dash: c,
      alpha_num: f,
      alpha_spaces: h,
      alpha: n,
      between: p,
      confirmed: g,
      digits: b,
      dimensions: _,
      email: A,
      ext: C,
      image: L,
      oneOf: B,
      integer: W,
      length: G,
      is_not: U,
      is: H,
      max: Y,
      max_value: Q,
      mimes: X,
      min: re,
      min_value: ne,
      excluded: P,
      numeric: se,
      regex: oe,
      required: le,
      required_if: ce,
      size: de,
    }),
    ve = function() {
      return (ve =
        Object.assign ||
        function(e) {
          for (var r, t = 1, n = arguments.length; t < n; t++)
            for (var i in (r = arguments[t]))
              Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
          return e;
        }).apply(this, arguments);
    };
  function he(a, s, u, o) {
    return new (u = u || Promise)(function(e, r) {
      function t(e) {
        try {
          i(o.next(e));
        } catch (e) {
          r(e);
        }
      }
      function n(e) {
        try {
          i(o.throw(e));
        } catch (e) {
          r(e);
        }
      }
      function i(r) {
        r.done
          ? e(r.value)
          : new u(function(e) {
              e(r.value);
            }).then(t, n);
      }
      i((o = o.apply(a, s || [])).next());
    });
  }
  function me(t, n) {
    var i,
      a,
      s,
      e,
      u = {
        label: 0,
        sent: function() {
          if (1 & s[0]) throw s[1];
          return s[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (e = { next: r(0), throw: r(1), return: r(2) }),
      'function' == typeof Symbol &&
        (e[Symbol.iterator] = function() {
          return this;
        }),
      e
    );
    function r(r) {
      return function(e) {
        return (function(r) {
          if (i) throw new TypeError('Generator is already executing.');
          for (; u; )
            try {
              if (
                ((i = 1),
                a &&
                  (s =
                    2 & r[0]
                      ? a.return
                      : r[0]
                      ? a.throw || ((s = a.return) && s.call(a), 0)
                      : a.next) &&
                  !(s = s.call(a, r[1])).done)
              )
                return s;
              switch (((a = 0), s && (r = [2 & r[0], s.value]), r[0])) {
                case 0:
                case 1:
                  s = r;
                  break;
                case 4:
                  return u.label++, { value: r[1], done: !1 };
                case 5:
                  u.label++, (a = r[1]), (r = [0]);
                  continue;
                case 7:
                  (r = u.ops.pop()), u.trys.pop();
                  continue;
                default:
                  if (
                    !(s = 0 < (s = u.trys).length && s[s.length - 1]) &&
                    (6 === r[0] || 2 === r[0])
                  ) {
                    u = 0;
                    continue;
                  }
                  if (3 === r[0] && (!s || (r[1] > s[0] && r[1] < s[3]))) {
                    u.label = r[1];
                    break;
                  }
                  if (6 === r[0] && u.label < s[1]) {
                    (u.label = s[1]), (s = r);
                    break;
                  }
                  if (s && u.label < s[2]) {
                    (u.label = s[2]), u.ops.push(r);
                    break;
                  }
                  s[2] && u.ops.pop(), u.trys.pop();
                  continue;
              }
              r = n.call(t, u);
            } catch (e) {
              (r = [6, e]), (a = 0);
            } finally {
              i = s = 0;
            }
          if (5 & r[0]) throw r[1];
          return { value: r[0] ? r[1] : void 0, done: !0 };
        })([r, e]);
      };
    }
  }
  function pe() {
    for (var e = 0, r = 0, t = arguments.length; r < t; r++)
      e += arguments[r].length;
    var n = Array(e),
      i = 0;
    for (r = 0; r < t; r++)
      for (var a = arguments[r], s = 0, u = a.length; s < u; s++, i++)
        n[i] = a[s];
    return n;
  }
  var ge = {};
  var ye = ((be.extend = function(e, r) {
    var t,
      n,
      i = ((null === (n = (t = r).params) || void 0 === n
        ? void 0
        : n.length) &&
        (t.params = t.params.map(function(e) {
          return 'string' == typeof e ? { name: e } : e;
        })),
      t);
    ge[e]
      ? (ge[e] = q(ge[e], r))
      : (ge[e] = ve({ lazy: !1, computesRequired: !1 }, i));
  }),
  (be.iterate = function(e) {
    for (var r = Object.keys(ge), t = r.length, n = 0; n < t; n++)
      e(r[n], ge[r[n]]);
  }),
  (be.isLazy = function(e) {
    var r;
    return !!(null === (r = ge[e]) || void 0 === r ? void 0 : r.lazy);
  }),
  (be.isRequireRule = function(e) {
    var r;
    return !!(null === (r = ge[e]) || void 0 === r
      ? void 0
      : r.computesRequired);
  }),
  (be.isTargetRule = function(e) {
    var r,
      t = be.getRuleDefinition(e);
    return (
      !(null === (r = t) || void 0 === r || !r.params) &&
      t.params.some(function(e) {
        return !!e.isTarget;
      })
    );
  }),
  (be.getRuleDefinition = function(e) {
    return ge[e];
  }),
  be);
  function be() {}
  function _e(e, r) {
    !(function(e, r) {
      if (E(r)) return;
      if (E(r.validate)) return;
      if (ye.getRuleDefinition(e)) return;
      throw new Error(
        "Extension Error: The validator '" +
          e +
          "' must be a function or have a 'validate' method."
      );
    })(e, r),
      'object' != typeof r ? ye.extend(e, { validate: r }) : ye.extend(e, r);
  }
  function Ae(e) {
    $e = ve(ve({}, $e), e);
  }
  var $e = ve(
      {},
      {
        defaultMessage: '{_field_} is not valid.',
        skipOptional: !0,
        classes: {
          touched: 'touched',
          untouched: 'untouched',
          valid: 'valid',
          invalid: 'invalid',
          pristine: 'pristine',
          dirty: 'dirty',
        },
        bails: !0,
        mode: 'aggressive',
        useConstraintAttrs: !0,
      }
    ),
    Oe = function() {
      return $e;
    },
    xe = new r();
  function Ze() {
    xe.$emit('change:locale');
  }
  var Re,
    we = ((Ee.prototype.resolve = function(e, r, t) {
      return this.format(this.locale, e, r, t);
    }),
    (Ee.prototype.format = function(e, r, t, n) {
      var i, a, s, u, o, l, c, d, f;
      return (
        (f =
          (f =
            (null ===
              (s =
                null ===
                  (a =
                    null === (i = this.container[e]) || void 0 === i
                      ? void 0
                      : i.fields) || void 0 === a
                  ? void 0
                  : a[r]) || void 0 === s
              ? void 0
              : s[t]) ||
            (null ===
              (o =
                null === (u = this.container[e]) || void 0 === u
                  ? void 0
                  : u.messages) || void 0 === o
              ? void 0
              : o[t])) || Oe().defaultMessage),
        (r =
          null !=
          (d =
            null ===
              (c =
                null === (l = this.container[e]) || void 0 === l
                  ? void 0
                  : l.names) || void 0 === c
              ? void 0
              : c[r])
            ? d
            : r),
        E(f) ? f(r, n) : I(f, ve(ve({}, n), { _field_: r }))
      );
    }),
    (Ee.prototype.merge = function(e) {
      q(this.container, e);
    }),
    (Ee.prototype.hasRule = function(e) {
      var r, t;
      return !!(null ===
        (t =
          null === (r = this.container[this.locale]) || void 0 === r
            ? void 0
            : r.messages) || void 0 === t
        ? void 0
        : t[e]);
    }),
    Ee);
  function Ee(e, r) {
    (this.container = {}), (this.locale = e), this.merge(r);
  }
  var ke = !1;
  function je() {
    ke ||
      (ye.iterate(function(t, e) {
        var r, n;
        e.message &&
          !Re.hasRule(t) &&
          Re.merge(
            (((r = {})[Re.locale] = {
              messages: ((n = {}), (n[t] = e.message), n),
            }),
            r)
          ),
          _e(t, {
            message: function(e, r) {
              return Re.resolve(e, t, r || {});
            },
          });
      }),
      (ke = !0));
  }
  function Te(e, r) {
    var t;
    if (((Re = Re || new we('en', {})), 'string' == typeof e))
      return (
        (Re.locale = e), r && Re.merge((((t = {})[e] = r), t)), je(), void Ze()
      );
    Re.merge(e), je();
  }
  var Se = {
    aggressive: function() {
      return { on: ['input', 'blur'] };
    },
    eager: function(e) {
      return e.errors.length
        ? { on: ['input', 'change'] }
        : { on: ['change', 'blur'] };
    },
    passive: function() {
      return { on: [] };
    },
    lazy: function() {
      return { on: ['change'] };
    },
  };
  function ze(n) {
    var e,
      r = {};
    return (
      Object.defineProperty(r, '_$$isNormalized', {
        value: !0,
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
      n
        ? Z(n) && n._$$isNormalized
          ? n
          : Z(n)
          ? Object.keys(n).reduce(function(e, r) {
              var t = [];
              return (
                (t =
                  !0 === n[r]
                    ? []
                    : Array.isArray(n[r])
                    ? n[r]
                    : Z(n[r])
                    ? n[r]
                    : [n[r]]),
                !1 !== n[r] && (e[r] = qe(r, t)),
                e
              );
            }, r)
          : 'string' != typeof n
          ? ((e = 'rules must be either a string or an object.'),
            console.warn('[vee-validate] ' + e),
            r)
          : n.split('|').reduce(function(e, r) {
              var t = Ve(r);
              return t.name && (e[t.name] = qe(t.name, t.params)), e;
            }, r)
        : r
    );
  }
  function qe(e, r) {
    var i = ye.getRuleDefinition(e);
    if (!i) return r;
    var t,
      a,
      n = {};
    if (!i.params && !Array.isArray(r))
      throw new Error(
        'You provided an object params to a rule that has no defined schema.'
      );
    if (Array.isArray(r) && !i.params) return r;
    !i.params || (i.params.length < r.length && Array.isArray(r))
      ? (t = r.map(function(e, r) {
          var t,
            n = null === (t = i.params) || void 0 === t ? void 0 : t[r];
          return (a = n || a), (n = n || a);
        }))
      : (t = i.params);
    for (var s = 0; s < t.length; s++) {
      var u = t[s],
        o = u.default;
      Array.isArray(r)
        ? s in r && (o = r[s])
        : u.name in r
        ? (o = r[u.name])
        : 1 === t.length && (o = r),
        u.isTarget && (o = Ne(o, u.cast)),
        'string' == typeof o && '@' === o[0] && (o = Ne(o.slice(1), u.cast)),
        !k(o) && u.cast && (o = u.cast(o)),
        n[u.name]
          ? ((n[u.name] = Array.isArray(n[u.name]) ? n[u.name] : [n[u.name]]),
            n[u.name].push(o))
          : (n[u.name] = o);
    }
    return n;
  }
  var Ve = function(e) {
    var r = [],
      t = e.split(':')[0];
    return (
      T(e, ':') &&
        (r = e
          .split(':')
          .slice(1)
          .join(':')
          .split(',')),
      { name: t, params: r }
    );
  };
  function Ne(t, n) {
    function e(e) {
      var r = e[t];
      return n ? n(r) : r;
    }
    return (e.__locatorRef = t), e;
  }
  function Fe(u, o, l) {
    var c, d, f, v, h, m;
    return (
      void 0 === l && (l = {}),
      he(this, void 0, void 0, function() {
        var r, t, n, i, a, s;
        return me(this, function(e) {
          switch (e.label) {
            case 0:
              return (
                (r = null === (c = l) || void 0 === c ? void 0 : c.bails),
                (t = null === (d = l) || void 0 === d ? void 0 : d.skipIfEmpty),
                [
                  4,
                  (function(l, c, e) {
                    var r = (void 0 === e ? {} : e).isInitial,
                      d = void 0 !== r && r;
                    return he(this, void 0, void 0, function() {
                      var r, t, n, i, a, s, u, o;
                      return me(this, function(e) {
                        switch (e.label) {
                          case 0:
                            return [
                              4,
                              (function(c, d) {
                                return he(this, void 0, void 0, function() {
                                  var r, t, n, i, a, s, u, o, l;
                                  return me(this, function(e) {
                                    switch (e.label) {
                                      case 0:
                                        (r = Object.keys(c.rules).filter(
                                          ye.isRequireRule
                                        )),
                                          (t = r.length),
                                          (n = []),
                                          (i = O(d) || '' === d || x(d)),
                                          (a = i && c.skipIfEmpty),
                                          (s = !1),
                                          (u = 0),
                                          (e.label = 1);
                                      case 1:
                                        return u < t
                                          ? ((o = r[u]),
                                            [
                                              4,
                                              Ie(c, d, {
                                                name: o,
                                                params: c.rules[o],
                                              }),
                                            ])
                                          : [3, 4];
                                      case 2:
                                        if (((l = e.sent()), !Z(l)))
                                          throw new Error(
                                            'Require rules has to return an object (see docs)'
                                          );
                                        if (
                                          (l.required && (s = !0),
                                          !l.valid &&
                                            l.error &&
                                            (n.push(l.error), c.bails))
                                        )
                                          return [
                                            2,
                                            { shouldSkip: !0, errors: n },
                                          ];
                                        e.label = 3;
                                      case 3:
                                        return u++, [3, 1];
                                      case 4:
                                        return (!i || s || c.skipIfEmpty) &&
                                          (c.bails || a)
                                          ? [
                                              2,
                                              {
                                                shouldSkip: !s && i,
                                                errors: n,
                                              },
                                            ]
                                          : [2, { shouldSkip: !1, errors: n }];
                                    }
                                  });
                                });
                              })(l, c),
                            ];
                          case 1:
                            if (
                              ((r = e.sent()),
                              (t = r.shouldSkip),
                              (n = r.errors),
                              t)
                            )
                              return [2, { valid: !n.length, errors: n }];
                            (i = Object.keys(l.rules).filter(function(e) {
                              return !ye.isRequireRule(e);
                            })),
                              (a = i.length),
                              (s = 0),
                              (e.label = 2);
                          case 2:
                            return s < a
                              ? d && ye.isLazy(i[s])
                                ? [3, 4]
                                : ((u = i[s]),
                                  [
                                    4,
                                    Ie(l, c, { name: u, params: l.rules[u] }),
                                  ])
                              : [3, 5];
                          case 3:
                            if (
                              !(o = e.sent()).valid &&
                              o.error &&
                              (n.push(o.error), l.bails)
                            )
                              return [2, { valid: !1, errors: n }];
                            e.label = 4;
                          case 4:
                            return s++, [3, 2];
                          case 5:
                            return [2, { valid: !n.length, errors: n }];
                        }
                      });
                    });
                  })(
                    {
                      name:
                        (null === (f = l) || void 0 === f ? void 0 : f.name) ||
                        '{field}',
                      rules: ze(o),
                      bails: null == r || r,
                      skipIfEmpty: null == t || t,
                      forceRequired: !1,
                      crossTable:
                        (null === (v = l) || void 0 === v
                          ? void 0
                          : v.values) || {},
                      names:
                        (null === (h = l) || void 0 === h ? void 0 : h.names) ||
                        {},
                      customMessages:
                        (null === (m = l) || void 0 === m
                          ? void 0
                          : m.customMessages) || {},
                    },
                    u,
                    l
                  ),
                ]
              );
            case 1:
              return (
                (n = e.sent()),
                (i = []),
                (a = {}),
                (s = {}),
                n.errors.forEach(function(e) {
                  var r = e.msg();
                  i.push(r), (a[e.rule] = r), (s[e.rule] = e.msg);
                }),
                [
                  2,
                  {
                    valid: n.valid,
                    errors: i,
                    failedRules: a,
                    regenerateMap: s,
                  },
                ]
              );
          }
        });
      })
    );
  }
  function Ie(y, b, _) {
    return he(this, void 0, void 0, function() {
      var v, h, m, p, g;
      return me(this, function(e) {
        switch (e.label) {
          case 0:
            if (!(v = ye.getRuleDefinition(_.name)) || !v.validate)
              throw new Error("No such validator '" + _.name + "' exists.");
            return (
              (h = v.castValue ? v.castValue(b) : b),
              (m = (function(r, t) {
                if (Array.isArray(r)) return r;
                var n = {};
                return (
                  Object.keys(r).forEach(function(e) {
                    n[e] = (function(e) {
                      if (k(e)) {
                        return e(t);
                      }
                      return e;
                    })(r[e]);
                  }),
                  n
                );
              })(_.params, y.crossTable)),
              [4, v.validate(h, m)]
            );
          case 1:
            return 'string' == typeof (p = e.sent())
              ? ((g = ve(ve({}, m || {}), {
                  _field_: y.name,
                  _value_: b,
                  _rule_: _.name,
                })),
                [
                  2,
                  {
                    valid: !1,
                    error: {
                      rule: _.name,
                      msg: function() {
                        return I(p, g);
                      },
                    },
                  },
                ])
              : (Z(p) || (p = { valid: p, data: {} }),
                [
                  2,
                  {
                    valid: p.valid,
                    required: p.required,
                    data: p.data || {},
                    error: p.valid
                      ? void 0
                      : ((n = y),
                        (r = b),
                        (t = v),
                        (i = _.name),
                        (a = m),
                        (s = p.data),
                        (u = n.customMessages[i] || t.message),
                        (o = (function(e, r, t) {
                          var n = r.params;
                          if (!n) return {};
                          var i = n.filter(function(e) {
                            return e.isTarget;
                          }).length;
                          if (i <= 0) return {};
                          var a = {},
                            s = e.rules[t];
                          !Array.isArray(s) &&
                            Z(s) &&
                            (s = n.map(function(e) {
                              return s[e.name];
                            }));
                          for (var u = 0; u < n.length; u++) {
                            var o = n[u];
                            if (o.isTarget) {
                              var l = s[u];
                              k(l) && (l = l.__locatorRef);
                              var c = e.names[l] || l;
                              if (1 === i) {
                                a._target_ = c;
                                break;
                              }
                              a['_' + o.name + 'Target_'] = c;
                            }
                          }
                          return a;
                        })(n, t, i)),
                        (l = (function(u, e, r, o) {
                          var l = {},
                            c = u.rules[r],
                            d = e.params || [];
                          return c
                            ? (Object.keys(c).forEach(function(e, r) {
                                var t = c[e];
                                if (!k(t)) return {};
                                var n = d[r];
                                if (!n) return {};
                                var i = t.__locatorRef,
                                  a = '_' + i + 'Target_';
                                if (
                                  ((l[a] = u.names[i] || i),
                                  (l[i] = u.names[i] || i),
                                  'string' == typeof o)
                                ) {
                                  var s = new RegExp('{' + n.name + '}', 'g');
                                  o = o.replace(s, '{' + a + '}');
                                }
                              }),
                              { userTargets: l, userMessage: o })
                            : {};
                        })(n, t, i, u)),
                        (c = l.userTargets),
                        (d = l.userMessage),
                        (f = ve(
                          ve(
                            ve(ve(ve({}, a || {}), s || {}), {
                              _field_: n.name,
                              _value_: r,
                              _rule_: i,
                            }),
                            o
                          ),
                          c
                        )),
                        {
                          msg: function() {
                            return (
                              (e = d || Oe().defaultMessage),
                              (r = n.name),
                              (t = f),
                              'function' != typeof e
                                ? I(e, ve(ve({}, t), { _field_: r }))
                                : e(r, t)
                            );
                            var e, r, t;
                          },
                          rule: i,
                        }),
                  },
                ]);
        }
        var n, r, t, i, a, s, u, o, l, c, d, f;
      });
    });
  }
  function Me(e) {
    var r, t, n;
    if (
      !(n = e) ||
      !(
        ('undefined' != typeof Event && E(Event) && n instanceof Event) ||
        (n && n.srcElement)
      )
    )
      return e;
    var i = e.target;
    if ('file' === i.type && i.files) return S(i.files);
    if (null === (r = i._vModifiers) || void 0 === r ? void 0 : r.number) {
      var a = parseFloat(i.value);
      return $(a) ? i.value : a;
    }
    return (null === (t = i._vModifiers) || void 0 === t ? void 0 : t.trim) &&
      'string' == typeof i.value
      ? i.value.trim()
      : i.value;
  }
  var De = function(e) {
    var r,
      t,
      n = (null === (r = e.data) || void 0 === r ? void 0 : r.attrs) || e.elm;
    return (
      !('input' !== e.tag || (n && n.type)) ||
      ('textarea' === e.tag ||
        T(
          ['text', 'password', 'search', 'email', 'tel', 'url', 'number'],
          null === (t = n) || void 0 === t ? void 0 : t.type
        ))
    );
  };
  function Be(e) {
    if (e.data) {
      var r,
        t,
        n,
        i,
        a = e.data;
      if ('model' in a) return a.model;
      if (e.data.directives)
        return (
          (r = e.data.directives),
          (t = function(e) {
            return 'model' === e.name;
          }),
          (n = Array.isArray(r) ? r : S(r)),
          -1 === (i = j(n, t)) ? void 0 : n[i]
        );
    }
  }
  function Pe(e) {
    var r,
      t,
      n,
      i = Be(e);
    if (i) return { value: i.value };
    var a = (null === (r = Le(e)) || void 0 === r ? void 0 : r.prop) || 'value';
    return (null === (t = e.componentOptions) || void 0 === t
      ? void 0
      : t.propsData) && a in e.componentOptions.propsData
      ? { value: e.componentOptions.propsData[a] }
      : (null === (n = e.data) || void 0 === n ? void 0 : n.domProps) &&
        'value' in e.data.domProps
      ? { value: e.data.domProps.value }
      : void 0;
  }
  function Ce(e) {
    return Array.isArray(e) || void 0 === Pe(e)
      ? ((r = e),
        Array.isArray(r)
          ? r
          : Array.isArray(r.children)
          ? r.children
          : r.componentOptions && Array.isArray(r.componentOptions.children)
          ? r.componentOptions.children
          : []).reduce(function(e, r) {
          var t = Ce(r);
          return t.length && e.push.apply(e, t), e;
        }, [])
      : [e];
    var r;
  }
  function Le(e) {
    return e.componentOptions ? e.componentOptions.Ctor.options.model : null;
  }
  function We(e, r, t) {
    if (O(e[r])) e[r] = [t];
    else {
      if (E(e[r]) && e[r].fns) {
        var n = e[r];
        return (
          (n.fns = Array.isArray(n.fns) ? n.fns : [n.fns]),
          void (T(n.fns, t) || n.fns.push(t))
        );
      }
      if (E(e[r])) {
        var i = e[r];
        e[r] = [i];
      }
      Array.isArray(e[r]) && !T(e[r], t) && e[r].push(t);
    }
  }
  function He(e, r, t) {
    if (e.componentOptions)
      return (
        (i = r),
        (a = t),
        void (
          (n = e).componentOptions &&
          (n.componentOptions.listeners || (n.componentOptions.listeners = {}),
          We(n.componentOptions.listeners, i, a))
        )
      );
    var n, i, a, s, u, o;
    (u = r),
      (o = t),
      (s = e).data || (s.data = {}),
      O(s.data.on) && (s.data.on = {}),
      We(s.data.on, u, o);
  }
  function Ue(e, r) {
    var t, n;
    return e.componentOptions
      ? (Le(e) || { event: 'input' }).event
      : (null ===
          (n = null === (t = r) || void 0 === t ? void 0 : t.modifiers) ||
        void 0 === n
        ? void 0
        : n.lazy)
      ? 'change'
      : De(e)
      ? 'input'
      : 'change';
  }
  function Ge(e) {
    var r,
      t = null === (r = e.data) || void 0 === r ? void 0 : r.attrs;
    if (!T(['input', 'select'], e.tag) || !t) return {};
    var n,
      i,
      a,
      s = {};
    return (
      'required' in t &&
        !1 !== t.required &&
        (s.required = 'checkbox' !== t.type || [!0]),
      De(e)
        ? ze(
            ve(
              ve({}, s),
              ((i = null === (n = e.data) || void 0 === n ? void 0 : n.attrs),
              (a = {}),
              i &&
                ('email' === i.type && (a.email = ['multiple' in i]),
                i.pattern && (a.regex = i.pattern),
                0 <= i.maxlength && (a.max = i.maxlength),
                0 <= i.minlength && (a.min = i.minlength),
                'number' === i.type &&
                  (w(i.min) && (a.min_value = Number(i.min)),
                  w(i.max) && (a.max_value = Number(i.max)))),
              a)
            )
          )
        : ze(s)
    );
  }
  function Ke(e, r) {
    return e.$scopedSlots.default
      ? e.$scopedSlots.default(r) || []
      : e.$slots.default || [];
  }
  function Ye(t) {
    return ve(ve({}, t.flags), {
      errors: t.errors,
      classes: t.classes,
      failedRules: t.failedRules,
      reset: function() {
        return t.reset();
      },
      validate: function() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        return t.validate.apply(t, e);
      },
      ariaInput: {
        'aria-invalid': t.flags.invalid ? 'true' : 'false',
        'aria-required': t.isRequired ? 'true' : 'false',
        'aria-errormessage': 'vee_' + t.id,
      },
      ariaMsg: {
        id: 'vee_' + t.id,
        'aria-live': t.errors.length ? 'assertive' : 'off',
      },
    });
  }
  function Je(e, r) {
    e.initialized || (e.initialValue = r);
    var t,
      n,
      i = ((n = r),
      !((t = e)._ignoreImmediate || !t.immediate) ||
        !(t.value === n || !t.normalizedEvents.length) ||
        !!t._needsValidation ||
        (!t.initialized && void 0 === n));
    (e._needsValidation = !1),
      (e.value = r),
      (e._ignoreImmediate = !0),
      i &&
        e
          .validateSilent()
          .then(e.immediate || e.flags.validated ? e.applyResult : N);
  }
  function Qe(e) {
    return (E(e.mode) ? e.mode : Se[e.mode])(e);
  }
  function Xe(t) {
    t.$veeOnInput ||
      (t.$veeOnInput = function(e) {
        t.syncValue(e), t.setFlags({ dirty: !0, pristine: !1 });
      });
    var e = t.$veeOnInput;
    t.$veeOnBlur ||
      (t.$veeOnBlur = function() {
        t.setFlags({ touched: !0, untouched: !1 });
      });
    var r = t.$veeOnBlur,
      n = t.$veeHandler,
      i = Qe(t);
    return (
      (n && t.$veeDebounce === t.debounce) ||
        ((n = F(function() {
          t.$nextTick(function() {
            var r = t.validateSilent();
            (t._pendingValidation = r).then(function(e) {
              r === t._pendingValidation &&
                (t.applyResult(e), (t._pendingValidation = void 0));
            });
          });
        }, i.debounce || t.debounce)),
        (t.$veeHandler = n),
        (t.$veeDebounce = t.debounce)),
      { onInput: e, onBlur: r, onValidate: n }
    );
  }
  var er = 0;
  var rr = r.extend({
    inject: {
      $_veeObserver: {
        from: '$_veeObserver',
        default: function() {
          return (
            this.$vnode.context.$_veeObserver ||
              (this.$vnode.context.$_veeObserver = {
                refs: {},
                subscribe: function(e) {
                  this.refs[e.id] = e;
                },
                unsubscribe: function(e) {
                  delete this.refs[e];
                },
              }),
            this.$vnode.context.$_veeObserver
          );
        },
      },
    },
    props: {
      vid: { type: String, default: '' },
      name: { type: String, default: null },
      mode: {
        type: [String, Function],
        default: function() {
          return Oe().mode;
        },
      },
      rules: { type: [Object, String], default: null },
      immediate: { type: Boolean, default: !1 },
      bails: {
        type: Boolean,
        default: function() {
          return Oe().bails;
        },
      },
      skipIfEmpty: {
        type: Boolean,
        default: function() {
          return Oe().skipOptional;
        },
      },
      debounce: { type: Number, default: 0 },
      tag: { type: String, default: 'span' },
      slim: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      customMessages: {
        type: Object,
        default: function() {
          return {};
        },
      },
    },
    watch: {
      rules: {
        deep: !0,
        handler: function(e, r) {
          this._needsValidation = !R(e, r);
        },
      },
    },
    data: function() {
      return {
        errors: [],
        value: void 0,
        initialized: !1,
        initialValue: void 0,
        flags: V(),
        failedRules: {},
        isActive: !0,
        id: '',
      };
    },
    computed: {
      fieldDeps: function() {
        var i = this;
        return Object.keys(this.normalizedRules).reduce(function(e, r) {
          var t,
            n = ((t = i.normalizedRules[r]),
            Array.isArray(t)
              ? t.filter(k)
              : Object.keys(t)
                  .filter(function(e) {
                    return k(t[e]);
                  })
                  .map(function(e) {
                    return t[e];
                  })).map(function(e) {
              return e.__locatorRef;
            });
          return (
            e.push.apply(e, n),
            n.forEach(function(e) {
              !(function e(r, t, n) {
                void 0 === n && (n = !0);
                var i = r.$_veeObserver.refs;
                r._veeWatchers || (r._veeWatchers = {});
                if (!i[t] && n)
                  return r.$once('hook:mounted', function() {
                    e(r, t, !1);
                  });
                !E(r._veeWatchers[t]) &&
                  i[t] &&
                  (r._veeWatchers[t] = i[t].$watch('value', function() {
                    r.flags.validated &&
                      ((r._needsValidation = !0), r.validate());
                  }));
              })(i, e);
            }),
            e
          );
        }, []);
      },
      normalizedEvents: function() {
        var r = this;
        return (Qe(this).on || []).map(function(e) {
          return 'input' === e ? r._inputEventName : e;
        });
      },
      isRequired: function() {
        var e = ve(ve({}, this._resolvedRules), this.normalizedRules),
          r = Object.keys(e).some(ye.isRequireRule);
        return (this.flags.required = !!r), r;
      },
      classes: function() {
        return (function(i, a) {
          for (
            var s = {},
              u = Object.keys(a),
              e = u.length,
              r = function(e) {
                var r = u[e],
                  t = (i && i[r]) || r,
                  n = a[r];
                return O(n)
                  ? 'continue'
                  : ('valid' !== r && 'invalid' !== r) || a.validated
                  ? void ('string' == typeof t
                      ? (s[t] = n)
                      : Array.isArray(t) &&
                        t.forEach(function(e) {
                          s[e] = n;
                        }))
                  : 'continue';
              },
              t = 0;
            t < e;
            t++
          )
            r(t);
          return s;
        })(Oe().classes, this.flags);
      },
      normalizedRules: function() {
        return ze(this.rules);
      },
    },
    created: function() {
      function e() {
        if (r.flags.validated) {
          var t = r._regenerateMap;
          if (t) {
            var n = [],
              i = {};
            return (
              Object.keys(t).forEach(function(e) {
                var r = t[e]();
                n.push(r), (i[e] = r);
              }),
              void r.applyResult({
                errors: n,
                failedRules: i,
                regenerateMap: t,
              })
            );
          }
          r.validate();
        }
      }
      var r = this;
      xe.$on('change:locale', e),
        this.$on('hook:beforeDestroy', function() {
          xe.$off('change:locale', e);
        });
    },
    render: function(e) {
      var t = this;
      this.registerField();
      var r = Ke(this, Ye(this));
      return (
        Ce(r).forEach(function(e) {
          var r = Oe().useConstraintAttrs ? Ge(e) : {};
          R(t._resolvedRules, r) || (t._needsValidation = !0),
            (t._resolvedRules = r),
            (function(e, r) {
              var t,
                n = Pe(r);
              (e._inputEventName = e._inputEventName || Ue(r, Be(r))),
                Je(e, null === (t = n) || void 0 === t ? void 0 : t.value);
              var i = Xe(e),
                a = i.onInput,
                s = i.onBlur,
                u = i.onValidate;
              He(r, e._inputEventName, a),
                He(r, 'blur', s),
                e.normalizedEvents.forEach(function(e) {
                  He(r, e, u);
                }),
                (e.initialized = !0);
            })(t, e);
        }),
        this.slim && r.length <= 1 ? r[0] : e(this.tag, r)
      );
    },
    beforeDestroy: function() {
      this.$_veeObserver.unsubscribe(this.id);
    },
    activated: function() {
      this.isActive = !0;
    },
    deactivated: function() {
      this.isActive = !1;
    },
    methods: {
      setFlags: function(r) {
        var t = this;
        Object.keys(r).forEach(function(e) {
          t.flags[e] = r[e];
        });
      },
      syncValue: function(e) {
        var r = Me(e);
        (this.value = r), (this.flags.changed = this.initialValue !== r);
      },
      reset: function() {
        (this.errors = []), (this.initialValue = this.value);
        var e = V();
        (e.required = this.isRequired), this.setFlags(e), this.validateSilent();
      },
      validate: function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return he(this, void 0, void 0, function() {
          var r;
          return me(this, function(e) {
            switch (e.label) {
              case 0:
                return (
                  0 < t.length && this.syncValue(t[0]),
                  [4, this.validateSilent()]
                );
              case 1:
                return (r = e.sent()), this.applyResult(r), [2, r];
            }
          });
        });
      },
      validateSilent: function() {
        return he(this, void 0, void 0, function() {
          var n, i;
          return me(this, function(e) {
            switch (e.label) {
              case 0:
                return (
                  this.setFlags({ pending: !0 }),
                  (n = ve(ve({}, this._resolvedRules), this.normalizedRules)),
                  Object.defineProperty(n, '_$$isNormalized', {
                    value: !0,
                    writable: !1,
                    enumerable: !1,
                    configurable: !1,
                  }),
                  [
                    4,
                    Fe(
                      this.value,
                      n,
                      ve(
                        ve(
                          { name: this.name },
                          ((r = this),
                          (t = r.$_veeObserver.refs),
                          r.fieldDeps.reduce(
                            function(e, r) {
                              return (
                                t[r] &&
                                  ((e.values[r] = t[r].value),
                                  (e.names[r] = t[r].name)),
                                e
                              );
                            },
                            { names: {}, values: {} }
                          ))
                        ),
                        {
                          bails: this.bails,
                          skipIfEmpty: this.skipIfEmpty,
                          isInitial: !this.initialized,
                          customMessages: this.customMessages,
                        }
                      )
                    ),
                  ]
                );
              case 1:
                return (
                  (i = e.sent()),
                  this.setFlags({
                    pending: !1,
                    valid: i.valid,
                    invalid: !i.valid,
                  }),
                  [2, i]
                );
            }
            var r, t;
          });
        });
      },
      setErrors: function(e) {
        this.applyResult({ errors: e, failedRules: {} });
      },
      applyResult: function(e) {
        var r = e.errors,
          t = e.failedRules,
          n = e.regenerateMap;
        (this.errors = r),
          (this._regenerateMap = n),
          (this.failedRules = ve({}, t || {})),
          this.setFlags({
            valid: !r.length,
            passed: !r.length,
            invalid: !!r.length,
            failed: !!r.length,
            validated: !0,
            changed: this.value !== this.initialValue,
          });
      },
      registerField: function() {
        !(function(e) {
          var r = (function(e) {
              if (e.vid) return e.vid;
              if (e.name) return e.name;
              if (e.id) return e.id;
              return '_vee_' + ++er;
            })(e),
            t = e.id;
          if (!e.isActive || (t === r && e.$_veeObserver.refs[t])) return;
          t !== r &&
            e.$_veeObserver.refs[t] === e &&
            e.$_veeObserver.unsubscribe(t);
          (e.id = r), e.$_veeObserver.subscribe(e);
        })(this);
      },
    },
  });
  var tr = [
      ['pristine', 'every'],
      ['dirty', 'some'],
      ['touched', 'some'],
      ['untouched', 'every'],
      ['valid', 'every'],
      ['invalid', 'some'],
      ['pending', 'some'],
      ['validated', 'every'],
      ['changed', 'some'],
      ['passed', 'every'],
      ['failed', 'some'],
    ],
    nr = 0;
  var ir = r.extend({
    name: 'ValidationObserver',
    provide: function() {
      return { $_veeObserver: this };
    },
    inject: {
      $_veeObserver: {
        from: '$_veeObserver',
        default: function() {
          return this.$vnode.context.$_veeObserver
            ? this.$vnode.context.$_veeObserver
            : null;
        },
      },
    },
    props: {
      tag: { type: String, default: 'span' },
      vid: {
        type: String,
        default: function() {
          return 'obs_' + nr++;
        },
      },
      slim: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
    },
    data: function() {
      return { id: '', refs: {}, observers: [], errors: {}, flags: {} };
    },
    created: function() {
      var s = this;
      (this.id = this.vid), sr(this);
      var e = F(function(e) {
        var r = e.errors,
          t = e.flags;
        (s.errors = r), (s.flags = t);
      }, 16);
      this.$watch(function() {
        for (
          var n = pe(z(s.refs), s.observers),
            e = {},
            i = {},
            r = n.length,
            t = 0;
          t < r;
          t++
        ) {
          var a = n[t];
          e[a.id] = a.errors;
        }
        return (
          tr.forEach(function(e) {
            var r = e[0],
              t = e[1];
            i[r] = n[t](function(e) {
              return e.flags[r];
            });
          }),
          { errors: e, flags: i }
        );
      }, e);
    },
    activated: function() {
      sr(this);
    },
    deactivated: function() {
      ar(this);
    },
    beforeDestroy: function() {
      ar(this);
    },
    render: function(e) {
      var r,
        t = Ke(
          this,
          ve(ve({}, (r = this).flags), {
            errors: r.errors,
            validate: r.validate,
            passes: r.handleSubmit,
            handleSubmit: r.handleSubmit,
            reset: r.reset,
          })
        );
      return this.slim && t.length <= 1
        ? t[0]
        : e(this.tag, { on: this.$listeners }, t);
    },
    methods: {
      subscribe: function(e, r) {
        var t;
        void 0 === r && (r = 'provider'),
          'observer' !== r
            ? (this.refs = ve(ve({}, this.refs), (((t = {})[e.id] = e), t)))
            : this.observers.push(e);
      },
      unsubscribe: function(r, e) {
        if ((void 0 === e && (e = 'provider'), 'provider' !== e)) {
          var t = j(this.observers, function(e) {
            return e.id === r;
          });
          -1 !== t && this.observers.splice(t, 1);
        } else {
          if (!this.refs[r]) return;
          this.$delete(this.refs, r);
        }
      },
      validate: function(e) {
        var r = (void 0 === e ? {} : e).silent,
          t = void 0 !== r && r;
        return he(this, void 0, void 0, function() {
          return me(this, function(e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  Promise.all(
                    pe(
                      z(this.refs)
                        .filter(function(e) {
                          return !e.disabled;
                        })
                        .map(function(e) {
                          return e[t ? 'validateSilent' : 'validate']().then(
                            function(e) {
                              return e.valid;
                            }
                          );
                        }),
                      this.observers
                        .filter(function(e) {
                          return !e.disabled;
                        })
                        .map(function(e) {
                          return e.validate({ silent: t });
                        })
                    )
                  ),
                ];
              case 1:
                return [
                  2,
                  e.sent().every(function(e) {
                    return e;
                  }),
                ];
            }
          });
        });
      },
      handleSubmit: function(r) {
        return he(this, void 0, void 0, function() {
          return me(this, function(e) {
            switch (e.label) {
              case 0:
                return [4, this.validate()];
              case 1:
                return e.sent() && r ? [2, r()] : [2];
            }
          });
        });
      },
      reset: function() {
        return pe(z(this.refs), this.observers).forEach(function(e) {
          return e.reset();
        });
      },
      setErrors: function(t) {
        var n = this;
        Object.keys(t).forEach(function(e) {
          var r = n.refs[e];
          r && r.setErrors(t[e] || []);
        }),
          this.observers.forEach(function(e) {
            e.setErrors(t);
          });
      },
    },
  });
  function ar(e) {
    e.$_veeObserver && e.$_veeObserver.unsubscribe(e.id, 'observer');
  }
  function sr(e) {
    e.$_veeObserver && e.$_veeObserver.subscribe(e, 'observer');
  }
  Object.keys(fe)
    .map(function(e) {
      return { schema: fe[e], name: e };
    })
    .forEach(function(e) {
      _e(e.name, e.schema);
    }),
    Te('en', t),
    (e.Rules = fe),
    (e.ValidationObserver = ir),
    (e.ValidationProvider = rr),
    (e.configure = function(e) {
      Ae(e);
    }),
    (e.extend = _e),
    (e.localeChanged = Ze),
    (e.localize = Te),
    (e.normalizeRules = ze),
    (e.setInteractionMode = function(e, r) {
      if ((Ae({ mode: e }), r)) {
        if (!E(r)) throw new Error('A mode implementation must be a function');
        Se[e] = r;
      }
    }),
    (e.validate = Fe),
    (e.version = '3.1.3'),
    (e.withValidation = function(e, m) {
      var r, t;
      void 0 === m && (m = N);
      var p = 'options' in e ? e.options : e,
        n = rr.options,
        i = {
          name: (p.name || 'AnonymousHoc') + 'WithValidation',
          props: ve({}, n.props),
          data: n.data,
          computed: ve({}, n.computed),
          methods: ve({}, n.methods),
          beforeDestroy: n.beforeDestroy,
          inject: n.inject,
        },
        g =
          (null === (t = null === (r = p) || void 0 === r ? void 0 : r.model) ||
          void 0 === t
            ? void 0
            : t.event) || 'input';
      return (
        (i.render = function(e) {
          var r, t, n;
          this.registerField();
          var i = Ye(this),
            a = ve({}, this.$listeners),
            s = Be(this.$vnode);
          (this._inputEventName = this._inputEventName || Ue(this.$vnode, s)),
            Je(
              this,
              null === (t = Pe(this.$vnode)) || void 0 === t ? void 0 : t.value
            );
          var u = Xe(this),
            o = u.onInput,
            l = u.onBlur,
            c = u.onValidate;
          We(a, g, o),
            We(a, 'blur', l),
            this.normalizedEvents.forEach(function(e) {
              We(a, e, c);
            });
          var d,
            f,
            v = (Le(this.$vnode) || { prop: 'value' }).prop,
            h = ve(
              ve(
                ve({}, this.$attrs),
                (((r = {})[v] =
                  null === (n = s) || void 0 === n ? void 0 : n.value),
                r)
              ),
              m(i)
            );
          return e(
            p,
            { attrs: this.$attrs, props: h, on: a },
            ((d = this.$slots),
            (f = this.$vnode.context),
            Object.keys(d).reduce(function(e, r) {
              return (
                d[r].forEach(function(e) {
                  e.context ||
                    ((d[r].context = f),
                    e.data || (e.data = {}),
                    (e.data.slot = r));
                }),
                e.concat(d[r])
              );
            }, []))
          );
        }),
        i
      );
    }),
    Object.defineProperty(e, '__esModule', { value: !0 });
});
