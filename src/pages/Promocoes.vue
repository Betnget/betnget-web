<script setup>
import AppTabelaPromocoes from '@/components/promocoes/AppTabelaPromocoes.vue';
</script>
<template>
    <h1 class="mb-2">Promoções</h1>
    <form class="mb-2">
        <div>
            <label for="titulo">Nome da Promoção: </label>
            <input id="titulo" type="text" placeholder="Ex: Promoção de Páscoa">
        </div>
        <div>
            <label for="dataInicio">Data de Início: </label>
            <input id="dataInicio" type="date">
        </div>
        <div>
            <label for="dataFim">Data de Finalização: </label>
            <input id="dataFim" type="date">
        </div>
        <div>
            <label for="valor">Valor do Desconto (%): </label>
            <input id="valor" type="number" placeholder="Ex: 20%">
        </div>
        <div>
            <label for="limite">Limite de usos: </label>
            <input id="limite" type="number" placeholder="Ex: 20 usos">
        </div>
        <div>
            <button type="button">Cadastrar</button>
            <button type="button">Cancelar</button>
        </div>
    </form>
    <AppTabelaPromocoes></AppTabelaPromocoes>
</template>