<template>
    <img class="center" src="../assets/Programmer.png" alt="Programmer Background">
    <p>Hello! I’m Kenji Shum. I'm a graduate developer who like growth with my company.</p>

</template>

<script>
export default{
    created(){
        console.log("123");
    }
}
</script>

<style scoped>
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 48%;
}

p{
    text-align: center;
}
</style>