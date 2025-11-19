<script>
  const hero = 
  { 
    logo : './image/logo-mbti-web.png',
    herowp : "background-image: url('./image/enfj-folder/wallpaper.png');",
    mbti : "ENFJ",
    alias : "The Protagonist",
    desc : "ENFJ adalah penggerak pemikiran yang hangat dan karismatik. Mereka mencari potensi, koneksi, serta cara paling kuat untuk membangun masa depan yang memberdayakan banyak orang.",
    icon1 : "Extrovert",
    icon2 : "Intuition",
    icon3 : "Feeling",
    icon4 : "Judging",
    mbticon : "./image/mbti-illustration/ENFJ.png"
  }
  const description = [
    {
      id : "intj",
      header : "ENFJ",
      desc : "ENFJ, kamu adalah pribadi yang hangat, suportif, dan punya dorongan kuat untuk membantu orang lain berkembang. Kamu cepat menangkap suasana, peka terhadap kebutuhan sekitar, dan biasanya menjadi sosok yang membuat kelompok terasa lebih nyaman dan terarah. Kamu punya kemampuan interpersonal yang kuat, tapi juga punya visi besar tentang bagaimana orang bisa tumbuh ke arah yang lebih baik. Kamu bukan hanya peduli — kamu ingin membuat perubahan nyata, dan itu yang membuatmu menonjol.",
      position : "text-align: left;",
    },
    {
      id : "theanalyst",
      header : "The Protagonist",
      desc : "ENFJ mendapat julukan ini karena kamu sering muncul sebagai figur yang menggerakkan, mengajak, dan menginspirasi. Kamu punya kombinasi empati, leadership, dan visi yang membuatmu terlihat seperti “tokoh utama” dalam dinamika sosial. Kamu bukan memimpin karena ingin mengatur, tapi karena kamu benar-benar ingin semua orang mencapai potensi terbaiknya.",
      position : "text-align: center;",
    },
    {
      id : "introvert",
      header : "Extrovert",
      desc : "Kamu termasuk ekstrovert karena energi kamu naik ketika berinteraksi dengan orang lain. Kamu suka membangun hubungan, mendengarkan cerita, atau membimbing seseorang. Kamu mudah terlibat dalam percakapan bermakna, dan dunia luar memberi kamu banyak inspirasi untuk bertindak. Kamu tidak sekadar “suka keramaian”; kamu tumbuh dengan bekerja sama dan merasa hidup ketika koneksi itu terbentuk.",
      position : "text-align: right;",
    },
    {
      id : "intuitive",
      header : "Intuition",
      desc : "Kamu bergerak berdasarkan gagasan besar, pola, dan makna jangka panjang, bukan detail yang kelihatan di permukaan. Kamu sering melihat potensi seseorang sebelum orang itu menyadarinya. Kamu juga cepat membaca konteks emosional dan memikirkan dampak jangka panjang dari suatu tindakan. Ini membuatmu lebih fokus pada “apa yang bisa terjadi” daripada “apa yang sedang terjadi di depan mata.”",
      positions : "text-align: left;",
    },
    {
      id : "thinking",
      header : "Feeling",
      desc : "Kamu mengambil keputusan dengan mempertimbangkan nilai personal, empati, dan dampak emosional pada orang lain. Bukan berarti kamu tidak logis—kamu bisa logis kalau perlu—tapi prioritas utamamu adalah memastikan keputusanmu tetap manusiawi. Kamu ingin keharmonisan, keadilan emosional, dan keputusan yang menjaga hubungan tetap baik.",
      position : "text-align: center;",
    },
    {
      id : "judging",
      header : "Judging",
      desc : "Kamu menikmati kejelasan, struktur, dan rencana yang bisa diikuti. Kamu suka membuat tujuan, menetapkan langkah-langkahnya, lalu memastikan semua orang bisa bergerak bersama. Kamu tidak harus kaku, tapi kamu nyaman ketika arah hidupmu jelas. Kamu lebih suka menyelesaikan sesuatu tepat waktu dan memastikan semuanya selaras dengan visi yang kamu pegang.",
      position : "text-align: right;",
    },
    
    
  ]
  const songs = [
  { 
    img: './image/enfj-folder/music1.jpg', 
    title: "Blank Space", 
    artist: "Taylor Swift" 
  },
  { img: './image/enfj-folder/music2.jpg',
    title: "Birds Of A Feather", 
    artist: "Billie Eilish" 
  },
  { img: './image/enfj-folder/music3.jpg',
    title: "Matilda", 
    artist: "Harry Styles" 
  },
  { img: './image/enfj-folder/music4.jpg', 
    title: "Happier", 
    artist: "Marshmello" 
  }
  ]
  const characters = [
  {
    name: 'All Might',
    quote: 'It is not about being the strongest. It is about being a symbol.',
    img: './image/enfj-folder/char1.jpg'
  },
  {
    name: 'Moana',
    quote: 'The call isn’t out there at all. It’s inside me.',
    img: './image/enfj-folder/char2.jpg'
  },
  {
    name: 'Nelson Mandela',
    quote: 'Education is the most powerful weapon which you can use to change the world',
    img: './image/enfj-folder/char3.jpg'
  },
  {
    name: 'Princess Diana',
    quote: 'Carry out a random act of kindness, with no expectation of reward.',
    img: './image/enfj-folder/char4.jpg'
  }
];
const career = [
    {
      name: "Guru",
      desc: "Karakter suportif ENFJ menghidupkan proses belajar bermakna melalui bimbingan hangat yang menumbuhkan motivasi siswa langsung.",
      img: "./image/enfj-folder/career1.jpg",
    },
    {
      name: "Pembicara",
      desc: "Karisma kuat ENFJ memungkinkan penyampaian pesan inspiratif melalui narasi persuasif yang menggugah kesadaran banyak orang",
      img: "./image/enfj-folder/career2.jpg",
    },
    {
      name: "Aktivis Sosial",
      desc: "Kepedulian besar ENFJ mendorong tindakan nyata dalam memperjuangkan perubahan sosial melalui advokasi konsisten bermakna sekali.",
      img: "./image/enfj-folder/career3.jpg",
    },
  ];
const subjects = [
    {
      name: "Sosiologi",
      desc: "Kemampuan memahami dinamika kelompok membuat ENFJ unggul menganalisis struktur sosial melalui lensa kemanusiaan mendalam sekali.",
      img: "./image/enfj-folder/mapel1.jpg",
    },
    {
      name: "Bahasa Indonesia",
      desc: "Keterampilan komunikasi ENFJ mendukung penyampaian gagasan jelas melalui struktur bahasa yang terarah hangat dan mendalam",
      img: "./image/enfj-folder/mapel2.jpg",
    },
    {
      name: "Pendidikan Pancasila",
      desc: "Nilai kepedulian ENFJ selaras dengan pembelajaran kewarganegaraan yang menekankan empati sosial tanggung jawab bersama kolektif.",
      img: "./image/enfj-folder/mapel3.jpg",
    },
  ];
let open = false;
</script>

<!-- Page Container  -->

<div class="px-4 pt-1 md:p-5 space-y-8">

<nav class="navbar will-change-transform px-6 md:px-10 w-full rounded-lg py-3 flex items-center justify-between outline mt-2 outline-black shadow-md hover:shadow-green-700 duration-300 bg-white">
  
  <!-- Logo -->
  <div>
    <a href="/">
		  <img src={hero.logo} class="h-10 md:h-12 w-auto" alt="MBTI Logo" />
	  </a>
  </div>

  <!-- Desktop Menu -->
  <div class="hidden md:flex justify-center gap-6 items-center">
    <a href="/test" class="font-semibold text-accent hover:text-green-800 duration-300">Personality Test</a>
    <a href="/types" class="font-semibold text-accent hover:text-green-800 duration-300">Personality Type</a>
    <a href="/theory" class="font-semibold text-accent hover:text-green-800 duration-300">Science Behind</a>
    <a href="#label" class="font-semibold text-accent hover:text-green-800 duration-300">The Journey</a>
  </div>

  <!-- Desktop Action Buttons -->
  <div class="hidden md:flex items-center gap-3">
    <a href="/test">
      <button class="btn border-black text-black items-center hover:btn-primary hover:text-green-300 hover:shadow-green-700 hover:shadow-md">
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
  <div class="md:hidden mt-2 rounded-xl shadow-md outline hover:shadow-green-700 outline-black bg-white px-6 py-4 space-y-4">
    
    <!-- Menu Items -->
    <div class="flex flex-col gap-4">
      <a href="/test" class="font-semibold text-accent hover:text-green-600 duration-200">Personality Test</a>
      <a href="/types" class="font-semibold text-accent hover:text-green-600 duration-200">Personality Type</a>
      <a href="/theory" class="font-semibold text-accent hover:text-green-600 duration-200">Science Behind</a>
      <a href="#label" class="font-semibold text-accent hover:text-green-600 duration-200">The Journey</a>
    </div>

    <!-- Actions -->
    <div class="flex flex-col gap-3 pt-4">
      <a href="/test">
        <button class="btn border-black text-black items-center hover:btn-primary hover:text-green-300 hover:shadow-green-600 hover:shadow-md">
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
      <div class="text-green-600 w-full md:w-[55%] space-y-4 text-center md:text-left">
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
    <a href="#intj" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-green-500 text-sm md:text-lg font-bold">{hero.mbti}</a>
    <a href="#theanalyst" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-green-500 text-sm md:text-lg font-bold">{hero.alias}</a>
    <a href="#introvert" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-green-500 text-sm md:text-lg font-bold">{hero.icon1}</a>
    <a href="#intuitive" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-green-500 text-sm md:text-lg font-bold">{hero.icon2}</a>
    <a href="#thinking" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-green-500 text-sm md:text-lg font-bold">{hero.icon3}</a>
    <a href="#judging" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-green-500 text-sm md:text-lg font-bold">{hero.icon4}</a>
  </div>
</section>

<!-- Content Details -->

<section>
  {#each description as de}
    <div id={de.id} class="mb-12 md:mb-20">
      <h1 class="text-3xl md:text-5xl lg:text-6xl helvetica font-black text-black/90 px-4 md:px-8 pb-4 mb-4 border-b-3 border-green-600" style={de.position}>{de.header}</h1>
      <p class="text-base md:text-lg lg:text-xl helvetica text-black/70 px-4 md:px-0">{de.desc}</p>
    </div>
  {/each}
</section>

<!-- Content Lagu -->

<section class="px-4 md:px-8 py-8 md:py-12 flex flex-col items-center">
  <!-- Header -->
  <div class="relative inline-block mb-8 md:mb-10 group">
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none pb-2 text-green-500 relative">Songs<span
        class="absolute bottom-0 left-0 w-0 h-[4px] bg-green-500 transition-all duration-500 group-hover:w-full"></span>
    </h2>
  </div>

  <!-- Flex Album List -->
  <div
    class="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mt-6 flex-wrap"
  >
    {#each songs as song}
      <div
        class="flex flex-col items-center text-center group p-5 rounded-xl transition duration-300 hover:bg-green-500/10 hover:shadow-xl w-full md:w-auto"
      >
        <img
          src={song.img}
          alt={song.title}
          class="w-40 md:w-48 lg:w-64 h-40 md:h-48 lg:h-64 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
        />
        <div class="mt-4">
          <h3
            class="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-green-500 transition-colors duration-300"
          >
            {song.title}
          </h3>
          <p class="text-sm md:text-base text-gray-500 group-hover:text-green-400 transition-colors">
            {song.artist}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- CHARACTERS SECTION -->
<div class="flex mb-8 md:mb-1 justify-center w-full group">
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center tracking-tight leading-none pb-2 text-green-500 relative">Characters<span
        class="absolute bottom-0 left-0 w-0 h-[4px] bg-green-500 transition-all duration-500 group-hover:w-full"></span>
    </h2>
  </div>
<section class="flex flex-wrap justify-center gap-6 md:gap-10 py-12 md:py-16 px-4 md:px-0">
  
  {#each characters as char}
    <div class="group [perspective:1000px] cursor-pointer">
      <div class="relative w-56 md:w-64 lg:w-72 h-80 md:h-96 lg:h-[420px] [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
      <!-- FRONT -->
        <div class="absolute inset-0 rounded-3xl overflow-hidden shadow-xl bg-green-700/10 border border-green-200 backface-hidden">
          <img src={char.img} alt={char.name} class="w-full h-full object-cover" />
        </div>


      <!-- BACK -->
        <div class="absolute inset-0 bg-gradient-to-br from-green-500 to-green-800 text-white rounded-3xl flex flex-col justify-center items-center px-6 text-center [transform:rotateY(180deg)] backface-hidden">
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
      <span class="bg-gradient-to-r from-green-300 to-green-500 text-white px-3 py-1 ml-2 shadow-md inline-block">
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
          <h2 class="text-xs md:text-sm font-semibold tracking-wider text-gray-800 group-hover:text-green-400 transition-colors duration-300">
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
      <span class="bg-gradient-to-r from-green-300 to-green-500 text-white px-3 py-1 ml-2 shadow-md inline-block">
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
          <h2 class="text-xs md:text-sm font-semibold tracking-wider text-gray-800 group-hover:text-green-400 transition-colors duration-300">
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
    <p>"Memberdayakan orang lain adalah cara saya menunjukkan kepedulian. Setiap orang memiliki potensi, dan saya ingin melihatnya bersinar."</p>
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


<!-- <section class="backdrop-blur-md rounded-xl overflow-hidden bg-black shadow-lg mb-10 shadow-black" style="background-image: url(./image/intj-folder/hero-wallpaper.jpg);">

  <div class="flex gap-6 justify-evenly p-6">

    <div class=" w-56 backdrop-blur-lg hover:shadow-black hover:shadow-lg h-auto rounded-xl shadow-md transition-all duration-200 text-white" style="background-color: #580a4bff">
      <div class="p-4 flex flex-col items-center text-center">
        <img src="./image/intj-folder/music-coolio.jpg" alt="Everything I Wanted" class="w-32 h-32 object-cover rounded-lg mb-4 shadow-md" />
        <h3 class="font-semibold text-lg">Gangsta Paradise</h3>
        <p class="text-sm text-gray-300">Coolio</p>
      </div>
    </div>

    <div class=" w-56 hover:shadow-black hover:shadow-lg h-auto rounded-xl shadow-md transition-all duration-200 text-white" style="background-color: #000000ff">
      <div class="p-4 flex flex-col items-center text-center">
        <img src="./image/intj-folder/music-neighborhood.jpg" alt="From the Start" class="w-32 h-32 object-cover rounded-lg mb-4 shadow-md" />
        <h3 class="font-semibold text-lg">Private</h3>
        <p class="text-sm text-gray-300">The Neighborhood</p>
      </div>
    </div>
    <div class=" w-44 flex justify-center items-center">
      <p class=" text-5xl">🎧</p>
    </div>

    <div class=" w-56 hover:shadow-black hover:shadow-lg h-auto rounded-xl shadow-md transition-all duration-200 text-white" style="background-color: #ff824cff">
      <div class="p-4 flex flex-col items-center text-center">
        <img src="./image/intj-folder/music-taylor.jpg" alt="Apocalypse" class="w-32 h-32 object-cover rounded-lg mb-4 shadow-md" />
        <h3 class="font-semibold text-lg">Midnight</h3>
        <p class="text-sm text-gray-300">Taylor Swift</p>
      </div>
    </div>

    <div class=" w-56 hover:shadow-black hover:shadow-lg h-auto rounded-xl shadow-md transition-all duration-200 text-white" style="background-color: #0021ddff">
      <div class="p-4 flex flex-col items-center text-center">
        <img src="./image/intj-folder/music-tvgirl.jpg" alt="Apocalypse" class="w-32 h-32 object-cover rounded-lg mb-4 shadow-md" />
        <h3 class="font-semibold text-lg">Cigarettes Out The window</h3>
        <p class="text-sm text-gray-300">TV Girl</p>
      </div>
    </div>
  </div>
</section> -->
<!-- <section>
  <div id="intj" class=" mb-20">
    <h1 class=" text-6xl text-left helvetica font-black text-black/90 px-8 pb-4 mb-4 border-b-3 border-blue-600">{hero.mbti}</h1>
  <p class=" text-xl helvetica text-black/70">Kadang, jadi introvert itu kayak hidup di dua dunia — satu yang penuh suara di luar sana, dan satu lagi yang sunyi tapi hangat di dalam kepala sendiri. Banyak orang kira kamu pendiam, padahal kamu cuma milih diam karena tahu nggak semua hal perlu dijawab. Kamu lebih suka memperhatikan, nyimak, dan mikir dulu sebelum ngomong, karena di pikiranmu udah kayak labirin ide dan perasaan yang nggak bisa dijelaskan dalam satu kalimat. Bukan berarti kamu antisosial, kamu cuma butuh ruang buat recharge, bukan sorotan. Ada kalanya kamu ikut nongkrong, tapi setelah itu pengin langsung pulang dan rebahan sambil denger musik, karena di sanalah kamu bisa jadi dirimu sendiri tanpa harus pura-pura nyambung sama obrolan yang nggak kamu nikmati. Orang sering salah paham, ngira kamu nggak peduli, padahal kamu justru yang paling peka — kamu ngerasain suasana, nyadar kalau ada yang lagi nggak enak hati, tapi kamu milih diem karena kamu tahu kadang diam bisa lebih menenangkan daripada seribu kata. Kamu bukan kurang percaya diri, kamu cuma sadar kalau energi kamu berharga, dan kamu nggak mau ngabisinnya buat hal yang nggak punya makna. Jadi, kalau kamu pernah ngerasa “kok aku beda ya?”, ingat aja — bukan kamu yang terlalu tenang, tapi dunia aja yang terlalu berisik. Kamu bukan kurang ramai, kamu cuma nyaman dalam hening. Dan itu keren, karena nggak semua orang bisa tenang dalam dirinya sendiri sekuat itu.
  </p>
  </div>
  <div id="theanalyst" class=" mb-20">
    <h1 class=" text-6xl text-center helvetica font-black text-black/90 px-8 pb-4 mb-4 border-b-3 border-blue-600">{hero.alias}</h1>
  <p class=" text-xl helvetica text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error aperiam laborum rem consequatur porro dignissimos omnis ad nisi ullam hic unde maxime obcaecati nulla adipisci dolorum, doloribus in, neque perspiciatis, cum quaerat? Vitae ipsum obcaecati minima ratione magnam suscipit accusantium, porro saepe quas consequatur possimus quasi, earum necessitatibus at voluptatibus? Eius, eveniet voluptatem. Dolorem quae iusto impedit alias laboriosam magnam veniam voluptatem eligendi rerum odit in rem eius corporis aspernatur accusantium nam sunt adipisci modi, eveniet, maiores deleniti enim! Minus ab voluptate necessitatibus accusantium quod illum tenetur, deleniti dolores dolorem perspiciatis voluptas veritatis aliquam neque quibusdam fuga, dicta voluptatibus, magni dolor debitis voluptatem tempore fugit. Nesciunt enim repudiandae et officia reiciendis autem nobis.
  </p>
  </div>
  <div id="introvert" class=" mb-20">
    <h1 class=" text-6xl text-right helvetica font-black text-black/90 px-8 pb-4 mb-4 border-b-3 border-blue-600">{hero.icon1}</h1>
  <p class=" text-xl helvetica text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error aperiam laborum rem consequatur porro dignissimos omnis ad nisi ullam hic unde maxime obcaecati nulla adipisci dolorum, doloribus in, neque perspiciatis, cum quaerat? Vitae ipsum obcaecati minima ratione magnam suscipit accusantium, porro saepe quas consequatur possimus quasi, earum necessitatibus at voluptatibus? Eius, eveniet voluptatem. Dolorem quae iusto impedit alias laboriosam magnam veniam voluptatem eligendi rerum odit in rem eius corporis aspernatur accusantium nam sunt adipisci modi, eveniet, maiores deleniti enim! Minus ab voluptate necessitatibus accusantium quod illum tenetur, deleniti dolores dolorem perspiciatis voluptas veritatis aliquam neque quibusdam fuga, dicta voluptatibus, magni dolor debitis voluptatem tempore fugit. Nesciunt enim repudiandae et officia reiciendis autem nobis.
  </p>
  </div>
  <div id="intuitive" class=" mb-20">
    <h1 class=" text-6xl text-left helvetica font-black text-black/90 px-8 pb-4 mb-4 border-b-3 border-blue-600">{hero.icon2}</h1>
  <p class=" text-xl helvetica text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error aperiam laborum rem consequatur porro dignissimos omnis ad nisi ullam hic unde maxime obcaecati nulla adipisci dolorum, doloribus in, neque perspiciatis, cum quaerat? Vitae ipsum obcaecati minima ratione magnam suscipit accusantium, porro saepe quas consequatur possimus quasi, earum necessitatibus at voluptatibus? Eius, eveniet voluptatem. Dolorem quae iusto impedit alias laboriosam magnam veniam voluptatem eligendi rerum odit in rem eius corporis aspernatur accusantium nam sunt adipisci modi, eveniet, maiores deleniti enim! Minus ab voluptate necessitatibus accusantium quod illum tenetur, deleniti dolores dolorem perspiciatis voluptas veritatis aliquam neque quibusdam fuga, dicta voluptatibus, magni dolor debitis voluptatem tempore fugit. Nesciunt enim repudiandae et officia reiciendis autem nobis.
  </p>
  </div>
  <div id="thinking" class=" mb-20">
    <h1 class=" text-6xl text-center helvetica font-black text-black/90 px-8 pb-4 mb-4 border-b-3 border-blue-600">{hero.icon3}</h1>
  <p class=" text-xl helvetica text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error aperiam laborum rem consequatur porro dignissimos omnis ad nisi ullam hic unde maxime obcaecati nulla adipisci dolorum, doloribus in, neque perspiciatis, cum quaerat? Vitae ipsum obcaecati minima ratione magnam suscipit accusantium, porro saepe quas consequatur possimus quasi, earum necessitatibus at voluptatibus? Eius, eveniet voluptatem. Dolorem quae iusto impedit alias laboriosam magnam veniam voluptatem eligendi rerum odit in rem eius corporis aspernatur accusantium nam sunt adipisci modi, eveniet, maiores deleniti enim! Minus ab voluptate necessitatibus accusantium quod illum tenetur, deleniti dolores dolorem perspiciatis voluptas veritatis aliquam neque quibusdam fuga, dicta voluptatibus, magni dolor debitis voluptatem tempore fugit. Nesciunt enim repudiandae et officia reiciendis autem nobis.
  </p>
  </div>
  <div>
    <h1 id="judging" class=" text-6xl text-right helvetica font-black text-black/90 px-8 pb-4 mb-4 border-b-3 border-blue-600">{hero.icon4}</h1>
  <p class=" text-xl helvetica text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error aperiam laborum rem consequatur porro dignissimos omnis ad nisi ullam hic unde maxime obcaecati nulla adipisci dolorum, doloribus in, neque perspiciatis, cum quaerat? Vitae ipsum obcaecati minima ratione magnam suscipit accusantium, porro saepe quas consequatur possimus quasi, earum necessitatibus at voluptatibus? Eius, eveniet voluptatem. Dolorem quae iusto impedit alias laboriosam magnam veniam voluptatem eligendi rerum odit in rem eius corporis aspernatur accusantium nam sunt adipisci modi, eveniet, maiores deleniti enim! Minus ab voluptate necessitatibus accusantium quod illum tenetur, deleniti dolores dolorem perspiciatis voluptas veritatis aliquam neque quibusdam fuga, dicta voluptatibus, magni dolor debitis voluptatem tempore fugit. Nesciunt enim repudiandae et officia reiciendis autem nobis.
  </p>
  </div>
  
</section> -->