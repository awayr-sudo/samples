<template>
  <div
    class="p-field"
    :class="{ 'has-error': !!errorMessage, success: meta.valid }"
  >
    <Textarea
      :name="name"
      :id="name"
      :type="type"
      :value="modelValue"
      :autoResize="autoResize"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="handleBlur"
      :class="className"
      :disabled="disabled"
      :readonly="readOnly"
       :maxlength="maxLength"
    />
    <p class="help-message" v-show="errorMessage || meta.valid">
      {{ errorMessage || successMessage }}
    </p>
  </div>
</template>

<script>
import { useField } from "vee-validate";
import { watch } from "vue";
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    icon: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    autoResize: {
      type: String,
      required: true,
    },
    successMessage: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
     maxLength: {
      type: Number,
      default: 1000,
    },
  },
  setup(props) {
    // we don't provide any rules here because we are using form-level validation
    // https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.modelValue,
    });
    watch(
      () => props.modelValue,
      (first) => {
        inputValue.value = first;
      }
    );

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  },
};
</script>
