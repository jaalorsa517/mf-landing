<script setup>
import { reactive } from "vue";

const { user } = defineProps({
  user: {
    type: Object,
    default: (rawProps) => reactive({}),
  },
});

const tags = { first_name: "nombre", last_name: "apellido", email: "email", gender: "género" };
const dataUser = reactive(
  user.value
    ? Object.keys(user.value)
        .map((key) => (tags[key] ? [tags[key], user.value[key]] : []))
        .filter((item) => item.length)
    : []
);
</script>

<template>
  <div class="card">
    <div class="card__header"><b>Usuario</b></div>
    <div class="card__container" v-for="(user, id) in dataUser" :key="`${new Date().getTime()}-${id}`">
      <b class="card__tag">{{ user[0] }}</b>
      <span class="card__data">{{ user[1] }}</span>
    </div>
  </div>
</template>