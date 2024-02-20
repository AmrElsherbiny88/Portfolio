<script>
	  
	   import Contact from "../../lib/contact.svelte";
	import { goto } from '$app/navigation';
  import MyImage from '$lib/assets/amr.jpg'
  import { Avatar, CodeBlock } from '@skeletonlabs/skeleton';
  import { Stepper, Step } from '@skeletonlabs/skeleton';
  let classdiv = "hidden"
  function onCompleteHandler(e) {
		classdiv = "block"
	}
    

	
</script>


<h1 class="title h1 text-center mt-5 uppercase">About Me</h1>


 <Stepper on:complete={onCompleteHandler} class="text-center p-5 mt-5">
	<Step>
		<svelte:fragment slot="header">Who are you?</svelte:fragment>
		<h2 class="h4">My name is Amr El-Sherbiny, 18 years old and a talented programmer</h2>
	</Step>
	<Step>
		<svelte:fragment slot="header">What do you do</svelte:fragment>
		<h2 class="h4">I am a front and developer</h2>
	</Step>
    <Step>
		<svelte:fragment slot="header">What are your advantages?</svelte:fragment>
		<h2 class="h4">I can learn quickly and the websites I program are perfect. I can do anything in a short time and with high accuracy</h2>
	</Step>
    <Step>
		<svelte:fragment slot="header">why you?</svelte:fragment>
		<h2 class="h4">Because I work in multiple languages ​​and frameworks and am proficient in them, I can do anything you want easily</h2>
	</Step>
    <Step>
		<svelte:fragment slot="header"> how can I contact you ?</svelte:fragment>
		<Contact />
	</Step>
   
	<!-- ... -->
</Stepper>

<div class="p-5">
	<div class="card  card-hover {classdiv}" >
		<h1 class="h3 text-center mt-5">Congratulations, now you know enough information about the greatest programmer <br> Then go to my skills page to know more</h1>
	</div>
</div>



<style>
    .Hero-image {
        height: 300px;
    }
</style>