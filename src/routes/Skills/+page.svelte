<script>
  import {ProgressRadial} from "@skeletonlabs/skeleton";
  import FaCss3 from "svelte-icons/fa/FaCss3.svelte";
</script>

<h1 class="titlee h1 text-center mt-5 uppercase">My Skills</h1>

<div
  class="grid xl:grid-cols-3 text-center justify-items-center mt-5 grid-cols-2"
>
  <ProgressRadial class="mt-5" stroke={60} meter="stroke-orange-500" value="100"
    >HTML
  </ProgressRadial>
  <ProgressRadial class="mt-5" stroke={60} meter="stroke-blue-500" value="100"
    >css
  </ProgressRadial>
  <ProgressRadial class="mt-5" stroke={60} meter="stroke-yellow-500" value="100"
    >Javascript
  </ProgressRadial>
  <ProgressRadial class="mt-5" stroke={60} meter="stroke-blue-700" value="100"
    >React js
  </ProgressRadial>
  <ProgressRadial class="mt-5" stroke={60} meter="stroke-slate-500" value="100"
    >Next js
  </ProgressRadial>
  <ProgressRadial class="mt-5" stroke={60} meter="stroke-orange-700" value="100"
    >Svelte
  </ProgressRadial>
  <ProgressRadial class="mt-5" stroke={60} meter="stroke-orange-700" value="100"
    >SvelteKit
  </ProgressRadial>
  <ProgressRadial class="mt-5" stroke={60} meter="stroke-slate-400" value="100"
    >Skeleton</ProgressRadial
  >
  <ProgressRadial class="mt-5" stroke={60} meter="stroke-purple-600" value="100"
    >Bootstrap
  </ProgressRadial>
  <ProgressRadial class="mt-5" stroke={60} meter="stroke-blue-700" value="100"
    >MDB
  </ProgressRadial>
  <ProgressRadial class="mt-5" stroke={60} meter="stroke-blue-500" value="100"
    >Tailwind css
  </ProgressRadial>
</div>

<style>
</style>
