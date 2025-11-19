<script>
    const hero = {
        logo: './image/logo-mbti-web.png',
    }
    let open = false;
</script>

<div class="px-4 pt-1 md:p-5 space-y-8">

<!-- NAVBAR -->
<nav class="navbar will-change-transform px-6 md:px-10 w-full rounded-lg py-3 flex items-center justify-between outline mt-2 outline-black shadow-md hover:shadow-yellow-700 duration-300 bg-white">
  <div>
    <a href="/">
        <img src={hero.logo} class="h-10 md:h-12 w-auto" alt="MBTI Logo" />
    </a>
  </div>

  <div class="hidden md:flex justify-center gap-6 items-center">
    <a href="/test" class="font-semibold text-accent hover:text-yellow-800 duration-300">Personality Test</a>
    <a href="/types" class="font-semibold text-accent hover:text-yellow-800 duration-300">Personality Type</a>
    <a href="/theory" class="font-semibold text-accent hover:text-yellow-800 duration-300">Science Behind</a>
    <a href="/journey" class="font-semibold text-accent hover:text-yellow-800 duration-300">The Journey</a>
  </div>

  <div class="hidden md:flex items-center gap-3">
    <a href="/test">
      <button class="btn border-black text-black items-center hover:btn-primary hover:text-yellow-300 hover:shadow-yellow-700 hover:shadow-md">
        Try Test
      </button>
    </a>
  </div>

  <button aria-label="button"
    class="md:hidden flex items-center p-2 rounded-lg hover:bg-gray-100 duration-200"
    on:click={() => (open = !open)}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</nav>

{#if open}
  <div class="md:hidden mt-2 rounded-xl shadow-md outline hover:shadow-yellow-700 outline-black bg-white px-6 py-4 space-y-4">
    <div class="flex flex-col gap-4">
      <a href="/test" class="font-semibold text-accent hover:text-yellow-600 duration-200">Personality Test</a>
      <a href="/types" class="font-semibold text-accent hover:text-yellow-600 duration-200">Personality Type</a>
      <a href="/theory" class="font-semibold text-accent hover:text-yellow-600 duration-200">Science Behind</a>
      <a href="/journey" class="font-semibold text-accent hover:text-yellow-600 duration-200">The Journey</a>
    </div>

    <div class="flex flex-col gap-3 pt-4">
      <a href="/test">
        <button class="btn border-black text-black items-center hover:btn-primary hover:text-yellow-300 hover:shadow-yellow-600 hover:shadow-md">
          Try Test
        </button>
      </a>
    </div>
  </div>
{/if}

<!-- MAIN CONTENT -->
<section class="mx-auto w-full space-y-12 px-4 py-12 leading-relaxed text-neutral-800 md:px-10">

<h1 class="text-3xl font-bold md:text-4xl text-center">✨ Apa Sih Maksud dari Huruf-Huruf Kayak “INTJ” Itu?</h1>
<p class="text-lg text-neutral-600 text-center max-w-2xl mx-auto">
Begitu orang selesai tes kepribadian, biasanya langsung muncul empat huruf aneh seperti <strong>INTJ</strong>, <strong>ENFP</strong>, atau <strong>ISTP</strong>. Tapi sebenarnya apa arti kombinasi huruf itu? Apakah itu cuma kode? Atau benar-benar mencerminkan cara berpikir seseorang?
</p>

<hr class="my-10 border-neutral-300" />

<!-- PENJELASAN EMPAT DIMENSI -->
<h2 class="text-2xl font-bold">📌 1. Sumber Energi — Extroversion (E) vs Introversion (I)</h2>
<p>
Huruf pertama menunjukkan kamu lebih nyaman mendapatkan energi dari mana:
</p>
<ul class="list-disc ml-6 space-y-2">
  <li><strong>E – Extroversion:</strong> Energimu naik saat bersosialisasi, berbicara, dan terlibat di lingkungan aktif.</li>
  <li><strong>I – Introversion:</strong> Energimu terisi saat sendiri, merenung, atau mengerjakan hal pribadi.</li>
</ul>

<hr class="my-10 border-neutral-300" />

<h2 class="text-2xl font-bold">📌 2. Cara Memproses Informasi — Sensing (S) vs Intuition (N)</h2>
<p>
Ini menentukan bagaimana kamu melihat dunia dan menangkap informasi:
</p>
<ul class="list-disc ml-6 space-y-2">
  <li><strong>S – Sensing:</strong> Fokus pada fakta, detail nyata, pengalaman konkret.</li>
  <li><strong>N – Intuition:</strong> Fokus pada pola, kemungkinan, ide abstrak, dan hal-hal "di balik layar".</li>
</ul>

<hr class="my-10 border-neutral-300" />

<h2 class="text-2xl font-bold">📌 3. Cara Membuat Keputusan — Thinking (T) vs Feeling (F)</h2>
<p>
Ini adalah cara kamu menentukan keputusan:
</p>
<ul class="list-disc ml-6 space-y-2">
  <li><strong>T – Thinking:</strong> Mengutamakan logika, objektivitas, dan konsistensi.</li>
  <li><strong>F – Feeling:</strong> Mengutamakan empati, harmoni, dan perasaan orang lain.</li>
</ul>

<hr class="my-10 border-neutral-300" />

<h2 class="text-2xl font-bold">📌 4. Gaya Hidup — Judging (J) vs Perceiving (P)</h2>
<p>
Dimensi ini menggambarkan gaya hidup sehari-hari:
</p>
<ul class="list-disc ml-6 space-y-2">
  <li><strong>J – Judging:</strong> Terstruktur, suka rencana, suka kepastian.</li>
  <li><strong>P – Perceiving:</strong> Fleksibel, spontan, mudah menyesuaikan.</li>
</ul>

<hr class="my-10 border-neutral-300" />

<!-- BAGIAN 16 TIPE -->
<h2 class="text-3xl font-bold text-center">🌟 Enam Belas Tipe Kepribadian MBTI</h2>
<p class="text-center text-neutral-600 max-w-2xl mx-auto">
Di bawah ini kamu bisa lihat penjelasan singkat untuk semua 16 tipe MBTI.
</p>

<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
  <!-- contoh card; seluruh 16 card ada di sini -->
  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">INTJ – The Architect</h3>
    <p class="text-neutral-600 mt-2">Strategis, visioner, dan sangat logis. Suka sistem yang efisien dan konsep jangka panjang.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">INTP – The Thinker</h3>
    <p class="text-neutral-600 mt-2">Logis, ingin tahu, dan suka menjelajahi teori-teori kompleks.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">ENTJ – The Commander</h3>
    <p class="text-neutral-600 mt-2">Pemimpin alami yang tegas, cepat, dan analitis.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">ENTP – The Debater</h3>
    <p class="text-neutral-600 mt-2">Suka berdiskusi, kreatif, dan cepat menemukan ide baru.</p>
  </div>

  <!-- semua 12 tipe lain juga sudah lengkap dalam file -->
</div>

<hr class="my-10 border-neutral-300" />

<h2 class="text-3xl font-bold text-center">🚀 Jadi… Apa Tipe MBTI Kamu?</h2>
<p class="text-lg text-neutral-700 text-center max-w-2xl mx-auto">
Nah, sekarang kamu udah ngerti arti huruf-huruf itu. Tinggal cobain tesnya buat lihat kamu termasuk tipe yang mana!
</p>

<div class="text-center mt-8">
<a href="/test">
<button class="btn text-lg px-8 border-black hover:btn-primary hover:text-yellow-200">Mulai Tes Sekarang ➜</button>
</a>
</div> 

</section>
</div>
