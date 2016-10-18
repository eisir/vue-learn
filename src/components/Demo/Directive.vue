<template>
    <div class="directive">
        <input v-focus type="text">
    </div>
</template>

<script>
export default {
    directives:{
        focus:{
            inserted:function(el){
                el.focus();
                el.value="ming"
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
