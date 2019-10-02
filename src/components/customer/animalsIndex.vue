<template>
  <div>
    <animalHome></animalHome>
    <router-view></router-view>
  </div>
</template>

<script>
import animalHome from './pages/animals';

export default {
  components: {
    animalHome,
  },
  data() {
    return {
    }
  },
}
</script>