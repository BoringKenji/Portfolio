<template>
    <div class="emptyspace"></div>
    <div class="row">
        <div class="column">
            <p2>Experience</p2>
            <ul>
                <li>
                    <past-experience startTime="Jun2022" endTime="Jun2022" title="Software Developer"
                        description="Bybit">
                    </past-experience>
                </li>
                <li>
                    <past-experience startTime="Dec2021" endTime="Feb2022" title="Internship"
                        description="Blue Sky Energy Technology">
                    </past-experience>
                </li>
                <li>
                    <past-experience startTime="Jun2021" endTime="Sep2021" title="Student Helper"
                        description="WeShareTechnology">
                    </past-experience>
                </li>
            </ul>
        </div>
        <div class="column">
            <p2>Education</p2>
            <ul>
                <li>
                    <past-experience startTime="Sep2018" endTime="May2022" title="BEng in Aerospace Engineering"
                        description="HKUST">
                    </past-experience>
                </li>
                <li>
                    <past-experience startTime="Sep2018" endTime="May2022" title="Minor in Information Technology"
                        description="HKUST">
                    </past-experience>
                </li>
            </ul>
        </div>
    </div>
    <div class="skillLabel">Skill</div>
    <div class="scrollmenu">
        <img src="../assets/vue_logo.jpg" alt="" width="250" height="200"/>
        <img src="../assets/flutter_logo.png" alt="" width="250" height="200" />
        <img src="../assets/C++_logo.png" alt="" width="250" height="200" />
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

div.scrollmenu {
    overflow: auto;
    white-space: nowrap;
}

div.scrollmenu a {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px;
    text-decoration: none;
}

img{
    margin-top: 50px;
    margin-left: 100px;
}
</style>