/**
 * vee-validate v3.2.0
 * (c) 2019 Abdelrahman Awad
 * @license MIT
 */
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ?
        factory(exports) :
        typeof define === 'function' && define.amd ?
        define(['exports'], factory) :
        ((global = global || self), factory((global.VeeValidateRules = {})));
})(this, function(exports) {
    'use strict';

    /**
     * Some Alpha Regex helpers.
     * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
     */
    var alpha = {
        en: /^[A-Z]*$/i,
    };
    var alphaSpaces = {
        en: /^[A-Z\s]*$/i,
    };
    var alphanumeric = {
        en: /^[0-9A-Z]*$/i,
    };
    var alphaDash = {
        en: /^[0-9A-Z_-]*$/i,
    };

    var plateNumberRegex = {
        all: /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/,
        normal: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
        new: /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/,
    };

    var platenumber = function(value) {
        return;
    };

    var validate = function(value, _a) {
        var _b = (_a === void 0 ? {} : _a).locale,
            locale = _b === void 0 ? '' : _b;
        if (Array.isArray(value)) {
            return value.every(function(val) {
                return validate(val, { locale: locale });
            });
        }
        // Match at least one locale.
        if (!locale) {
            return Object.keys(alpha).some(function(loc) {
                return alpha[loc].test(value);
            });
        }
        return (alpha[locale] || alpha.en).test(value);
    };
    var params = [{
        name: 'locale',
    }, ];
    var alpha$1 = {
        validate: validate,
        params: params,
    };

    var validate$1 = function(value, _a) {
        var _b = (_a === void 0 ? {} : _a).locale,
            locale = _b === void 0 ? '' : _b;
        if (Array.isArray(value)) {
            return value.every(function(val) {
                return validate$1(val, { locale: locale });
            });
        }
        // Match at least one locale.
        if (!locale) {
            return Object.keys(alphaDash).some(function(loc) {
                return alphaDash[loc].test(value);
            });
        }
        return (alphaDash[locale] || alphaDash.en).test(value);
    };
    var params$1 = [{
        name: 'locale',
    }, ];
    var alpha_dash = {
        validate: validate$1,
        params: params$1,
    };

    var validate$2 = function(value, _a) {
        var _b = (_a === void 0 ? {} : _a).locale,
            locale = _b === void 0 ? '' : _b;
        if (Array.isArray(value)) {
            return value.every(function(val) {
                return validate$2(val, { locale: locale });
            });
        }
        // Match at least one locale.
        if (!locale) {
            return Object.keys(alphanumeric).some(function(loc) {
                return alphanumeric[loc].test(value);
            });
        }
        return (alphanumeric[locale] || alphanumeric.en).test(value);
    };
    var params$2 = [{
        name: 'locale',
    }, ];
    var alpha_num = {
        validate: validate$2,
        params: params$2,
    };

    var validate$3 = function(value, _a) {
        var _b = (_a === void 0 ? {} : _a).locale,
            locale = _b === void 0 ? '' : _b;
        if (Array.isArray(value)) {
            return value.every(function(val) {
                return validate$3(val, { locale: locale });
            });
        }
        // Match at least one locale.
        if (!locale) {
            return Object.keys(alphaSpaces).some(function(loc) {
                return alphaSpaces[loc].test(value);
            });
        }
        return (alphaSpaces[locale] || alphaSpaces.en).test(value);
    };
    var params$3 = [{
        name: 'locale',
    }, ];
    var alpha_spaces = {
        validate: validate$3,
        params: params$3,
    };

    var validate$4 = function(value, _a) {
        var _b = _a === void 0 ? {} : _a,
            min = _b.min,
            max = _b.max;
        if (Array.isArray(value)) {
            return value.every(function(val) {
                return !!validate$4(val, { min: min, max: max });
            });
        }
        return Number(min) <= value && Number(max) >= value;
    };
    var params$4 = [{
            name: 'min',
        },
        {
            name: 'max',
        },
    ];
    var between = {
        validate: validate$4,
        params: params$4,
    };

    var validate$5 = function(value, _a) {
        var target = _a.target;
        return String(value) === String(target);
    };
    var params$5 = [{
        name: 'target',
        isTarget: true,
    }, ];
    var confirmed = {
        validate: validate$5,
        params: params$5,
    };

    var validate$6 = function(value, _a) {
        var length = _a.length;
        if (Array.isArray(value)) {
            return value.every(function(val) {
                return validate$6(val, { length: length });
            });
        }
        var strVal = String(value);
        return /^[0-9]*$/.test(strVal) && strVal.length === length;
    };
    var params$6 = [{
        name: 'length',
        cast: function(value) {
            return Number(value);
        },
    }, ];
    var digits = {
        validate: validate$6,
        params: params$6,
    };

    var validateImage = function(file, width, height) {
        var URL = window.URL || window.webkitURL;
        return new Promise(function(resolve) {
            var image = new Image();
            image.onerror = function() {
                return resolve(false);
            };
            image.onload = function() {
                return resolve(image.width === width && image.height === height);
            };
            image.src = URL.createObjectURL(file);
        });
    };
    var validate$7 = function(files, _a) {
        var width = _a.width,
            height = _a.height;
        var list = [];
        files = Array.isArray(files) ? files : [files];
        for (var i = 0; i < files.length; i++) {
            // if file is not an image, reject.
            if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
                return Promise.resolve(false);
            }
            list.push(files[i]);
        }
        return Promise.all(
            list.map(function(file) {
                return validateImage(file, width, height);
            })
        ).then(function(values) {
            return values.every(function(v) {
                return v;
            });
        });
    };
    var params$7 = [{
            name: 'width',
            cast: function(value) {
                return Number(value);
            },
        },
        {
            name: 'height',
            cast: function(value) {
                return Number(value);
            },
        },
    ];
    var dimensions = {
        validate: validate$7,
        params: params$7,
    };

    var validate$8 = function(value, _a) {
        var multiple = (_a === void 0 ? {} : _a).multiple;
        // eslint-disable-next-line
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (multiple && !Array.isArray(value)) {
            value = String(value)
                .split(',')
                .map(function(emailStr) {
                    return emailStr.trim();
                });
        }
        if (Array.isArray(value)) {
            return value.every(function(val) {
                return re.test(String(val));
            });
        }
        return re.test(String(value));
    };
    var params$8 = [{
        name: 'multiple',
        default: false,
    }, ];
    var email = {
        validate: validate$8,
        params: params$8,
    };

    function isNullOrUndefined(value) {
        return value === null || value === undefined;
    }

    function isEmptyArray(arr) {
        return Array.isArray(arr) && arr.length === 0;
    }

    function isCallable(fn) {
        return typeof fn === 'function';
    }

    function includes(collection, item) {
        return collection.indexOf(item) !== -1;
    }
    /**
     * Converts an array-like object to array, provides a simple polyfill for Array.from
     */
    function toArray(arrayLike) {
        if (isCallable(Array.from)) {
            return Array.from(arrayLike);
        }
        /* istanbul ignore next */
        return _copyArray(arrayLike);
    }
    /* istanbul ignore next */
    function _copyArray(arrayLike) {
        var array = [];
        var length = arrayLike.length;
        for (var i = 0; i < length; i++) {
            array.push(arrayLike[i]);
        }
        return array;
    }

    var validate$9 = function(value, options) {
        if (Array.isArray(value)) {
            return value.every(function(val) {
                return validate$9(val, options);
            });
        }
        return toArray(options).some(function(item) {
            // eslint-disable-next-line
            return item == value;
        });
    };
    var oneOf = {
        validate: validate$9,
    };

    var validate$a = function(value, args) {
        return !validate$9(value, args);
    };
    var excluded = {
        validate: validate$a,
    };

    var validate$b = function(files, extensions) {
        var regex = new RegExp('.(' + extensions.join('|') + ')$', 'i');
        if (Array.isArray(files)) {
            return files.every(function(file) {
                return regex.test(file.name);
            });
        }
        return regex.test(files.name);
    };
    var ext = {
        validate: validate$b,
    };

    var validate$c = function(files) {
        var regex = /\.(jpg|svg|jpeg|png|bmp|gif)$/i;
        if (Array.isArray(files)) {
            return files.every(function(file) {
                return regex.test(file.name);
            });
        }
        return regex.test(files.name);
    };
    var image = {
        validate: validate$c,
    };

    var validate$d = function(value) {
        if (Array.isArray(value)) {
            return value.every(function(val) {
                return /^-?[0-9]+$/.test(String(val));
            });
        }
        return /^-?[0-9]+$/.test(String(value));
    };
    var integer = {
        validate: validate$d,
    };

    var validate$e = function(value, _a) {
        var other = _a.other;
        return value === other;
    };
    var params$9 = [{
        name: 'other',
    }, ];
    var is = {
        validate: validate$e,
        params: params$9,
    };

    var validate$f = function(value, _a) {
        var other = _a.other;
        return value !== other;
    };
    var params$a = [{
        name: 'other',
    }, ];
    var is_not = {
        validate: validate$f,
        params: params$a,
    };

    var validate$g = function(value, _a) {
        var length = _a.length;
        if (isNullOrUndefined(value)) {
            return false;
        }
        if (typeof value === 'number') {
            value = String(value);
        }
        if (!value.length) {
            value = toArray(value);
        }
        return value.length === length;
    };
    var params$b = [{
        name: 'length',
        cast: function(value) {
            return Number(value);
        },
    }, ];
    var length = {
        validate: validate$g,
        params: params$b,
    };

    var validate$h = function(value, _a) {
        var length = _a.length;
        if (isNullOrUndefined(value)) {
            return length >= 0;
        }
        if (Array.isArray(value)) {
            return value.every(function(val) {
                return validate$h(val, { length: length });
            });
        }
        return String(value).length <= length;
    };
    var params$c = [{
        name: 'length',
        cast: function(value) {
            return Number(value);
        },
    }, ];
    var max = {
        validate: validate$h,
        params: params$c,
    };

    var validate$i = function(value, _a) {
        var max = _a.max;
        if (isNullOrUndefined(value) || value === '') {
            return false;
        }
        if (Array.isArray(value)) {
            return (
                value.length > 0 &&
                value.every(function(val) {
                    return validate$i(val, { max: max });
                })
            );
        }
        return Number(value) <= max;
    };
    var params$d = [{
        name: 'max',
        cast: function(value) {
            return Number(value);
        },
    }, ];
    var max_value = {
        validate: validate$i,
        params: params$d,
    };

    var validate$j = function(files, mimes) {
        var regex = new RegExp(mimes.join('|').replace('*', '.+') + '$', 'i');
        if (Array.isArray(files)) {
            return files.every(function(file) {
                return regex.test(file.type);
            });
        }
        return regex.test(files.type);
    };
    var mimes = {
        validate: validate$j,
    };

    var validate$k = function(value, _a) {
        var length = _a.length;
        if (isNullOrUndefined(value)) {
            return false;
        }
        if (Array.isArray(value)) {
            return value.every(function(val) {
                return validate$k(val, { length: length });
            });
        }
        return String(value).length >= length;
    };
    var params$e = [{
        name: 'length',
        cast: function(value) {
            return Number(value);
        },
    }, ];
    var min = {
        validate: validate$k,
        params: params$e,
    };

    var validate$l = function(value, _a) {
        var min = _a.min;
        if (isNullOrUndefined(value) || value === '') {
            return false;
        }
        if (Array.isArray(value)) {
            return (
                value.length > 0 &&
                value.every(function(val) {
                    return validate$l(val, { min: min });
                })
            );
        }
        return Number(value) >= min;
    };
    var params$f = [{
        name: 'min',
        cast: function(value) {
            return Number(value);
        },
    }, ];
    var min_value = {
        validate: validate$l,
        params: params$f,
    };

    var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
    var en = /^[0-9]+$/;
    var validate$m = function(value) {
        var testValue = function(val) {
            var strValue = String(val);
            return en.test(strValue) || ar.test(strValue);
        };
        if (Array.isArray(value)) {
            return value.every(testValue);
        }
        return testValue(value);
    };
    var numeric = {
        validate: validate$m,
    };

    var validate$n = function(value, _a) {
        var regex = _a.regex;
        if (Array.isArray(value)) {
            return value.every(function(val) {
                return validate$n(val, { regex: regex });
            });
        }
        return regex.test(String(value));
    };
    var params$g = [{
        name: 'regex',
        cast: function(value) {
            if (typeof value === 'string') {
                return new RegExp(value);
            }
            return value;
        },
    }, ];
    var regex = {
        validate: validate$n,
        params: params$g,
    };

    var validate$o = function(value, _a) {
        var allowFalse = (_a === void 0 ? { allowFalse: true } : _a).allowFalse;
        var result = {
            valid: false,
            required: true,
        };
        if (isNullOrUndefined(value) || isEmptyArray(value)) {
            return result;
        }
        // incase a field considers `false` as an empty value like checkboxes.
        if (value === false && !allowFalse) {
            return result;
        }
        result.valid = !!String(value).trim().length;
        return result;
    };
    var computesRequired = true;
    var params$h = [{
        name: 'allowFalse',
        default: true,
    }, ];
    var required = {
        validate: validate$o,
        params: params$h,
        computesRequired: computesRequired,
    };

    var testEmpty = function(value) {
        return (
            isEmptyArray(value) ||
            includes([false, null, undefined], value) ||
            !String(value).trim().length
        );
    };
    var validate$p = function(value, _a) {
        var target = _a.target,
            values = _a.values;
        var required;
        if (values && values.length) {
            if (!Array.isArray(values) && typeof values === 'string') {
                values = [values];
            }
            // eslint-disable-next-line
            required = values.some(function(val) {
                return val == String(target).trim();
            });
        } else {
            required = !testEmpty(target);
        }
        if (!required) {
            return {
                valid: true,
                required: required,
            };
        }
        return {
            valid: !testEmpty(value),
            required: required,
        };
    };
    var params$i = [{
            name: 'target',
            isTarget: true,
        },
        {
            name: 'values',
        },
    ];
    var computesRequired$1 = true;
    var required_if = {
        validate: validate$p,
        params: params$i,
        computesRequired: computesRequired$1,
    };

    var validate$q = function(files, _a) {
        var size = _a.size;
        if (isNaN(size)) {
            return false;
        }
        var nSize = size * 1024;
        if (!Array.isArray(files)) {
            return files.size <= nSize;
        }
        for (var i = 0; i < files.length; i++) {
            if (files[i].size > nSize) {
                return false;
            }
        }
        return true;
    };
    var params$j = [{
        name: 'size',
        cast: function(value) {
            return Number(value);
        },
    }, ];
    var size = {
        validate: validate$q,
        params: params$j,
    };

    exports.alpha = alpha$1;
    exports.alpha_dash = alpha_dash;
    exports.alpha_num = alpha_num;
    exports.alpha_spaces = alpha_spaces;
    exports.between = between;
    exports.confirmed = confirmed;
    exports.digits = digits;
    exports.dimensions = dimensions;
    exports.email = email;
    exports.excluded = excluded;
    exports.ext = ext;
    exports.image = image;
    exports.integer = integer;
    exports.is = is;
    exports.is_not = is_not;
    exports.length = length;
    exports.max = max;
    exports.max_value = max_value;
    exports.mimes = mimes;
    exports.min = min;
    exports.min_value = min_value;
    exports.numeric = numeric;
    exports.oneOf = oneOf;
    exports.regex = regex;
    exports.required = required;
    exports.required_if = required_if;
    exports.size = size;
    Object.defineProperty(exports, '__esModule', { value: true });
});