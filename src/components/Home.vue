<template>

    <NavBar />
    <div class="main">
        <div class="intro">
            <h2 class="smallIntro">Hi, my name is</h2>
            <h1 class="nameTitle">Joshua Nguyen</h1>
            <p class="pIntro">An aspiring software engineer studying at the University of British Columbia</p>
        </div>
    </div>

</template>

<script>
import NavBar from './NavBar.vue'

export default {
    name: 'Home',
    components: {
    NavBar,
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
.main {
    position: relative;
    top: 150px;
    justify-content: left;
}
.nameTitle {
    font-family: Montserrat, sans-serif;
    color: #FFFFFF;
    opacity: 0;
    transform: translateY(3rem);
    animation: fadeInUp 2s ease 3.5s forwards;
}

.pIntro {
    font-size: 20px;
    font-family: Montserrat, sans-serif;
    color: #F2F2F2;
    opacity: 0;
    transform: translateY(3rem);
    animation: fadeInUp 2s ease 4.5s forwards;
}

.smallIntro {
    color: #6FFFE9;
    font-family: 'Roboto Mono', monospace;
    font-size: clamp(1rem,3vw+1rem, 4rem);
    position: relative;
    width: max-content;
}

.smallIntro::before,
.smallIntro::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.smallIntro::before {
    background: #212F40;
    animation: typewriter 1.5s steps(14) 1s forwards;
}
.smallIntro::after {
    background: white;
    width: 0.125em;
    animation: 
    typewriter 1.5s steps(14) 1s forwards, 
    blink 1000ms steps(14) infinite;
}

@keyframes typewriter {
    to {
        left: 100%;
    }
}

@keyframes blink {
    to {
        background: transparent;
    }
}
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0)
    }
}

</style>