<template>
<NavBar/>
<Socials/>
<div class="bg-navy">
  <div class="grid auto-rows-auto top-24">
    <div class="flex align-items justify-center h-screen w-screen">
      <Intro/>
      <DownArrow/>
    </div>
    <div class="h-screen w-screen flex justify-center">
      <About/>
    </div>
    <div class="flex align-items justify-center h-screen w-screen">
      <Contact/>
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
import Contact from './Contact.vue'


export default {
    name: 'Home',
    components: {
    NavBar,
    Intro,
    DownArrow,
    About,
    Socials,
    Contact
}
}
</script>

<style scoped>

#arrow {
  color: teal;
}

</style>