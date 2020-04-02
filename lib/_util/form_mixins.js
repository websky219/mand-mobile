(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.form_mixins = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        data: function data() {
            return {
                show: false,
                selectValue: null,
                selectText: null
            };
        },

        props: {
            readonly: {
                type: Boolean,
                default: false
            },
            suffix: String,
            value: {
                type: [String, Object, Number, Boolean]
            },
            error: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            solid: {
                type: Boolean,
                default: true
            },
            brief: {
                type: String,
                default: ''
            },
            required: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            showSelector: function showSelector() {
                if (this.readonly) {
                    return;
                }
                this.show = true;
            },
            isInputError: function isInputError() {
                return this.$slots.error || this.error !== '';
            },
            isInputBrief: function isInputBrief() {
                return this.$slots.brief || this.brief !== '';
            },
            isInputSuffix: function isInputSuffix() {
                return this.$slots.suffix || this.suffix !== '';
            }
        }
    };
});