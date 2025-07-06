<!-- <script lang="ts">
  import { onMount } from 'svelte';
  let tab = 'overview';
</script>

<div class="flex gap-6 p-6">
  <aside class="w-64 bg-base-200 p-4 rounded-xl">
    <img src="/infp-avatar.png" class="rounded-full w-32 mx-auto mb-4" alt="INFP Avatar" />
    <h2 class="text-center font-bold text-xl">INFP</h2>
    <p class="text-center text-sm">The Mediator</p>

    <div class="mt-4 text-center text-sm">
      <p><span class="font-bold">42</span> Lagu cocok</p>
      <p><span class="font-bold">1.3k</span> followers</p>
    </div>

    <nav class="mt-6 space-y-2">
      <a class="link link-hover" on:click={() => tab = 'overview'}>🧠 Overview</a>
      <a class="link link-hover" on:click={() => tab = 'lagu'}>🎧 Lagu</a>
      <a class="link link-hover" on:click={() => tab = 'karakter'}>🎬 Karakter</a>
      <a class="link link-hover" on:click={() => tab = 'mapel'}>📚 Mapel</a>
      <a class="link link-hover" on:click={() => tab = 'pekerjaan'}>💼 Pekerjaan</a>
    </nav>
  </aside>

  <main class="flex-1">

    <section class="rounded-xl overflow-hidden shadow-xl mb-6">
      <div class="hero h-60 bg-cover" style="background-image: url('./image/mbti-bg/infp-bg.jpg')">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-white">
          <div>
            <h1 class="text-4xl font-bold">INFP – The Mediator</h1>
            <p class="text-sm">Introverted • Intuitive • Feeling • Perceiving</p>
          </div>
        </div>
      </div>
    </section>


    {#if tab === 'overview'}
      <section class="mb-6">
        <h2 class="text-xl font-bold mb-2">🧠 Tentang INFP</h2>
        <p>INFP adalah idealis sejati, penuh empati dan imajinatif, seringkali merasa paling hidup ketika mengekspresikan diri secara kreatif.</p>
      </section>
    {:else if tab === 'lagu'}
      <section class="mb-6">
        <h2 class="text-xl font-bold mb-2">🎧 Lagu Cocok untuk INFP</h2>
        <ul class="list-disc pl-6 text-sm space-y-1">
          <li>Billie Eilish – Everything I Wanted</li>
          <li>Laufey – From the Start</li>
          <li>Cigarettes After Sex – Apocalypse</li>
        </ul>
      </section>
    {:else if tab === 'karakter'}
      <section class="mb-6">
        <h2 class="text-xl font-bold mb-2">🎬 Karakter Film/Anime</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="card bg-base-100 shadow-md">
            <div class="card-body items-center text-center">
              <img src="/frodo.jpg" class="w-20 h-20 rounded-full" alt="Frodo" />
              <h3 class="font-bold">Frodo Baggins</h3>
              <p class="text-sm">Lord of the Rings</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow-md">
            <div class="card-body items-center text-center">
              <img src="/naruto.jpg" class="w-20 h-20 rounded-full" alt="Naruto" />
              <h3 class="font-bold">Naruto Uzumaki</h3>
              <p class="text-sm">Naruto</p>
            </div>
          </div>
        </div>
      </section>
    {:else if tab === 'mapel'}
      <section class="mb-6">
        <h2 class="text-xl font-bold mb-2">📚 Mapel yang Cocok</h2>
        <p>Seni, Bahasa, Sejarah – cocok karena membuka ruang ekspresi dan refleksi pribadi.</p>
      </section>
    {:else if tab === 'pekerjaan'}
      <section class="mb-6">
        <h2 class="text-xl font-bold mb-2">💼 Pekerjaan Ideal</h2>
        <ul class="list-disc pl-6 text-sm space-y-1">
          <li>Penulis atau Editor</li>
          <li>Psikolog atau Konselor</li>
          <li>Artis atau Musisi</li>
        </ul>
      </section>
    {/if}
  </main>
</div>

<style>
  a.link:hover {
    text-decoration: underline;
  }
</style> -->
<script lang="ts">
  let tab = 'overview';
</script>

<div class="flex flex-col gap-6 p-6">
  <!-- Header INFP -->
  <section class="rounded-xl overflow-hidden shadow-xl">
    <div class="hero h-60 bg-cover bg-center" style="background-image: url('/image/lini-biru.png')">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-white">
        <div>
          <h1 class="text-4xl font-bold">INFP – The Mediator</h1>
          <p class="text-sm">Introverted • Intuitive • Feeling • Perceiving</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Avatar Section -->
  <div class="flex flex-col items-center">
    <img src="/image/mbti-illustration/INFP.png" alt="INFP Avatar" class="rounded-full w-32 h-32 shadow-lg border-4 border-base-300" />
    <h2 class="mt-4 font-bold text-xl">INFP</h2>
    <p class="text-sm text-gray-500">The Mediator</p>
  </div>

  <!-- Tentang INFP -->
  <section class="bg-base-100 p-4 rounded-xl shadow-md">
    <h2 class="text-xl font-bold mb-2">🧠 Tentang INFP</h2>
    <p>INFP adalah idealis sejati, penuh empati dan imajinatif, seringkali merasa paling hidup ketika mengekspresikan diri secara kreatif.</p>
  </section>

  <!-- Lagu Cocok -->
  <section class="bg-base-100 p-4 rounded-xl shadow-md">
    <h2 class="text-xl font-bold mb-2">🎧 Lagu Cocok</h2>
    <ul class="list-disc pl-6 text-sm space-y-1">
      <li>Billie Eilish – Everything I Wanted</li>
      <li>Laufey – From the Start</li>
      <li>Cigarettes After Sex – Apocalypse</li>
    </ul>
  </section>

  <!-- Karakter Fiksi -->
  <section class="bg-base-100 p-4 rounded-xl shadow-md">
    <h2 class="text-xl font-bold mb-4">🎬 Karakter Fiksi</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div class="card bg-base-200 shadow-md">
        <div class="card-body items-center text-center">
          <img src="/placeholder-frodo.jpg" class="w-20 h-20 rounded-full" alt="Frodo" />
          <h3 class="font-bold">Frodo Baggins</h3>
          <p class="text-sm">Lord of the Rings</p>
        </div>
      </div>
      <div class="card bg-base-200 shadow-md">
        <div class="card-body items-center text-center">
          <img src="/placeholder-naruto.jpg" class="w-20 h-20 rounded-full" alt="Naruto" />
          <h3 class="font-bold">Naruto Uzumaki</h3>
          <p class="text-sm">Naruto</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Mapel Favorit -->
  <section class="bg-base-100 p-4 rounded-xl shadow-md">
    <h2 class="text-xl font-bold mb-2">📚 Mapel Favorit</h2>
    <p>Seni, Bahasa, Sejarah – cocok karena membuka ruang ekspresi dan refleksi pribadi.</p>
  </section>

  <!-- Pekerjaan Ideal -->
  <section class="bg-base-100 p-4 rounded-xl shadow-md">
    <h2 class="text-xl font-bold mb-2">💼 Pekerjaan Ideal</h2>
    <ul class="list-disc pl-6 text-sm space-y-1">
      <li>Penulis atau Editor</li>
      <li>Psikolog atau Konselor</li>
      <li>Artis atau Musisi</li>
    </ul>
  </section>

  <!-- Kecocokan MBTI -->
  <section class="bg-base-100 p-4 rounded-xl shadow-md">
    <h2 class="text-xl font-bold mb-2">💘 Kecocokan MBTI</h2>
    <p>INFP sering kali cocok dengan tipe seperti ENFJ dan INFJ karena mereka bisa saling mengisi secara emosional dan spiritual.</p>
  </section>

  <!-- Footer Quotes -->
  <footer class="text-center mt-12 text-sm text-gray-500">
    <hr class="my-4" />
    <p>“Dalam dunia yang keras, INFP adalah pengingat bahwa kelembutan adalah kekuatan.”</p>
    <p class="mt-2">© 2025 MBTI PopCulture Project</p>
  </footer>
</div>

<style>
  .card img {
    object-fit: cover;
  }
</style>
