import { defineStore } from "pinia";

export const useGeneral = defineStore("general", {
  state: () => ({
    limit: 0,
  }),
  actions: {
    setLimit(limit) {
      this.limit = limit;
    },
  },
});
