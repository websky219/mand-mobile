function $createSpecialFn(
    componentName,
    mixins,
    parentTag = 'md-field',
    itemTag = 'md-form-item'
) {
    function sortBy(arr, prop, desc) {
        if (!(arr instanceof Array)) {
            console.error('sortBy Error:', 'arr is not an array');
        }
        let newArr = [];
        let props = [];
        let sortNumber = false;

        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            let propData = (item && item[prop]) || '';
            // eslint-disable-next-line no-new-wrappers
            (props[i] = new String(propData))._obj = item;
        }

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i][prop] === 'number') {
                sortNumber = true;
                break;
            } else {
                if (typeof arr[i][prop] === 'string') {
                    sortNumber = false;
                    break;
                }
            }
        }
        if (sortNumber) {
            props.sort((a, b) => a - b);
        } else {
            props.sort();
        }

        for (let i = 0; i < arr.length; i++) {
            newArr[i] = props[i]._obj;
        }
        if (desc === 'desc') {
            newArr.reverse();
        }
        return newArr;
    }

    Vue.component(componentName, {
        name: componentName,
        mixins: mixins,
        data() {
            return {
                dataArr: [],
                keyList: {},
                spe: this.special,
                vProvider: 'md-item-wapper',
                vObserver: 'div',
                [this.field]: this.special,
            };
        },
        render: function(h) {
            with(this) {
                return _c(
                    vObserver, {
                        directives: [{
                            name: 'show',
                            rawName: 'v-show',
                            value: show,
                            expression: 'show',
                        }, ],
                        ref: 'form-group',
                        tag: 'component',
                        staticClass: 'md-form-group',
                        attrs: {
                            tag: 'div',
                        },
                    }, [
                        _l(dataArr, function(obj, index) {
                            return _c('md-form-item', {
                                key: index + obj.key,
                                attrs: {
                                    special: obj,
                                    objkey: obj.key,
                                    index: index,
                                    componentName: vProvider,
                                    usevee: usevee,
                                },
                            });
                        }),
                        _c(
                            vProvider, {
                                tag: 'component',
                                staticStyle: {
                                    display: 'none',
                                },
                                attrs: {
                                    rules: '',
                                    vid: 'parent',
                                },
                            }, [
                                _c('input', {
                                    directives: [{
                                        name: 'model',
                                        rawName: 'v-model',
                                        value: spe,
                                        expression: 'spe',
                                    }, ],
                                    attrs: {
                                        type: 'text',
                                    },
                                    domProps: {
                                        value: spe,
                                    },
                                    on: {
                                        input: function($event) {
                                            if ($event.target.composing) return;
                                            spe = $event.target.value;
                                        },
                                    },
                                }),
                            ]
                        ),
                        rootdata ?
                        _c(
                            vProvider, {
                                tag: 'component',
                                staticStyle: {
                                    display: 'none',
                                },
                                attrs: {
                                    rules: '',
                                    vid: 'rootData',
                                },
                            }, [
                                _c('input', {
                                    directives: [{
                                        name: 'model',
                                        rawName: 'v-model',
                                        value: rootdata,
                                        expression: 'rootdata',
                                    }, ],
                                    attrs: {
                                        type: 'text',
                                    },
                                    domProps: {
                                        value: rootdata,
                                    },
                                    on: {
                                        input: function($event) {
                                            if ($event.target.composing) return;
                                            rootdata = $event.target.value;
                                        },
                                    },
                                }),
                            ]
                        ) :
                        _e(),
                    ],
                    2
                );
            }
        },
        provide() {
            return {
                usevee: this.usevee,
                module: this.module,
                parentShow: this.show,
            };
        },
        props: {
            field: {
                type: String,
                default: 'field',
            },
            show: {
                type: Boolean,
                default: true,
            },
            module: {
                type: String,
                default: '',
            },
            usevee: {
                type: Boolean,
                default: true,
            },
            special: {},
            objkey: {
                default: '',
            },
            randomKey: {
                type: Boolean,
                default: false,
            },
            name: {
                type: String,
                default: 'extend',
            },
            rootdata: [Object, Array],
        },
        created() {
            if (this.usevee) {
                this.vObserver = 'validation-observer';
                this.vProvider = 'validation-provider';
            }
            console.log('createdspecial' + this.objkey);
            this.updateData();
        },
        watch: {
            show(val) {
                if (!val) {
                    this.vObserver = 'div';
                    this.vProvider = 'div';
                } else if (this.usevee) {
                    this.vObserver = 'validation-observer';
                    this.vProvider = 'validation-provider';
                }
            },
            special(val) {
                console.log('wacspecial' + this.objkey, val);
                this.spe = val;
                this[this.field] = val;
                this.updateData();
            },
        },
        beforeUpdate() {
            console.log('beforeUpdate', this.dataArr);
            console.log('beforeUpdate', this.special);
        },
        updated() {
            console.log('updated', this.dataArr);
            console.log('updated', this.special);
        },
        methods: {
            updateData() {
                this.dataArr = [];
                this.spe = this.special;
                this.coverData(this.spe);
                this[this.name] = this.spe;
                this.dataArr = sortBy(this.dataArr, 'order', 'asc');
            },
            hasVuale(obj) {
                return obj.hasOwnProperty('value');
            },
            coverData(data, key) {
                if (this.hasVuale(data)) {
                    if (data.order === undefined) {
                        data.order = 0;
                    }
                    if (this.keyList[key] >= 0) {
                        this.keyList[key] += 1;
                        key = key + this.keyList[key];
                    } else {
                        this.keyList[key] = 0;
                        key = key + 0;
                    }
                    data['key'] = this.name + '_' + key;
                    this.dataArr.push(data);
                } else {
                    for (const key in data) {
                        if (data.hasOwnProperty(key)) {
                            const element = data[key];
                            this.coverData(element, key);
                        }
                    }
                }
            },
        },
    });
}