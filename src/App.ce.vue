<script setup>
import { onBeforeMount } from "vue";
import { useGeneral } from "./store/general";
import { useUsers } from "./store/users";

const { limit } = defineProps({
  limit: {
    type: Number,
    default: 10,
  },
  "*": "",
});
const emit = defineEmits(["userSelected"]);
const storeGeneral = useGeneral();
const storeUser = useUsers();

onBeforeMount(() => {
  storeGeneral.setLimit(limit || 0);
});
storeUser.$subscribe(
  (mutation, state) => {
    emit("userSelected", { ...state.user });
  },
  { detached: true }
);
</script>

<template>
  <router-view></router-view>
</template>

<style>
@import "./assets/styles/main.css";
</style>