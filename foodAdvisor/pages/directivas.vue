<template>
  <div style="margin-left: 10px">
    <p>{{ message }}</p>
    <p v-show="true">Hola este es un texto que se muestra</p>
    <p v-if="num > 10">Hola este es un texto con v-if</p>
    <p v-else>Hola este es un texto con v-else</p>
    <ul>
      <li v-for="item in items" v-bind:key="item">{{ item }}</li>
    </ul>
    <p>Nombre:</p>
    <input v-model="name" type="text" />
    {{ name }}
    {{ nameReverse }}
    <span v-if="error !== ''" class="tag is-warning">{{ error }}</span>
    <button v-on:click="saludo" class="button is-info">Saluda</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hola que tal maquinita",
      num: 5,
      items: [1, 2, 3, 4, 5, 6],
      name: "",
      error: "",
    };
  },
  computed: {
    nameReverse() {
      return this.name.split("").reverse().join("");
    },
  },
  watch: {
    name() {
      if (this.name.length > 5) {
        this.error = "Nombre demasiado largo";
      } else {
        this.error = "";
      }
    },
  },
  methods: {
    saludo() {
      console.log("Esto es un saludo");
    },
  },
};
</script>

