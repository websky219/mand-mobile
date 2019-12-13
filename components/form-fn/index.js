export default {
    name: 'md-form-fn',
    props: {
        render: Function,
    },
    render(c) {
        console.log('fn-this', this);
        return this.render(c);
    },
};