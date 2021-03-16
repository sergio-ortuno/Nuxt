<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="navbar-brand logo">
      <img src="@/static/logo.png" alt="FoodAdvisor logo" />
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a href="/" class="navbar-item"> Inicio </a>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a href="/login" class="button is-light"> Log in </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
<style scoped>
.logo {
  width: 120px;
  margin: 0 20px;
}
</style>
