<template>
<div class="fixed bg-navy w-screen z-50 opacity-100 py-9 p-12 flex text-bone text-xl">
    <div class="">
        <router-link to="/"><span class="text-2xl">Joshua Nguyen</span>
        </router-link>
    </div>
    <nav class="absolute px-8 right-0 text-bone">
        <router-link class="pr-14 transition duration-750 ease-out hover:text-light-teal" to="/"><span class="text-light-teal">1. </span>About</router-link>
        <router-link class="pr-14 transition duration-750 ease-out hover:text-light-teal" to="/"><span class="text-light-teal">2. </span>Projects</router-link>
        <router-link class="pr-14 transition duration-750 ease-out hover:text-light-teal" to="/"><span class="text-light-teal">3. </span>Contact</router-link>
        <router-link class="px-5 py-3 border-solid border-2 rounded-md border-light-teal text-light-teal 
        transition duration-750 ease-out hover:bg-light-teal hover:text-navy " 
        to="/">Resume</router-link>
    </nav>

</div>

</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


</style>