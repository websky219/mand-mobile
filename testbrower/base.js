let base = {
    applicant: {
        name: {
            cprop: {
                rules: 'confirmed:card2',
                tag: 'div',
                name: '证件号码',
            },
            show: true,
            inputType: 'input',
            path: 'personName',
            label: '姓名',
            value: '',
            readonly: false,
            placeholder: '',
            required: true,
            suffix: '',
        },
        card: {
            cprop: {
                vid: 'card2',
                rules: 'required',
                name: '证件号码',
            },
            show: true,
            inputType: 'input',
            path: 'certificationNo',
            label: '证件号码',
            value: '',
            readonly: false,
            placeholder: '',
            required: true,
            suffix: '',
        },
        ctype: {
            show: true,
            inputType: 'select',
            path: 'certificationType',
            label: '证件类型',
            value: '1',
            readonly: false,
            placeholder: '',
            required: true,
            suffix: '',
            list: [{
                    value: '1',
                    text: '身份证',
                },
                {
                    value: '2',
                    text: '护照',
                },
            ],
        },
        phone: {
            show: true,
            inputType: 'input',
            path: 'certificationNo',
            label: '手机号',
            value: '',
            readonly: false,
            placeholder: '',
            required: true,
            suffix: '',
        },
        eamil: {
            show: true,
            inputType: 'input',
            path: 'certificationNo',
            label: '邮箱',
            value: '',
            readonly: false,
            placeholder: '',
            required: true,
            suffix: '',
        },
    },
    insured: [{
            name: {
                cprop: {
                    rules: 'confirmed:card2',
                    tag: 'div',
                    name: '证件号码',
                },
                show: true,
                inputType: 'input',
                path: 'personName',
                label: '姓名',
                value: '',
                readonly: false,
                placeholder: '',
                required: true,
                suffix: '',
            },
            card: {
                cprop: {
                    vid: 'card2',
                    rules: 'required',
                    name: '证件号码',
                },
                show: true,
                inputType: 'input',
                path: 'certificationNo',
                label: '证件号码',
                value: '',
                readonly: false,
                placeholder: '',
                required: true,
                suffix: '',
            },
            ctype: {
                show: true,
                inputType: 'select',
                path: 'certificationType',
                label: '证件类型',
                value: '1',
                readonly: false,
                placeholder: '',
                required: true,
                suffix: '',
                list: [{
                        value: '1',
                        text: '身份证',
                    },
                    {
                        value: '2',
                        text: '护照',
                    },
                ],
            },
            phone: {
                show: true,
                inputType: 'input',
                path: 'certificationNo',
                label: '手机号',
                value: '',
                readonly: false,
                placeholder: '',
                required: true,
                suffix: '',
            },
            eamil: {
                show: true,
                inputType: 'input',
                path: 'certificationNo',
                label: '邮箱',
                value: '',
                readonly: false,
                placeholder: '',
                required: true,
                suffix: '',
            },
        },
        {
            name: {
                cprop: {
                    rules: 'confirmed:card2',
                    tag: 'div',
                    name: '证件号码',
                },
                show: true,
                inputType: 'input',
                path: 'personName',
                label: '姓名',
                value: '',
                readonly: false,
                placeholder: '',
                required: true,
                suffix: '',
            },
            card: {
                cprop: {
                    vid: 'card2',
                    rules: 'required',
                    name: '证件号码',
                },
                show: true,
                inputType: 'input',
                path: 'certificationNo',
                label: '证件号码',
                value: '',
                readonly: false,
                placeholder: '',
                required: true,
                suffix: '',
            },
            ctype: {
                show: true,
                inputType: 'select',
                path: 'certificationType',
                label: '证件类型',
                value: '1',
                readonly: false,
                placeholder: '',
                required: true,
                suffix: '',
                list: [{
                        value: '1',
                        text: '身份证',
                    },
                    {
                        value: '2',
                        text: '护照',
                    },
                ],
            },
            phone: {
                show: true,
                inputType: 'input',
                path: 'certificationNo',
                label: '手机号',
                value: '',
                readonly: false,
                placeholder: '',
                required: true,
                suffix: '',
            },
            eamil: {
                show: true,
                inputType: 'input',
                path: 'certificationNo',
                label: '邮箱',
                value: '',
                readonly: false,
                placeholder: '',
                required: true,
                suffix: '',
            },
        },
    ],
    extend: {},
    specileRYX: {},
    specile: {},
};