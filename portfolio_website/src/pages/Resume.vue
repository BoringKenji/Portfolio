<template>
    <div class="emptyspace"></div>
    <div class="row">
        <div class="column">
            <p2>Experience</p2>
            <ul>
                <li>
                    <past-experience :startTime="startTime" :endTime="endTime" :title="title"
                        :description="description">
                    </past-experience>
                </li>
                <li>
                    <past-experience :startTime="startTime" :endTime="endTime" :title="title"
                        :description="description">
                    </past-experience>
                </li>
                <li>
                    <past-experience :startTime="startTime" :endTime="endTime" :title="title"
                        :description="description">
                    </past-experience>
                </li>
            </ul>
        </div>
        <div class="column">
            <p2>Education</p2>
            <ul>
                <li>
                    <past-experience :startTime="startTime" :endTime="endTime" :title="title"
                        :description="description">
                    </past-experience>
                </li>
            </ul>
        </div>
    </div>
    <div class="skillLabel">Skill</div>
    <div class="skill">
        <p>Vue</p>
        <div class="skill-bar skill1">
            <span class="skill-count1"></span>
        </div>
    </div>
    <div class="skill">
        <p>Flutter</p>
        <div class="skill-bar skill2">
            <span class="skill-count2"></span>
        </div>
    </div>
    <div class="skill">
        <p>Node.js</p>
        <div class="skill-bar skill3">
            <span class="skill-count3"></span>
        </div>
    </div>

</template>

<script>
import PastExperience from '../components/PastExperience.vue'


export default {
    components: {
        PastExperience
    },
    data() {
        return {
            startTime: "Start",
            endTime: "EndTime",
            title: "Title",
            description: "Description",
        }
    }
}
</script>

<style scoped>
.emptyspace {
    height: 2em;
}

.row {
    display: flex;
}

.column {
    flex: 50%;
}

p2 {
    position: relative;
    left: 10%;
    font-size: 2em;

}

p3 {
    position: relative;
    left: 10%;
    font-size: 1.5em;
    font: bold;

}

li {
    list-style: none;
    margin: 2em;
    padding: 0;
}

div.skillLabel {
    position: relative;
    left: 5%;
    font-size: 2em;
}

.skill {
    margin-bottom: 35px;
    position: relative;
    overflow-x: hidden;
    width: 80%;
    left: 10%;
}

.skill>p {
    font-size: 18px;
    font-weight: 700;
    color: #1a1716;
    margin: 0;
}

.skill:before {
    width: 100%;
    height: 20px;
    content: "";
    display: block;
    position: absolute;
    background: #959595;
    bottom: 0;
}

.skill-bar {
    width: 100%;
    height: 20px;
    background: #0086b3;
    display: block;
    position: relative;
}

.skill-bar span {
    position: absolute;
    border-top: 5px solid #0086b3;
    top: -30px;
    padding: 0;
    font-size: 18px;
    padding: 3px 0;
    font-weight: 500;
}

.skill-bar {
    position: relative;
}

.skill1 .skill-count1 {
    right: 0;
}

.skill1 {
    width: 30%;
}

.skill2 .skill-count2 {
    right: 0;
}

.skill2 {
    width: 25%;
}

.skill3 .skill-count3 {
    right: 0;
}

.skill3 {
    width: 5%;
}
</style>