<template>
  <div class="md-example-child md-example-child-single-component">
    <md-form-input :usevee="false" :special="form"></md-form-input>
  </div>
</template>

<script>
import { FormInput, Field } from 'mand-mobile';

export default {
  name: 'form-input-demo',
  title: '样例一',
  describe: '样例一说明备注',
  components: {
    [FormInput.name]: FormInput,
    [Field.name]: Field,
  },
  data() {
    return {
      form: {
        applicant: {
          personName: {
            cprop: {},
            event: {
              name: 'blur',
              method: function(arg) {
                console.log(arg);
              },
            },
            inputType: 'input',
            show: true,
            readonly: false,
            label: '姓名姓名姓名',
            rule: '投保人姓名:required;checkName(element)',
            length: '20',
            required: true,
            placeholder: '请输入投保人姓名',
            clear: true,
            value: '',
          },
          certificationType: {
            label: '证件类型',
            show: true,
            readonly: false,
            inputType: 'select',
            value: '1',
            list: [
              {
                value: '1',
                text: '身份证',
              },
              {
                value: '2',
                text: '居住证',
              },
              {
                value: '3',
                text: '护照',
              },
            ],
          },
          passCode: {
            inputType: 'input',
            show: false,
            label: '港澳台通行证',
            rule:
              '港澳台通行证号:required;valideNumAndLetter(element,港澳台通行证号)',
            length: '20',
            readonly: false,
            required: true,
            placeholder: '请输入投保人港澳台通行证',
            value: '',
          },
          personBirthDate: {
            inputType: 'datetime',
            show: true,
            label: '出生日期1',
            rule: '',
            readonly: false,
            start: '',
            end: '',
            length: '20',
            required: true,
            placeholder: '请输1入投保人生日',
            value: '2019-10-21',
          },
          mobilePhone: {
            inputType: 'input',
            show: true,
            label: '手机号',
            rule: '投保人手机号:required;checkPhoneNo',
            length: '11',
            readonly: false,
            required: true,
            placeholder: '请输入投保人手机号',
            value: '',
          },
          emailAddress: {
            inputType: 'input',
            show: true,
            label: '邮箱',
            rule: 'email',
            length: '64',
            readonly: false,
            required: false,
            placeholder: '请输入投保人邮箱',
            value: '',
          },
        },
        insured: {
          personName: {
            inputType: 'input',
            show: true,
            label: '姓名',
            readonly: false,
            rule: '被保人姓名:required;checkName(element)',
            length: '20',
            required: true,
            placeholder: '请输入被保人姓名',
            value: '',
          },
          certificationNo: {
            inputType: 'select',
            show: true,
            label: '证件号码',
            readonly: false,
            rule: '',
            length: '20',
            required: true,
            placeholder: '请输入被保人证件号码',
            value: '',
          },
          passCode: {
            inputType: 'input',
            show: false,
            label: '港澳台通行证',
            rule:
              '港澳台通行证号:required;valideNumAndLetter(element,港澳台通行证号)',
            length: '20',
            readonly: false,
            required: true,
            placeholder: '请输入被保人港澳台通行证',
            value: '',
          },
          personBirthDate: {
            inputType: 'datetime',
            show: true,
            label: '出生日期',
            rule: '',
            start: '',
            end: '',
            readonly: false,
            length: '20',
            required: true,
            placeholder: '请输入被保人出生日期',
            value: '',
          },
          mobilePhone: {
            inputType: 'input',
            show: false,
            label: '手机号',
            readonly: false,
            rule: '被保人手机号:required;checkPhoneNo',
            length: '11',
            required: false,
            placeholder: '请输入被保人手机号',
            value: '',
          },
        },
      },
    };
  },
};
</script>

<style lang="stylus" scoped></style>
