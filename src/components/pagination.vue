<script setup>
import { onBeforeMount, ref } from "vue";
import { useUsers } from "../store/users";
import { useGeneral } from "../store/general";
import { router } from "../router";

const storeUser = useUsers();
const storeGeneral = useGeneral();

const users = ref([]);
const hasMore = ref(true);
const loading = ref(false);
let page = 1;

onBeforeMount(() => {
  getData();
});

function onViewDetails(user) {
  storeUser.$patch({ userId: user.id, user });
  router.push({ name: "user" });
}

async function getData() {
  try {
    const url = import.meta.env.VITE_API_HOST;
    loading.value = true;
    const response = await fetch(`${url}/usuarios/?page=${page}&limit=${storeGeneral.limit}`);
    const { usuarios, isMore } = await response.json();
    loading.value = false;
    hasMore.value = isMore;
    page += 1;
    users.value = [...users.value, ...usuarios];
  } catch (error) {
    loading.value = false;
    console.log(error);
  }
}
</script>

<template>
  <ul class="pagination__container" v-if="users.length">
    <li class="pagination__item" v-for="user in users" :key="user.id">
      <div class="pagination__user">
        <span>{{ user.first_name }}</span>
        <span>{{ user.last_name }}</span>
      </div>
      <div class="pagination__actions">
        <button class="pagination__btnDetails" @click="onViewDetails(user)">Detalles</button>
      </div>
    </li>
    <a class="pagination__hasMore" v-if="hasMore && !loading" @click="getData">Ver más</a>
    <div class="pagination__loader loader" v-else></div>
  </ul>
  <div class="loader" v-else></div>
</template>