<template>
    <div class="wrapper">
        <h3 class="Title">{{ title }}</h3>
        <h4 class="TimeLine">{{ duration }}</h4>
        <h4 class="content">{{ description }}</h4>
    </div>
</template>

<script>
export default {
    props: ['startTime', 'endTime', 'title', 'description'],
    computed: {
        duration() {
            return this.startTime + '-' + this.endTime;
        }
    }
}
</script>

<style scoped>
h1,
p {
    margin: 0 0 1em 0;
}

/* no grid support? */
.TimeLine {
    float: left;
    width: 19.1489%;
    color: #0086b3;
}

.Title {
    float: right;
    width: 79.7872%;
    font: bold;
}

/* make a grid */
.wrapper {
    max-width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 10px;
}

.wrapper>* {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    /* needed for the floated layout*/
    margin-bottom: 10px;
}

.content {
    grid-column: 1 / -1;
    /* needed for the floated layout */
    clear: both;
    font-size: 0.8em;

}


/* We need to set the widths used on floated items back to auto, and remove the bottom margin as when we have grid we have gaps. */
@supports (display: grid) {
    .wrapper>* {
        width: auto;
        margin: 0;
    }
}
</style>