<template>
<NavBar/>
<div class="">
  <div class="grid auto-rows-auto top-24">
    <div class="flex align-items justify-center h-screen w-screen">
      <Intro/>
      <DownArrow/>
    </div>
    <div class="h-screen w-screen flex justify-center ">
      <About/>
    </div>
  </div>
</div>






</template>

<script>
import NavBar from './NavBar.vue'
import Intro from './Intro.vue'
import DownArrow from './DownArrow.vue'
import About from './About.vue'


export default {
    name: 'Home',
    components: {
    NavBar,
    Intro,
    DownArrow,
    About
}
}
</script>

<style scoped>

#arrow {
  color: teal;
}

</style>