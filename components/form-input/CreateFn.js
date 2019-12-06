import { sortBy } from '../_util/lang';

export default function(
    componentName,
    mixins,
    parentTag = 'md-field',
    itemTag = 'md-form-item'
) {
    Vue.component(componentName, {
        name: componentName,
        mixins: mixins,
        data() {
            return {
                dataArr: [],
                keyList: {},
                spe: this.special,
                [this.name]: this.special,
            };
        },
        render: function(createElement) {
            return createElement(
                parentTag,
                this._l(this.dataArr, function(t, e) {
                    return createElement(itemTag, {
                        key: e + t.key,
                        ref: 'item',
                        refInFor: !0,
                        attrs: { special: t, objkey: t.key, index: e },
                    });
                }),
                1
            );
        },
        props: {
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
            index: { type: Number, default: -1 },
            module: { type: String, default: '被保人' },
        },
        created() {
            console.log('createdspecial' + this.objkey);
            this.updateData();
        },
        watch: {
            special(val) {
                console.log('wacspecial' + this.objkey, val);
                this.spe = val;
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