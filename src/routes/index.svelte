<script>
  import { onMount } from "svelte";

  let foodData = [];
  let categories = ["All"];
  let filterValue = "";
  let filteredFoodData = [];
  let selected = 3;
  let showFood = true;
  let selectedCategory = "All";
  let isLoading = false;

  onMount(async () => {
    fetchFoodData();
    // UIkit.notification({
    //   message: "my-message!",
    //   status: "primary",
    //   pos: "top-right",
    //   timeout: 5000
    // });
  });

  $: {
    updateFilters();
  }

  async function fetchFoodData() {
    isLoading = true;

    try {
      //const response = await fetch("http://localhost:8000/api/foods");
      const response = await fetch(
        "https://go-food-api.herokuapp.com/api/foods"
      );
      const json = await response.json();

      foodData = json;

      foodData.forEach(food => {
        if (!categories.includes(food.category)) {
          categories.push(food.category);
        }
      });

      filteredFoodData = foodData;
    } catch (error) {
      isLoading = false;
      console.log(error);
    }
  }

  function updateShowFood(recommended) {
    switch (selected) {
      case 3: // All
        showFood = true;
        break;
      case 2: // Not recommended
        showFood = recommended === false ? true : false;
        break;
      case 1: // Recommended
        showFood = recommended === true ? true : false;
        break;
    }
  }

  function updateFilters() {
    filteredFoodData = foodData.filter(food => {
      updateShowFood(food.recommended);
      let doesCategoryMatch =
        selectedCategory === "All" ? true : food.category === selectedCategory;
      return (
        food.name.toLowerCase().includes(filterValue.toLowerCase()) &&
        showFood &&
        doesCategoryMatch
      );
    });
  }
</script>

<style lang="scss">
  .reduced-padding {
    padding: 5px;
  }
  td {
    padding: 5px 12px;
  }
  label {
    display: inline-block;
    margin-top: 5px;
  }
  .side-bar {
    margin-top: 36px;
  }
  .uk-table th {
    padding: 16px 10px 16px 5px;
  }
  tr {
    border-top: 1px solid #e5e5e559 !important;
  }
</style>

<svelte:head>
  <title>Food guardian</title>
</svelte:head>

<div>
  <div>
    <form class="uk-search uk-search-default">
      <a href="" uk-search-icon />
      <input
        class="uk-search-input"
        type="search"
        bind:value={filterValue}
        on:keydown={updateFilters}
        placeholder="Search..." />
    </form>
    <div class="uk-margin">
      <h5>Category</h5>
      {#if categories.length > 1}
        <div uk-form-custom="target: > * > span:first-child">
          <select bind:value={selectedCategory} on:change={updateFilters}>
            {#each categories as category}
              <option value={category}>{category}</option>
            {/each}
          </select>
          <button
            class="uk-button uk-button-default"
            type="button"
            tabindex="-1">
            <span />
            <span uk-icon="icon: chevron-down" />
          </button>
        </div>
      {/if}
    </div>

    <div class="uk-margin uk-grid-small uk-child-width-auto ">
      <label>
        <input
          class="uk-radio"
          type="radio"
          name="radio2"
          checked
          value={1}
          bind:group={selected} />
        Recommended
      </label>
      <br />
      <label>
        <input
          class="uk-radio"
          type="radio"
          name="radio2"
          value={2}
          bind:group={selected} />
        Not Recommended
      </label>
      <br />
      <label>
        <input
          class="uk-radio"
          type="radio"
          name="radio2"
          value={3}
          bind:group={selected} />
        All
      </label>
    </div>
  </div>

  {#if isLoading}
    <div uk-spinner="ratio: 2" />
  {/if}

  {#if foodData.length > 0}
    <table class="uk-table uk-table-divider">
      <thead>
        <tr>
          <th>Name</th>
          <th>Safe</th>
          <th>Category</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {#each filteredFoodData as food}
          <tr>
            <td class="reduced-padding">
              <b>{food.name}</b>
            </td>
            <td class="reduced-padding">
              {#if food.recommended === true}
                <span class="uk-margin-small-right yes-icon" uk-icon="check" />
              {:else if food.recommended === false}
                <span class="uk-margin-small-right no-icon" uk-icon="close" />
              {/if}
            </td>
            <td class="reduced-padding">{food.category}</td>
            <td class="reduced-padding">{food.comments}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>
