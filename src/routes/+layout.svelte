<script>
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

  injectSpeedInsights();
  import Navbar from "./../lib/Navbar.svelte";
  import "../app.postcss";
</script>


<Navbar />

<slot />
