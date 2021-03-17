<template>
  <div class="container">
    <section class="section">
      <h1 class="title is-1">Food Advisor</h1>
      <RestaurantCard
        v-for="restaurant in restaurants"
        v-bind:key="restaurant"
        :name="restaurant.name"
        :description="restaurant.description"
        :category="restaurant.category"
        :slug="restaurant.slug"
        :likes="likes"
        v-on:likeButton="sumLikes"
      />
    </section>
  </div>
</template>

<script>
import RestaurantCard from "@/components/RestaurantCard";
export default {
  components: {
    RestaurantCard,
  },
  data() {
    return {
      likes: 0,
      restaurants: [
        {
          name: "Manairo",
          slug: "manairo",
          category: "Italian",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          name: "Gorría Restaurant",
          slug: "gorria-restaurant",
          category: "Asian",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          name: "Dans le Noir?",
          slug: "dans-noir",
          category: "Mediterranean",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    };
  },
  methods: {
    sumLikes() {
      this.likes++;
    },
  },
};
</script>
<style>
</style>
