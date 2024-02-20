<script>
    import FaWhatsapp from 'svelte-icons/fa/FaWhatsapp.svelte'
    import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
    import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte'
    import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte'
</script>

<div class="grid grid-cols-4 text-center justify-items-center mt-5">
    <a href="https://www.facebook.com/profile.php?id=100085240531782&mibextid=ZbWKwL">
        <button class="face-icon">
            <FaFacebook />
        </button>
    </a>
 
    <a href="https://github.com/AmrElsherbiny88">
        <button class="face-icon">
            <FaGithub />
        </button>
    </a>
  
    <a href="https://www.linkedin.com/in/amr-elsherbiny-197a63277?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdtOWpz2dTHScFZ3KWos6lQ%3D%3D">
        <button class="face-icon">
            <FaLinkedin />
        </button>
    </a>
   
    <a href="https://wa.me/201101761785?">
        <button class="face-icon">
            <FaWhatsapp />
        </button>
    </a>
  
 
</div>

<style>
    .face-icon {
      width: 50px;
      height: 50px;
    }
</style>