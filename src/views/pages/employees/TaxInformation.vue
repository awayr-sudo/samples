<template>
  <div class="tax-info">
    <div class="p-fluid">
      <div class="p-field p-grid">
        <label for="firstname4" class="p-col-12 p-mb-2 p-md-6 p-mb-md-0"
          >Federal Exempt </label
        >
        <div class="p-col-12 p-md-6">
          <div class="check-box">
            <base-check-box
              :modelValue="alert"
              id="alert"
              name="federal_exempt"
              v-model="alert"
              :value="alert"
              checked="true"
            />
            <label class="check-box-text">Yes</label>
          </div>
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="firstname4" class="p-col-12 p-mb-2 p-md-6 p-mb-md-0"
          >Federal status</label
        >
        <div class="p-col-12 p-md-4">
          <Dropdown
            v-model="selectedCity1"
            :options="cities"
            optionLabel="name"
            optionValue="code"
            name="federal_status"
            placeholder="Select a City"
          />
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="firstname4" class="p-col-12 p-mb-2 p-md-6 p-mb-md-0"
          >Federal Allowances</label
        >
        <div class="p-col-12 p-md-2">
          <base-input type="number" name="federal_allowances"/>
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="firstname4" class="p-col-12 p-mb-2 p-md-6 p-mb-md-0"
          >Additional Witholdings</label
        >
        <div class="p-col-12 p-md-2">
          <base-input type="number" name="federal_additional"/>
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="firstname4" class="p-col-12 p-mb-2 p-md-6 p-mb-md-0"
          >Federal Unemployment Tax</label
        >
        <div class="p-col-12 p-md-2">
          <div class="check-box">
            <base-check-box
              :modelValue="alert"
              id="alert"
              name="tax_fedral_unemployment"
              v-model="alert"
              :value="alert"
              checked="true"
            />
            <label class="check-box-text">Apply</label>
          </div>
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="firstname4" class="p-col-12 p-mb-2 p-md-6 p-mb-md-0"
          >State Exempt</label
        >
        <div class="p-col-12 p-md-2">
          <div class="check-box">
            <base-check-box
              :modelValue="alert"
              id="alert"
              name="tax_state"
              v-model="alert"
              :value="alert"
              checked="true"
            />
            <label class="check-box-text">Yes</label>
          </div>
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="firstname4" class="p-col-12 p-mb-2 p-md-6 p-mb-md-0"
          >State Status</label
        >
        <div class="p-col-12 p-md-4">
          <Dropdown
            v-model="selectedCity1"
            :options="cities"
            optionLabel="name"
            optionValue="code"
            placeholder="Select a City"
          />
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="firstname4" class="p-col-12 p-mb-2 p-md-6 p-mb-md-0"
          >State Allowances</label
        >
        <div class="p-col-12 p-md-2">
          <base-input type="number" name="tax_state_allowances"/>
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="firstname4" class="p-col-12 p-mb-2 p-md-6 p-mb-md-0"
          >State Additional</label
        >
        <div class="p-col-12 p-md-2">
          <base-input type="number" name="tax_state_additional"/>
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="firstname4" class="p-col-12 p-mb-2 p-md-6 p-mb-md-0"
          >Social Security</label
        >
        <div class="p-col-12 p-md-2">
          <div class="check-box">
            <base-check-box
              :modelValue="alert"
              id="alert"
              name="alert"
              v-model="alert"
              :value="alert"
              checked="tax_ss"
            />
            <label class="check-box-text">Apply</label>
          </div>
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="firstname4" class="p-col-12 p-mb-2 p-md-6 p-mb-md-0"
          >Medicare</label
        >
        <div class="p-col-12 p-md-2">
          <div class="check-box">
            <base-check-box
              :modelValue="alert"
              id="alert"
              name="tax_medicare"
              v-model="alert"
              :value="alert"
              checked="true"
            />
            <label class="check-box-text">Apply</label>
          </div>
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="firstname4" class="p-col-12 p-mb-2 p-md-6 p-mb-md-0"
          >Advanced Earned Income Credit</label
        >
        <div class="p-col-12 p-md-2">
          <div class="check-box">
            <base-check-box
              :modelValue="alert"
              id="alert"
              name="tax_credit"
              v-model="alert"
              :value="alert"
              checked="true"
            />
            <label class="check-box-text">Apply </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.tax-info {
  padding: 10px;
}

</style>
