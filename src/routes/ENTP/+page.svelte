<script>
  const hero = 
  { 
    logo : './image/logo-mbti-web.png',
    herowp : "background-image: url('./image/entp-folder/wallpaper.png');",
    mbti : "ENTP",
    alias : "The Debater",
    desc : "ENTP adalah pemantik ide yang gesit dan inovatif. Mereka mencari tantangan intelektual, kemungkinan baru, serta cara paling dinamis untuk mengguncang pola lama dan membuka ruang bagi terobosan yang radikal",
    icon1 : "Extrovert",
    icon2 : "Intuition",
    icon3 : "Thinking",
    icon4 : "Perceiving",
    mbticon : "./image/mbti-illustration/ENTP.png"
  }
  const description = [
    {
      id : "intj",
      header : "ENTP",
      desc : "ENTP, kamu adalah pribadi yang kreatif, cepat berpikir, dan selalu tertarik mengeksplorasi ide baru dari berbagai sudut pandang. Kamu tipe yang suka menantang cara pikir lama, membolak-balik argumen, dan menemukan kemungkinan yang tidak terpikirkan orang lain. Kamu bukan hanya suka berdiskusi—kamu menikmati proses bermain dengan ide, bereksperimen secara mental, dan menguji batas logika. Kamu melihat dunia sebagai ruang penuh peluang, tempat setiap konsep bisa dikembangkan, digabungkan, atau bahkan dirombak total.",
      position : "text-align: left;",
    },
    {
      id : "theanalyst",
      header : "The Debater",
      desc : "ENTP mendapat julukan ini karena kamu sangat mahir memecah argumen, mempertanyakan asumsi, dan membuka cakrawala baru melalui dialog yang intens dan penuh imajinasi. Kamu tidak berdebat demi menang; kamu berdebat untuk menemukan sesuatu yang lebih baik. Kamu punya pola pikir eksperimental—kamu mencoba berbagai ide untuk melihat mana yang paling masuk akal atau paling inovatif. Energi kamu terpancar ketika kamu bisa memicu percakapan yang menggugah, menantang batas berpikir orang lain, dan memperluas perspektif mereka.",
      position : "text-align: center;",
    },
    {
      id : "introvert",
      header : "Extrovert",
      desc : "Kamu termasuk extravert karena kamu mendapat energi dari diskusi spontan, percakapan yang dinamis, dan pertukaran ide langsung dengan orang lain. Kamu berkembang ketika ada interaksi yang cepat, penuh tanya-jawab, dan coba-coba. Lingkungan sosial menjadi ruang bermainmu, tempat kamu bisa menguji konsep dan mendapatkan insight baru. Semakin hidup suasananya, semakin cepat pula ide kamu mengalir",
      position : "text-align: right;",
    },
    {
      id : "intuitive",
      header : "Intuition",
      desc : "Kamu intuitive karena kamu berorientasi pada ide besar, kemungkinan masa depan, dan pola abstrak yang tidak selalu terlihat jelas. Kamu suka melihat apa yang mungkin, bukan sekadar apa yang ada. Kamu tidak terpaku pada tradisi atau detail konkret—justru kamu cenderung tertarik pada hal-hal unik, eksperimental, atau yang belum pernah dicoba sebelumnya. Imajinasi dan kreativitas strategis adalah salah satu kekuatan utama kamu",
      positions : "text-align: left;",
    },
    {
      id : "thinking",
      header : "Thinking",
      desc : "Kamu adalah thinking karena kamu mengambil keputusan berdasarkan logika, analisis rasional, dan argumen yang paling kuat. Kamu senang mengulik struktur pemikiran, menemukan lubang logika, dan membangun ide yang lebih kokoh. Emosi tentu kamu miliki, tetapi kamu tidak mengizinkannya mengaburkan objektivitas. Kamu menghargai kebebasan berpikir, kejujuran intelektual, dan percakapan yang menantang intelektual",
      position : "text-align: center;",
    },
    {
      id : "judging",
      header : "Perceiving",
      desc : "Kamu tergolong perceiving karena kamu fleksibel, spontan, dan suka membiarkan gagasan berkembang secara organik. Kamu tidak suka dibatasi rencana yang terlalu kaku atau aturan yang mengekang kreativitas. Kamu nyaman bergerak mengikuti aliran, menerima perubahan mendadak, dan mengubah strategi kapan pun dibutuhkan. Bagi kamu, hidup adalah proses eksplorasi—dan semakin banyak pilihan yang terbuka, semakin kamu merasa hidup.",
      position : "text-align: right;",
    },
    
    
  ]
  const songs = [
  { 
    img: './image/entp-folder/music1.jpg', 
    title: "Bang!", 
    artist: "AJR" 
  },
  { img: './image/entp-folder/music2.jpg',
    title: "Emperor's New Clothes", 
    artist: "Panic! At The Disco" 
  },
  { img: './image/entp-folder/music3.jpg',
    title: "Gooey", 
    artist: "Glass Animals" 
  },
  { img: './image/entp-folder/music4.jpg', 
    title: "Can't Hold Us", 
    artist: "Macklemore" 
  }
  ]
  const characters = [
  {
    name: 'Jack Sparrow',
    quote: 'I survive by outthinking chaos with unpredictable brilliance.',
    img: './image/entp-folder/char1.jpg'
  },
  {
    name: 'Thomas Edison',
    quote: 'Every failure sparks a new idea worth testing again',
    img: './image/entp-folder/char2.jpg'
  },
  {
    name: 'Han Solo',
    quote: 'I improvise fast, argue hard, and still trust my instincts.',
    img: './image/entp-folder/char3.jpg'
  },
  {
    name: 'Mark Twain',
    quote: 'Humor cuts deeper truths sharper than arguments ever could',
    img: './image/entp-folder/char4.jpg'
  }
];
const career = [
    {
      name: "Pengusaha",
      desc: "Kreativitas spontan ENTP mengarahkan penemuan peluang bisnis melalui pendekatan tidak konvensional yang adaptif sangat fleksibel",
      img: "./image/entp-folder/career1.jpg",
    },
    {
      name: "Inovator Produk",
      desc: "ENTP cepat menghasilkan konsep baru melalui eksplorasi ide segar yang menantang batasan pemikiran tradisional lama.",
      img: "./image/entp-folder/career2.jpg",
    },
    {
      name: "Jurnalis",
      desc: "Pemikiran cepat ENTP memudahkan penggalian informasi dari sudut berbeda sehingga menghasilkan laporan menarik sangat mendalam",
      img: "./image/entp-folder/career3.jpg",
    },
  ];
const subjects = [
    {
      name: "Sosiologi",
      desc: "Keingintahuan ENTP mendorong analisis pola sosial melalui perspektif dinamis yang menantang sudut pandang konvensional lama.",
      img: "./image/entp-folder/mapel1.jpg",
    },
    {
      name: "Bahasa Indonesia",
      desc: "Keluwesan berpikir ENTP membantu menghasilkan ekspresi verbal kreatif yang memperluas eksplorasi ide secara bebas.",
      img: "./image/entp-folder/mapel2.jpg",
    },
    {
      name: "Kewirausahaan",
      desc: "Dorongan inovatif ENTP memudahkan penciptaan peluang baru melalui eksperimen ide berani yang terus berkembang",
      img: "./image/entp-folder/mapel3.jpg",
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
    <a href="#label" class="font-semibold text-accent hover:text-purple-800 duration-300">The Journey</a>
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
      <a href="#label" class="font-semibold text-accent hover:text-purple-600 duration-200">The Journey</a>
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
    <p>"Ide adalah permainan, dan kehidupan adalah arena untuk menantang status quo dan menemukan kemungkinan baru."</p>
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