Vue.component('validation-provider', VeeValidate.ValidationProvider);
Vue.component('validation-observer', VeeValidate.ValidationObserver);
$createSpecialFn('md-form-per', mixinsArr);
var vm = new Vue({
    el: '#app',
    data() {
        return {
            form: base,
            formShow: true,
        };
    },
    methods: {
        validate($event) {
            this.$refs.form.validate().then(re => {
                console.log('验证结果', re);
            });
        },
        heide1($event) {
            this.form.applicant.certificationNo2.show = !this.form.applicant
                .certificationNo2.show;
        },
        hideForm($event) {
            console.log('tag-this', this);
            this.formShow = !this.formShow;
        },
    },
});