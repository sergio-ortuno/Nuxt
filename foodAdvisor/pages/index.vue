<template>
  <div class="container">
    <section class="section">
      <h1 class="title is-1">Food Advisor</h1>
      <RestaurantCard />
    </section>
  </div>
</template>

<script>
import RestaurantCard from "@/components/RestaurantCard";
export default {
  components: {
    RestaurantCard,
  },
};
</script>
<style>
</style>
