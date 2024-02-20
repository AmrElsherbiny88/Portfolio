<script>
  import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
  import {LightSwitch} from "@skeletonlabs/skeleton";
  import { goto } from "$app/navigation";
  import { AppBar } from '@skeletonlabs/skeleton';

  import { page } from '$app/stores';  

</script>
 
<section class="w-full card navv  ">
    <TabGroup justify="justify-center">
      <button class:active={$page.url.pathname==="/" } on:click={()=> ( goto('/'))} class=' my-4  px-3  mx-1'>Home</button>
       <button class:active={$page.url.pathname==="/AboutMe"} on:click={()=> (  goto('/AboutMe'))} class=' my-4  px-3  mx-1'>AboutMe</button>
       <button class:active={$page.url.pathname==="/Skills"} on:click={()=> ( goto("/Skills"))} class='my-4  px-3 mx-1' >Skills</button>
       <button class:active={$page.url.pathname==="/Projects"} on:click={()=> ( goto("/Projects"))} class='my-4  px-3 mx-1 '  >Projects</button>
       <LightSwitch class=" mx-3 my-5 " />
    </TabGroup>
</section>



<style>
 
    .active {
  @apply variant-filled-primary mt-5 rounded-md;
  }
</style>