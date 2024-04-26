<script setup>
import { ref, onMounted } from "vue";
import promocoesApi from "@/api/promocoes.api"

const ultimasPromocoes = ref([]);

const buscarPromocoes = async () => {
  ultimasPromocoes.value = await promocoesApi.buscarPromocoes();
};

onMounted(() => {
  buscarPromocoes();
});
</script>
<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Desconto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="promocao in ultimasPromocoes">
          <td>{{ promocao.titulo }}</td>
          <td>{{ promocao.desconto }}% OFF</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
