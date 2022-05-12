<template>
<header>
    <div>
        <router-link class="logo" to="/">JN</router-link>
    </div>
    <nav class="nav_links">
        <router-link to="/about"><span class="num">1. </span>About</router-link>
        <router-link to="/projects"><span class="num">2. </span>Projects</router-link>
        <router-link to="/contact"><span class="num">3. </span>Contact</router-link>
        <router-link to="/resume" class="resume">Resume</router-link>
    </nav>

</header>

</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
.logo {
    font-size: 20px;
    text-decoration: none;
    color: inherit;
}
nav a {
    text-decoration: none;
    color: inherit;
    padding: 20px;
    position: relative;
    
}
.resume {
    color: #6FFFE9;
    border:solid #6FFFE9;
    border-radius: 15px;
    padding: 15px;
    right: -10px;
}
nav a:hover {
    color: #6FFFE9;
    transition: color 0.5s ease-in-out;
}

.num {
    color: #6FFFE9;
}

header {
    font-family: 'Montserrat', sans-serif;
    color: #95a9a6;
    position: fixed;
    font-size: 17px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    z-index: 99;
    top: 5px;
    right: 0%;
    left: 0%;
    right: 0%;
}
</style>