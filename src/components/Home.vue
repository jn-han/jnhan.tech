<template>
<NavBar/>
<Socials/>
<div class="">
  <div class="grid auto-rows-auto top-24">
    <div class="flex align-items justify-center h-screen w-screen">
      <Intro/>
      <DownArrow/>
    </div>
    <div class="h-screen w-screen flex justify-center ">
      <About/>
    </div>
    <div class="flex align-items justify-center h-auto w-screen border-2">

    </div>
  </div>
</div>






</template>

<script>
import NavBar from './NavBar.vue'
import Intro from './Intro.vue'
import DownArrow from './DownArrow.vue'
import About from './About.vue'
import Socials from './Socials.vue'


export default {
    name: 'Home',
    components: {
    NavBar,
    Intro,
    DownArrow,
    About,
    Socials
}
}
</script>

<style scoped>

#arrow {
  color: teal;
}

</style>