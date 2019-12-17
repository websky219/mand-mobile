var perMixins = {
    watch: {
        'per.ctype.value' (val) {
            console.log('type::', val);
        },
    },
    methods: {
        calper() {
            console.log('calper::', this);
        },
    },
};
var mixinsArr = [];
mixinsArr.push(perMixins);

$createSpecialFn('md-form-per', mixinsArr);