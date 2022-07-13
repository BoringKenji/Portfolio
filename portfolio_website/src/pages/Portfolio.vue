<template>
    <div class="emptyspace" style="height: 2em;"></div>
    <div class="grid-container">
        <div class="item0"></div>
        <div class="item1">
            <div class="card">
                <img src="../assets/Personal_Portfolio_Website.png" alt="Personal Portfolio Website" style="width:100%">
                <p>This Site</p>
                <p class="UsedTech">Vue + Vite</p>
                <a href="https://github.com/BoringKenji/Portfolio/tree/master/portfolio_website">Github</a> 
            </div>
        </div>
        <div class="item2">
            <div class="card">
                <img src="../assets/FYDP_FlutterApp.png" alt="Final Year Project" style="width:100%">
                <p>FYDP Flutter App</p>
                <p class="UsedTech">Flutter + Firebase</p>
                <a href="https://github.com/BoringKenji/FYDP--Design-and-Development-of-thin-weight-scale-for-chemical-storage-">Github</a> 
                <span>/</span>
                <a href="https://boringkenji.github.io/FYDP/#/">Demo</a>
            </div>
        </div>
        <div class="item3"></div>

    </div>

</template>

<script>
</script>

<style scoped>
* {
    box-sizing: border-box;
}


.item1 { grid-area: header; }
.item2 { grid-area: menu; }
.item0 { grid-area: empty1; }
.item3 { grid-area: empty2; }

.grid-container {
  display: grid;
  grid-template-areas:
    'empty1 header menu empty2';
  gap: 10px;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 400px;
    max-height: 400px;
    overflow: auto;
    margin: auto;
    text-align: center;
    font-family: arial;
}

.UsedTech{
    font-size: 0.6em;
    color: rgb(106, 109, 109);
}

.card :hover {
    opacity: 0.7;
}
</style>