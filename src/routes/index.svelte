<script>
  import { onMount } from "svelte";

  let foodData = [];
  let filterValue = "";
  let filteredFoodData = [];
  let selected = 1;
  let showFood = true;

  onMount(async () => {
    const response = await fetch("http://localhost:8000/api/foods");
    const json = await response.json();
    foodData = json;
    filteredFoodData = foodData;

    // UIkit.notification({
    //   message: "my-message!",
    //   status: "primary",
    //   pos: "top-right",
    //   timeout: 5000
    // });
  });

  $: {
    console.log(selected);
    updateSearch();
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

  function updateSearch() {
    filteredFoodData = foodData.filter(food => {
      updateShowFood(food.recommended);
      return (
        food.name.toLowerCase().includes(filterValue.toLowerCase()) && showFood
      );
    });
  }
</script>

<style lang="scss">
  td {
    padding: 5px 12px;
  }
</style>

<svelte:head>
  <title>Food recommendedation app</title>
</svelte:head>

<div class="uk-flex">
  <div class="uk-width-1-4">
    <form class="uk-search uk-search-large">
      <span uk-search-icon />
      <input
        class="uk-search-input"
        type="search"
        bind:value={filterValue}
        on:keydown={updateSearch}
        placeholder="Search..." />

    </form>

    <div class="uk-margin">
      <h5>Category</h5>
      <div uk-form-custom="target: > * > span:first-child">
        <select>
          <option value="">Please select...</option>
          <option value="1">Option 01</option>
          <option value="2">Option 02</option>
          <option value="3">Option 03</option>
          <option value="4">Option 04</option>
        </select>
        <button class="uk-button uk-button-default" type="button" tabindex="-1">
          <span />
          <span uk-icon="icon: chevron-down" />
        </button>
      </div>
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

  {#if foodData.length === 0}
    <div uk-spinner="ratio: 3" />
  {/if}

  {#if foodData.length > 0}
    <table class="uk-table uk-table-divider">
      <thead>
        <tr>
          <th>Name</th>
          <th>Recommended</th>
          <th>Category</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {#each filteredFoodData as food}
          <tr>
            <td>
              <b>{food.name}</b>
            </td>
            <td>
              {#if food.recommended === true}
                <span class="uk-margin-small-right yes-icon" uk-icon="check" />
              {:else if food.recommended === false}
                <span class="uk-margin-small-right no-icon" uk-icon="close" />
              {/if}
            </td>
            <td>{food.category}</td>
            <td>{food.comments}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>
