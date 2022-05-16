<template>
  <NavBar />
  <div>
    <Intro/>
    <DownArrow/>
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
    DownArrow
}
}
</script>

<style scoped>

#arrow {
  color: teal;
}

</style>