<template>
  <div>
    <h2 class="title is-2">FoodAdvisor, tu web de restaurantes</h2>
    <div class="subscribe" v-if="!is_subscribe">
      <input
        v-model="email"
        type="text"
        class="input email"
        placeholder="email..."
      />
      <button class="button is-info" @click="subscribe">Suscribirse</button>
    </div>
    <div v-else>
      <p>Gracias! Ahora encontras cada semana una recomendacion en tu email.</p>
    </div>
  </div>
</template>

<style scoped>
.subscribe {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.email {
  width: 80%;
}
</style>

<script>
import api from "@/services/api";
export default {
  data() {
    return {
      email: "",
      is_subscribe: false,
    };
  },
  methods: {
    async subscribe() {
      const payload = {
        email: this.email,
      };
      const response = await api.postSubscribeUser(payload);
      if (response.status == 201) {
        //201: Created
        this.is_subscribe = true;
      }
    },
  },
};
</script>
