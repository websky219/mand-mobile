Vue.component('validation-provider', VeeValidate.ValidationProvider);
Vue.component('validation-observer', VeeValidate.ValidationObserver);
Object.keys(VeeValidateRules).forEach(rule => {
    VeeValidate.extend(rule, VeeValidateRules[rule]);
});
VeeValidate.localize('zh_CN', zh_CN_MSG);
$createSpecialFn('md-form-per', mixinsArr, 'div');
VeeValidate.extend('calper', {
    params: ['card', 'birthday', 'shebao', 'parent'],
    validate(value, par) {
        console.log('tag', value, par);
        par.parent.card.value = 'test';
        return true;
    },
    message: '',
});
var vm = new Vue({
    el: '#app',
    data() {
        return {
            form: base,
            formShow: true,
            data: [{
                text: '提交',
                round: true,
            }, ],
        };
    },
    methods: {
        onBtnClick() {},
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
        isShow(index) {
            return !(index == 0 && this.form.sameTB);
        },
        removePerson(index, list) {
            list.splice(index, 1);
        },
    },
});