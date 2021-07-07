<template>
  <div
    class=""
    :class="{ 'has-error': !!errorMessage, success: meta.valid }"
    :style="{ display: type != 'hidden' ? '' : 'none' }"
  >
    <Checkbox :id="name" :name="name" :value="value" v-model="inputValue" :binary="true" />
    <!-- {{inputValue}}--{{modelValue}} -->
    <label v-if="label" :for="name">
      <i class="pi" :class="icon"></i>
      {{ label }}
    </label>
    <p class="help-message" v-show="errorMessage || meta.valid">{{ errorMessage }}</p>
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
    modelValue: {
      type: [String, Number],
      default: "",
    },
    value: {
      type: [String, Number],
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
  },
  setup(props) {
    const {
      value: inputValue,
      handleChange,
      errorMessage,
      meta,
    } = useField(props.name, props.rules, {
      // 👇 These are important
      type: "checkbox",
      initialValue: props.modelValue > 0,
    });

    watch(
      () => props.modelValue,
      (first, second) => {
        inputValue.value = "" + first;
        console.log("values changed", first, typeof first);
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

  width: 100%;
}

input:focus {
  border-color: var(--primary-color);
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
  border-color: var(--error-color);
}

.TextInput.has-error .help-message {
  color: var(--error-color);
}

.TextInput.success input {
  background-color: var(--success-bg-color);
  color: var(--success-color);
}

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
