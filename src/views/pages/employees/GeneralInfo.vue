<template>
  <div class="p-fluid p-mx-2 p-ml-3">
    <div class="p-grid">
      <span class="p-col-6">
        <i class="pi pi-pencil"></i>
        <label class="p-ml-2 p-text-bold">Unique Display Name</label>
      </span>
      <span class="p-col-4">
          <BaseInput name="Customer[DisplayName]" v-model="displayName"/>
      </span>
      <span class="p-col-6">
        <i class="pi pi-bell"></i>
        <label class="p-ml-2 p-text-bold">Notification Email</label>
      </span>
      <span class="p-col-4">
          <BaseInput name="Customer[NotificationEmail] " v-model="notificationEmail"/>
      </span>
      <span class="p-col-6">
        <i class="pi pi-folder"></i>
        <label class="p-ml-2 p-text-bold">Folder</label>
      </span>
      <span class="p-col-4">
          <BaseInput name="Customer[Folder]" v-model="folder"/>
      </span>
      <span class="p-col-6">
        <i class="pi pi-sitemap"></i>
        <label class="p-ml-2 p-text-bold">Type</label>
      </span>
      <span class="p-col-6">
        <div class="p-inputgroup">
                   
          <Dropdown name="Customer[Type]" class="width-75" v-model="type"/>
           <span class="p-inputgroup-addon">
                        <i class="pi pi-pencil" @click="addNewType"></i>
                    </span>
                     <span class="p-inputgroup-addon help">
                        <i class="pi pi-info-circle" @click="help"></i>
                    </span>
        </div>

      </span>
       <span class="p-col-6">
        <i class="pi pi-sitemap"></i>
        <label class="p-ml-2 p-text-bold">Category</label>
      </span>
      <span class="p-col-6">
           <div class="p-inputgroup">
          <Dropdown name="Customer[Category]" v-model="category" class="width-75"/>
          <span class="p-inputgroup-addon">
                        <i class="pi pi-pencil" ></i>
                    </span>
                     <span class="p-inputgroup-addon help">
                        <i class="pi pi-info-circle" @click="help"></i>
                    </span>
        </div>
      </span>
    </div>
    <div class="p-fluid p-grid p-mb-3 p-mt-2">
       
         <span class="p-col-10 p-mb-3">
        <i class="pi pi-id-card"></i>
        <label class="p-ml-2 p-text-bold t-underline">Name</label>
      </span>
       <span class="p-col-5 ml-6">    
        <label class="p-ml-2 p-text-bold">Company Name</label>
      </span>
      <span class="p-col-4">
          <BaseInput name="Customer[CompanyName]" v-model="companyName"/>
      </span>
       <span class="p-col-5 ml-6">    
        <label class="p-ml-2 p-text-bold">Title(Mr, Mrs,...)</label>
      </span>
      <span class="p-col-4">
          <BaseInput name="Customer[Prenominal]" v-model="prenominal"/>
      </span>
       <span class="p-col-5 ml-6">    
        <label class="p-ml-2 p-text-bold">First Name</label>
      </span>
      <span class="p-col-4">
          <BaseInput name="Customer[Forename]" v-model="forename"/>
      </span>
       <span class="p-col-5 ml-6">    
        <label class="p-ml-2 p-text-bold">Middle Name</label>
      </span>
      <span class="p-col-4">
          <BaseInput name="Customer[MiddleName]" v-model="middlename"/>
      </span>
       <span class="p-col-5 ml-6">    
        <label class="p-ml-2 p-text-bold">Last Name</label>
      </span>
      <span class="p-col-4">
          <BaseInput name="Customer[Surname]" v-model="surname"/>
      </span>
      <span class="p-col-5 ml-6">    
        <label class="p-ml-2 p-text-bold">Suffix(Jr, Sr, ...)</label>
      </span>
      <span class="p-col-4">
          <BaseInput name="Customer[Postnominal]" v-model="postnominal"/>
      </span>
    </div>
  </div>
<div class="p-ml-3">
   <span > 
       <i class="pi pi-user"></i>   
        <label class="p-ml-2 p-text-bold">Referral  : &nbsp;</label>
      </span>
      <span>
          <Dropdown name="Customer[ReferralType]"  v-model="referralType"
              />
      </span> 
      
</div>
<div class="p-mt-3 p-ml-3">
   <span> 
       <i class="pi pi-user"></i>   
        <label class="p-ml-2 p-text-bold">Sales Rep  : &nbsp;</label>
      </span>
      <span>
          <Dropdown name="Customer[SalesRepType]" v-model="salesRep"
             />
      </span> 
      
</div>
 <ConfirmDialog></ConfirmDialog>
</template>

<script>
export default {
  data() {
    return {
        displayName: '',
        notificationEmail: '',
        folder: '',
        type: '',
       
        category: '',
        companyName: '',
        prenominal: '',
        forename: '',
        middlename: '',
        surname: '',
        postnominal: '',
        referralType: '',
        salesRep: [],

    };
  },
  methods: {
      addNewType() {
       this.$emit("add-new-type");
      },
      help() {
            this.$confirm.require({
                message: 'Select any type of setting its importance.',
                header: 'Help: Important Date',
                icon: 'pi pi-info-circle',
                acceptLabel: 'OK',
                
            });
        },
  }
};
</script>

<style lang="scss">
.ml-6{
    margin-left: 6rem;
}
.t-underline{
    text-decoration: underline;
}
.width-75{
    width: 75%;
}


</style>