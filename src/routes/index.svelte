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
  let errorMessage = "";

  onMount(async () => {
    fetchFoodData();
    // UIkit.notification({
    //   message: "my-message!",
    //   status: "primary",
    //   pos: "top-right",
    //   timeout: 5000
    // });
  });

  async function fetchFoodData() {
    isLoading = true;

    try {
      const url =
        process.env.NODE_ENV === "development"
          ? "http://localhost:8000/api/foods"
          : "https://web-production-fc82.up.railway.app/api/foods";
      const response = await fetch(url);

      if (!response.ok) {
        isLoading = false;
        throw response;
      }

      const json = await response.json();

      isLoading = false;

      foodData = json || [];

      errorMessage = !foodData.length ? "Foods not found" : null;

      foodData.forEach(food => {
        if (!categories.includes(food.category)) {
          categories.push(food.category);
        }
      });

      filteredFoodData = foodData;
    } catch (error) {
      isLoading = false;
      console.log(error);
      errorMessage = error.statusText || error.message;
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
  .controls-container {
    background: rgba(34, 34, 34, 0.95);
    border-radius: 24px;
    padding: 24px;
    margin: 24px auto;
    height: max-content;
  }
  .table-container {
    @media (max-width: 780px) {
      padding: 24px 10px;
    }
  }
  .reduced-padding {
    padding: 5px;
  }
  td {
    padding: 5px 12px;

    @media (max-width: 780px) {
      font-size: 0.8rem;
    }
  }
  label {
    display: inline-block;
    margin-top: 5px;
  }
  .uk-table th {
    padding: 16px 10px 16px 5px;
  }
  tr {
    border-top: 1px solid #e5e5e559 !important;
  }
  th {
    color: #f8a0d4;
    font-weight: bold;
    text-transform: capitalize;
  }
  .main-container {
    display: flex;
    justify-content: center;

    @media (max-width: 780px) {
      flex-direction: column;
    }
  }
  .stick {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 40px;

    @media (max-width: 780px) {
      position: relative;
      top: 0;
    }
  }
</style>

<svelte:head>
  <title>The Experimental Diet Guide</title>
</svelte:head>

<div class="main-container">
  <div class="controls-container stick">
    {#if foodData.length}
      <form class="uk-search uk-search-default">
        <button uk-search-icon />
        <input
          class="uk-search-input"
          type="search"
          bind:value={filterValue}
          on:keydown={updateFilters}
          placeholder="Search..." />
      </form>
    {/if}
    {#if categories.length > 1}
      <div class="uk-margin">

        <h5>Category</h5>
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

      </div>
    {/if}

    {#if foodData.length}
      <div class="uk-margin uk-grid-small uk-child-width-auto ">
        <label>
          <input
            class="uk-radio"
            type="radio"
            name="radio2"
            checked
            value={1}
            on:change={updateFilters}
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
            on:change={updateFilters}
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
            on:change={updateFilters}
            bind:group={selected} />
          All
        </label>
      </div>
    {/if}

    {#if isLoading}
      <div uk-spinner="ratio: 2" />
    {/if}

    {#if !isLoading && !foodData.length && errorMessage}
      <h3>
        <b>Sorry</b>
      </h3>
      <h5>Something went wrong. Please try again later.</h5>
      <p>
        Error details:
        <b>{errorMessage}</b>
      </p>
    {/if}

    {#if !isLoading && foodData.length}
    <a href="https://www.healthline.com/nutrition/plant-paradox-diet" target="_blank">Read caveats</a>
    {/if}
  </div>

  {#if foodData.length > 0}
    <div class="controls-container table-container">
      <table class="uk-table uk-table-divider">
        <thead>
          <tr>
            <th>Name</th>
            <th>Safe</th>
            <th>Category</th>
            <th>Note</th>
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
                  <span
                    class="uk-margin-small-right yes-icon"
                    uk-icon="check" />
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
    </div>
  {/if}
</div>
