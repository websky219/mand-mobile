<template>
  <div v-show="spe.show" class="md-form-item">
    <md-input-item
      v-if="spe.inputType == 'input' || !spe.inputType"
      solid
      :type="spe.type"
      v-model="phone"
      :maxlength="spe.length"
      :placeholder="'请输入' + spe.label"
      :readonly="spe.readonly"
      :disabled="spe.disabled"
      :is-highlight="spe.highlight"
      :clearable="!spe.readonly"
    >
      <p slot="left">
        <span style="color:red" v-if="spe.required">
          *
        </span>
        {{ spe.label }}
      </p>
      <span slot="right" v-if="spe.suffix">
        {{ spe.suffix }}
      </span>
    </md-input-item>
    <md-form-select
      v-else-if="spe.inputType == select"
      v-model="spe.value"
      :min-height="spe.minHeight"
      :list="spe.list"
      :readonly="spe.readonly"
      :select-list="spe.selectList"
    >
      <p slot="left">
        <span style="color:red" v-if="spe.required">
          *
        </span>
        {{ spe.label }}
      </p>
      <span slot="right" v-if="spe.suffix">
        {{ spe.suffix }}
      </span>
    </md-form-select>
    <md-form-date
      v-else-if="spe.inputType == 'datetime'"
      :type="spe.type"
      :min="spe.startDate"
      :max="spe.endtDate"
      v-model="spe.value"
      :suffix="spe.suffix"
      :readonly="spe.readonly"
    >
      <p slot="left">
        <span style="color:red" v-if="spe.required">
          *
        </span>
        {{ spe.label }}
      </p>
    </md-form-date>
    <md-form-city
      v-else-if="spe.inputType == 'addressInput'"
      v-model="spe.value"
      :root="spe"
      :plabel="spe.plabel"
      :hasinput="spe.hasinput"
      :list="spe.list"
      :preadonly="spe.preadonly"
      :pvalue="spe.pvalue"
      :ivalue="spe.ivalue"
      :placeholder="spe.placeholder"
      :readonly="spe.readonly"
    >
      <p slot="left">
        <span style="color:red" v-if="spe.required">
          *
        </span>
        {{ spe.label }}
      </p>
    </md-form-city>
  </div>
</template>

<script>
import FieldItem from '../field-item';
import InputItem from '../input-item';
import FormCity from '../form-city';
import FormDate from '../form-date';
import FieldSelect from '../form-select';
export default {
  name: 'md-form-item',

  components: {
    [FieldItem.name]: FieldItem,
    [InputItem.name]: InputItem,
    [FormCity.name]: FormCity,
    [FormDate.name]: FormDate,
    [FieldSelect.name]: FieldSelect,
  },
  data() {
    return {
      spe: this.special,
    };
  },
  methods: {
    selectTrack(spe) {
      if (spe.track) {
        return spe.track;
      } else {
        return {
          track: 'value',
          label: 'text',
        };
      }
    },
  },
  props: {
    index: [Number, String],
    special: {},
    objkey: {
      default: '',
    },
  },
};
</script>
