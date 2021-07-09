<template>
   
        <Editor v-model="value2" editorStyle="height: 320px">
            <template v-slot:toolbar>
                <span class="ql-formats">
                    
                </span>
            </template>
        </Editor>
   

</template>

<script>
export default {
data() {
    return{
        value2: ''
    }
}
}
</script>

<style>

</style>