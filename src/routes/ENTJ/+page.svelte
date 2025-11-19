<script>
  const hero = 
  { 
    logo : './image/logo-mbti-web.png',
    herowp : "background-image: url('./image/entj-folder/wallpaper.png');",
    mbti : "ENTJ",
    alias : "The Commander",
    desc : "ENTJ adalah penggerak keputusan yang kuat dan strategis. Mereka mencari efektivitas, ketertiban, serta cara paling menentukan untuk mengarahkan sumber daya menuju tujuan besar yang terstruktur dan berdampak luas.",
    icon1 : "Extrovert",
    icon2 : "Intuition",
    icon3 : "Thinking",
    icon4 : "Judging",
    mbticon : "./image/mbti-illustration/ENTJ.png"
  }
  const description = [
    {
      id : "intj",
      header : "ENTJ",
      desc : "ENTJ, kamu adalah pribadi yang tegas, visioner, dan sangat terstruktur dalam berpikir maupun bertindak. Kamu punya dorongan alami untuk mengambil alih situasi, menyusun strategi, dan membawa sebuah sistem menuju hasil yang lebih efisien dan ambisius. Kamu melihat dunia sebagai sesuatu yang bisa dioptimalkan, direorganisasi, dan ditingkatkan melalui logika serta arah yang jelas. Kamu bukan hanya pemikir—kamu adalah pelaksana. Ketika kamu punya visi, kamu bergerak cepat dan memastikan semua orang yang terlibat tahu apa yang harus dilakukan",
      position : "text-align: left;",
    },
    {
      id : "theanalyst",
      header : "The Commander",
      desc : "ENTJ mendapat julukan ini karena kamu memiliki kemampuan untuk memimpin secara alami, membuat keputusan tegas, dan menyusun strategi jangka panjang dengan presisi. Kamu adalah tipe yang melihat masalah sebagai tantangan yang harus ditaklukkan. Kamu pandai menganalisis langkah-langkah yang dibutuhkan, mengorganisasi orang, dan memastikan rencana berjalan sesuai tujuan. Kamu bukan hanya melihat apa yang sedang terjadi—kamu memikirkan apa yang seharusnya terjadi, lalu membuatnya nyata",
      position : "text-align: center;",
    },
    {
      id : "introvert",
      header : "Extrovert",
      desc : "Kamu adalah extravert karena kamu mendapat energi dari interaksi, diskusi, aksi nyata, dan dinamika sosial yang hidup. Kamu merasa lebih hidup ketika bisa memimpin rapat, berdebat, atau mengarahkan sebuah tim. Kamu cepat bergerak, cepat mengambil keputusan, dan cenderung merasa lebih nyaman ketika berperan aktif di pusat kegiatan daripada diam menunggu. Dunia luar memberi kamu ruang untuk menguji ide dan mendorong progres",
      position : "text-align: right;",
    },
    {
      id : "intuitive",
      header : "Intuition",
      desc : "Kamu adalah intuitive karena kamu berpikir dalam skala besar, melihat pola, dan membangun visi jangka panjang. Kamu tertarik pada konsep, strategi, serta perubahan sistemik. Kamu bukan tipe yang hanya fokus pada detail kecil atau rutinitas harian—kamu memikirkan efek domino, peluang di balik peluang, dan bagaimana suatu langkah kecil bisa menggeser arah masa depan. Kamu selalu melihat gambaran besar sebelum bergerak",
      positions : "text-align: left;",
    },
    {
      id : "thinking",
      header : "Thinking",
      desc : "Kamu adalah thinking karena kamu berorientasi pada logika, objektivitas, dan efisiensi saat membuat keputusan. Kamu menilai sesuatu berdasarkan struktur argumen, data, dan rasionalitas, bukan perasaan atau pertimbangan emosional. Kamu menghargai kejelasan, ketegasan, dan solusi yang paling efektif. Kamu bisa sangat direct karena kamu fokus pada hasil dan integritas logis, bukan pada rasa nyaman orang lain",
      position : "text-align: center;",
    },
    {
      id : "judging",
      header : "Judging",
      desc : "Kamu termasuk judging karena kamu menyukai ketertiban, kepastian arah, dan rencana yang terstruktur. Kamu tidak nyaman dengan ketidakjelasan atau kemajuan yang lambat. Kamu ingin tahu apa targetnya, bagaimana mencapainya, siapa yang bertanggung jawab, dan kapan langkah dieksekusi. Kamu suka menyelesaikan sesuatu hingga tuntas, membuat sistem, dan memastikan semuanya berada di jalur yang benar. Bagi kamu, rencana adalah alat untuk mengatur kekacauan dan mengubahnya menjadi hasil konkret.",
      position : "text-align: right;",
    },
    
    
  ]
  const songs = [
  { 
    img: './image/entj-folder/music1.jpg', 
    title: "Stronger", 
    artist: "Kanye West" 
  },
  { img: './image/entj-folder/music2.jpg',
    title: "The Man", 
    artist: "Taylor Swift" 
  },
  { img: './image/entj-folder/music3.jpg',
    title: "Believer", 
    artist: "Imagine Dragons" 
  },
  { img: './image/entj-folder/music4.jpg', 
    title: "Lose Yourself", 
    artist: "Eminem" 
  }
  ]
  const characters = [
  {
    name: 'Erwin Smith',
    quote: 'Victory demands decisions made with unwavering conviction and vision',
    img: './image/entj-folder/char1.jpg'
  },
  {
    name: 'Steve Jobs',
    quote: 'I shape the future by rejecting limits others accept',
    img: './image/entj-folder/char2.jpg'
  },
  {
    name: 'Tony Stark',
    quote: 'If there’s no solution yet, I’ll build one myself',
    img: './image/entj-folder/char3.jpg'
  },
  {
    name: 'Margaret Thatcher',
    quote: 'Strength means leading firmly when compromise weakens progress',
    img: './image/entj-folder/char4.jpg'
  }
];
const career = [
    {
      name: "Manajer",
      desc: "ENTJ unggul mengordinasikan tim melalui arahan tegas yang mendorong pencapaian target secara konsisten terukur efektif",
      img: "./image/entj-folder/career1.jpg",
    },
    {
      name: "CEO",
      desc: "Visi besar ENTJ memandu pertumbuhan perusahaan melalui keputusan strategis yang mempertimbangkan risiko serta peluang jangka panjang",
      img: "./image/entj-folder/career2.jpg",
    },
    {
      name: "Konsultan Bisnis",
      desc: "Analisis tajam ENTJ mengarahkan klien menemukan solusi efisien melalui perbaikan sistem yang terencana matang berkelanjutan",
      img: "./image/entj-folder/career3.jpg",
    },
  ];
const subjects = [
    {
      name: "Ekonomi",
      desc: "Pola pikir strategis ENTJ memudahkan analisis dinamika pasar untuk merancang keputusan berbasis efisiensi tinggi",
      img: "./image/entj-folder/mapel1.jpg",
    },
    {
      name: "Manajemen",
      desc: "Naluri kepemimpinan ENTJ membantu mengarahkan sumber daya mencapai tujuan besar melalui perencanaan sistematis terstruktur matang.",
      img: "./image/entj-folder/mapel2.jpg",
    },
    {
      name: "Matematika",
      desc: "Struktur berpikir ENTJ mendukung pengolahan data numerik guna merumuskan strategi keputusan rasional efektif optimal.",
      img: "./image/entj-folder/mapel3.jpg",
    },
  ];
let open = false;
</script>

<!-- Page Container  -->

<div class="px-4 pt-1 md:p-5 space-y-8">

<nav class="navbar will-change-transform px-6 md:px-10 w-full rounded-lg py-3 flex items-center justify-between outline mt-2 outline-black shadow-md hover:shadow-purple-700 duration-300 bg-white">
  
  <!-- Logo -->
  <div>
    <a href="/">
		  <img src={hero.logo} class="h-10 md:h-12 w-auto" alt="MBTI Logo" />
	  </a>
  </div>

  <!-- Desktop Menu -->
  <div class="hidden md:flex justify-center gap-6 items-center">
    <a href="/test" class="font-semibold text-accent hover:text-purple-800 duration-300">Personality Test</a>
    <a href="/types" class="font-semibold text-accent hover:text-purple-800 duration-300">Personality Type</a>
    <a href="/theory" class="font-semibold text-accent hover:text-purple-800 duration-300">Science Behind</a>
    <a href="/journey" class="font-semibold text-accent hover:text-purple-800 duration-300">The Journey</a>
  </div>

  <!-- Desktop Action Buttons -->
  <div class="hidden md:flex items-center gap-3">
    <a href="/test">
      <button class="btn border-black text-black items-center hover:btn-primary hover:text-purple-300 hover:shadow-purple-700 hover:shadow-md">
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
  <div class="md:hidden mt-2 rounded-xl shadow-md outline hover:shadow-purple-700 outline-black bg-white px-6 py-4 space-y-4">
    
    <!-- Menu Items -->
    <div class="flex flex-col gap-4">
      <a href="/test" class="font-semibold text-accent hover:text-purple-600 duration-200">Personality Test</a>
      <a href="/types" class="font-semibold text-accent hover:text-purple-600 duration-200">Personality Type</a>
      <a href="/theory" class="font-semibold text-accent hover:text-purple-600 duration-200">Science Behind</a>
      <a href="/journey" class="font-semibold text-accent hover:text-purple-600 duration-200">The Journey</a>
    </div>

    <!-- Actions -->
    <div class="flex flex-col gap-3 pt-4">
      <a href="/test">
        <button class="btn border-black text-black items-center hover:btn-primary hover:text-purple-300 hover:shadow-purple-600 hover:shadow-md">
          Try Test
        </button>
      </a>
    </div>
  </div>
{/if}


 <!-- Hero -->
<section
  class="relative h-auto md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl duration-300 shadow-black"
  style={hero.herowp}>
  <!-- Background -->
  <div class="h-full w-full bg-cover bg-center bg-transparent backdrop-blur-sm">
    <!-- Overlay -->
    <div
      class="h-full w-full bg-black/30 flex flex-col-reverse md:flex-row items-center px-4 md:px-10 py-6 justify-between gap-6 md:gap-0"
    >
      <!-- Kanan Mobile / Kiri Desktop: Avatar -->
      <div class="w-full md:w-[35%] flex items-center justify-center">
        <img
          src={hero.mbticon}
          alt="Avatar"
          class="h-56 sm:h-64 md:h-60 lg:h-[110%] w-auto object-contain transition duration-300"
        />
      </div>

      <!-- Kiri Mobile / Kanan Desktop: Text -->
      <div class="text-purple-600 w-full md:w-[55%] space-y-4 text-center md:text-left">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
          {hero.mbti}
        </h1>
        <p class="text-lg md:text-2xl font-medium text-white/80">
          {hero.alias}
        </p>
        <p class="text-sm md:text-md text-white/70">
          {hero.desc}
        </p>

        <!-- Badges -->
        <div class="flex gap-2 md:gap-3.5 flex-wrap justify-center md:justify-start">
          <a href="#detail" class="badge p-2 md:p-3 poppins bg-white text-black text-xs md:text-sm">{hero.icon1}</a>
          <a href="#detail" class="badge p-2 md:p-3 poppins bg-white text-black text-xs md:text-sm">{hero.icon2}</a>
          <a href="#detail" class="badge p-2 md:p-3 poppins bg-white text-black text-xs md:text-sm">{hero.icon3}</a>
          <a href="#detail" class="badge p-2 md:p-3 poppins bg-white text-black text-xs md:text-sm">{hero.icon4}</a>
        </div>
      </div>
    </div>
  </div>
</section>



<!-- Nav Content -->
<section class="w-full sans px-2 md:px-4 mb-16 md:mb-24 mt-8 md:mt-12">
  <div class="flex flex-wrap justify-between gap-2 md:gap-4">
    <a href="#intj" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-purple-500 text-sm md:text-lg font-bold">{hero.mbti}</a>
    <a href="#theanalyst" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-purple-500 text-sm md:text-lg font-bold">{hero.alias}</a>
    <a href="#introvert" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-purple-500 text-sm md:text-lg font-bold">{hero.icon1}</a>
    <a href="#intuitive" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-purple-500 text-sm md:text-lg font-bold">{hero.icon2}</a>
    <a href="#thinking" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-purple-500 text-sm md:text-lg font-bold">{hero.icon3}</a>
    <a href="#judging" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-purple-500 text-sm md:text-lg font-bold">{hero.icon4}</a>
  </div>
</section>

<!-- Content Details -->

<section>
  {#each description as de}
    <div id={de.id} class="mb-12 md:mb-20">
      <h1 class="text-3xl md:text-5xl lg:text-6xl helvetica font-black text-black/90 px-4 md:px-8 pb-4 mb-4 border-b-3 border-purple-600" style={de.position}>{de.header}</h1>
      <p class="text-base md:text-lg lg:text-xl helvetica text-black/70 px-4 md:px-0">{de.desc}</p>
    </div>
  {/each}
</section>

<!-- Content Lagu -->

<section class="px-4 md:px-8 py-8 md:py-12 flex flex-col items-center">
  <!-- Header -->
  <div class="relative inline-block mb-8 md:mb-10 group">
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none pb-2 text-purple-500 relative">Songs<span
        class="absolute bottom-0 left-0 w-0 h-[4px] bg-purple-500 transition-all duration-500 group-hover:w-full"></span>
    </h2>
  </div>

  <!-- Flex Album List -->
  <div
    class="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mt-6 flex-wrap"
  >
    {#each songs as song}
      <div
        class="flex flex-col items-center text-center group p-5 rounded-xl transition duration-300 hover:bg-purple-500/10 hover:shadow-xl w-full md:w-auto"
      >
        <img
          src={song.img}
          alt={song.title}
          class="w-40 md:w-48 lg:w-64 h-40 md:h-48 lg:h-64 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
        />
        <div class="mt-4">
          <h3
            class="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-purple-500 transition-colors duration-300"
          >
            {song.title}
          </h3>
          <p class="text-sm md:text-base text-gray-500 group-hover:text-purple-400 transition-colors">
            {song.artist}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- CHARACTERS SECTION -->
<div class="flex mb-8 md:mb-1 justify-center w-full group">
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center tracking-tight leading-none pb-2 text-purple-500 relative">Characters<span
        class="absolute bottom-0 left-0 w-0 h-[4px] bg-purple-500 transition-all duration-500 group-hover:w-full"></span>
    </h2>
  </div>
<section class="flex flex-wrap justify-center gap-6 md:gap-10 py-12 md:py-16 px-4 md:px-0">
  
  {#each characters as char}
    <div class="group [perspective:1000px] cursor-pointer">
      <div class="relative w-56 md:w-64 lg:w-72 h-80 md:h-96 lg:h-[420px] [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
      <!-- FRONT -->
        <div class="absolute inset-0 rounded-3xl overflow-hidden shadow-xl bg-green-700/10 border border-purple-200 backface-hidden">
          <img src={char.img} alt={char.name} class="w-full h-full object-cover" />
        </div>


      <!-- BACK -->
        <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-800 text-white rounded-3xl flex flex-col justify-center items-center px-6 text-center [transform:rotateY(180deg)] backface-hidden">
          <p class="italic text-base md:text-lg mb-4">"{char.quote}"</p>
          <h3 class="text-xl md:text-2xl font-bold">— {char.name}</h3>
        </div>
      </div>
    </div>
  {/each}
</section>

<!-- SUBJECTS SECTION -->
<section class="min-h-screen px-4 md:px-8 lg:px-12 py-8 md:py-0">
  <!-- Judul -->
  <div class="text-center mb-12">
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
      <span class="text-black">Mata</span>
      <span class="bg-gradient-to-r from-purple-300 to-purple-500 text-white px-3 py-1 ml-2 shadow-md inline-block">
        Pelajaran
      </span>
    </h1>
    <p class="text-sm md:text-base text-gray-500 mt-2">Mata Pelajaran yang sangat cocok dengan {hero.mbti}</p>
  </div>

  <!-- Kartu -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each subjects as s}
      <div
        class="group cursor-pointer transition-all duration-500 ease-out">
        <!-- Gambar -->
        <div class="overflow-hidden">
          <img
            src={s.img}
            alt={s.name}
            class="w-full h-48 md:h-64 lg:h-[420px] object-cover transition-all duration-700 group-hover:brightness-75 group-hover:scale-[1.02]"
          />
        </div>

        <!-- Teks -->
        <div class="mt-4 px-1">
          <h2 class="text-xs md:text-sm font-semibold tracking-wider text-gray-800 group-hover:text-purple-400 transition-colors duration-300">
            {s.name}
          </h2>
          <p class="text-xs md:text-sm text-gray-600 mt-2 leading-relaxed">
            {s.desc}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>

<section class="min-h-screen px-4 md:px-8 lg:px-12 py-8 md:py-0">
  <!-- Judul -->
  <div class="text-center mb-12 md:mb-20">
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
      <span class="bg-gradient-to-r from-purple-300 to-purple-500 text-white px-3 py-1 ml-2 shadow-md inline-block">
        Jalur
      </span>
      <span class="text-black">Karir</span>
    </h1>
    <p class="text-sm md:text-base text-gray-500 mt-2">Jalur Karir yang sesuai dengan kepribadian {hero.mbti}</p>
  </div>

  <!-- Kartu -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each career as c}
      <div
        class="group cursor-pointer transition-all duration-500 ease-out">
        <!-- Gambar -->
        <div class="overflow-hidden">
          <img
            src={c.img}
            alt={c.name}
            class="w-full h-48 md:h-64 lg:h-[420px] object-cover transition-all duration-700 group-hover:brightness-75 group-hover:scale-[1.02]"
          />
        </div>

        <!-- Teks -->
        <div class="mt-4 px-1">
          <h2 class="text-xs md:text-sm font-semibold tracking-wider text-gray-800 group-hover:text-purple-400 transition-colors duration-300">
            {c.name}
          </h2>
          <p class="text-xs md:text-sm text-gray-600 mt-2 leading-relaxed">
            {c.desc}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>
</div>

<!-- Footer -->
<footer class="text-center mt-8 md:mt-12 text-xs md:text-sm text-gray-500 px-4">
    <hr class="my-4" />
    <p>"Pemimpin sejati tidak hanya membuat keputusan—mereka menggerakkan orang lain untuk mencapai potensi mereka yang sebenarnya."</p>
    <p class="mt-2">© 2025 MBTI PopCulture Project</p>
</footer>






<style>
  h1 {
    font-family: Sans;
  }
  .sans {
    font-family: Sans;
    letter-spacing: 2px;
  }
  .helvetica {
    font-family: Helvetic;
  }
  .poppins {
    font-family: Poppins;
  }
  .handwrite {
    font-family: Handwrite;
  }

  .rotate-y-180 {
  transform: rotateY(180deg);
  }

</style>
