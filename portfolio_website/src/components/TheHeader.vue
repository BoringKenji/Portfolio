<template>
    <header>
        <nav>
            <h1>
                <router-link to="/">Kenji Shum</router-link>
            </h1>
            <ul>
                <li>
                    <router-link to="/Home">Home</router-link>
                </li>
                <li>
                    <router-link to="/Resume">Resume</router-link>
                </li>
                <li>
                    <router-link to="/Portfolio">Portfolio</router-link>
                </li>
                <li>
                    <router-link to="/Books">Books</router-link>
                </li>
                <li>
                    <router-link to="/Blog">Blog</router-link>
                </li>
                <li>
                    <router-link to="/Contact">Contact</router-link>
                </li>
                <!-- <button><img src="../assets/darkMode.png"></button> -->
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 5rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

header a {
    text-decoration: none;
    color: #011414;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
    font-weight: bold;
}

a:active,
a:hover,
a.router-link-active {
    font-size: 1.3em;
    color: #0086b3;
}

h1 {
    margin: 0;
}

h1 a {
    color: #0086b3;
    margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
    border-color: transparent;
}

header nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

li {
    margin: 0 0.5rem;
}
</style>