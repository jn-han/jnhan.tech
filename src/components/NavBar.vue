<template>
<header class="fixed bg-navy w-full z-99 opacity-100 p-6 flex items-center text-bone">
    <div>
        <router-link to="/">JN</router-link>
    </div>
    <nav class="absolute px-8 right-0 text-bone">
        <router-link class="pr-14 transition duration-750 ease-out hover:text-light-teal" to="/"><span class="text-light-teal">1. </span>About</router-link>
        <router-link class="pr-14 transition duration-750 ease-out hover:text-light-teal" to="/"><span class="text-light-teal">2. </span>Projects</router-link>
        <router-link class="pr-14 transition duration-750 ease-out hover:text-light-teal" to="/"><span class="text-light-teal">3. </span>Contact</router-link>
        <router-link class="px-5 py-3 border-solid border-2 rounded-md border-light-teal text-light-teal 
        transition duration-750 ease-out hover:bg-light-teal hover:text-navy " 
        to="/">Resume</router-link>
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


</style>