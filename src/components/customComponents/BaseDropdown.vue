<template>
  <div
    class="width-100"
    :class="{ 'p-error': errorMessage, success: meta.valid }"
  >
    <!-- :style="{ display: type != 'hidden' ? '' : 'none' }" -->

    <div class="p-inputgroup">
      <Dropdown
        :name="name"
        :id="name"
        :options="options"
        :optionLabel="optionLabel"
        :optionValue="optionValue"
        :optionGroupLabel="optionGroupLabel"
        :optionGroupChildren="optionGroupChildren"
        :placeholder="placeholder"
        :modelValue="inputValue"
        :class="className"
        :filter="filter"
        @input="handleChange"
        @change="checkChange"
        :disabled="disabled"
        class="base"
      />
      <!-- {{inputValue}}---{{modelValue}} -->
      <span class="p-inputgroup-addon" v-if="btnEdit">
        <i
          class="pi pi-pencil cursor-pointer"
          v-tooltip.bottom="'Click here to edit'"
          @click="onBtnClick"
        ></i>
      </span>
      <span class="p-inputgroup-addon" v-if="btnCreate">
        <i
          class="pi pi-plus cursor-pointer"
          v-tooltip.bottom="'Click here to create'"
          @click="onBtnCreate"
        ></i>
      </span>
    </div>

    <p class="help-message" v-show="errorMessage">{{ errorMessage }}</p>
  </div>
</template>
<script>
import { useField } from "vee-validate";
import { watch } from "vue";
export default {
  props: {
    options: {
      type: [String, Array],
      default: "",
    },
    optionLabel: {
      type: String,
      default: "",
    },
    optionValue: {
      type: String,
      default: "",
    },
    optionGroupLabel: {
      type: String,
      default: "",
    },
    optionGroupChildren: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
    emptyFilterMessage: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    filter: {
      type: Boolean,
      required: true,
    },
    icon: {
      type: Boolean,
      default: true,
    },
    addon: {
      type: Boolean,
      default: true,
    },
    btnCreate: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    // we don't provide any rules here because we are using form-level validation
    // https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
    // console.log(div", props);
    const {
      value: inputValue,
      errorMessage,
      handleChange,
      meta,
      resetField,
    } = useField(props.name, undefined, {
      initialValue: String(props.modelValue),
    });
    resetField({
      value: String(props.modelValue),
    });
    watch(
      () => inputValue,
      (first, second) => {
        inputValue.value = first.value;
        console.log(
          "Watch props.selected function called with args:",
          props.value,
          inputValue,
          first,
          second
        );
      }
    );
    function checkChange(event) {
      //  event.preventDefault();
      emit("change", event);
      inputValue.value = event.value;
      emit("update:modelValue", event.value);
      emit("changeSSR", event);
    }
    function onBtnClick() {
      emit("btn-clicked", { id: inputValue.value });
    }
    function onBtnCreate() {
      emit("btn-create");
    }

    return {
      handleChange,
      errorMessage,
      inputValue,
      onBtnCreate,
      meta,
      checkChange,
      onBtnClick,
    };
  },
  data() {
    return {
      HTMLcontent: null,
    };
  },
  created() {
    this.HTMLcontent = `
    	<div>Create New</div>
`;
  },
};
</script>

<style scoped>
div.p-error .p-dropdown {
  background-color: var(--error-bg-color);
  color: var(--error-color);
}

div.p-error input:focus {
  border-color: var(--error-color);
}

div.has-error .help-message {
  color: var(--error-color);
}

.Dropdown.success input {
  background-color: var(--success-bg-color);
  color: var(--success-color);
}

.Dropdown.success input:focus {
  border-color: var(--success-color);
}

.Dropdown.success .help-message {
  color: var(--success-color);
}

.p-inputgroup {
  display: flex;
  align-items: stretch;
}
.width-72 {
  width: 72% !important;
}
.base.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
  flex: 1 1 auto;
  width: 0% !important;
}
</style>
