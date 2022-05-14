<template>
  <NavBar />
  <div class="grid grid-flow-col auto-cols-max">
      <header id="home" class="absolute grid grid-flow-dense left-28 top-1/3">
        <h3 class="text-lg relative top-4 text-light-teal flex">Hello<span class="animate-waving-hand">&nbsp;👋🏻</span>, my name is </h3>
        <h1 class="text-7xl text-white">Joshua</h1>
        <h3 class="relative bottom-9 text-6xl text-bone">Nguyen</h3>
        <p class="text-xl relative bottom-9 text-bone">
          A software engineer based in Vancouver, British Columbia seeking to create seamless applications from the front end.
        </p>
        <p class="text-xl relative bottom-9 text-bone">
          I am currently studying Computer Science at the University of British Columbia
        </p>
      </header>
      <div class="absolute inset-x-0 bottom-0">
        <div class="absolute inset-x-0 bottom-0 h-16 inline-block animate-bounce">
          <span class=" p-4 bg-teal-400 text-light-teal text-sm  h-16">
            <svg class="w-6 h-6 mx-auto text-light-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#62dfcc" d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"/>
            </svg>
          </span>
        </div>
      </div>

    <div>

    </div>

    <footer>

    </footer>
  </div>


</template>
``
<script>
import NavBar from './NavBar.vue'
import '../assets/down-arrow.svg'

export default {
    name: 'Home',
    components: {
    NavBar,

}
}
</script>

<style scoped>

#arrow {
  color: teal;
}

</style>