<template>
  <div class="container">
    <div class="headline">
      <h2>Budget Calculator</h2>
    </div>
    <div class="budget_container">
      <h1 class="budget" :style="`${balance < 0 ? 'color:  red' : ''}`">
        {{ balance }}
      </h1>
    </div>
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
    <div class="budget_calculations">
      <div class="income">
        <h2>Income</h2>
        <ul class="income_list">
          <li v-for="(income, i) in incomes" :key="i">
            <div>
              <span> {{ income.description }}</span>

              <span class="amount" style="background: green">{{
                income.amount
              }}</span>
            </div>
            <span class="delete_btn" @click="deleteIncome(i)">&times;</span>
          </li>
        </ul>
      </div>
      <div class="expenses">
        <h2>Expenses</h2>
        <ul class="expenses_list">
          <li v-for="(expense, i) in expenses" :key="i">
            <div>
              <span> {{ expense.description }}</span>
              <span class="amount" style="background: red">{{
                expense.amount
              }}</span>
            </div>
            <span class="delete_btn" @click="deleteExpenses(i)">&times;</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balance: 0,
      incomes: [],
      expenses: [],

      budget: {
        amount: 0,
        description: "",
      },
    };
  },

  methods: {
    submitForm() {
      let amount = parseInt(this.budget.amount);

      if (amount < 0) {
        this.expenses.push(this.budget);
      } else {
        this.incomes.push(this.budget);
      }
      this.balance += amount;
      this.budget = {
        amount: 0,
        description: "",
      };
    },
    deleteIncome(index) {
      this.balance -= this.incomes[index].amount;
      this.incomes.splice(index, 1);
    },

    deleteExpenses(index) {
      this.balance -= this.expenses[index].amount;
      this.expenses.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  margin: 0;
  padding: 0;
}

$green: rgb(88, 194, 106);
$light: rgba(255, 255, 255, 0.932);

.container {
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  font-family: "Roboto", sans-serif;

  .headline {
    background-color: rgb(33, 30, 46);
    color: $light;
    padding: 10px 15px;
    text-align: center;
    width: 100%;
  }

  .input_boxes {
    margin-top: 10px;
    margin-bottom: 10px;

    input {
      padding: 10px;
      border-radius: 5px;
      margin-right: 5px;
      border: 2px solid rgba(221, 220, 220, 0.548);
      box-shadow: 2px 2px 2px rgba(179, 177, 177, 0.685);
    }
    input:focus {
      outline: none;
    }
    input[type="number"] {
      width: 100px;
    }
    button {
      border: none;
      outline: none;
      padding: 12px 15px;
      background-color: $green;
      color: $light;
      border-radius: 5px;
      &:hover {
        transform: translateY(-2px);
        transition: transform 0.2s ease-in;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .budget_container {
    background-color: $green;
    width: 100%;
    height: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

    .budget {
      font-size: 60px;
      font-weight: 300;
      color: $light;
    }
  }
  .budget_calculations {
    display: flex;
    justify-content: center;
    gap: 10px;
    .income {
      width: 250px;
    }
    .expenses {
      width: 250px;
    }
    ul {
      list-style-type: none;
      margin-top: 10px;
      li {
        position: relative;
        padding: 10px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        font-size: 17px;

        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .amount {
            padding: 5px;
            color: $light;
          }
        }

        &:hover {
          box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
          .delete_btn {
            opacity: 1;
          }
        }

        .delete_btn {
          position: absolute;
          width: 30px;
          height: 30px;
          top: -15px;
          right: -15px;
          background: rgba(22, 18, 27, 0.966);
          color: rgb(233, 69, 69);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease-in;
        }
      }
    }
  }
}
</style>