import { defineStore } from "pinia";

export const useUsers = defineStore("users", {
  state: () => ({
    userId: null,
    user: null,
  }),
});
