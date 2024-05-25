<script>
  import QuestionBlock from "./lib/QuestionBlock.svelte";

  import { status } from "./lib/store";

  import { getRandomQuestions } from "./lib/api";
  let questions = [];

  // getRandomQuestions().then((res) => (questions = res));

  let refreshing = true;
  let help = false;
  let category = "";
  let difficulty = "";

  function refreshQuestions() {
    refreshing = true;
    getRandomQuestions({ difficulty, category }).then((res) => {
      questions = res;
      refreshing = false;
    });
  }

  function selectCategory(event) {
    category = event.currentTarget.value;
  }

  // refreshQuestions();
</script>

<main>
  {#if $status != ""}
    <div>
      status: {$status}
    </div>
  {/if}

  <div>
    <button class={refreshing ? "refreshing" : ""} on:click={refreshQuestions}
      >Refresh questions</button
    >
  </div>
  <div>
    {#each questions as question}
      <QuestionBlock {question} />
    {/each}
  </div>
  <button on:click={() => (help = !help)}>❓❓❓</button>
  <div class={help ? "" : "hidden"}>
    <div>
      <h3>Options</h3>
      <div>
        <label for="difficulty">Difficulty</label>
        <select id="difficulty" bind:value={difficulty}>
          <option value="">Don't care</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div>
        <h3>Category selection</h3>

        <div class="categories">
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value=""
              id="666"
            />
            <label for="666">All categories</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={9}
              id="9"
            />
            <label for="9">General Knowledge</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={10}
              id="10"
            />
            <label for="10">Entertainment: Books</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={11}
              id="11"
            />
            <label for="11">Entertainment: Film</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={12}
              id="12"
            />
            <label for="12">Entertainment: Music</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={13}
              id="13"
            />
            <label for="13">Entertainment: Musicals & Theatres</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={14}
              id="14"
            />
            <label for="14">Entertainment: Television</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={15}
              id="15"
            />
            <label for="15">Entertainment: Video Games</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={16}
              id="16"
            />
            <label for="16">Entertainment: Board Games</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={17}
              id="17"
            />
            <label for="17">Science & Nature</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={18}
              id="18"
            />
            <label for="18">Science: Computers</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={19}
              id="19"
            />
            <label for="19">Science: Mathematics</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={20}
              id="20"
            />
            <label for="20">Mythology</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={21}
              id="21"
            />
            <label for="21">Sports</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={22}
              id="22"
            />
            <label for="22">Geography</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={23}
              id="23"
            />
            <label for="23">History</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={24}
              id="24"
            />
            <label for="24">Politics</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={25}
              id="25"
            />
            <label for="25">Art</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={26}
              id="26"
            />
            <label for="26">Celebrities</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={27}
              id="27"
            />
            <label for="27">Animals</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={28}
              id="28"
            />
            <label for="28">Vehicles</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={29}
              id="29"
            />
            <label for="29">Entertainment: Comics</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={30}
              id="30"
            />
            <label for="30">Science: Gadgets</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={31}
              id="31"
            />
            <label for="31">Entertainment: Japanese Anime & Manga</label>
          </div>
          <div>
            <input
              type="radio"
              on:change={selectCategory}
              name="options"
              value={32}
              id="32"
            />
            <label for="32">Entertainment: Cartoon & Animations</label>
          </div>
        </div>
      </div>
    </div>

    <div class="help">
      <h3>Help</h3>
      Red answers are wrong. Green answers are right. The app will try not to give
      you the same question twice but its also dumb.
    </div>
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
  .refreshing::before {
    background-color: yellow;
    content: "🔄";
    /* rotating */
  }
  .refreshing {
    background-color: yellow;
  }
  .hidden {
    display: none;
  }

  .help {
    white-space: pre-wrap;
  }

  .categories {
    /* align left */
    text-align: left;
  }
</style>
