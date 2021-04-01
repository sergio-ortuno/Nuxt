<template>
  <div>
    <hero @onShowBanner="changeShowBannerValue">
      <Banner slot="header" v-if="showBanner" />
      <Slogan slot="header" v-else />
    </hero>
    <div class="container">
      <section class="section">
        <h1 class="title is-1">Food Advisor</h1>
        <RestaurantCard
          v-for="(restaurant, index) in restaurants"
          :key="index"
          :name="restaurant.name"
          :description="restaurant.description"
          :category="restaurant.category"
          :slug="restaurant.slug"
          :likes="restaurant.likes"
          v-on:likeButton="sumLikes(index)"
        />
      </section>
    </div>
  </div>
</template>

<script>
import RestaurantCard from "@/components/RestaurantCard";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Slogan from "@/components/Slogan";
import api from "@/services/api";
export default {
  components: {
    RestaurantCard,
    Hero,
    Banner,
    Slogan,
  },
  async created() {
    const response = await api.getRestaurants();
    if (response.status == 200) {
      this.restaurants = response.data;
    }
  },
  data() {
    return {
      showBanner: false,
      restaurants: [],
    };
  },
  methods: {
    sumLikes(index) {
      this.restaurants[index].likes++;
    },
    changeShowBannerValue() {
      this.showBanner = !this.showBanner;
    },
  },
};
</script>
<style>
</style>
