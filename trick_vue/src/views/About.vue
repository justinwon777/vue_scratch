<template>
  <div class="container mt-3">
    <h4 class="h-info">Intro</h4>
      <p>
          The goal of this website is to help trickers create combos. There are two tools available: the combo generator and combo builder. Both of these use an algorithm to help make combos by determining possible trick combinations that make logical sense, so it's not just randomly picking tricks and putting them together.
      </p>
      <h4>Who Is This For?</h4>
      <ul>
          <li>You think you can't make combos, because you only know a few tricks. The generator will show you that there's a lot of variety even with a small number of tricks.</li>
          <li>You want to know how to combo a certain trick. Use the builder to see what you can do into and out of the trick, or use the generator and put it as a starting/finishing trick.</li>
          <li>You want to try new combos, but can't think of any. Use the generator or builder.</li>
          <li>You want to upgrade or variate a combo you already do. Put it in the generator and regenerate certain parts of it.</li>
          <li>Tip: Make an account to save trick sets and combos</li>
      </ul>
      <h4>Some Things To Note</h4>
      <ul>
          <li>Perhaps in theory, every trick can be followed by another, but the algorithm aims to create combos that seem more "possible", so there are some constraints. Still, even with them, the algorithm can make crazy combos.</li>
          <li>Terminology can be a controversial topic. I mostly followed the information in Loopkick's tricktionary and a bit from other resources. I'm not an expert and terminology has changed over time. My terminology won't perfectly fit your terminology. The list of tricks, stances, and transitions on here represent just a subset of all possibilities.</li>
          <li>I tried to not only follow technically correct terminology, but also conventions I've seen from personal experience in my training and online. For example, no one says "complete" when talking about combos, so that word is just taken out of the combos, but you can still see them with the full combo option.</li>
          <li>This isn't meant to be a tricktionary. If there are terms you don't know, check one of the tricktionaries at the bottom of the home page to learn about them.</li>
      </ul>
      <h4>About Me</h4>
      <p>
          This was created by me, Justin! I wanted a tool to help give me more combo varieties with tricks I already know, so I made this for fun and then decided to turn it into a website.
      </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h4 {
    padding-bottom: 8px;
    display: inline-block;
    width: auto;
    border-bottom: 4px var(--primary) solid;
    font-family: "Roboto Condensed", serif;
}
</style>