<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
  const hero = 
  { 
  logo : './image/logo-mbti-web.png',
  }
  // ==== ARRAY GAMBAR (tinggal isi) ====
  export let images = [
  "/image/dashboard1.jpg",
  "/image/dashboard2.jpg",
  "/image/dashboard3.jpg",
  "/image/dashboard4.jpg",
  ];

  let current = 0;
  let fading = false;

  onMount(() => {
  const interval = setInterval(() => {
    fading = true;
    setTimeout(() => {
    current = (current + 1) % images.length;
    fading = false;
    }, 400);
  }, 3000);

  return () => clearInterval(interval);
  });

  const types = [
  { text: "INTJ", color: "bg-purple-600 text-white" },
  { text: "ENFP", color: "bg-green-400 text-white" },
  { text: "ISTJ", color: "bg-blue-500 text-white" },
  { text: "ISTP", color: "bg-yellow-600 text-white" }
  ];

  let open = false;

  let track: HTMLDivElement;

  const cards = [
  { src: "./image/mbti-illustration/INTJ.png", label: "INTJ" },
  { src: "./image/mbti-illustration/ENFP.png", label: "ENFP" },
  { src: "./image/mbti-illustration/ISTJ.png", label: "ISTJ" },
  { src: "./image/mbti-illustration/ISTP.png", label: "ISTP" }
  ];

  let index = 0;
  const delay = 1500;
  let intervalId: ReturnType<typeof setInterval>;

  const moveCarousel = () => {
  index = (index + 1) % cards.length;
  if (track) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }
  };

  onMount(() => {
  intervalId = setInterval(moveCarousel, delay);
  });

  onDestroy(() => clearInterval(intervalId));
</script>

<!-- Navbar -->
<div class="w-full px-4 pt-1 md:p-5 space-y-8">
<nav class="navbar will-change-transform px-6 md:px-10 w-full rounded-lg py-3 flex items-center justify-between outline mt-2 outline-black shadow-md hover:shadow-yellow-700 duration-300 bg-white">
  
  <!-- Logo -->
  <div>
    <img src={hero.logo} class="h-10 md:h-12 w-auto" alt="MBTI Logo" />
  </div>

  <!-- Desktop Menu -->
  <div class="hidden md:flex justify-center gap-6 items-center">
    <a href="/test" class="font-semibold text-accent hover:text-yellow-800 duration-300">Personality Test</a>
    <a href="/types" class="font-semibold text-accent hover:text-yellow-800 duration-300">Personality Type</a>
    <a href="/theory" class="font-semibold text-accent hover:text-yellow-800 duration-300">Science Behind</a>
    <a href="#label" class="font-semibold text-accent hover:text-yellow-800 duration-300">The Journey</a>
  </div>

  <!-- Desktop Action Buttons -->
  <div class="hidden md:flex items-center gap-3">
    <a href="/test">
      <button class="btn border-black text-black items-center hover:btn-primary hover:text-yellow-300 hover:shadow-yellow-700 hover:shadow-md">
        Try Test
      </button>
    </a>
  </div>

  <!-- Mobile Hamburger -->
  <button aria-label="button"
    class="md:hidden flex items-center p-2 rounded-lg hover:bg-gray-100 duration-200"
    on:click={() => (open = !open)}
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</nav>

<!-- Mobile Dropdown -->
{#if open}
  <div class="md:hidden mt-2 rounded-xl shadow-md outline hover:shadow-yellow-700 outline-black bg-white px-6 py-4 space-y-4">
    
    <!-- Menu Items -->
    <div class="flex flex-col gap-4">
      <a href="/test" class="font-semibold text-accent hover:text-yellow-600 duration-200">Personality Test</a>
      <a href="/types" class="font-semibold text-accent hover:text-yellow-600 duration-200">Personality Type</a>
      <a href="/theory" class="font-semibold text-accent hover:text-yellow-600 duration-200">Science Behind</a>
      <a href="#label" class="font-semibold text-accent hover:text-yellow-600 duration-200">The Journey</a>
    </div>

    <!-- Actions -->
    <div class="flex flex-col gap-3 pt-4">
      <a href="/test">
        <button class="btn border-black text-black items-center hover:btn-primary hover:text-yellow-300 hover:shadow-yellow-600 hover:shadow-md">
          Try Test
        </button>
      </a>
    </div>
  </div>
{/if}

<!-- HERO (Responsiveness improved) -->
<div class="px-4 py-15 w-full">
  <section 
  class="flex items-center justify-between gap-4 md:gap-8"
  style="
    transform: scale(clamp(0.75, 100vw / 950, 1));
    transform-origin: top left;
    width: 100%;
  "
  >

  <!-- TEKS -->
  <div 
    class="flex flex-col justify-center items-start space-y-6"
    style="min-width: 210px; width: clamp(240px, 50vw, 460px);"
  >
    <h1 class="text-3xl sm:text-4xl font-black text-black leading-tight">
    MBTI-mu adalah 
    <span
      class="px-2 py-1 rounded-md transition-all duration-500"
      class:bg-purple-600="{types[index].color.includes('bg-purple-600')}"
      class:bg-green-400="{types[index].color.includes('bg-green-400')}"
      class:bg-blue-500="{types[index].color.includes('bg-blue-500')}"
      class:bg-yellow-600="{types[index].color.includes('bg-yellow-600')}"
      class:text-white="{types[index].color.includes('text-white')}"
    >
      {types[index].text}
    </span>
    </h1>

    <p class="text-base sm:text-lg text-gray-700">
    Semua orang punya cerita unik tentang dirinya sendiri. Yuk, jelajahi ceritamu—tanpa ribet, gratis, dan pastinya bikin kamu lebih kenal diri sendiri!
    </p>

    <button class="btn btn-lg bg-black text-white rounded-xl hover:opacity-80">
    Mulai Tes Sekarang
    </button>
  </div>

  <!-- CARD CAROUSEL -->
  <div 
    class="rounded-xl shadow-lg shadow-black overflow-hidden"
    style="min-width: 140px; width: clamp(140px, 32vw, 280px); aspect-ratio: 3/4;"
  >
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

  </section>
</div>

<section class="w-full px-5 py-20">
  <div class="flex items-center w-full mb-9">
    <div class="flex-1 border-t-2 border-black"></div>
    <h2 class="text-3xl uppercase helvetica font-black text-black text-right whitespace-nowrap px-4">
		FITUR UNGGULAN
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    <div class="group relative p-6 rounded-2xl shadow-md shadow-black transition-all h-50 duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-xl">
      <div class="absolute inset-0 bg-cover bg-center scale-110 transition-all duration-500 group-hover:scale-[1.25]" style="background-image: url('/image/lini-ungu.png')"></div>
      <div class="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40"></div>
      <div class="relative z-10 flex justify-center items-center h-full w-full transition-all duration-300 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 class="text-2xl font-black text-black poppins text-shadow-sm text-shadow-purple-400">Akurasi Tinggi</h3>
      </div>
    </div>

    <div class="group relative p-6 rounded-2xl shadow-md shadow-black transition-all h-50 duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-xl">
      <div class="absolute inset-0 bg-cover bg-center scale-110 transition-all duration-500 group-hover:scale-[1.25]" style="background-image: url('/image/lini-kuning.png')"></div>
      <div class="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40"></div>
      <div class="relative z-10 flex justify-center items-center h-full w-full transition-all duration-300 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 class="text-2xl font-black text-black text-shadow-sm text-shadow-yellow-400 poppins">Gratis Sepenuhnya</h3>
      </div>
    </div>

    <div class="group relative p-6 rounded-2xl h-50 shadow-md shadow-black transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-xl">
      <div class="absolute inset-0 bg-cover bg-center scale-110 transition-all duration-500 group-hover:scale-[1.25]" style="background-image: url('/image/lini-biru.png')"></div>
      <div class="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40"></div>
      <div class="relative z-10 flex justify-center items-center h-full w-full transition-all duration-300 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 class="text-2xl font-black text-black text-shadow-sm text-shadow-blue-400 poppins">Ilustrasi Relateable</h3>
      </div>
    </div>

    <div class="group relative p-6 rounded-2xl shadow-md shadow-black transition-all h-50 duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-xl">
      <div class="absolute inset-0 bg-cover bg-center scale-110 transition-all duration-500 group-hover:scale-[1.25]" style="background-image: url('/image/lini-hijau.png')"></div>
      <div class="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40"></div>
      <div class="relative z-10 flex justify-center items-center h-full w-full transition-all duration-300 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 class="text-2xl font-black text-black text-shadow-sm text-shadow-green-400 poppins">Penjelasan Mudah</h3>
      </div>
    </div>
  </div>

  <div class="flex items-center w-full mt-9">
    <h2 class="text-3xl uppercase helvetica font-black text-black text-left whitespace-nowrap px-4">FITUR UNGGULAN</h2>
    <div class="flex-1 border-t-2 border-black"></div>
  </div>
</section>

<div class=" w-full pt-1">
  <section class="w-full py-20 px-5">
		<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
			<div class="text-left md:pr-10">
				<h2 class="text-3xl text-black font-bold mb-4">Personality Types</h2>
				<p class="text-gray-600 mb-6">Setiap tipe punya cara unik dalam berpikir, merasakan, dan menghadapi dunia. Temukan karakteristik lengkap dari semua 16 tipe MBTI.</p>
				<button class="btn btn-primary">Lihat Semua Tipe</button>
			</div>

			<div class="relative mx-auto w-full max-w-sm aspect-3/4 rounded-xl overflow-hidden shadow-lg">
				{#each images as img, i}
					<img src={img} alt="" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 {current === i ? 'opacity-100' : 'opacity-0'}" />
				{/each}
			</div>

			<div class="text-right md:pl-10">
				<h2 class="text-3xl text-black font-bold mb-4">Science Behind</h2>
				<p class="text-gray-600 mb-6">Pelajari dasar psikologi di balik MBTI dan bagaimana hasil tes mencerminkan preferensi otakmu dalam menyerap info.</p>
				<button class="btn btn-secondary">Pelajari Lebih Dalam</button>
			</div>

		</div>
  </section>
</div>
</div>
<style>
	@keyframes scroll {
		0% { transform: translateX(0); }
		100% { transform: translateX(-50%); }
	}
	.opacity-0 { opacity: 0; }
  .opacity-100 { opacity: 1; }
</style>