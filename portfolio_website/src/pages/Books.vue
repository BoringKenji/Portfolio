<template>
    <p class="description">The Books I have been read.</p>
    <div class="card">
        <img src="../assets/圖解TCPIP.jpg" alt="圖解TCPIP" style="width:100%">
        <h2>圖解TCP/IP</h2>
    </div>
</template>

<script>
</script>

<style scoped>
.description {
    position: relative;
    left: 5%;
}

div.scrollmenu {
    overflow: auto;
    white-space: nowrap;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 200px;
    margin: auto;
    text-align: center;
    font-family: arial;
}

.price {
    color: grey;
    font-size: 22px;
}

.card :hover {
    opacity: 0.7;
}
</style>