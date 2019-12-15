var perMixins = {
    watch: {
        'per.ctype.value' (val) {
            console.log('type::', val);
        },
    },
};
var mixinsArr = [];
mixinsArr.push(perMixins);

$createSpecialFn('md-form-per', mixinsArr);