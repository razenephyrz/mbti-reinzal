<script>
    const hero = {
        logo: './image/logo-mbti-web.png',
    }

    let open = false;

    const journeySteps = [
        {
            step: 1,
            title: 'Penemuan & Kesadaran Diri',
            description: 'Semuanya dimulai dari sebuah tugas karya akhir sekolah yang membuat saya mencari tema yang tepat. Pada saat yang sama, saya menemukan MBTI dan itu menjadi pencerahan bagi saya—cara untuk memahami jati diri dan mengatasi keresahan yang selama ini saya hadapi. Namun ketika menjelajahi web MBTI yang ada, saya menemukan masalah: bahasa yang terlalu teknis membuat semuanya sulit dipahami, dan minimnya ilustrasi membuat pengalaman terasa kering dan membosankan.',
            details: [
                'Menemukan MBTI sebagai solusi pencarian jati diri',
                'Mengidentifikasi masalah dalam web MBTI yang ada',
                'Bahasa terlalu teknis & sulit dipahami',
                'Minimnya ilustrasi & visual yang menarik',
                'Tekad untuk membuat platform yang lebih baik'
            ],
            image: 'https://via.placeholder.com/500x400?text=Discovery+Journey',
            accent: 'from-amber-300 to-amber-500'
        },
        {
            step: 2,
            title: 'Iterasi Pertama & Pembelajaran',
            description: 'Saya memulai dengan versi yang sangat sederhana—hanya tes dan hasil yang ditampilkan dalam satu halaman. Tapi cepat saya menyadari bahwa hasilnya terlalu minimal. User tidak bisa memahami apa itu Introvert, Sensing, dan metrik penting lainnya. Maka saya membuat iterasi kedua yang lebih informatif, menjelaskan setiap dimensi dengan lebih detail. Namun masih terasa kurang—hanya sebatas tes dan hasil tanpa konteks yang lebih luas.',
            details: [
                'Versi pertama: Tes sederhana dengan hasil minimal',
                'Menyadari keterbatasan dalam penjelasan dimensi MBTI',
                'Iterasi kedua: Menambah detail penjelasan',
                'Masih terlalu sederhana & terbatas',
                'Mulai memikirkan visi yang lebih besar'
            ],
            image: 'https://via.placeholder.com/500x400?text=First+Iterations',
            accent: 'from-cyan-300 to-cyan-500'
        },
        {
            step: 3,
            title: 'Transformasi Besar & Ekspansi',
            description: 'Dari sini, visi saya berkembang jauh lebih besar. Saya ingin menciptakan ekosistem lengkap: landing page yang menarik, showcase untuk setiap tipe kepribadian, hasil tes yang lebih mendalam, teori yang komprehensif, dan fitur-fitur lainnya yang seperti website profesional di internet. Perjalanan ini membuka pintu ke dunia programming dan teknologi yang sama sekali baru bagi saya. Saya belajar SvelteKit, Tailwind CSS, responsive design, database, dan masih banyak lagi.',
            details: [
                'Visi menjadi ekosistem lengkap MBTI',
                'Landing page yang menarik & engaging',
                'Showcase untuk 16 tipe kepribadian unik',
                'Hasil tes yang lebih mendalam & informatif',
                'Belajar tech stack: SvelteKit, Tailwind, dan lebih banyak',
                'Menerapkan professional web development practices'
            ],
            image: '.',
            accent: 'from-emerald-300 to-emerald-500'
        },
        {
            step: 4,
            title: 'Passion & Pertumbuhan Berkelanjutan',
            description: 'Yang paling membuatku berbeda adalah bahwa semua ini bukan karena tugas atau paksaan, melainkan karena passion saya di dunia IT sejak kecil. Setiap tantangan, setiap gagal, saya anggap sebagai pelajaran berharga. Saya tidak takut untuk mencoba hal baru, untuk gagal, karena saya sudah terbiasa dengan proses pembelajaran yang kontinyu. Passion ini membuat saya enjoy setiap detik dalam proses development, bahkan ketika menghadapi bug yang frustasi. Saya ingin terus belajar, tidak hanya tentang programming tapi semua aspek teknologi, tanpa batasan apapun.',
            details: [
                'Passion IT sejak kecil sebagai fondasi',
                'Enjoy & excited dengan setiap tantangan',
                'Gagal bukan akhir, tapi pembelajaran',
                'Terus eksplorasi teknologi baru',
                'Komitmen untuk pertumbuhan jangka panjang',
                'Berbagi pengetahuan dan inspire orang lain'
            ],
            image: 'https://via.placeholder.com/500x400?text=Passion+Growth',
            accent: 'from-rose-300 to-rose-500'
        }
    ];
</script>

<div class="px-4 pt-1 md:p-5 space-y-8">

<!-- NAVBAR -->
<nav class="navbar will-change-transform px-6 md:px-10 w-full rounded-lg py-3 flex items-center justify-between outline mt-2 outline-black shadow-md hover:shadow-blue-700 duration-300 bg-white">
  <div>
    <a href="/">
        <img src={hero.logo} class="h-10 md:h-12 w-auto" alt="MBTI Logo" />
    </a>
  </div>

  <div class="hidden md:flex justify-center gap-6 items-center">
    <a href="/test" class="font-semibold text-accent hover:text-blue-800 duration-300">Personality Test</a>
    <a href="/types" class="font-semibold text-accent hover:text-blue-800 duration-300">Personality Type</a>
    <a href="/theory" class="font-semibold text-accent hover:text-blue-800 duration-300">Science Behind</a>
    <a href="#journey" class="font-semibold text-accent hover:text-blue-800 duration-300">The Journey</a>
  </div>

  <div class="hidden md:flex items-center gap-3">
    <a href="/test">
      <button class="btn border-black text-black items-center hover:btn-primary hover:text-blue-300 hover:shadow-blue-700 hover:shadow-md">
        Try Test
      </button>
    </a>
  </div>

  <button aria-label="button"
    class="md:hidden flex items-center p-2 rounded-lg hover:bg-gray-100 duration-200"
    on:click={() => (open = !open)}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</nav>

{#if open}
  <div class="md:hidden mt-2 rounded-xl shadow-md outline hover:shadow-blue-700 outline-black bg-white px-6 py-4 space-y-4">
    <div class="flex flex-col gap-4">
      <a href="/test" class="font-semibold text-accent hover:text-blue-600 duration-200">Personality Test</a>
      <a href="/types" class="font-semibold text-accent hover:text-blue-600 duration-200">Personality Type</a>
      <a href="/theory" class="font-semibold text-accent hover:text-blue-600 duration-200">Science Behind</a>
      <a href="#journey" class="font-semibold text-accent hover:text-blue-600 duration-200">The Journey</a>
    </div>

    <div class="flex flex-col gap-3 pt-4">
      <a href="/test">
        <button class="btn border-black text-black items-center hover:btn-primary hover:text-blue-300 hover:shadow-blue-600 hover:shadow-md">
          Try Test
        </button>
      </a>
    </div>
  </div>
{/if}

<!-- HERO SECTION -->
<section id="journey" class="relative py-12 md:py-20 mb-8">
    <div class="max-w-5xl mx-auto px-4">
        <div class="text-center space-y-4 mb-12">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Perjalanan Saya Membuat
                <span class="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Web MBTI</span>
            </h1>
            <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Dari tugas karya akhir yang sederhana, hingga menjadi passion project yang mengubah cara saya berpikir tentang teknologi. Ini adalah cerita bagaimana saya belajar, gagal, dan terus berkembang dalam perjalanan menciptakan platform yang lebih baik.
            </p>
        </div>
        <div class="flex justify-center gap-2 text-sm md:text-base text-gray-500">
            <span class="flex items-center gap-1">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                Dari Ide Sederhana
            </span>
            <span>•</span>
            <span class="flex items-center gap-1">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                Menjadi Passion Project
            </span>
        </div>
    </div>
</section>

<!-- JOURNEY STEPS -->
<section class="max-w-6xl mx-auto px-4 py-12 md:py-20">
    <div class="space-y-20 md:space-y-32">
        {#each journeySteps as journey, idx}
            <div class={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
                
                <!-- TEXT CONTENT -->
                <div class="w-full md:w-1/2 space-y-6">
                    <!-- Step Number -->
                    <div class="flex items-center gap-3">
                        <div class={`w-12 h-12 rounded-full bg-gradient-to-br ${journey.accent} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                            {journey.step}
                        </div>
                        <div class="h-0.5 w-12 bg-gradient-to-r from-gray-300 to-transparent"></div>
                    </div>

                    <!-- Title & Description -->
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
                            {journey.title}
                        </h2>
                        <p class="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                            {journey.description}
                        </p>
                    </div>

                    <!-- Details List -->
                    <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                        <h3 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <span class="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                            Highlight Points
                        </h3>
                        <ul class="space-y-2">
                            {#each journey.details as detail}
                                <li class="flex items-start gap-3 text-gray-700">
                                    <span class="inline-flex items-center justify-center mt-1 shrink-0">
                                        <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span>{detail}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>

                <!-- IMAGE CONTENT -->
                <div class="w-full md:w-1/2">
                    <div class="relative group">
                        <!-- Image Container -->
                        <div class={`relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 border-4 border-gradient-to-br ${journey.accent}`}>
                            <img 
                                src={journey.image} 
                                alt={journey.title}
                                class="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
                            />
                            <!-- Overlay Gradient -->
                            <div class={`absolute inset-0 bg-gradient-to-tr ${journey.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                        </div>

                        <!-- Accent Element -->
                        <div class={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${journey.accent} rounded-xl opacity-20 -z-10`}></div>
                        <div class={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br ${journey.accent} rounded-full opacity-10 -z-10`}></div>
                    </div>
                </div>

            </div>

            <!-- DIVIDER -->
            {#if idx < journeySteps.length - 1}
                <div class="flex items-center justify-center my-8 md:my-0">
                    <div class="h-12 w-1 bg-gradient-to-b from-gray-300 via-blue-300 to-gray-300 rounded-full"></div>
                </div>
            {/if}
        {/each}
    </div>
</section>

<!-- TIMELINE STATS -->
<section class="max-w-6xl mx-auto px-4 py-16 md:py-24">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div class="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-6 md:p-8 text-center border border-blue-200 hover:shadow-lg transition-shadow duration-300">
            <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4</div>
            <p class="text-sm md:text-base text-gray-700 font-medium">Tahap Perjalanan</p>
        </div>
        <div class="bg-linear-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 md:p-8 text-center border border-emerald-200 hover:shadow-lg transition-shadow duration-300">
            <div class="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">16</div>
            <p class="text-sm md:text-base text-gray-700 font-medium">Tipe Kepribadian</p>
        </div>
        <div class="bg-linear-to-br from-purple-50 to-purple-100 rounded-xl p-6 md:p-8 text-center border border-purple-200 hover:shadow-lg transition-shadow duration-300">
            <div class="text-3xl md:text-4xl font-bold text-purple-600 mb-2">∞</div>
            <p class="text-sm md:text-base text-gray-700 font-medium">Proses Belajar</p>
        </div>
        <div class="bg-linear-to-br from-amber-50 to-amber-100 rounded-xl p-6 md:p-8 text-center border border-amber-200 hover:shadow-lg transition-shadow duration-300">
            <div class="text-3xl md:text-4xl font-bold text-amber-600 mb-2">♥</div>
            <p class="text-sm md:text-base text-gray-700 font-medium">Driven by Passion</p>
        </div>
    </div>
</section>

<!-- CTA SECTION -->
<section class="max-w-4xl mx-auto px-4 py-16 md:py-24">
    <div class="bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ingin Temukan Tipe Kepribadianmu Juga?</h2>
        <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Platform ini dibuat dengan passion untuk membantu orang-orang memahami diri mereka lebih baik. Passion membuat semua tantangan menjadi pembelajaran yang berharga.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/test">
                <button class="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Mulai Tes Sekarang
                </button>
            </a>
            <a href="/types">
                <button class="px-8 py-3 bg-blue-400 text-white font-bold rounded-lg hover:bg-blue-300 transition-all duration-300">
                    Lihat Semua Tipe
                </button>
            </a>
        </div>
    </div>
</section>

<!-- FOOTER INSPIRATION -->
<section class="max-w-4xl mx-auto px-4 py-12 text-center">
    <p class="text-gray-600 text-lg italic">
        "Gagal bukan akhir, gagal adalah pelajaran. Setiap tantangan adalah kesempatan untuk tumbuh. Itulah mengapa saya enjoy setiap momen dalam journey ini."
    </p>
    <p class="text-gray-500 mt-6">© 2025 MBTI PopCulture Project • Built with 💙 and Passion</p>
</section>

</div>

<style>
    :global(body) {
        margin: 0;
        font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        background: #fafbfc;
        color: #1f2937;
    }

    :global(html) {
        scroll-behavior: smooth;
    }
</style>