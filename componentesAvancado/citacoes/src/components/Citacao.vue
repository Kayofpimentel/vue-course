<template>
    <div class="citacao">
        <slot name="texto"/>
        <slot/>
    </div>
</template>

<script>
export default {
    props:{
    },
    created(){
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD7;
        background-color: rgba(0, 0, 0, .05);
        padding: 25px;
        max-width: 450px;
        text-align: center;
    }
</style>
