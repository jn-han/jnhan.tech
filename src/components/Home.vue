<template>
<NavBar/>
<div class="">
  <div class="grid auto-rows-auto">
    <div class="flex align-items justify-center h-screen w-screen ">
      <Intro/>
      <DownArrow/>
    </div>
    <div class="border-2 border-solid border-light-teal h-screen w-screen">

    </div>
  </div>
</div>






</template>
``
<script>
import NavBar from './NavBar.vue'
import Intro from './Intro.vue'
import DownArrow from './DownArrow.vue'

export default {
    name: 'Home',
    components: {
    NavBar,
    Intro,
    DownArrow,
}
}
</script>

<style scoped>

#arrow {
  color: teal;
}

</style>