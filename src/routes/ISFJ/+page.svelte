<script>
  const hero = 
  { 
    logo : './image/logo-mbti-web.png',
    herowp : "background-image: url('./image/isfj-folder/wallpaper.png');",
    mbti : "ISFJ",
    alias : "The Defender",
    desc : "ISFJ adalah pelindung keharmonisan yang hangat dan penuh dedikasi. Mereka mencari keamanan, tradisi, serta cara paling tulus untuk merawat hubungan dan lingkungan melalui perhatian lembut yang konsisten.",
    icon1 : "Introvert",
    icon2 : "Sensing",
    icon3 : "Feeling",
    icon4 : "Judging",
    mbticon : "./image/mbti-illustration/ISFJ.png"
  }
  const description = [
    {
      id : "intj",
      header : "ISFJ",
      desc : "ISFJ, kamu adalah pribadi yang lembut, penuh perhatian, dan sangat peduli dengan kesejahteraan orang-orang di sekitarmu. Kamu cenderung bekerja dengan teliti, hati-hati, dan selalu mempertimbangkan perasaan orang lain. Kamu bukan tipe yang mencari sorotan, tetapi kontribusimu terasa jelas melalui tindakan-tindakan kecil yang penuh ketulusan. Kamu melihat dunia sebagai tempat yang membutuhkan kepedulian, stabilitas, dan keharmonisan. Kamu menjaga hal-hal penting tetap berjalan dengan baik tanpa banyak keluhan",
      position : "text-align: left;",
    },
    {
      id : "theanalyst",
      header : "The Defender",
      desc : "ISFJ mendapat julukan ini karena kamu sangat ahli melindungi, merawat, dan mendukung orang lain dengan cara yang tenang namun konsisten. Kamu seperti penjaga yang bekerja di balik layar—selalu memastikan kebutuhan orang terpenuhi, lingkungan tetap rapi, dan suasana harmonis terjaga. Kamu memiliki kemampuan untuk memperhatikan detail emosional kecil yang sering dilewatkan orang lain. Kamu menjaga, merapikan, dan menghadirkan kenyamanan dengan cara yang halus tetapi sangat bermakna",
      position : "text-align: center;",
    },
    {
      id : "introvert",
      header : "Introvert",
      desc : "Kamu introvert karena kamu lebih nyaman memproses pengalaman dalam ruang pribadi dan mengisi energi melalui kesendirian. Kamu bisa bersosialisasi, bahkan sangat hangat, tetapi terlalu banyak interaksi dapat membuatmu lelah. Kamu menyukai percakapan yang intim dan mendalam dibandingkan keramaian besar. Fokusmu lebih tertuju ke dalam—pada perasaan, pemahaman, dan observasi tenang terhadap lingkungan",
      position : "text-align: right;",
    },
    {
      id : "intuitive",
      header : "Sensing",
      desc : "Kamu sensing karena kamu berpegang pada fakta nyata, pengalaman konkret, dan detail yang dapat diamati langsung. Kamu memperhatikan hal-hal kecil yang sering dilupakan orang lain—gestur halus, perubahan suasana, atau kebutuhan yang tidak diucapkan. Kamu cenderung mengandalkan memori kuat dan pengalaman masa lalu untuk memandu keputusan. Bagimu, realitas dan kepraktisan jauh lebih penting daripada spekulasi abstrak",
      positions : "text-align: left;",
    },
    {
      id : "thinking",
      header : "Feeling",
      desc : "Kamu sensing karena kamu berpegang pada fakta nyata, pengalaman konkret, dan detail yang dapat diamati langsung. Kamu memperhatikan hal-hal kecil yang sering dilupakan orang lain—gestur halus, perubahan suasana, atau kebutuhan yang tidak diucapkan. Kamu cenderung mengandalkan memori kuat dan pengalaman masa lalu untuk memandu keputusan. Bagimu, realitas dan kepraktisan jauh lebih penting daripada spekulasi abstrak",
      position : "text-align: center;",
    },
    {
      id : "judging",
      header : "Judging",
      desc : "Kamu judging karena kamu menyukai struktur, rencana yang jelas, dan keteraturan dalam menjalani hidup. Kamu merasa aman ketika segala sesuatu terorganisir dan bisa diprediksi. Kamu suka menyelesaikan tugas tepat waktu dan tidak nyaman dengan kekacauan atau perubahan mendadak. Kestabilan dan kejelasan adalah hal penting bagi kamu, karena keduanya membantumu menjaga lingkungan tetap harmonis.",
      position : "text-align: right;",
    },
    
    
  ]
  const songs = [
  { 
    img: './image/isfj-folder/music1.jpg', 
    title: "End Of Beginning", 
    artist: "Djo" 
  },
  { img: './image/isfj-folder/music2.jpg',
    title: "Hope Ur Ok", 
    artist: "Olivia Rodrigo"
  },
  { img: './image/isfj-folder/music3.jpg',
    title: "Photograph", 
    artist: "Ed Sheeran" 
  },
  { img: './image/isfj-folder/music4.jpg', 
    title: "As It Was", 
    artist: "Harry Styles" 
  }
  ]
  const characters = [
  {
    name: 'Samwise Gamgee',
    quote: 'Loyalty means staying when others falter, no matter the cost',
    img: './image/isfj-folder/char1.jpg'
  },
  {
    name: 'Cinderella',
    quote: 'Loyalty means staying when others falter, no matter the cost',
    img: './image/isfj-folder/char2.jpg'
  },
  {
    name: 'Mother Teresa',
    quote: 'Small acts of compassion build hope stronger than grand gestures',
    img: './image/isfj-folder/char3.jpg'
  },
  {
    name: 'Florence Nightingale',
    quote: 'Care becomes powerful when guided by calm dedication',
    img: './image/isfj-folder/char4.jpg'
  }
];
const career = [
    {
      name: "Perawat",
      desc: "Empati lembut ISFJ mendukung pelayanan kesehatan penuh perhatian melalui perawatan sabar yang memastikan kenyamanan pasien.",
      img: "./image/isfj-folder/career1.jpg",
    },
    {
      name: "Guru SD",
      desc: "Kesabaran ISFJ menciptakan lingkungan belajar hangat melalui bimbingan lembut yang membantu anak memahami materi dasar.",
      img: "./image/isfj-folder/career2.jpg",
    },
    {
      name: "Sekretaris",
      desc: "Kerapian ISFJ memudahkan pengelolaan administrasi melalui penataan jadwal dan dokumen yang tersusun rapi terstruktur",
      img: "./image/isfj-folder/career3.jpg",
    },
  ];
const subjects = [
    {
      name: "Biologi",
      desc : "Kepekaan ISFJ mempermudah memahami sistem kehidupan melalui pengamatan lembut yang penuh perhatian serta ketelitian",
      img: "./image/isfj-folder/mapel1.jpg",
    },
    {
      name: "Bahasa Indonesia",
      desc: "Sikap hati-hati ISFJ mendukung penyusunan kalimat jelas melalui penggunaan bahasa yang rapi teratur sangat konsisten",
      img: "./image/isfj-folder/mapel2.jpg",
    },
    {
      name: "Pendidikan Pancasila",
      desc: "Nilai tanggung jawab ISFJ selaras dengan pemahaman kewarganegaraan yang menekankan kepedulian sosial harmoni kehidupan bersama.",
      img: "./image/isfj-folder/mapel3.jpg",
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
    <a href="/journey" class="font-semibold text-accent hover:text-blue-800 duration-300">The Journey</a>
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
      <a href="/journey" class="font-semibold text-accent hover:text-blue-600 duration-200">The Journey</a>
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
    <a href="#intj" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-blue-500 text-sm md:text-lg font-bold">{hero.mbti}</a>
    <a href="#theanalyst" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-blue-500 text-sm md:text-lg font-bold">{hero.alias}</a>
    <a href="#introvert" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-blue-500 text-sm md:text-lg font-bold">{hero.icon1}</a>
    <a href="#intuitive" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-blue-500 text-sm md:text-lg font-bold">{hero.icon2}</a>
    <a href="#thinking" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-blue-500 text-sm md:text-lg font-bold">{hero.icon3}</a>
    <a href="#judging" class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-blue-500 text-sm md:text-lg font-bold">{hero.icon4}</a>
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
        class="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
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
        class="absolute bottom-0 left-0 w-0 h-4px bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
    </h2>
  </div>
<section class="flex flex-wrap justify-center gap-6 md:gap-10 py-12 md:py-16 px-4 md:px-0">
  
  {#each characters as char}
    <div class="group perspective-[1000px] cursor-pointer">
      <div class="relative w-56 md:w-64 lg:w-72 h-80 md:h-96 lg:h-[420px] transform-3d transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
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
    <p>"Kepedulian saya ditunjukkan melalui tindakan kecil yang konsisten. Di balik ketenangan, ada dedikasi penuh untuk kesejahteraan orang lain."</p>
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
