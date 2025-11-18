<script>
  const hero = 
  { 
    logo : './image/logo-mbti-web.png',
    herowp : "background-image: url('./image/esfj-folder/wallpaper.png');",
    mbti : "ESFJ",
    alias : "The Consul",
    desc : "ESFJ adalah penopang komunitas yang ramah dan penuh kepedulian. Mereka mencari keharmonisan sosial, kebutuhan orang lain, serta cara paling hangat untuk menciptakan lingkungan yang teratur dan saling mendukung.",
    icon1 : "Extrovert",
    icon2 : "Sensing",
    icon3 : "Feeling",
    icon4 : "Judging",
    mbticon : "./image/mbti-illustration/ESFJ.png"
  }
  const description = [
    {
      id : "intj",
      header : "ESFJ",
      desc : "ESFJ, kamu adalah pribadi yang hangat, suportif, dan sangat peka terhadap kebutuhan orang-orang di sekitarmu. Kamu suka menciptakan suasana yang harmonis, menjaga hubungan tetap akrab, dan memastikan semua orang merasa diperhatikan. Kamu tipe yang bergerak dengan hati, tetapi juga dengan tanggung jawab yang tinggi. Kamu melihat dunia sebagai tempat di mana kerja sama, kenyamanan, dan kepedulian sosial sangat penting. Kamu cenderung mengambil peran sebagai penghubung—yang merawat, mengorganisasi, dan memastikan semuanya berjalan dengan rapi.",
      position : "text-align: left;",
    },
    {
      id : "theanalyst",
      header : "The Consul",
      desc : "ESFJ disebut seperti ini karena kamu sangat mahir mengatur kebutuhan sosial, mendukung orang lain secara emosional, dan menjaga komunitas tetap solid. Kamu memiliki radar sosial yang kuat, memahami dinamika kelompok, dan tahu bagaimana membuat orang merasa diterima. Kamu berada pada posisi ideal untuk menjadi penyemangat, penyelaras, dan penyedia stabilitas dalam lingkungan sosial apa pun",
      position : "text-align: center;",
    },
    {
      id : "introvert",
      header : "Extrovert",
      desc : "Kamu extravert karena kamu mendapat energi dari interaksi, aktivitas sosial, dan hubungan yang dekat dengan banyak orang. Kamu merasa hidup ketika bisa mengobrol, membantu, atau terlibat langsung dalam acara bersama. Kamu menikmati dinamika sosial, dan kemampuanmu membaca suasana membuatmu nyaman berada di tengah-tengah orang",
      position : "text-align: right;",
    },
    {
      id : "intuitive",
      header : "Sensing",
      desc : "Kamu sensing karena kamu berfokus pada detail nyata, kebutuhan praktis, dan informasi konkret yang kamu tangkap melalui pengalaman sehari-hari. Kamu peka terhadap perubahan kecil dalam lingkungan, seperti ekspresi wajah atau nada bicara seseorang. Kamu lebih suka hal-hal yang jelas dan dapat diprediksi, karena itu membuatmu bisa merawat dan membantu orang lain dengan lebih efektif.",
      positions : "text-align: left;",
    },
    {
      id : "thinking",
      header : "Feeling",
      desc : "Kamu feeling karena kamu mengambil keputusan berdasarkan empati, keharmonisan, dan nilai-nilai kemanusiaan. Kamu mempertimbangkan bagaimana keputusanmu akan memengaruhi orang lain dan berusaha menjaga hubungan tetap baik. Kamu bukan sekadar emosional—kamu peduli secara praktis. Kamu percaya bahwa kebaikan, perhatian, dan penghargaan terhadap perasaan orang lain adalah fondasi yang penting dalam hidup.",
      position : "text-align: center;",
    },
    {
      id : "judging",
      header : "Judging",
      desc : "Kamu judging karena kamu menyukai organisasi, rencana yang jelas, dan struktur yang teratur. Kamu merasa nyaman ketika segala sesuatunya ada dalam kendali dan dapat diprediksi. Kamu sering mengambil peran sebagai pengatur acara, penyusun jadwal, atau orang yang memastikan semua berjalan dengan lancar. Stabilitas dan kejelasan adalah hal penting untuk kamu agar bisa memberikan dukungan terbaik kepada orang lain.",
      position : "text-align: right;",
    },
    
    
  ]
  const songs = [
  { 
    img: './image/esfj-folder/music1.jpg', 
    title: "All About That Bass", 
    artist: "Meghan Trainor" 
  },
  { img: './image/esfj-folder/music2.jpg',
    title: "Just The Way You Are", 
    artist: "Bruno Mars" 
  },
  { img: './image/esfj-folder/music3.jpg',
    title: "Shake It Off", 
    artist: "Taylor Swift" 
  },
  { img: './image/esfj-folder/music4.jpg', 
    title: "Maps", 
    artist: "Maroon 5" 
  }
  ]
  const characters = [
  {
    name: 'Mirabel',
    quote: 'Supporting others is strength, even when your own light feels dim',
    img: './image/esfj-folder/char1.jpg'
  },
  {
    name: 'Anna',
    quote: 'I choose loyalty and warmth, even when hope feels fragile',
    img: './image/esfj-folder/char2.jpg'
  },
  {
    name: 'Michelle Obama',
    quote: 'Empathy shapes communities more powerfully than any position',
    img: './image/esfj-folder/char3.jpg'
  },
  {
    name: 'Oprah Winfrey',
    quote: 'Lifting others up helps heal wounds we never see.',
    img: './image/esfj-folder/char4.jpg'
  }
];
const career = [
    {
      name: "Guru BK",
      desc: "Kepedulian ESFJ mendukung bimbingan siswa melalui percakapan hangat yang membantu menyelesaikan persoalan secara empatik terarah.",
      img: "./image/esfj-folder/career1.jpg",
    },
    {
      name: "HRD",
      desc: "Keahlian interpersonal ESFJ membantu mengelola kebutuhan karyawan melalui komunikasi harmonis yang membangun lingkungan kerja positif",
      img: "./image/esfj-folder/career2.jpg",
    },
    {
      name: "Event Organizer",
      desc: "Ketelitian sosial ESFJ memudahkan penyelenggaraan acara melalui koordinasi teratur yang memastikan pengalaman peserta memuaskan.",
      img: "./image/esfj-folder/career3.jpg",
    },
  ];
const subjects = [
    {
      name: "Sosiologi",
      desc: "Empati ESFJ memudahkan memahami hubungan sosial melalui pengamatan perilaku kelompok yang harmonis teratur sangat mendalam",
      img: "./image/esfj-folder/mapel1.jpg",
    },
    {
      name: "Bahasa Indonesia",
      desc: "Kejelasan komunikasi ESFJ mendukung penyampaian gagasan hangat melalui penggunaan bahasa rapi efektif mudah dipahami",
      img: "./image/esfj-folder/mapel2.jpg",
    },
    {
      name: "Pendidikan Pancasila",
      desc: "Komitmen sosial ESFJ selaras dengan nilai tanggung jawab bersama yang ditekankan pembelajaran kewarganegaraan secara konsisten",
      img: "./image/esfj-folder/mapel3.jpg",
    },
  ];
let open = false;
</script>

<!-- Page Container  -->

<div class="px-4 pt-1 md:p-5 space-y-8">

<nav class="navbar will-change-transform px-6 md:px-10 w-full rounded-lg py-3 flex items-center justify-between outline mt-2 outline-black shadow-md hover:shadow-blue-700 duration-300 bg-white">
  
  <!-- Logo -->
  <div>
    <img src={hero.logo} class="h-10 md:h-12 w-auto" alt="MBTI Logo" />
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
    <p>"Di balik tatapan dingin INTJ, ada ketenangan yang dibangun dari pemikiran mendalam dan keyakinan pada arah yang mereka pilih."</p>
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