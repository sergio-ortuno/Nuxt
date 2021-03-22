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
export default {
  components: {
    RestaurantCard,
    Hero,
    Banner,
    Slogan,
  },
  data() {
    return {
      showBanner: false,
      restaurants: [
        {
          name: "Restaurant La Cúpula",
          description: "Platos mediterráneos y coches antiguos",
          slug: "la-cupula",
          category: "Mediterráneos",
          likes: 0,
        },
        {
          name: "Restaurant Singular",
          description:
            "Brunch, desayunos y comidas con variada carta mediterránea en un luminoso café de moderno diseño minimalista.",
          slug: "Singular",
          category: "Brunch",
          likes: 0,
        },
        {
          name: "Oporto Restaurante",
          description:
            "Bacalao, francesinhas y otras recetas de la gastronomía lusa en un coqueto bar decorado con cajas de oporto.",
          slug: "oporto",
          category: "Mediterráneos",
          likes: 0,
        },
      ],
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
