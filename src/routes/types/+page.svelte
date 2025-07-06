<script lang="ts">
    import { onMount } from "svelte";
    export let imageUrl: string;

   onMount(() => {
// Ungu Inter
     const unguLine = [
        '.ungu-1',
        '.ungu-2',
        '.ungu-3',
        '.ungu-4',
    ]

    unguLine.forEach((selector,index) => {
        const el = document.querySelector(selector);
        if (el) {
            el.style.opacity = 0;
            el.style.transform = 'translateX(60px)';
            el.style.transition = 'all 0.6s ease';
        }
    })

    const observerA = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const index = unguLine.findIndex(selector => document.querySelector(selector) === entry.target);
            if (entry.isIntersecting) {
                setTimeout(() => {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
                }, 100 + index * 100)
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateX(60px)';
            }
        })
    })
unguLine.forEach((selector, index) => {
    const el = document.querySelector(selector);
    if (el) observerA.observe(el)
})

//Hijau Inter
 const hijauLine = [
        '.hijau-1',
        '.hijau-2',
        '.hijau-3',
        '.hijau-4',
    ]

    hijauLine.forEach((selector,index) => {
        const el = document.querySelector(selector);
        if (el) {
            el.style.opacity = 0;
            el.style.transform = 'translateX(-60px)';
            el.style.transition = 'all 0.6s ease';
        }
    })

    const observerB = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const index = hijauLine.findIndex(selector => document.querySelector(selector) === entry.target);
            if (entry.isIntersecting) {
                setTimeout(() => {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
                }, 100 + index * 100)
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateX(-60px)';
            }
        })
    })
hijauLine.forEach((selector, index) => {
    const el = document.querySelector(selector);
    if (el) observerB.observe(el)
})
// Biru Inter
 const biruLine = [
        '.biru-1',
        '.biru-2',
        '.biru-3',
        '.biru-4',
    ]

    biruLine.forEach((selector,index) => {
        const el = document.querySelector(selector);
        if (el) {
            el.style.opacity = 0;
            el.style.transform = 'translateX(60px)';
            el.style.transition = 'all 0.6s ease';
        }
    })

    const observerC = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const index = biruLine.findIndex(selector => document.querySelector(selector) === entry.target);
            if (entry.isIntersecting) {
                setTimeout(() => {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
                }, 100 + index * 100)
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateX(60px)';
            }
        })
    })
biruLine.forEach((selector, index) => {
    const el = document.querySelector(selector);
    if (el) observerC.observe(el)
})
// Oren Inter
 const orenLine = [
        '.oren-1',
        '.oren-2',
        '.oren-3',
        '.oren-4',
    ]

    orenLine.forEach((selector,index) => {
        const el = document.querySelector(selector);
        if (el) {
            el.style.opacity = 0;
            el.style.transform = 'translateX(-60px)';
            el.style.transition = 'all 0.6s ease';
        }
    })

    const observerD = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const index = orenLine.findIndex(selector => document.querySelector(selector) === entry.target);
            if (entry.isIntersecting) {
                setTimeout(() => {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
                }, 100 + index * 100)
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateX(-60px)';
            }
        })
    })
orenLine.forEach((selector, index) => {
    const el = document.querySelector(selector);
    if (el) observerD.observe(el)
})
   })
</script>
<div class="navbar will-change-transform px-10 w-7xl rounded-lg py-2 mt-6 flex justify-between outline outline-black shadow-md hover:shadow-pink-800 duration-300 mb-24">
    <div>
        <img src="./image/logo-mbti-web.png" class="h-12 w-auto" alt="">
    </div>
    <div class="flex justify-center gap-5 items-center">
        <a href="#label" aria-label="anjay" class="font-semibold text-accent hover:text-pink-800 duration-300">Personality Test</a>
        <a href="#label" aria-label="anjay" class="font-semibold text-accent hover:text-pink-800 duration-300">Personality Type</a>
        <a href="#label" aria-label="anjay" class="font-semibold text-accent hover:text-pink-800 duration-300">Science Behind</a>
        <a href="#label" aria-label="anjay" class="font-semibold text-accent hover:text-pink-800 duration-300">The Journey</a>
    </div>
    <div class="flex items-center gap-3 ">
        <a href="#kanjau" class="font-semibold text-md text-primary">Login</a>
        <button class=" btn border-black text-black items-center mt-1 hover:btn-primary hover:text-primary-content">Try Test</button>
    </div>
</div>
<h1 class="text-center text-5xl tracking-widest font-black text-pink-800">THE ANALYST</h1>
<section class="flex justify-evenly w-full my-12 gap-4 flex-wrap">
  <!-- Kartu 1 -->
  <div class=" hover:shadow-xl hover:shadow-pink-800 ungu-1 group aspect-[3/4] w-72 relative rounded-lg overflow-hidden border border-black shadow-md bg-white">
    <img src="./image/mbti-illustration/ENTJ.png" alt="card" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p class="text-pink-600 tracking-wide text-lg font-semibold">ENTJ</p>
    </div>
    <div class="absolute top-2 left-2 flex flex-col items-center text-pink-800 w-6 drop-shadow-md">
      <svg class="w-full h-auto" viewBox="0 0 20 20" fill="currentColor">
        <text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">A</text>
      </svg>
      <svg class="w-full h-auto mt-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
                 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 
                 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 
                 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </div>
  </div>

  <!-- Kartu 2 -->
  <div class=" hover:shadow-xl hover:shadow-pink-800 ungu-2 group aspect-[3/4] w-72 relative rounded-lg overflow-hidden border border-black shadow-md bg-white">
    <img src="./image/mbti-illustration/INTJ.png" alt="card" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p class="text-pink-600 tracking-wide text-lg font-semibold">INTJ</p>
    </div>
    <div class="absolute top-2 right-2 flex flex-col items-center text-pink-800 w-6 drop-shadow-md">
      <svg class="w-full h-auto" viewBox="0 0 20 20" fill="currentColor">
        <text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">K</text>
      </svg>
      <svg class="w-full h-auto mt-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
                 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 
                 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 
                 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </div>
  </div>

  <!-- Kartu 3 -->
  <div class=" hover:shadow-xl hover:shadow-pink-800 ungu-3 group aspect-[3/4] w-72 relative rounded-lg overflow-hidden border border-black shadow-md bg-white">
    <img src="./image/mbti-illustration/INTP.png" alt="card" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p class="text-pink-600 tracking-wide text-lg font-semibold">INTP</p>
    </div>
    <div class="absolute top-2 right-2 flex flex-col items-center text-pink-800 w-6 drop-shadow-md">
      <svg class="w-full h-auto" viewBox="0 0 20 20" fill="currentColor">
        <text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">Q</text>
      </svg>
      <svg class="w-full h-auto mt-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
                 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 
                 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 
                 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </div>
  </div>

  <!-- Kartu 4 -->
  <div class=" hover:shadow-xl hover:shadow-pink-800 ungu-4 group aspect-[3/4] w-72 relative rounded-lg overflow-hidden border border-black shadow-md bg-white">
    <img src="./image/mbti-illustration/ENTP.png" alt="card" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p class="text-pink-600 tracking-wide text-lg font-semibold">ENTP</p>
    </div>
    <div class="absolute top-2 left-2 flex flex-col items-center text-pink-800 w-6 drop-shadow-md">
      <svg class="w-full h-auto" viewBox="0 0 20 20" fill="currentColor">
        <text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">J</text>
      </svg>
      <svg class="w-full h-auto mt-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
                 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 
                 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 
                 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </div>
  </div>
</section>
<!-- Bagian Ijo -->
<h1 class="text-center text-5xl tracking-widest font-black text-green-600">THE DIPLOMATS</h1>
<section class="flex justify-evenly w-full my-12 gap-4 flex-wrap">
  <!-- Kartu 1 -->
  <div class=" hover:shadow-xl hover:shadow-green-700 hijau-1 group aspect-[3/4] w-72 relative rounded-lg overflow-hidden border border-black shadow-md bg-white">
    <img src="./image/mbti-illustration/ENFJ.png" alt="card" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p class="text-green-200 tracking-wide text-lg font-semibold">ENFJ</p>
    </div>
    <div class="absolute top-2 left-2 flex flex-col items-center text-green-700 w-6 drop-shadow-md">
      <svg class="w-full h-auto" viewBox="0 0 20 20" fill="currentColor">
        <text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">A</text>
      </svg>
      <svg class="w-full h-auto mt-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C10.34 2 9 3.34 9 5c0 .35.06.69.18 1.01C8.14 6.4 7 7.57 7 9c0 1.66 1.34 3 3 3 
                 .26 0 .52-.03.77-.1L9.58 13H8c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2h-1.58
                 l-1.19-1.1c.25.07.51.1.77.1 1.66 0 3-1.34 3-3 
                 0-1.43-1.14-2.6-2.18-2.99.12-.32.18-.66.18-1.01 
                 0-1.66-1.34-3-3-3z"/>
      </svg>
    </div>
  </div>

  <!-- Kartu 2 -->
  <div class=" hover:shadow-xl hover:shadow-green-700 hijau-2 group aspect-[3/4] w-72 relative rounded-lg overflow-hidden border border-black shadow-md bg-white">
    <img src="./image/mbti-illustration/INFJ.png" alt="card" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p class="text-green-200 tracking-wide text-lg font-semibold">INFJ</p>
    </div>
    <div class="absolute top-2 right-2 flex flex-col items-center text-green-700 w-6 drop-shadow-md">
      <svg class="w-full h-auto" viewBox="0 0 20 20" fill="currentColor">
        <text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">K</text>
      </svg>
      <svg class="w-full h-auto mt-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C10.34 2 9 3.34 9 5c0 .35.06.69.18 1.01C8.14 6.4 7 7.57 7 9c0 1.66 1.34 3 3 3 
                 .26 0 .52-.03.77-.1L9.58 13H8c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2h-1.58
                 l-1.19-1.1c.25.07.51.1.77.1 1.66 0 3-1.34 3-3 
                 0-1.43-1.14-2.6-2.18-2.99.12-.32.18-.66.18-1.01 
                 0-1.66-1.34-3-3-3z"/>
      </svg>
    </div>
  </div>

  <!-- Kartu 3 -->
  <div class=" hover:shadow-xl hover:shadow-green-700 hijau-3 group aspect-[3/4] w-72 relative rounded-lg overflow-hidden border border-black shadow-md bg-white">
    <img src="./image/mbti-illustration/ENFP.png" alt="card" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p class="text-green-200 tracking-wide text-lg font-semibold">ENFP</p>
    </div>
    <div class="absolute top-2 right-2 flex flex-col items-center text-green-700 w-6 drop-shadow-md">
      <svg class="w-full h-auto" viewBox="0 0 20 20" fill="currentColor">
        <text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">Q</text>
      </svg>
      <svg class="w-full h-auto mt-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C10.34 2 9 3.34 9 5c0 .35.06.69.18 1.01C8.14 6.4 7 7.57 7 9c0 1.66 1.34 3 3 3 
                 .26 0 .52-.03.77-.1L9.58 13H8c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2h-1.58
                 l-1.19-1.1c.25.07.51.1.77.1 1.66 0 3-1.34 3-3 
                 0-1.43-1.14-2.6-2.18-2.99.12-.32.18-.66.18-1.01 
                 0-1.66-1.34-3-3-3z"/>
      </svg>
    </div>
  </div>

  <!-- Kartu 4 -->
  <div class=" hover:shadow-xl hover:shadow-green-700 hijau-4 group aspect-[3/4] w-72 relative rounded-lg overflow-hidden border border-black shadow-md bg-white">
    <img src="./image/mbti-illustration/INFP.png" alt="card" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p class="text-green-200 tracking-wide text-lg font-semibold">INFP</p>
    </div>
    <div class="absolute top-2 left-2 flex flex-col items-center text-green-700 w-6 drop-shadow-md">
      <svg class="w-full h-auto" viewBox="0 0 20 20" fill="currentColor">
        <text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">J</text>
      </svg>
      <svg class="w-full h-auto mt-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C10.34 2 9 3.34 9 5c0 .35.06.69.18 1.01C8.14 6.4 7 7.57 7 9c0 1.66 1.34 3 3 3 
                 .26 0 .52-.03.77-.1L9.58 13H8c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2h-1.58
                 l-1.19-1.1c.25.07.51.1.77.1 1.66 0 3-1.34 3-3 
                 0-1.43-1.14-2.6-2.18-2.99.12-.32.18-.66.18-1.01 
                 0-1.66-1.34-3-3-3z"/>
      </svg>
    </div>
  </div>
</section>
<!-- Bagian Biru -->
<h1 class="text-center text-5xl tracking-widest font-black text-blue-500">THE SENTINELS</h1>
<section class="flex justify-evenly w-full my-12 gap-4 flex-wrap">
  <!-- Kartu 1 -->
  <div class=" hover:shadow-xl hover:shadow-blue-800 biru-1 group aspect-[3/4] w-72 relative rounded-lg overflow-hidden border border-black shadow-md bg-white">
    <img src="./image/mbti-illustration/ISTJ.png" alt="card" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p class="text-blue-400 tracking-wide text-lg font-semibold">ISTJ</p>
    </div>
    <div class="absolute top-2 left-2 flex flex-col items-center text-blue-600 w-6 drop-shadow-md">
      <svg class="w-full h-auto" viewBox="0 0 20 20" fill="currentColor">
        <text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">A</text>
      </svg>
      <svg class="w-full h-auto mt-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L4 12l8 10 8-10L12 2z"/>
      </svg>
    </div>
  </div>

  <!-- Kartu 2 -->
  <div class=" hover:shadow-xl hover:shadow-blue-800 biru-2 group aspect-[3/4] w-72 relative rounded-lg overflow-hidden border border-black shadow-md bg-white">
    <img src="./image/mbti-illustration/ESFJ.png" alt="card" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p class="text-blue-400 tracking-wide text-lg font-semibold">ESFJ</p>
    </div>
    <div class="absolute top-2 left-2 flex flex-col items-center text-blue-600 w-6 drop-shadow-md">
      <svg class="w-full h-auto" viewBox="0 0 20 20" fill="currentColor">
        <text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">K</text>
      </svg>
      <svg class="w-full h-auto mt-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L4 12l8 10 8-10L12 2z"/>
      </svg>
    </div>
  </div>

  <!-- Kartu 3 -->
  <div class=" hover:shadow-xl hover:shadow-blue-800 biru-3 group aspect-[3/4] w-72 relative rounded-lg overflow-hidden border border-black shadow-md bg-white">
    <img src="./image/mbti-illustration/ESTJ.png" alt="card" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p class="text-blue-400 tracking-wide text-lg font-semibold">ESTJ</p>
    </div>
    <div class="absolute top-2 left-2 flex flex-col items-center text-blue-600 w-6 drop-shadow-md">
      <svg class="w-full h-auto" viewBox="0 0 20 20" fill="currentColor">
        <text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">Q</text>
      </svg>
      <svg class="w-full h-auto mt-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L4 12l8 10 8-10L12 2z"/>
      </svg>
    </div>
  </div>

  <!-- Kartu 4 -->
  <div class=" hover:shadow-xl hover:shadow-blue-800 biru-4 group aspect-[3/4] w-72 relative rounded-lg overflow-hidden border border-black shadow-md bg-white">
    <img src="./image/mbti-illustration/ISFJ.png" alt="card" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p class="text-blue-400 tracking-wide text-lg font-semibold">ISFJ</p>
    </div>
    <div class="absolute top-2 left-2 flex flex-col items-center text-blue-600 w-6 drop-shadow-md">
      <svg class="w-full h-auto" viewBox="0 0 20 20" fill="currentColor">
        <text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">J</text>
      </svg>
      <svg class="w-full h-auto mt-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L4 12l8 10 8-10L12 2z"/>
      </svg>
    </div>
  </div>
</section>
<!-- Bagian Oren -->
<h1 class="text-center text-5xl tracking-widest font-black text-yellow-600">THE EXPLORERS</h1>
<section class="flex justify-evenly w-full my-12 gap-4 flex-wrap">
  <!-- ISTP -->
  <div class="hover:shadow-xl hover:shadow-yellow-600 oren-1 group aspect-[3/4] w-72 relative rounded-lg overflow-hidden border border-black shadow-md bg-white">
    <img src="./image/mbti-illustration/ISTP.png" alt="card" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p class="text-yellow-400 tracking-wide text-lg font-semibold">ISTP</p>
    </div>
    <div class="absolute top-2 left-2 flex flex-col items-center text-yellow-600 w-6 drop-shadow-md">
      <svg class="w-full h-auto" viewBox="0 0 20 20" fill="currentColor">
        <text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">A</text>
      </svg>
      <svg class="w-full h-auto mt-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C10 5 5 8 5 12c0 2.21 1.79 4 4 4h2v2H9v2h6v-2h-2v-2h2c2.21 0 4-1.79 4-4 0-4-5-7-7-10z"/>
      </svg>
    </div>
  </div>

  <!-- ESTP -->
  <div class=" hover:shadow-xl hover:shadow-yellow-600 oren-2 group aspect-[3/4] w-72 relative rounded-lg overflow-hidden border border-black shadow-md bg-white">
    <img src="./image/mbti-illustration/ESTP.png" alt="card" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p class="text-yellow-400 tracking-wide text-lg font-semibold">ESTP</p>
    </div>
    <div class="absolute top-2 left-2 flex flex-col items-center text-yellow-600 w-6 drop-shadow-md">
      <svg class="w-full h-auto" viewBox="0 0 20 20" fill="currentColor">
        <text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">K</text>
      </svg>
      <svg class="w-full h-auto mt-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C10 5 5 8 5 12c0 2.21 1.79 4 4 4h2v2H9v2h6v-2h-2v-2h2c2.21 0 4-1.79 4-4 0-4-5-7-7-10z"/>
      </svg>
    </div>
  </div>

  <!-- ESFP -->
  <div class=" hover:shadow-xl hover:shadow-yellow-600 oren-3 group aspect-[3/4] w-72 relative rounded-lg overflow-hidden border border-black shadow-md bg-white">
    <img src="./image/mbti-illustration/ESFP.png" alt="card" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p class="text-yellow-400 tracking-wide text-lg font-semibold">ESFP</p>
    </div>
    <div class="absolute top-2 left-2 flex flex-col items-center text-yellow-600 w-6 drop-shadow-md">
      <svg class="w-full h-auto" viewBox="0 0 20 20" fill="currentColor">
        <text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">Q</text>
      </svg>
      <svg class="w-full h-auto mt-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C10 5 5 8 5 12c0 2.21 1.79 4 4 4h2v2H9v2h6v-2h-2v-2h2c2.21 0 4-1.79 4-4 0-4-5-7-7-10z"/>
      </svg>
    </div>
  </div>

  <!-- ISFP -->
  <div class=" hover:shadow-xl hover:shadow-yellow-600 oren-4 group aspect-[3/4] w-72 relative rounded-lg overflow-hidden border border-black shadow-md bg-white">
    <img src="./image/mbti-illustration/ISFP.png" alt="card" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p class="text-yellow-400 tracking-wide text-lg font-semibold">ISFP</p>
    </div>
    <div class="absolute top-2 right-2 flex flex-col items-center text-yellow-600 w-6 drop-shadow-md">
      <svg class="w-full h-auto" viewBox="0 0 20 20" fill="currentColor">
        <text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">J</text>
      </svg>
      <svg class="w-full h-auto mt-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C10 5 5 8 5 12c0 2.21 1.79 4 4 4h2v2H9v2h6v-2h-2v-2h2c2.21 0 4-1.79 4-4 0-4-5-7-7-10z"/>
      </svg>
    </div>
  </div>
</section>
