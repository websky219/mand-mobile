Vue.component('validation-provider', VeeValidate.ValidationProvider);
Vue.component('validation-observer', VeeValidate.ValidationObserver);
var vm = new Vue({
    el: '#app',
    data() {
        return {
            form: base,
        };
    },
});