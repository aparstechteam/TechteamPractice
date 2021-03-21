<template>
  <div>
    <form class="input_boxes" @submit.prevent="submitForm">
      <input
        required
        type="number"
        v-model="budget.amount"
        placeholder="Cost"
      />
      <input
        required
        type="text"
        v-model="budget.description"
        placeholder="Description"
      />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      budget: {
        amount: 0,
        description: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit("submitForm", this.budget);
      this.budget = {
        amount: 0,
        description: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>