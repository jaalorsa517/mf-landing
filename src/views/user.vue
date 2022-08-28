<script setup>
import { ref, onBeforeMount, reactive } from "vue";
import card from "../components/card.vue";
import { router } from "../router";
import { useUsers } from "../store/users";

const storeUsers = useUsers();

const loading = ref(false);
const user = reactive({});
const error = ref("");

onBeforeMount(() => {
  if (!storeUsers.userId) return router.push({ name: "users" });
  getData(storeUsers.userId);
});

async function getData(id) {
  try {
    const url = import.meta.env.VITE_API_HOST;
    loading.value = true;
    const response = await fetch(`${url}/usuarios/${id}`);
    const _user = await response.json();
    user.value = _user;
    loading.value = false;
  } catch (err) {
    loading.value = false;
    error.value = err.message;
    console.log(err);
  }
}
</script>
<template>
  <div class="user">
    <router-link class="arrow_back" to="/">
      <b>{{ "←" }} Regresar</b>
    </router-link>
    <card v-if="!loading && !error" :user="user"></card>
    <p v-else-if="!loading && error">{error.message}</p>
    <div class="loader" v-else></div>
  </div>
</template>