<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const ultimasPromocoes = ref([]);

const buscarUltimasPromocoes = async () => {
  const res = await axios.get("http://localhost:3000/promocoes");
  ultimasPromocoes.value = res.data;
};

onMounted(() => {
  buscarUltimasPromocoes();
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
