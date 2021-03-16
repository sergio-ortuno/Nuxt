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
    };
  },
  methods: {
    saludo() {
      console.log("Esto es un saludo");
    },
  },
};
</script>

<style>
</style>
