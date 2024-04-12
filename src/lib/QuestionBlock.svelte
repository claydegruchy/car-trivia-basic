<script>
  export let question;

  function decodeHTMLEntities(text) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    const v = textarea.value;
    textarea.remove();
    return v;
  }
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
    <div class="answer correct">
      {decodeHTMLEntities(question.correct_answer)}
    </div>
    {#each question.incorrect_answers as answer, index}
      <div class="answer incorrect">
        {decodeHTMLEntities(answer)}
      </div>
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
