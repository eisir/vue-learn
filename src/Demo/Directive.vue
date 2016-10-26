<template>
    <div class="panel panel-default">
        <div class="panel-heading">Count</div>
        <div class="panel-body">
            <div class="directive">
                <input v-focus type="text">
            </div>
        </div>
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
