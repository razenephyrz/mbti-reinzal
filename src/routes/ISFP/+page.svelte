<script>
  const hero = 
  { 
    logo : './image/logo-mbti-web.png',
    herowp : "background-image: url('./image/esfp-folder/wallpaper.png');",
    mbti : "ISFP",
    alias : "The Adventurer",
    desc : "ISFP adalah penjelajah keindahan yang lembut dan spontan. Mereka mencari pengalaman personal, ekspresi asli, serta jalan paling natural untuk merayakan momen lewat kreativitas yang hidup dan penuh perasaan.",
    icon1 : "Introvert",
    icon2 : "Sensing",
    icon3 : "Feeling",
    icon4 : "Perceiving",
    mbticon : "./image/mbti-illustration/ISFP.png"
  }
  const description = [
    {
      id : "intj",
      header : "ISFP",
      desc : "ISFP, kamu adalah pribadi yang lembut, artistik, dan sangat spontan dalam mengekspresikan diri. Kamu cenderung menikmati momen, mengikuti alur, dan menemukan keindahan dalam hal-hal kecil yang sering dilewatkan orang lain. Kamu bukan tipe yang suka aturan kaku—kamu lebih memilih kebebasan untuk bergerak sesuai ritme dan intuisi pribadi. Kamu melihat dunia sebagai kanvas besar yang penuh warna, tekstur, dan pengalaman yang pantas dirasakan secara langsung. Kamu tenang, sensitif, tetapi juga penuh kejutan ketika sudah masuk ke zona kreativitasmu.",
      position : "text-align: left;",
    },
    {
      id : "theanalyst",
      header : "The Adventurer",
      desc : "ISFP mendapat julukan ini karena kamu suka menjelajahi pengalaman baru, bereksperimen dengan gaya hidup yang unik, dan mengekspresikan nilai serta perasaanmu melalui tindakan nyata. Kamu punya sense estetika yang kuat—entah dalam seni, musik, fashion, atau bahkan cara kamu menyusun ruang. Kamu tidak membangun koneksi hanya lewat kata-kata, tetapi lewat aksi, empati, dan kehadiran yang hangat. Kamu tipe penjelajah yang pendiam namun sangat hidup dalam pengalaman",
      position : "text-align: center;",
    },
    {
      id : "introvert",
      header : "Introvert",
      desc : "Kamu introvert karena kamu lebih nyaman memproses perasaan dan inspirasi dalam ruang pribadimu. Kamu perlu waktu sendiri untuk recharge, merenung, dan menciptakan sesuatu yang bermakna. Interaksi sosial sebenarnya bisa kamu nikmati, tetapi jika terlalu intens akan membuatmu mudah lelah. Kamu lebih suka hubungan yang tulus dan intim dibanding keramaian yang berisik.",
      position : "text-align: right;",
    },
    {
      id : "intuitive",
      header : "Sensing",
      desc : "Kamu sensing karena kamu hidup sangat dekat dengan pengalaman fisik dan detail sensorik. Kamu memperhatikan tekstur, warna, suasana, dan nuansa kecil yang membuat suatu pengalaman terasa “hidup”. Kamu cenderung fokus pada apa yang ada di depan mata, bukan kemungkinan abstrak. Kamu terhubung dengan dunia melalui panca indera, dan itu membuatmu sangat peka terhadap vibe sebuah tempat atau situasi.",
      positions : "text-align: left;",
    },
    {
      id : "thinking",
      header : "Feeling",
      desc : "Kamu feeling karena kamu membuat keputusan berdasarkan nilai pribadi, empati, dan apa yang terasa benar di hati. Kamu tidak suka memaksakan diri mengikuti logika kaku yang mengabaikan sisi manusiawi. Kamu mempertimbangkan perasaan orang lain, menghargai kebebasan tiap individu, dan cenderung memilih jalan yang selaras dengan nilai serta keaslian dirimu. Emosi bukan kelemahan—itu kompas yang membimbingmu",
      position : "text-align: center;",
    },
    {
      id : "judging",
      header : "Perceiving",
      desc : "Kamu perceiving karena kamu fleksibel, spontan, dan tidak suka dikungkung oleh jadwal ataupun struktur yang terlalu ketat. Kamu ingin hidup mengalir, bereksplorasi, dan mengikuti intuisi sesaat yang terasa paling jujur. Kamu adaptif dalam berbagai situasi, dan mudah merasa terkekang jika harus mengikuti aturan yang kaku. Bagi kamu, pengalaman yang otentik lebih penting daripada rencana yang sempurna",
      position : "text-align: right;",
    },
    
    
  ]
  const songs = [
  { 
    img: './image/isfp-folder/music1.jpg', 
    title: "Everything I Wanted", 
    artist: "Billie Eilish" 
  },
  { img: './image/isfp-folder/music2.jpg',
    title: "Video Games", 
    artist: "Lana Del Rey" 
  },
  { img: './image/isfp-folder/music3.jpg',
    title: "Youth", 
    artist: "Troye Sivan" 
  },
  { img: './image/isfp-folder/music4.jpg', 
    title: "Sign Of Times", 
    artist: "Harry Styles" 
  }
  ]
  const characters = [
  {
    name: 'Pocahontas',
    quote: 'The world speaks softly when your heart listens openly',
    img: './image/isfp-folder/char1.jpg'
  },
  {
    name: 'Tanjiro Kamado',
    quote: 'Compassion guides my strength, even in the darkest moments',
    img: './image/isfp-folder/char2.jpg'
  },
  {
    name: 'Ed Sheeran',
    quote: 'Honest emotion creates melodies people truly feel',
    img: './image/isfp-folder/char3.jpg'
  },
  {
    name: 'Audrey Hepburn',
    quote: 'Elegance grows from kindness expressed in quiet actions',
    img: './image/isfp-folder/char4.jpg'
  }
];
const career = [
    {
      name: "Desainer Grafis",
      desc: "Kreativitas visual ISFP menghasilkan karya estetis melalui perpaduan warna lembut yang harmonis sangat ekspresif.",
      img: "./image/isfp-folder/career2.jpg",
    },
    {
      name: "Fotografer",
      desc: "ISFP menangkap momen emosional melalui sudut pandang puitis yang memperlihatkan keindahan manusia serta alam",
      img: "./image/isfp-folder/career3.jpg",
    },
    {
      name: "Seniman",
      desc: "Ekspresi batin ISFP tercurah dalam karya unik melalui kejujuran emosional yang mendalam sangat personal",
      img: "./image/isfp-folder/career1.jpg",
    },
  ];
const subjects = [
    {
      name: "Seni Budaya",
      desc: "Kepekaan artistik ISFP mengalir dalam karya visual melalui ekspresi personal yang lembut emosional sangat mendalam",
      img: "./image/isfp-folder/mapel1.jpg",
    },
    {
      name: "Bahasa Indonesia",
      desc: "ISFP mengekspresikan makna melalui bahasa kreatif yang mencerminkan perasaan halus dan imajinasi bebas mendalam",
      img: "./image/isfp-folder/mapel2.jpg",
    },
    {
      name: "Biologi",
      desc: "Kelembutan ISFP membantu memahami kehidupan melalui pengamatan detail yang menghargai keindahan alam secara utuh.",
      img: "./image/isfp-folder/mapel3.jpg",
    },
  ];
let open = false;
</script>

<!-- Page Container  -->

<div class="px-4 pt-1 md:p-5 space-y-8">

<nav class="navbar will-change-transform px-6 md:px-10 w-full rounded-lg py-3 flex items-center justify-between outline mt-2 outline-black shadow-md hover:shadow-yellow-700 duration-300 bg-white">
  
  <!-- Logo -->
  <div>
    <a href="/">
		  <img src={hero.logo} class="h-10 md:h-12 w-auto" alt="MBTI Logo" />
	  </a>
  </div>

  <!-- Desktop Menu -->
  <div class="hidden md:flex justify-center gap-6 items-center">
    <a href="/test" class="font-semibold text-accent hover:text-yellow-800 duration-300">Personality Test</a>
    <a href="/types" class="font-semibold text-accent hover:text-yellow-800 duration-300">Personality Type</a>
    <a href="/theory" class="font-semibold text-accent hover:text-yellow-800 duration-300">Science Behind</a>
    <a href="/journey" class="font-semibold text-accent hover:text-yellow-800 duration-300">The Journey</a>
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
      <a href="/journey" class="font-semibold text-accent hover:text-yellow-600 duration-200">The Journey</a>
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
      <div class="text-yellow-600 w-full md:w-[55%] space-y-4 text-center md:text-left">
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
    <a href="#intj" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-yellow-500 text-sm md:text-lg font-bold">{hero.mbti}</a>
    <a href="#theanalyst" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-yellow-500 text-sm md:text-lg font-bold">{hero.alias}</a>
    <a href="#introvert" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-yellow-500 text-sm md:text-lg font-bold">{hero.icon1}</a>
    <a href="#intuitive" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-yellow-500 text-sm md:text-lg font-bold">{hero.icon2}</a>
    <a href="#thinking" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-yellow-500 text-sm md:text-lg font-bold">{hero.icon3}</a>
    <a href="#judging" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-yellow-500 text-sm md:text-lg font-bold">{hero.icon4}</a>
  </div>
</section>

<!-- Content Details -->

<section>
  {#each description as de}
    <div id={de.id} class="mb-12 md:mb-20">
      <h1 class="text-3xl md:text-5xl lg:text-6xl helvetica font-black text-black/90 px-4 md:px-8 pb-4 mb-4 border-b-3 border-yellow-600" style={de.position}>{de.header}</h1>
      <p class="text-base md:text-lg lg:text-xl helvetica text-black/70 px-4 md:px-0">{de.desc}</p>
    </div>
  {/each}
</section>

<!-- Content Lagu -->

<section class="px-4 md:px-8 py-8 md:py-12 flex flex-col items-center">
  <!-- Header -->
  <div class="relative inline-block mb-8 md:mb-10 group">
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none pb-2 text-yellow-500 relative">Songs<span
        class="absolute bottom-0 left-0 w-0 h-[4px] bg-yellow-500 transition-all duration-500 group-hover:w-full"></span>
    </h2>
  </div>

  <!-- Flex Album List -->
  <div
    class="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mt-6 flex-wrap"
  >
    {#each songs as song}
      <div
        class="flex flex-col items-center text-center group p-5 rounded-xl transition duration-300 hover:bg-yellow-500/10 hover:shadow-xl w-full md:w-auto"
      >
        <img
          src={song.img}
          alt={song.title}
          class="w-40 md:w-48 lg:w-64 h-40 md:h-48 lg:h-64 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
        />
        <div class="mt-4">
          <h3
            class="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-yellow-500 transition-colors duration-300"
          >
            {song.title}
          </h3>
          <p class="text-sm md:text-base text-gray-500 group-hover:text-yellow-400 transition-colors">
            {song.artist}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- CHARACTERS SECTION -->
<div class="flex mb-8 md:mb-1 justify-center w-full group">
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center tracking-tight leading-none pb-2 text-yellow-500 relative">Characters<span
        class="absolute bottom-0 left-0 w-0 h-[4px] bg-yellow-500 transition-all duration-500 group-hover:w-full"></span>
    </h2>
  </div>
<section class="flex flex-wrap justify-center gap-6 md:gap-10 py-12 md:py-16 px-4 md:px-0">
  
  {#each characters as char}
    <div class="group [perspective:1000px] cursor-pointer">
      <div class="relative w-56 md:w-64 lg:w-72 h-80 md:h-96 lg:h-[420px] [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
      <!-- FRONT -->
        <div class="absolute inset-0 rounded-3xl overflow-hidden shadow-xl bg-green-700/10 border border-yellow-200 backface-hidden">
          <img src={char.img} alt={char.name} class="w-full h-full object-cover" />
        </div>


      <!-- BACK -->
        <div class="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-800 text-white rounded-3xl flex flex-col justify-center items-center px-6 text-center [transform:rotateY(180deg)] backface-hidden">
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
      <span class="bg-gradient-to-r from-yellow-300 to-yellow-500 text-white px-3 py-1 ml-2 shadow-md inline-block">
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
          <h2 class="text-xs md:text-sm font-semibold tracking-wider text-gray-800 group-hover:text-yellow-400 transition-colors duration-300">
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
      <span class="bg-gradient-to-r from-yellow-300 to-yellow-500 text-white px-3 py-1 ml-2 shadow-md inline-block">
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
          <h2 class="text-xs md:text-sm font-semibold tracking-wider text-gray-800 group-hover:text-yellow-400 transition-colors duration-300">
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
    <p>"Keindahan adalah dalam detail. Saya mengekspresikan jiwa saya melalui seni, dan saya hidup sesuai nilai-nilai yang saya pegang teguh."</p>
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
