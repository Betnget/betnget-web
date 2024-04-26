<script setup>
import AppNavBar from './components/AppNavBar.vue';
import AppTabelaPromocoes from './components/promocoes/AppTabelaPromocoes.vue';
</script>

<template>
  <AppNavBar></AppNavBar>
  <main>
    <!-- <h2>Últimas Promoções</h2> -->
    <!-- <AppTabelaPromocoes></AppTabelaPromocoes> -->
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
main { 
  padding: 1.2rem 3rem;
}
</style>