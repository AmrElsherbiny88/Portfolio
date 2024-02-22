<script>
  import Contact from "../../lib/contact.svelte";
  import {Stepper, Step} from "@skeletonlabs/skeleton";
  let classdiv = "hidden";
  function onCompleteHandler(e) {
    classdiv = "block";
  }
</script>

<h1 class="title h1 text-center mt-5 uppercase">About Me</h1>

<Stepper on:complete={onCompleteHandler} class="text-center p-5 mt-5">
  <Step>
    <svelte:fragment slot="header">Who are you?</svelte:fragment>
    <h2 class="h4">
      My name is Amr El-Sherbiny, an 18-year-old, talented programmer. I am
      enthusiastic about creating innovative solutions and exploring new
      technologies. My portfolio showcases a range of projects that demonstrate
      my skills in programming, problem-solving, and creativity. I am committed
      to continuous learning and growth in the field of software development.
    </h2>
  </Step>
  <Step>
    <svelte:fragment slot="header">What do you do</svelte:fragment>
    <h2 class="h4">I am a frontend developer</h2>
  </Step>
  <Step>
    <svelte:fragment slot="header">What are your advantages?</svelte:fragment>
    <h2 class="h4">
      I possess a remarkable ability to quickly acquire new skills and develop
      flawless websites. My efficiency and accuracy enable me to accomplish
      tasks promptly while maintaining the highest standards of quality. I take
      pride in my capacity to deliver exceptional results within tight
      deadlines, ensuring that every project I undertake is executed to
      perfection.
    </h2>
  </Step>
  <Step>
    <svelte:fragment slot="header">why you?</svelte:fragment>
    <h2 class="h4">
      My proficiency in various programming languages and frameworks enables me
      to seamlessly tackle a wide range of tasks. This versatility allows me to
      adapt to any project requirements with ease, ensuring that I can meet your
      needs effectively and efficiently. My portfolio demonstrates my ability to
      work across different technologies, showcasing my dedication to delivering
      high-quality solutions regardless of the complexity of the project.
    </h2>
  </Step>
  <Step>
    <svelte:fragment slot="header">how can I contact you ?</svelte:fragment>
    <Contact />
  </Step>

  <!-- ... -->
</Stepper>

<div class="p-5">
  <div class="card card-hover {classdiv}">
    <h1 class="h3 text-center mt-5">
      Congratulations, now you know enough informations about the greatest
      programmer <br /> Then go to my skills page to know more
    </h1>
  </div>
</div>

<style>
  .Hero-image {
    height: 300px;
  }
</style>
