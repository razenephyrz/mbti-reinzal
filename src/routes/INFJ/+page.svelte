<script>
  const hero = 
  { 
    logo : './image/logo-mbti-web.png',
    herowp : "background-image: url('./image/infp-folder/wallpaper.png');",
    mbti : "INFP",
    alias : "The Mediator",
    desc : "INFP adalah pengembara batin yang penuh imajinasi dan nilai-nilai idealis. Mereka mencari makna, kedalaman emosional, dan dunia yang lebih baik.",
    icon1 : "Introvert",
    icon2 : "Intuition",
    icon3 : "Feeling",
    icon4 : "Perceiving",
    mbticon : "./image/mbti-illustration/INFP.png"
  }
  const songs = [
  { 
    img: './image/infp-folder/music1.jpg', 
    title: "Everything I Wanted", 
    artist: "Billie Eilish" 
  },
  { img: './image/infp-folder/music2.jpg',
    title: "From The Start", 
    artist: "Laufey" 
  },
  { img: './image/infp-folder/music3.jpg',
    title: "Apocalypse", 
    artist: "Cigarettes After Sex" 
  },
  { img: './image/infp-folder/music4.jpg', 
    title: "I Wanna Be Yours", 
    artist: "Arctic Monkey" 
  }
  ]
  const characters = [
  {
    name: 'Frodo Baggins',
    quote: 'There is light, and beauty up there, that no shadow can touch.',
    img: './image/infp-folder/char1.jpg'
  },
  {
    name: 'Naruto Uzumaki',
    quote: 'I’m not a hero. I’m a ninja who never gives up.',
    img: './image/infp-folder/char2.jpg'
  },
  {
    name: 'Layla (Genshin Impact)',
    quote: 'Sometimes I wonder if the stars ever get tired of watching us.',
    img: './image/infp-folder/char3.jpg'
  },
  {
    name: 'Luna Lovegood',
    quote: 'Things we lose have a way of coming back to us in the end, if not always in the way we expect.',
    img: './image/infp-folder/char4.jpg'
  }
];
const subjects = [
  {
      name: "Psikologi",
      desc: "INFP memiliki empati tinggi dan keinginan memahami manusia secara mendalam, menjadikan mereka cocok di bidang psikologi.",
      img: "./image/infp-folder/mapel1.jpg",
    },
    {
      name: "Filsafat",
      desc: "INFP memiliki pikiran reflektif dan haus akan makna hidup, menjadikan mereka cocok di bidang filsafat.",
      img: "./image/infp-folder/mapel2.jpg",
    },
    {
      name: "Sastra",
      desc: "INFP memiliki imajinasi kuat dan ekspresi emosional mendalam, menjadikan mereka cocok di bidang sastra.",
      img: "./image/infp-folder/mapel3.jpg",
    },
  ];
  const career = [
      {
        name: "Psikolog",
        desc: "INFP memiliki empati tulus dan kemampuan mendengarkan mendalam, menjadikan mereka cocok menjadi psikolog yang membantu orang menemukan kedamaian batin.",
        img: "./image/infp-folder/career1.jpg",
      },
      {
        name: "Penulis",
        desc: "INFP memiliki imajinasi luas dan kepekaan emosi tinggi, menjadikan mereka cocok menjadi penulis yang menyalurkan makna hidup melalui kata-kata.",
        img: "./image/infp-folder/career2.jpg",
      },
      {
        name: "Musisi",
        desc: "INFP memiliki jiwa artistik dan ekspresi perasaan yang autentik, menjadikan mereka cocok menjadi musisi yang menyentuh hati lewat nada dan lirik.",
        img: "./image/infp-folder/career3.jpg",
      },
    ];
</script>


<div class="navbar will-change-transform px-10 w-7xl rounded-lg py-2 flex justify-between outline mt-6 outline-black shadow-md hover:shadow-green-700 duration-300">
  <div>
    <img src={hero.logo} class="h-12 w-auto" alt="MBTI Logo" />
  </div>
  <div class="flex justify-center gap-5 items-center">
    <a href="/test" class="font-semibold text-accent hover:text-green-800 duration-300">Personality Test</a>
    <a href="/types" class="font-semibold text-accent hover:text-green-800 duration-300">Personality Type</a>
    <a href="/theory" class="font-semibold text-accent hover:text-green-800 duration-300">Science Behind</a>
    <a href="#label" class="font-semibold text-accent hover:text-green-800 duration-300">The Journey</a>
  </div>
  <div class="flex items-center gap-3">
    <a href="#kanjau" class="font-semibold text-md text-primary">Login</a>
    <button class="btn border-black text-black items-center mt-1 hover:btn-primary hover:text-primary-content">Try Test</button>
  </div>
</div>

<!-- Page Container  -->
<div class="p-6 space-y-8">

 <!-- Hero -->
<section
  class="relative h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl duration-300 shadow-black"
  style={hero.herowp}
>
  <!-- Lapisan blur transparan -->
  <div class="h-full w-full bg-cover bg-center bg-transparent backdrop-blur-sm">
    <!-- Overlay semi-gelap -->
    <div class="h-full w-full bg-black/30 flex items-center px-10 py-4 justify-between">
      <!-- Kiri: Deskripsi -->
      <div class="text-white w-[55%] space-y-4">
        <h1 class="text-green-700 text-5xl font-bold tracking-wider">{hero.mbti}</h1>
        <p class="text-2xl font-medium text-white/80">{hero.alias}</p>
        <p class="text-md text-white/70">{hero.desc}</p>
        <div class="flex gap-3.5">
          <a href="#detail" class="badge p-3 poppins bg-white text-black">{hero.icon1}</a>
          <a href="#detail" class="badge p-3 poppins bg-white text-black">{hero.icon2}</a>
          <a href="#detail" class="badge p-3 poppins bg-white text-black">{hero.icon3}</a>
          <a href="#detail" class="badge p-3 poppins bg-white text-black">{hero.icon4}</a>
        </div>
      </div>

      <!-- Kanan: Avatar -->
      <div class="w-[35%] flex items-end justify-center pb-2">
        <img
          src={hero.mbticon}
          alt="INTJ Avatar"
          class=" h-[110%] w-auto object-contain transition duration-300"
        />
      </div>
    </div>
  </div>
</section>


<!-- Nav Content -->
<section class=" w-full sans px-4 mb-24 mt-12">
  <div class=" flex justify-between">
    <a href="#intj" class=" relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-green-700 text-lg font-bold">{hero.mbti}</a>
    <a href="#theanalyst" class=" relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-green-700 text-lg font-bold">{hero.alias}</a>
    <a href="#introvert" class=" relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-green-700 text-lg font-bold">{hero.icon1}</a>
    <a href="#intuitive" class=" relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-green-700 text-lg font-bold">{hero.icon2}</a>
    <a href="#thinking" class=" relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-green-700 text-lg font-bold">{hero.icon3}</a>
    <a href="#judging" class=" relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-green-700 text-lg font-bold">{hero.icon4}</a>
  </div>
</section>

<!-- Content Details -->
<section>
  <div id="intj" class=" mb-20">
    <h1 class=" text-6xl text-left helvetica font-black text-black/90 px-8 pb-4 mb-4 border-b-3 border-green-800">{hero.mbti}</h1>
  <p class=" text-xl helvetica text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error aperiam laborum rem consequatur porro dignissimos omnis ad nisi ullam hic unde maxime obcaecati nulla adipisci dolorum, doloribus in, neque perspiciatis, cum quaerat? Vitae ipsum obcaecati minima ratione magnam suscipit accusantium, porro saepe quas consequatur possimus quasi, earum necessitatibus at voluptatibus? Eius, eveniet voluptatem. Dolorem quae iusto impedit alias laboriosam magnam veniam voluptatem eligendi rerum odit in rem eius corporis aspernatur accusantium nam sunt adipisci modi, eveniet, maiores deleniti enim! Minus ab voluptate necessitatibus accusantium quod illum tenetur, deleniti dolores dolorem perspiciatis voluptas veritatis aliquam neque quibusdam fuga, dicta voluptatibus, magni dolor debitis voluptatem tempore fugit. Nesciunt enim repudiandae et officia reiciendis autem nobis.
  </p>
  </div>
  <div id="theanalyst" class=" mb-20">
    <h1 class=" text-6xl text-center helvetica font-black text-black/90 px-8 pb-4 mb-4 border-b-3 border-green-800">{hero.alias}</h1>
  <p class=" text-xl helvetica text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error aperiam laborum rem consequatur porro dignissimos omnis ad nisi ullam hic unde maxime obcaecati nulla adipisci dolorum, doloribus in, neque perspiciatis, cum quaerat? Vitae ipsum obcaecati minima ratione magnam suscipit accusantium, porro saepe quas consequatur possimus quasi, earum necessitatibus at voluptatibus? Eius, eveniet voluptatem. Dolorem quae iusto impedit alias laboriosam magnam veniam voluptatem eligendi rerum odit in rem eius corporis aspernatur accusantium nam sunt adipisci modi, eveniet, maiores deleniti enim! Minus ab voluptate necessitatibus accusantium quod illum tenetur, deleniti dolores dolorem perspiciatis voluptas veritatis aliquam neque quibusdam fuga, dicta voluptatibus, magni dolor debitis voluptatem tempore fugit. Nesciunt enim repudiandae et officia reiciendis autem nobis.
  </p>
  </div>
  <div id="introvert" class=" mb-20">
    <h1 class=" text-6xl text-right helvetica font-black text-black/90 px-8 pb-4 mb-4 border-b-3 border-green-800">{hero.icon1}</h1>
  <p class=" text-xl helvetica text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error aperiam laborum rem consequatur porro dignissimos omnis ad nisi ullam hic unde maxime obcaecati nulla adipisci dolorum, doloribus in, neque perspiciatis, cum quaerat? Vitae ipsum obcaecati minima ratione magnam suscipit accusantium, porro saepe quas consequatur possimus quasi, earum necessitatibus at voluptatibus? Eius, eveniet voluptatem. Dolorem quae iusto impedit alias laboriosam magnam veniam voluptatem eligendi rerum odit in rem eius corporis aspernatur accusantium nam sunt adipisci modi, eveniet, maiores deleniti enim! Minus ab voluptate necessitatibus accusantium quod illum tenetur, deleniti dolores dolorem perspiciatis voluptas veritatis aliquam neque quibusdam fuga, dicta voluptatibus, magni dolor debitis voluptatem tempore fugit. Nesciunt enim repudiandae et officia reiciendis autem nobis.
  </p>
  </div>
  <div id="intuitive" class=" mb-20">
    <h1 class=" text-6xl text-left helvetica font-black text-black/90 px-8 pb-4 mb-4 border-b-3 border-green-800">{hero.icon2}</h1>
  <p class=" text-xl helvetica text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error aperiam laborum rem consequatur porro dignissimos omnis ad nisi ullam hic unde maxime obcaecati nulla adipisci dolorum, doloribus in, neque perspiciatis, cum quaerat? Vitae ipsum obcaecati minima ratione magnam suscipit accusantium, porro saepe quas consequatur possimus quasi, earum necessitatibus at voluptatibus? Eius, eveniet voluptatem. Dolorem quae iusto impedit alias laboriosam magnam veniam voluptatem eligendi rerum odit in rem eius corporis aspernatur accusantium nam sunt adipisci modi, eveniet, maiores deleniti enim! Minus ab voluptate necessitatibus accusantium quod illum tenetur, deleniti dolores dolorem perspiciatis voluptas veritatis aliquam neque quibusdam fuga, dicta voluptatibus, magni dolor debitis voluptatem tempore fugit. Nesciunt enim repudiandae et officia reiciendis autem nobis.
  </p>
  </div>
  <div id="thinking" class=" mb-20">
    <h1 class=" text-6xl text-center helvetica font-black text-black/90 px-8 pb-4 mb-4 border-b-3 border-green-800">{hero.icon3}</h1>
  <p class=" text-xl helvetica text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error aperiam laborum rem consequatur porro dignissimos omnis ad nisi ullam hic unde maxime obcaecati nulla adipisci dolorum, doloribus in, neque perspiciatis, cum quaerat? Vitae ipsum obcaecati minima ratione magnam suscipit accusantium, porro saepe quas consequatur possimus quasi, earum necessitatibus at voluptatibus? Eius, eveniet voluptatem. Dolorem quae iusto impedit alias laboriosam magnam veniam voluptatem eligendi rerum odit in rem eius corporis aspernatur accusantium nam sunt adipisci modi, eveniet, maiores deleniti enim! Minus ab voluptate necessitatibus accusantium quod illum tenetur, deleniti dolores dolorem perspiciatis voluptas veritatis aliquam neque quibusdam fuga, dicta voluptatibus, magni dolor debitis voluptatem tempore fugit. Nesciunt enim repudiandae et officia reiciendis autem nobis.
  </p>
  </div>
  <div>
    <h1 id="judging" class=" text-6xl text-right helvetica font-black text-black/90 px-8 pb-4 mb-4 border-b-3 border-green-800">{hero.icon4}</h1>
  <p class=" text-xl helvetica text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error aperiam laborum rem consequatur porro dignissimos omnis ad nisi ullam hic unde maxime obcaecati nulla adipisci dolorum, doloribus in, neque perspiciatis, cum quaerat? Vitae ipsum obcaecati minima ratione magnam suscipit accusantium, porro saepe quas consequatur possimus quasi, earum necessitatibus at voluptatibus? Eius, eveniet voluptatem. Dolorem quae iusto impedit alias laboriosam magnam veniam voluptatem eligendi rerum odit in rem eius corporis aspernatur accusantium nam sunt adipisci modi, eveniet, maiores deleniti enim! Minus ab voluptate necessitatibus accusantium quod illum tenetur, deleniti dolores dolorem perspiciatis voluptas veritatis aliquam neque quibusdam fuga, dicta voluptatibus, magni dolor debitis voluptatem tempore fugit. Nesciunt enim repudiandae et officia reiciendis autem nobis.
  </p>
  </div>
  
</section>

<!-- Content Lagu -->

<section class="px-8 py-12 flex flex-col items-center">
  <!-- Header -->
  <div class="relative inline-block mb-10 group">
    <h2 class="text-6xl font-extrabold tracking-tight leading-none pb-2 text-green-700 relative">Songs<span
        class="absolute bottom-0 left-0 w-0 h-[4px] bg-green-700 transition-all duration-500 group-hover:w-full"></span>
    </h2>
  </div>

  <!-- Flex Album List -->
  <div
    class="flex justify-between gap-10 mt-6"
  >
    {#each songs as song}
      <div
        class="flex flex-col items-center text-center group p-5 rounded-xl transition duration-300 hover:bg-green-700/10 hover:shadow-xl"
      >
        <img
          src={song.img}
          alt={song.title}
          class="w-64 h-64 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
        />
        <div class="mt-4">
          <h3
            class="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300"
          >
            {song.title}
          </h3>
          <p class="text-gray-500 group-hover:text-green-600 transition-colors">
            {song.artist}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- CHARACTERS SECTION -->
<section class="flex flex-wrap justify-center gap-10 py-16">
  {#each characters as char}
    <div class="group [perspective:1000px] cursor-pointer">
      <div class="relative w-72 h-[420px] [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
      <!-- FRONT -->
        <div class="absolute inset-0 rounded-3xl overflow-hidden shadow-xl bg-green-700/10 border border-purple-200 backface-hidden">
          <img src={char.img} alt={char.name} class="w-full h-full object-cover" />
        </div>


      <!-- BACK -->
        <div class="absolute inset-0 bg-gradient-to-br from-green-700 to-green-900 text-white rounded-3xl flex flex-col justify-center items-center px-6 text-center [transform:rotateY(180deg)] backface-hidden">
          <p class="italic text-lg mb-4">“{char.quote}”</p>
          <h3 class="text-2xl font-bold">— {char.name}</h3>
        </div>
      </div>
    </div>
  {/each}
</section>

<!-- SUBJECTS SECTION -->
<section class="min-h-screen md:px-12">
  <!-- Judul -->
  <div class="text-center mb-12">
    <h1 class="text-4xl font-bold mb-3">
      <span class="text-black">Mata</span>
      <span class="bg-gradient-to-r from-green-500 to-green-700 text-white px-3 py-1 ml-2 shadow-md">
        Pelajaran
      </span>
    </h1>
    <p class="text-gray-500 mt-2">Mata Pelajaran yang sangat cocok dengan INTJ</p>
  </div>

  <!-- Kartu -->
  <div class="grid md:grid-cols-3 gap-6">
    {#each subjects as s}
      <div
        class="group cursor-pointer transition-all duration-500 ease-out">
        <!-- Gambar -->
        <div class="overflow-hidden">
          <img
            src={s.img}
            alt={s.name}
            class="w-full h-[420px] object-cover transition-all duration-700 group-hover:brightness-75 group-hover:scale-[1.02]"
          />
        </div>

        <!-- Teks -->
        <div class="mt-4 px-1">
          <h2 class="text-sm font-semibold tracking-wider text-gray-800 group-hover:text-green-600 transition-colors duration-300">
            {s.name}
          </h2>
          <p class="text-sm text-gray-600 mt-2 leading-relaxed">
            {s.desc}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>

<section class="min-h-screen md:px-12">
  <!-- Judul -->
  <div class="text-center mb-20">
    <h1 class="text-4xl font-bold mb-3">
      <span class="bg-gradient-to-r from-green-500 to-green-700 text-white px-3 py-1 ml-2 shadow-md">
        Jalur
      </span>
      <span class="text-black">Karir</span>
    </h1>
    <p class="text-gray-500 mt-2">Jalur Karir yang sesuai dengan kepribadian INTJ</p>
  </div>

  <!-- Kartu -->
  <div class="grid md:grid-cols-3 gap-6">
    {#each career as c}
      <div
        class="group cursor-pointer transition-all duration-500 ease-out">
        <!-- Gambar -->
        <div class="overflow-hidden">
          <img
            src={c.img}
            alt={c.name}
            class="w-full h-[420px] object-cover transition-all duration-700 group-hover:brightness-75 group-hover:scale-[1.02]"
          />
        </div>

        <!-- Teks -->
        <div class="mt-4 px-1">
          <h2 class="text-sm font-semibold tracking-wider text-gray-800 group-hover:text-green-600 transition-colors duration-300">
            {c.name}
          </h2>
          <p class="text-sm text-gray-600 mt-2 leading-relaxed">
            {c.desc}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>
</div>

<!-- Footer -->
<footer class="text-center mt-12 text-sm text-gray-500">
    <hr class="my-4" />
    <p>“Di balik kelembutan INFP, ada dunia batin yang luas, tempat idealisme dan perasaan berpadu mencari makna yang sejati.”</p>
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