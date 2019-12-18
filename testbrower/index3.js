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
        if (par.card == 11) {
            par.card = 'pass';
        }
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
            this.$dialog.confirm({
                title: '确认',
                content: `请确认是否删除被保人${index + 1}`,
                confirmText: '确定',
                onConfirm: () => list.splice(index, 1),
            });
        },
        addIns() {
            let copy = deepcopy(this.form.insured[0]);
            for (const key in copy) {
                if (copy.hasOwnProperty(key)) {
                    const element = copy[key];
                    if (element['inputType'] && element['inputType'] == 'input') {
                        element.value = '';
                    }
                }
            }
            this.form.insured.push(copy);
        },
    },
});