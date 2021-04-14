<template>
  <div>
    <hero @onShowBanner="changeShowBannerValue">
      <Banner slot="header" v-if="showBanner" />
      <Slogan slot="header" v-else />
    </hero>
    <div class="container">
      <section class="section">
        <h1 class="title is-1">Food Advisor</h1>
        <div class="columns is-multiline">
          <RestaurantCard
            :name="restaurant.name"
            :description="restaurant.description"
            :slug="restaurant.slug"
            :category="restaurant.category"
            :likes="restaurant.likes"
            :image="restaurant.image"
            v-on:onLikeButton="sumRestaurantLikes(restaurant)"
            class="restaurant-card"
            v-for="(restaurant, index) in restaurants"
            :key="index"
          />
        </div>
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
  async asyncData() {
    try {
      const { data } = await api.getRestaurants();
      return { restaurants: data };
    } catch (error) {
      error({ statusCode: 404, message: "Restaurant not found" });
    }
  },
  // async created() {
  //   const response = await api.getRestaurants();
  //   if (response.status == 200) {
  //     this.restaurants = response.data;
  //   }
  // },
  data() {
    return {
      showBanner: false,
      restaurants: [],
    };
  },
  methods: {
    async sumRestaurantLikes(restaurant) {
      const payload = {
        id: restaurant.id,
        data: {
          likes: restaurant.likes + 1,
        },
      };
      const response = await api.putSumRestaurantLikes(payload);
      if (response.status == 200) {
        restaurant.likes++;
      }
    },
    changeShowBannerValue() {
      this.showBanner = !this.showBanner;
    },
  },
};
</script>
<style>
.restaurant-card {
  margin: 10px 10px;
  max-width: 300px;
}
</style>
