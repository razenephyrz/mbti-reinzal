<script>
  const hero = 
  { 
    logo : './image/logo-mbti-web.png',
    herowp : "background-image: url('./image/estj-folder/wallpaper.png');",
    mbti : "ESTJ",
    alias : "The Executive",
    desc : "ESTJ adalah pengarah sistem yang tegas dan terorganisir. Mereka mencari efisiensi, kejelasan prosedur, serta cara paling efektif untuk menata struktur besar agar berfungsi disiplin, kuat, dan dapat diandalkan.",
    icon1 : "Extrovert",
    icon2 : "Sensing",
    icon3 : "Thinking",
    icon4 : "Judging",
    mbticon : "./image/mbti-illustration/ESTJ.png"
  }
  const description = [
    {
      id : "intj",
      header : "ESTJ",
      desc : "ESTJ, kamu adalah pribadi yang tegas, terorganisir, dan sangat fokus pada efisiensi serta keteraturan. Kamu suka memastikan segala sesuatu berjalan sesuai aturan, rencana, dan standar yang jelas. Kamu bukan hanya tahu apa yang harus dilakukan—kamu bergerak cepat untuk mengeksekusinya. Kamu melihat dunia sebagai sesuatu yang membutuhkan struktur yang kuat, keputusan yang konsisten, dan langkah nyata yang membawa hasil. Kamu dikenal sebagai seseorang yang dapat diandalkan untuk memimpin, mengatur, dan menjaga stabilitas dalam berbagai situasi",
      position : "text-align: left;",
    },
    {
      id : "theanalyst",
      header : "The Executive",
      desc : "ESTJ mendapat julukan ini karena kamu secara alami berperan sebagai pengarah, pengelola, dan pengawas sistem agar semuanya berjalan dengan rapi. Kamu ahli dalam menyusun prosedur, menetapkan standar, dan memastikan orang-orang mengikuti jalur yang benar. Kamu menyukai ketegasan, kejelasan, dan tata aturan karena semua itu menciptakan lingkungan yang stabil dan efisien. Kamu seperti tulang punggung yang menjaga agar segalanya tetap berjalan tanpa hambatan",
      position : "text-align: center;",
    },
    {
      id : "introvert",
      header : "Extrovert",
      desc : "Kamu extravert karena kamu mendapat energi lewat interaksi sosial, diskusi langsung, dan aktivitas yang melibatkan banyak orang. Kamu merasa lebih hidup ketika bisa berada di lapangan, memberi arahan, atau menyatukan orang dalam sebuah tujuan bersama. Kamu tidak ragu mengambil alih situasi dan membuat keputusan yang diperlukan. Lingkungan sosial menjadi tempat kamu mempraktikkan kepemimpinan alami yang kamu miliki.",
      position : "text-align: right;",
    },
    {
      id : "intuitive",
      header : "Sensing",
      desc : "Kamu sensing karena kamu berfokus pada fakta konkret, prosedur jelas, dan detail praktis yang bisa diamati. Kamu lebih percaya pada pengalaman nyata daripada teori spekulatif. Kamu mengandalkan data, langkah terstruktur, dan bukti yang jelas ketika menyelesaikan tugas. Bagimu, pendekatan yang teruji lebih dapat diandalkan dibanding ide-ide abstrak yang belum terbukti",
      positions : "text-align: left;",
    },
    {
      id : "thinking",
      header : "Thinking",
      desc : "Kamu thinking karena kamu mengambil keputusan berdasarkan logika, objektivitas, dan pertimbangan rasional. Kamu menghargai kejelasan, keadilan yang konsisten dengan aturan, serta hasil yang efisien. Dalam situasi sulit, kamu memilih solusi yang paling logis meskipun mungkin terasa tegas. Kamu percaya bahwa struktur dan ketegasan menghasilkan hasil yang lebih stabil dan dapat diprediksi.",
      position : "text-align: center;",
    },
    {
      id : "judging",
      header : "Judging",
      desc : "Kamu judging karena kamu suka rencana yang jelas, jadwal yang teratur, dan kemajuan yang terukur. Kamu tidak nyaman dengan kekacauan, ketidakpastian, atau proses yang tidak memiliki arah. Kamu menyukai keputusan yang cepat dan sistem yang rapi sehingga segala sesuatu bisa bergerak efektif. Bagimu, keteraturan adalah dasar dari produktivitas.",
      position : "text-align: right;",
    },
    
    
  ]
  const songs = [
  { 
    img: './image/estj-folder/music1.jpg', 
    title: "Ferrari", 
    artist: "The Neighbourhood" 
  },
  { img: './image/estj-folder/music2.jpg',
    title: "Kill This Love", 
    artist: "BLACKPINK" 
  },
  { img: './image/estj-folder/music3.jpg',
    title: "Money", 
    artist: "The Beatles" 
  },
  { img: './image/estj-folder/music4.jpg', 
    title: "Shut Up", 
    artist: "Ariana Grande" 
  }
  ]
  const characters = [
  {
    name: 'Mulan',
    quote: 'Courage means taking action when responsibility calls your name.',
    img: './image/estj-folder/char1.jpg'
  },
  {
    name: 'Li Shang',
    quote: 'Strength comes from discipline, strategy, and leading by example.',
    img: './image/estj-folder/char2.jpg'
  },
  {
    name: 'Dwight Eisenhower',
    quote: 'Planning well ensures success long before the battle begins.',
    img: './image/estj-folder/char3.jpg'
  },
  {
    name: 'Indra Nooyi',
    quote: 'Leadership demands clarity, structure, and relentless hard work.',
    img: './image/estj-folder/char4.jpg'
  }
];
const career = [
    {
      name: "Kepala Sekolah",
      desc: "Kepemimpinan tegas ESTJ mengarahkan manajemen sekolah melalui keputusan jelas yang menjaga disiplin serta efisiensi",
      img: "./image/estj-folder/career1.jpg",
    },
    {
      name: "Manajer Proyek",
      desc: "Organisasi kuat ESTJ mengawal proyek selesai tepat waktu melalui koordinasi sistematis yang memastikan setiap detail terkontrol",
      img: "./image/estj-folder/career2.jpg",
    },
    {
      name: "Tentara",
      desc: "Organisasi kuat ESTJ mengawal proyek selesai tepat waktu melalui koordinasi sistematis yang memastikan setiap detail terkontrol.",
      img: "./image/estj-folder/career3.jpg",
    },
  ];
const subjects = [
    {
      name: "Pendidikan Pancasila",
      desc: "Sikap tegas ESTJ mendukung pemahaman kewarganegaraan melalui nilai kedisiplinan serta kepatuhan terhadap aturan berlaku bersama",
      img: "./image/estj-folder/mapel1.jpg",
    },
    {
      name: "Ekonomi",
      desc: "Logika praktis ESTJ cocok mempelajari alur ekonomi melalui analisis efisiensi dan pengelolaan sumber daya terencana.",
      img: "./image/estj-folder/mapel2.jpg",
    },
    {
      name: "Matematika",
      desc: "Struktur berpikir jernih ESTJ memudahkan perhitungan numerik melalui langkah rasional yang teratur sistematis konsisten",
      img: "./image/estj-folder/mapel3.jpg",
    },
  ];
let open = false;
</script>

<!-- Page Container  -->

<div class="px-4 pt-1 md:p-5 space-y-8">

<nav class="navbar will-change-transform px-6 md:px-10 w-full rounded-lg py-3 flex items-center justify-between outline mt-2 outline-black shadow-md hover:shadow-blue-700 duration-300 bg-white">
  
  <!-- Logo -->
  <div>
    <a href="/">
		  <img src={hero.logo} class="h-10 md:h-12 w-auto" alt="MBTI Logo" />
	  </a>
  </div>

  <!-- Desktop Menu -->
  <div class="hidden md:flex justify-center gap-6 items-center">
    <a href="/test" class="font-semibold text-accent hover:text-blue-800 duration-300">Personality Test</a>
    <a href="/types" class="font-semibold text-accent hover:text-blue-800 duration-300">Personality Type</a>
    <a href="/theory" class="font-semibold text-accent hover:text-blue-800 duration-300">Science Behind</a>
    <a href="#label" class="font-semibold text-accent hover:text-blue-800 duration-300">The Journey</a>
  </div>

  <!-- Desktop Action Buttons -->
  <div class="hidden md:flex items-center gap-3">
    <a href="/test">
      <button class="btn border-black text-black items-center hover:btn-primary hover:text-blue-300 hover:shadow-blue-700 hover:shadow-md">
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
  <div class="md:hidden mt-2 rounded-xl shadow-md outline hover:shadow-blue-700 outline-black bg-white px-6 py-4 space-y-4">
    
    <!-- Menu Items -->
    <div class="flex flex-col gap-4">
      <a href="/test" class="font-semibold text-accent hover:text-blue-600 duration-200">Personality Test</a>
      <a href="/types" class="font-semibold text-accent hover:text-blue-600 duration-200">Personality Type</a>
      <a href="/theory" class="font-semibold text-accent hover:text-blue-600 duration-200">Science Behind</a>
      <a href="#label" class="font-semibold text-accent hover:text-blue-600 duration-200">The Journey</a>
    </div>

    <!-- Actions -->
    <div class="flex flex-col gap-3 pt-4">
      <a href="/test">
        <button class="btn border-black text-black items-center hover:btn-primary hover:text-blue-300 hover:shadow-blue-600 hover:shadow-md">
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
      <div class="text-blue-600 w-full md:w-[55%] space-y-4 text-center md:text-left">
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
    <a href="#intj" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-blue-500 text-sm md:text-lg font-bold">{hero.mbti}</a>
    <a href="#theanalyst" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-blue-500 text-sm md:text-lg font-bold">{hero.alias}</a>
    <a href="#introvert" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-blue-500 text-sm md:text-lg font-bold">{hero.icon1}</a>
    <a href="#intuitive" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-blue-500 text-sm md:text-lg font-bold">{hero.icon2}</a>
    <a href="#thinking" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-blue-500 text-sm md:text-lg font-bold">{hero.icon3}</a>
    <a href="#judging" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-blue-500 text-sm md:text-lg font-bold">{hero.icon4}</a>
  </div>
</section>

<!-- Content Details -->

<section>
  {#each description as de}
    <div id={de.id} class="mb-12 md:mb-20">
      <h1 class="text-3xl md:text-5xl lg:text-6xl helvetica font-black text-black/90 px-4 md:px-8 pb-4 mb-4 border-b-3 border-blue-600" style={de.position}>{de.header}</h1>
      <p class="text-base md:text-lg lg:text-xl helvetica text-black/70 px-4 md:px-0">{de.desc}</p>
    </div>
  {/each}
</section>

<!-- Content Lagu -->

<section class="px-4 md:px-8 py-8 md:py-12 flex flex-col items-center">
  <!-- Header -->
  <div class="relative inline-block mb-8 md:mb-10 group">
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none pb-2 text-blue-500 relative">Songs<span
        class="absolute bottom-0 left-0 w-0 h-[4px] bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
    </h2>
  </div>

  <!-- Flex Album List -->
  <div
    class="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mt-6 flex-wrap"
  >
    {#each songs as song}
      <div
        class="flex flex-col items-center text-center group p-5 rounded-xl transition duration-300 hover:bg-blue-500/10 hover:shadow-xl w-full md:w-auto"
      >
        <img
          src={song.img}
          alt={song.title}
          class="w-40 md:w-48 lg:w-64 h-40 md:h-48 lg:h-64 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
        />
        <div class="mt-4">
          <h3
            class="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-500 transition-colors duration-300"
          >
            {song.title}
          </h3>
          <p class="text-sm md:text-base text-gray-500 group-hover:text-blue-400 transition-colors">
            {song.artist}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- CHARACTERS SECTION -->
<div class="flex mb-8 md:mb-1 justify-center w-full group">
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center tracking-tight leading-none pb-2 text-blue-500 relative">Characters<span
        class="absolute bottom-0 left-0 w-0 h-[4px] bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
    </h2>
  </div>
<section class="flex flex-wrap justify-center gap-6 md:gap-10 py-12 md:py-16 px-4 md:px-0">
  
  {#each characters as char}
    <div class="group [perspective:1000px] cursor-pointer">
      <div class="relative w-56 md:w-64 lg:w-72 h-80 md:h-96 lg:h-[420px] [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
      <!-- FRONT -->
        <div class="absolute inset-0 rounded-3xl overflow-hidden shadow-xl bg-green-700/10 border border-blue-200 backface-hidden">
          <img src={char.img} alt={char.name} class="w-full h-full object-cover" />
        </div>


      <!-- BACK -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-800 text-white rounded-3xl flex flex-col justify-center items-center px-6 text-center [transform:rotateY(180deg)] backface-hidden">
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
      <span class="bg-gradient-to-r from-blue-300 to-blue-500 text-white px-3 py-1 ml-2 shadow-md inline-block">
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
          <h2 class="text-xs md:text-sm font-semibold tracking-wider text-gray-800 group-hover:text-blue-400 transition-colors duration-300">
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
      <span class="bg-gradient-to-r from-blue-300 to-blue-500 text-white px-3 py-1 ml-2 shadow-md inline-block">
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
          <h2 class="text-xs md:text-sm font-semibold tracking-wider text-gray-800 group-hover:text-blue-400 transition-colors duration-300">
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
    <p>"Aturan ada untuk alasan—struktur menciptakan ketertiban, dan ketertiban menciptakan kesuksesan yang terukur dan nyata."</p>
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