<script>
  export let question;

  function decodeHTMLEntities(text) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    const v = textarea.value;
    textarea.remove();
    return v;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let answers = [...question.incorrect_answers, ">" + question.correct_answer];
  shuffleArray(answers);
  console.log(question);
</script>

<div class="unit">
  <div class="difficulty">
    <div class={question.difficulty}>{question.difficulty}</div>
  </div>
  <div>
    <div class="category">
      {decodeHTMLEntities(question.category)}
    </div>
  </div>
  <div class="question">
    <div class="question-text">{decodeHTMLEntities(question.question)}</div>
  </div>
  <div class="answers">
    <!-- <div class="answer correct">
      {decodeHTMLEntities(question.correct_answer)}
    </div>
    {#each answers as answer, index}
      <div class="answer">
        {decodeHTMLEntities(answer)}
      </div>
    {/each} -->

    {#each answers as answer, index}
      {#if answer.startsWith(">")}
        <div class="answer correct">
          {decodeHTMLEntities(answer)}
        </div>
      {:else}
        <div class="answer incorrect">
          {decodeHTMLEntities(answer)}
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .unit {
    border: 2px solid black;
    padding: 1em;
    margin: 1em;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    flex-direction: column;
  }

  /* put a box around each answer, make wrong answers red and correct ones green */
  .question {
    margin: 1rem 0;
  }
  .answers {
    display: flex;
    flex-wrap: wrap;
  }
  .answer {
    padding: 0.5rem;
    margin: 0.5rem;
    border: 1px solid black;
    border-radius: 0.5rem;
  }
  .answer:nth-child(odd) {
    background-color: #f0f0f0;
  }
  .answer:nth-child(even) {
    background-color: #e0e0e0;
  }

  .answer.correct {
    background-color: lightgreen;
  }
  .answer.incorrect {
    background-color: lightcoral;
  }

  .difficulty * {
    border-radius: 10px;
  }

  .difficulty > .hard {
    background-color: rgb(255, 205, 205);
  }
  .difficulty > .medium {
    background-color: rgb(252, 255, 228);
  }
  .difficulty > .easy {
    background-color: rgb(206, 255, 208);
  }
</style>
