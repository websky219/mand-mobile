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
            if (
                [
                    '1',
                    '4',
                    '5',
                    '6',
                    '10',
                    'G',
                    'H',
                    'I',
                    '17',
                    '18',
                    '19',
                    '20',
                ].indexOf(current.value) > -1
            ) {
                this.per.birthday.show = false;
            } else {
                this.per.birthday.show = true;
            }
        },
    },
};
var mixinsArr = [];
mixinsArr.push(perMixins);

$createSpecialFn('md-form-per', mixinsArr);