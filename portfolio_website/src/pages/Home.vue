<template>
    <img class="center" src="../assets/Programmer.png" alt="Programmer Background">
    <p>Hello! I’m Kenji Shum. I'm a graduate developer who like growth with my company.</p>

</template>

<script>
export default {
    methods: {
        async postData(url = '', data = {}) {
            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            });
            return response.json(); // parses JSON response into native JavaScript objects
        },
    },
    computed: {
        recordedIp() {
            return this.$store.state.recordIP;
        }
    },
    created() {
        fetch('https://api.ipify.org?format=json')
            .then(x => x.json())
            .then(({ ip }) => {
                if (this.$store.state.recordIP === false) {
                    this.postData('https://portfoliowebsite-ddb03-default-rtdb.asia-southeast1.firebasedatabase.app/ip.json', { 'ip': ip })
                    this.$store.state.recordIP = true;
                }
            });
        fetch('https://portfoliowebsite-ddb03-default-rtdb.asia-southeast1.firebasedatabase.app/ip.json')
            .then(response => response.json())
            .then(data => this.$store.state.View = Object.keys(data).length);
    },

}
</script>

<style scoped>
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 48%;
}

p {
    text-align: center;
}
</style>