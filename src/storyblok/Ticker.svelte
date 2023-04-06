<script>
  import Marquee from "svelte-fast-marquee";
  import { renderRichText } from "@storyblok/svelte";
  let play = true;
  export let blok;
  $: headlineText = renderRichText(blok.headline);
</script>

<Marquee pauseOnHover={true} speed={blok.speed} direction="right" {play}>
  {#each Array(blok.replicate / 1) as _}
    <div class="text-lg mx-12 font-light tracking-wide overflow-hidden">
      <a href={blok.link.cached_url}>
        {@html headlineText}
      </a>
    </div>
  {/each}
</Marquee>
<!-- <script>
  import { storyblokEditable, renderRichText } from "@storyblok/svelte";
  import Marquee from "svelte-fast-marquee";
  let play = true;
  export let blok;
  $: renderedRichText = renderRichText(blok.headline);
</script>

<div use:storyblokEditable={blok}>
  <Marquee pauseOnHover={true} speed={blok.speed} direction="right" {play}>
    {#each Array(blok.replicate / 1) as _}
      <div class="text-lg mx-12 font-light tracking-wide overflow-hidden">
        <a href={blok.link.cached_url}>
          <span>{@html renderedRichText}</span>
        </a>
      </div>
    {/each}
  </Marquee>
</div> -->
