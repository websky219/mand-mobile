export default {
    data() {
        return {
            show: false,
            selectValue: '',
            selectText: '',
        };
    },
    props: {
        readonly: {
            type: Boolean,
            default: false,
        },
        suffix: String,
        value: {
            type: [String, Object, Number, Boolean],
        },
        error: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        solid: {
            type: Boolean,
            default: true,
        },
        brief: {
            type: String,
            default: '',
        },
        required: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        showSelector() {
            if (this.readonly) {
                return;
            }
            this.show = true;
        },
        isInputError() {
            return this.$slots.error || this.error !== '';
        },
        isInputBrief() {
            return this.$slots.brief || this.brief !== '';
        },
    },
};