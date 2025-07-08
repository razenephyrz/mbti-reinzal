<script lang="ts">

</script>

<div class="p-6 space-y-8">

  <!-- HERO: Profil -->
<section class="relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-md duration-300 shadow-black">
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
          <span class="badge badge-primary shadow shadow-primary-content">Introverted</span>
          <span class="badge badge-secondary shadow shadow-secondary-content">Intuitive</span>
          <span class="badge badge-accent shadow shadow-accent-content">Feeling</span>
          <span class="badge bg-primary text-green-300 border-0 shadow shadow-green-300">Perceiving</span>
        </div>

      </div>
    </div>
  </div>
</section>

<section class="bg-sect rounded-xl overflow-hidden shadow-lg mb-10 animated-bg shadow-black">
  <!-- Judul Section -->
  <div class="p-6 flex justify-between items-center rounded-xl shadow-white bg-white shadow">
    <h2 class="text-2xl text-black font-bold mb-2">🎧 Lagu Cocok untuk INFP</h2>
    <p class="text-md text-black">Musik yang nyambung sama rasa dan imajinasi INFP.</p>
  </div>

  <!-- Daftar Lagu -->
  <div class="flex grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-evenly p-6">
    
    <!-- Card 1 -->
    <div class=" w-56 hover:shadow-black hover:shadow-lg h-auto rounded-xl shadow-md transition-all duration-200 text-white" style="background-color: #90946Eff">
      <div class="p-4 flex flex-col items-center text-center">
        <img src="./image/billie.jpg" alt="Everything I Wanted" class="w-32 h-32 object-cover rounded-lg mb-4 shadow-md" />
        <h3 class="font-semibold text-lg">Everything I Wanted</h3>
        <p class="text-sm text-gray-300">Billie Eilish</p>
      </div>
    </div>

    <!-- Card 2 -->
    <div class=" w-56 hover:shadow-black hover:shadow-lg h-auto rounded-xl shadow-md transition-all duration-200 text-white" style="background-color: #672702ff">
      <div class="p-4 flex flex-col items-center text-center">
        <img src="./image/laufey.jpg" alt="From the Start" class="w-32 h-32 object-cover rounded-lg mb-4 shadow-md" />
        <h3 class="font-semibold text-lg">From the Start</h3>
        <p class="text-sm text-gray-300">Laufey</p>
      </div>
    </div>

    <!-- Card 3 -->
    <div class=" w-56 hover:shadow-black hover:shadow-lg h-auto rounded-xl shadow-md transition-all duration-200 text-white" style="background-color: #1C1C1C">
      <div class="p-4 flex flex-col items-center text-center">
        <img src="./image/cas.jpg" alt="Apocalypse" class="w-32 h-32 object-cover rounded-lg mb-4 shadow-md" />
        <h3 class="font-semibold text-lg">Apocalypse</h3>
        <p class="text-sm text-gray-300">Cigarettes After Sex</p>
      </div>
    </div>

    <!-- Tambah lagu lainnya tinggal copy paste di sini -->
    
  </div>
</section>

<div class="flex justify-evenly gap-10">
<div class="flex bg-sect gap-5 rounded-xl justify-between items-center pr-5 shadow-md shadow-black">
  <img src="./image/frodo-baggins.jpg" alt="kacard" class=" w-36 rounded-xl ">
  <h1 class="text-white text-shadow-xs text-shadow-black font-medium w-64 ">“There is light, and beauty up there, that no shadow can touch.” <br>
— Frodo Baggins</h1>
</div>
<div class="flex bg-sect gap-5 rounded-xl justify-between items-center pr-5 shadow-md shadow-black">
  <img src="./image/naruto-uzumaki.jpg" alt="kacard" class=" w-36 rounded-xl ">
  <h1 class="text-white text-shadow-xs text-shadow-black font-medium w-64">“I’m not a hero. I’m a ninja who never gives up.” <br>
— Naruto Uzumaki</h1> 
</div>
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


  <!-- Footer -->
  <footer class="text-center mt-12 text-sm text-gray-500">
    <hr class="my-4" />
    <p>“Dalam dunia yang keras, INFP adalah pengingat bahwa kelembutan adalah kekuatan.”</p>
    <p class="mt-2">© 2025 MBTI PopCulture Project</p>
  </footer>
</div>

<div class="flex justify-evenly gap-10">
<div class="flex bg-sect gap-5 rounded-xl justify-between items-center pr-5 shadow-md shadow-black">
  <img src="./image/frodo-baggins.jpg" alt="kacard" class=" w-36 rounded-xl ">
  <h1 class="text-white text-shadow-xs text-shadow-black font-medium w-64 ">“There is light, and beauty up there, that no shadow can touch.” <br>
— Frodo Baggins</h1>
</div>
<div class="flex bg-sect gap-5 rounded-xl justify-between items-center pr-5 shadow-md shadow-black">
  <img src="./image/naruto-uzumaki.jpg" alt="kacard" class=" w-36 rounded-xl ">
  <h1 class="text-white text-shadow-xs text-shadow-black font-medium w-64">“I’m not a hero. I’m a ninja who never gives up.” <br>
— Naruto Uzumaki</h1> 
</div>
</div>

<style>
  .bg-sect{
    background: linear-gradient(45deg, #4A7D59ff, #4176B5ff, #A9C748ff);
  }
  .animated-bg {
    position: relative;
    width: 100%;
    background: linear-gradient(-45deg, #4A7D59ff, #4176B5ff, #A9C748ff);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    overflow: hidden;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>