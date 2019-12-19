var perMixins = {
    watch: {
        'per.ctype.value' (val) {
            console.log('type::', val);
            console.log('current::', this.per.ctype.current);
            this.changeCardType();
        },
    },
    methods: {
        changeCardType() {
            var current = this.per.ctype.current;
            this.per.card.label = current.text;
            this.per.card.cprop.name = current.text;
        },
    },
};
var mixinsArr = [];
mixinsArr.push(perMixins);

$createSpecialFn('md-form-per', mixinsArr);