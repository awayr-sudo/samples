<template>
  <div
    class="p-field TextInput "
    :class="{ 'has-error': !!errorMessage, success: meta.valid }"
    :style="{ display: type != 'hidden' ? '' : 'none' }"
  >
    <label v-if="label" :for="name">
      <i class="pi" :class="icon"></i>
      {{ label }}
    </label>

    <InputText
      :name="name"
      :id="name"
      :type="type"
      v-model="inputValue"
     
      @blur="handleBlur"
      :placeholder="placeholder"
      :class="className"
      :disabled="disabled"
      :readonly="readOnly"
    
      :maxlength="maxLength"
    />
    <!-- {{ inputValue }}---{{ modelValue }} --{{ type }} -->
    <p class="help-message" v-show="errorMessage || meta.valid">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import { useField } from "vee-validate";
import moment from "moment";
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
      required: false,
    },
    successMessage: {
      type: String,
      default: "",
    },
    placeholder: {
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
      default: 256,
    },
  },
  setup(props, { emit }) {
    // we don't provide any rules here because we are using form-level validation
    // https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation

    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      resetField,
      meta,
    } = useField(props.name, undefined, {
      initialValue:
        "date" == props.type
          ? moment(String(props.modelValue)).format("YYYY-MM-DD")
          : "time" == props.type
          ? moment(String(props.modelValue)).format("HH:mm")
          : props.modelValue,
    });
    resetField({
      value:
        "date" == props.type
          ? moment(String(props.modelValue)).format("YYYY-MM-DD")
          : "time" == props.type
          ? moment(String(props.modelValue)).format("HH:mm")
          : props.modelValue,
    });
    watch(
      () => props.modelValue,
      (first, second) => {
        inputValue.value = first;
        // console.log(
        //   "Watch props.selected function called with args:",
        //   props.value,
        //   inputValue,
        //   first,
        //   second
        // );
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

<style scoped>
.TextInput {
  position: relative;

  width: 100% !important;
}

input:focus {
  border-color: none;
}

/* .help-message {
  position: absolute;
  bottom: calc(-1.5 * 1em);
  left: 0;
  margin: 0;
  font-size: 14px;
} */

.TextInput.has-error input {
  background-color: var(--error-bg-color);
  color: var(--error-color);
}

.TextInput.has-error input:focus {
  border-color: red;
  
}

.TextInput.has-error .help-message {
  color: red;
}

/* .TextInput.success input {
  background-color: var(--success-bg-color);
  color: var(--success-color);
} */

.TextInput.success input:focus {
  border-color: var(--success-color);
}

.TextInput.success .help-message {
  color: var(--success-color);
}
.p-field {
  margin-bottom: 0rem;
}
</style>