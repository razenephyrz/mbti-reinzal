<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  let track: HTMLDivElement;

  const cards = [
    { src: "./image/mbti-illustration/ENTJ.png", label: "ENTJ" },
    { src: "./image/mbti-illustration/INTJ.png", label: "INTJ" },
    { src: "./image/mbti-illustration/INTP.png", label: "INTP" },
    { src: "./image/mbti-illustration/ENTP.png", label: "ENTP" }
  ];

  let index = 0;
  const delay = 2500;
  let intervalId: ReturnType<typeof setInterval>;

  const moveCarousel = () => {
    index = (index + 1) % cards.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  onMount(() => {
    intervalId = setInterval(moveCarousel, delay);
  });

  onDestroy(() => clearInterval(intervalId));
</script>

<div class="max-w-72 w-full aspect-[3/4] relative overflow-hidden rounded-xl shadow-lg shadow-black">
  <div
    bind:this={track}
    class="h-full flex transition-transform duration-700 ease-in-out"
  >
    {#each cards as item}
      <div class="relative w-full h-full shrink-0">
        <img 
          src={item.src} 
          alt={item.label}
          class="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    {/each}
  </div>
</div>
