<script lang="ts">
  // nanti bisa diganti dengan store atau dynamic param
</script>

<div class="p-6 space-y-8">

  <!-- HERO: Profil -->
<section class="relative h-80 rounded-xl overflow-hidden shadow-md hover:shadow-lg duration-300 shadow-black">
  <!-- Background Hero -->
  <div class="h-full w-full bg-cover bg-center" style="background-image: url('/image/mbti-bg/infp-bg.jpg');">
    <!-- Overlay -->
    <div class="h-full w-fullk bg-opacity-40 flex items-center justify-center">
      
      <!-- Isi tengah (grid 3 kolom) -->
      <div class="grid grid-cols-3 gap-6 items-center w-full px-6 text-white">

        <!-- Kiri: Nama + julukan -->
        <div class="text-center">
          <h1 class="text-5xl text-shadow-black text-shadow-sm font-bold">INFP</h1>
          <p class="text-2xl  text-shadow-black  text-shadow-sm">The Mediator</p>
        </div>

        <!-- Tengah: Avatar -->
        <div class="flex justify-center">
          <img src="/image/mbti-illustration/INFP.png" alt="jir" class="h-full w-auto rounded-xl shadow-lg object-cover" />
        </div>

        <!-- Kanan: Badges -->
        <div class="flex flex-wrap gap-2 text-xs md:text-sm">
          <span class="badge badge-primary">Introverted</span>
          <span class="badge badge-secondary">Intuitive</span>
          <span class="badge badge-accent">Feeling</span>
          <span class="badge badge-success">Perceiving</span>
        </div>

      </div>
    </div>
  </div>
</section>



  <!-- GRID ASPEK -->
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

    <!-- Lagu -->
    <div class="bg-base-200 p-4 rounded-xl shadow hover:shadow-lg transition">
      <h2 class="text-lg font-bold mb-2">🎧 Lagu Cocok</h2>
      <ul class="list-disc pl-5 text-sm space-y-1">
        <li>Laufey – From the Start</li>
        <li>Cigarettes After Sex – Apocalypse</li>
        <li>Billie Eilish – Everything I Wanted</li>
      </ul>
    </div>

    <!-- Karakter -->
    <div class="bg-base-200 p-4 rounded-xl shadow hover:shadow-lg transition">
      <h2 class="text-lg font-bold mb-2">🎬 Karakter Fiksi</h2>
      <div class="space-y-3">
        <div class="flex items-center gap-4">
          <img src="/placeholder-frodo.jpg" alt="jir" class="w-16 h-16 rounded-lg object-cover" />
          <div>
            <h3 class="font-bold text-sm">Frodo Baggins</h3>
            <p class="text-xs text-gray-500">Lord of the Rings</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <img src="/placeholder-naruto.jpg" alt="jir" class="w-16 h-16 rounded-lg object-cover" />
          <div>
            <h3 class="font-bold text-sm">Naruto Uzumaki</h3>
            <p class="text-xs text-gray-500">Naruto</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mapel -->
    <div class="bg-base-200 p-4 rounded-xl shadow hover:shadow-lg transition">
      <h2 class="text-lg font-bold mb-2">📚 Mapel Favorit</h2>
      <p class="text-sm">Seni, Bahasa, Sejarah – cocok karena membuka ruang ekspresi dan refleksi pribadi.</p>
    </div>

    <!-- Pekerjaan -->
    <div class="bg-base-200 p-4 rounded-xl shadow hover:shadow-lg transition">
      <h2 class="text-lg font-bold mb-2">💼 Pekerjaan Ideal</h2>
      <ul class="list-disc pl-5 text-sm space-y-1">
        <li>Penulis atau Editor</li>
        <li>Psikolog atau Konselor</li>
        <li>Artis atau Musisi</li>
      </ul>
    </div>

    <!-- Kecocokan -->
    <div class="bg-base-200 p-4 rounded-xl shadow hover:shadow-lg transition">
      <h2 class="text-lg font-bold mb-2">💘 Kecocokan MBTI</h2>
      <p class="text-sm">INFP sering cocok dengan ENFJ & INFJ karena hubungan emosional yang mendalam dan suportif.</p>
    </div>
  </section>

  <!-- Footer -->
  <footer class="text-center mt-12 text-sm text-gray-500">
    <hr class="my-4" />
    <p>“Dalam dunia yang keras, INFP adalah pengingat bahwa kelembutan adalah kekuatan.”</p>
    <p class="mt-2">© 2025 MBTI PopCulture Project</p>
  </footer>
</div>
