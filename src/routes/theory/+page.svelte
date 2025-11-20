<script>
    const hero = {
        logo: './image/logo-mbti-web.png',
    }
    let open = false;
</script>

<div class="px-4 pt-1 md:p-5 space-y-8">

<!-- NAVBAR -->
<nav class="navbar will-change-transform px-6 md:px-10 w-full rounded-lg py-3 flex items-center justify-between outline mt-2 outline-black shadow-md hover:shadow-yellow-700 duration-300 bg-white">
  <div>
    <a href="/">
        <img src={hero.logo} class="h-10 md:h-12 w-auto" alt="MBTI Logo" />
    </a>
  </div>

  <div class="hidden md:flex justify-center gap-6 items-center">
    <a href="/test" class="font-semibold text-accent hover:text-yellow-800 duration-300">Personality Test</a>
    <a href="/types" class="font-semibold text-accent hover:text-yellow-800 duration-300">Personality Type</a>
    <a href="/theory" class="font-semibold text-accent hover:text-yellow-800 duration-300">Science Behind</a>
    <a href="/journey" class="font-semibold text-accent hover:text-yellow-800 duration-300">The Journey</a>
  </div>

  <div class="hidden md:flex items-center gap-3">
    <a href="/test">
      <button class="btn border-black text-black items-center hover:btn-primary hover:text-yellow-300 hover:shadow-yellow-700 hover:shadow-md">
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
  <div class="md:hidden mt-2 rounded-xl shadow-md outline hover:shadow-yellow-700 outline-black bg-white px-6 py-4 space-y-4">
    <div class="flex flex-col gap-4">
      <a href="/test" class="font-semibold text-accent hover:text-yellow-600 duration-200">Personality Test</a>
      <a href="/types" class="font-semibold text-accent hover:text-yellow-600 duration-200">Personality Type</a>
      <a href="/theory" class="font-semibold text-accent hover:text-yellow-600 duration-200">Science Behind</a>
      <a href="/journey" class="font-semibold text-accent hover:text-yellow-600 duration-200">The Journey</a>
    </div>

    <div class="flex flex-col gap-3 pt-4">
      <a href="/test">
        <button class="btn border-black text-black items-center hover:btn-primary hover:text-yellow-300 hover:shadow-yellow-600 hover:shadow-md">
          Try Test
        </button>
      </a>
    </div>
  </div>
{/if}

<!-- MAIN CONTENT -->
<section class="mx-auto w-full space-y-12 px-4 py-12 leading-relaxed text-neutral-800 md:px-10">

<h1 class="text-3xl font-bold md:text-4xl text-center">🧠 Teori Kepribadian Myers-Briggs: Fondasi Psikologi Tipe</h1>
<p class="text-lg text-neutral-600 text-center max-w-2xl mx-auto">
Myers-Briggs Type Indicator (MBTI) adalah instrumen penilaian psikologi berbasis pada teori Carl Jung tentang preferensi psikologis. Framework ini mengidentifikasi empat dimensi ortogonal (independen) dari fungsi kognitif yang membentuk pola perilaku, preferensi pengambilan keputusan, dan gaya interaksi interpersonal.
</p>

<hr class="my-10 border-neutral-300" />

<!-- PENJELASAN EMPAT DIMENSI DENGAN TEKNIS -->
<h2 class="text-2xl font-bold">🔬 Empat Dimensi Ortogonal MBTI</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">1. Orientasi Energi — Extroversion (E) vs Introversion (I)</h3>
<p class="text-neutral-700 leading-relaxed">
Dimensi pertama mengukur <strong>bagaimana individu mengarahkan perhatian dan energi mereka</strong>, serta dari mana mereka memperoleh stimulasi psikologis:
</p>
<ul class="list-disc ml-6 space-y-3 mt-3 text-neutral-700">
  <li><strong>Extroversion (E):</strong> Individu dengan preferensi ekstrovert berorientasi pada dunia eksternal—orang, aktivitas, dan objek konkret. Mereka mendapatkan energi dari interaksi sosial, lingkungan dinamis, dan stimulus eksternal. Pola kognitif mereka ditandai oleh eksplorasi aktif, berbagi pemikiran secara lisan, dan engagement cepat dengan informasi baru.</li>
  <li><strong>Introversion (I):</strong> Individu introvert berorientasi pada dunia internal—ide, refleksi, dan proses mental. Energi mereka terisi melalui kontemplasi dalam, pemikiran yang terkonsentrasi, dan lingkungan yang tenang. Mereka cenderung memproses pengalaman secara internal sebelum menyuarakan perspektif.</li>
</ul>

<hr class="my-10 border-neutral-300" />

<h3 class="text-xl font-semibold mt-6 mb-3">2. Fungsi Persepsi — Sensing (S) vs Intuition (N)</h3>
<p class="text-neutral-700 leading-relaxed">
Dimensi kedua menggambarkan <strong>bagaimana individu mengumpulkan dan mempersepsikan informasi</strong>—fokus mereka pada data konkret versus pola abstrak:
</p>
<ul class="list-disc ml-6 space-y-3 mt-3 text-neutral-700">
  <li><strong>Sensing (S):</strong> Tipe sensing bergantung pada persepsi indera (sight, sound, touch, taste, smell) dan fokus pada informasi yang dapat diamati secara langsung di sini dan sekarang. Mereka berorientasi pada "apa yang ada," memperhatikan fakta terukur, detail praktis, dan pengalaman konkret. Pola berpikir mereka sekuensial dan detail-oriented.</li>
  <li><strong>Intuition (N):</strong> Tipe intuisi fokus pada pola, hubungan tersembunyi, kemungkinan hipotetis, dan makna di balik informasi. Mereka cenderung melihat gambaran besar (big picture), menggunakan analogi, dan membayangkan skenario alternatif. Persepsi mereka melibatkan proses inferensial dan visioner.</li>
</ul>

<hr class="my-10 border-neutral-300" />

<h3 class="text-xl font-semibold mt-6 mb-3">3. Fungsi Penilaian — Thinking (T) vs Feeling (F)</h3>
<p class="text-neutral-700 leading-relaxed">
Dimensi ketiga mencerminkan <strong>kriteria logika yang digunakan individu dalam pengambilan keputusan</strong>—pendekatan objektif versus subjektif:
</p>
<ul class="list-disc ml-6 space-y-3 mt-3 text-neutral-700">
  <li><strong>Thinking (T):</strong> Tipe thinking menggunakan logika impersonal, analisis kausal, dan standar objektif dalam evaluasi. Mereka mencari konsistensi sistemik, efisiensi, dan keadilan universal. Kriteria keputusan mereka berbasis pada prinsip logis yang dapat diverifikasi, sering mengabaikan faktor emosional dalam pertimbangan formal.</li>
  <li><strong>Feeling (F):</strong> Tipe feeling mengintegrasikan nilai-nilai personal, dampak emosional, dan harmoni relasional dalam penilaian. Mereka mempertimbangkan kepentingan individu dan kolektif, empati, dan autentisitas personal. Keputusan mereka sering mencerminkan prioritas manusiawi dan pertimbangan kontekstual.</li>
</ul>

<hr class="my-10 border-neutral-300" />

<h3 class="text-xl font-semibold mt-6 mb-3">4. Orientasi Lifestyle — Judging (J) vs Perceiving (P)</h3>
<p class="text-neutral-700 leading-relaxed">
Dimensi keempat mendeskripsikan <strong>bagaimana individu mengstruktur kehidupan sehari-hari mereka</strong> dan preferensi mereka terhadap closure versus openness:
</p>
<ul class="list-disc ml-6 space-y-3 mt-3 text-neutral-700">
  <li><strong>Judging (J):</strong> Tipe judging lebih menyukai struktur terencana, kontrol, dan penutupan (closure) dalam tugas dan lingkungan. Mereka bekerja dengan agenda yang jelas, keputusan yang final, dan sistem yang terorganisir. Gaya hidup mereka ditandai oleh planning yang purposive dan preferensi untuk skenario yang dapat diprediksi.</li>
  <li><strong>Perceiving (P):</strong> Tipe perceiving lebih nyaman dengan fleksibilitas, adaptabilitas, dan openness. Mereka menyukai pilihan yang tetap terbuka, respons dinamis terhadap perubahan, dan eksplorasi berkelanjutan. Gaya mereka lebih improvisasi dan responsif terhadap situasi yang emerging daripada pre-planned.</li>
</ul>

<hr class="my-10 border-neutral-300" />

<!-- KONTEKS HISTORIS DAN TEORITIS -->
<h2 class="text-2xl font-bold">📚 Dasar Teoritis: Tipologi Jungian</h2>
<p class="text-neutral-700 leading-relaxed">
MBTI dibangun atas fondasi teori Psychological Types karya Carl Jung (1921), yang menekankan bahwa perbedaan kepribadian bukan disfungsi, melainkan <strong>variasi normal</strong> dalam cara individu memproses informasi, menggunakan energi, dan membuat keputusan. Jung mengidentifikasi dua sikap (attitudes) utama—ekstroversion dan introversion—serta empat fungsi psikologis: thinking, feeling, sensation, dan intuition.
</p>
<p class="text-neutral-700 leading-relaxed mt-4">
Katherine Briggs dan Isabel Briggs Myers kemudian mengembangkan framework Jung menjadi instrumen yang terukur dan valid, mengidentifikasi bahwa keempat dimensi bekerja secara independen namun terintegrasi, menghasilkan <strong>16 tipe kepribadian unik</strong>.
</p>

<hr class="my-10 border-neutral-300" />

<!-- MODEL INTEGRASI DINAMIS -->
<h2 class="text-2xl font-bold">⚙️ Model Dinamis: Integrasi Keempat Fungsi</h2>
<p class="text-neutral-700 leading-relaxed">
Framework MBTI melampaui penjumlahan sederhana keempat dimensi. Teori Stack Fungsi (Function Stack) menjelaskan bahwa setiap tipe memiliki hierarki fungsi kognitif yang terintegrasi secara dinamis. Misalnya, INTJ mengoperasikan Introverted Intuition sebagai fungsi dominan (leadership function), diikuti Extroverted Thinking sebagai fungsi auxiliary (support function). Kombinasi hierarkis ini menciptakan alur kognitif unik yang mengarahkan bagaimana tipe tersebut berinteraksi dengan dunia.
</p>
<p class="text-neutral-700 leading-relaxed mt-3">
Pemahaman ini penting karena menunjukkan bahwa MBTI bukan hanya kategori statis, melainkan <strong>sistem dinamis proses mental</strong> yang menjelaskan kompleksitas perilaku manusia melalui lensa psikologi kognitif.
</p>

<hr class="my-10 border-neutral-300" />

<!-- VALIDITAS DAN APLIKASI -->
<h2 class="text-2xl font-bold">✓ Reliabilitas, Validitas, dan Aplikasi</h2>
<p class="text-neutral-700 leading-relaxed">
Studi empiris menunjukkan bahwa MBTI memiliki reliabilitas test-retest yang kuat (0.84-0.92) dan validitas konstruk yang mendukung penggunaan dalam berbagai konteks: pengembangan karir, team building, konseling, dan self-discovery. Namun, perlu dicatat bahwa MBTI adalah instrumen preferensi, bukan ukuran kemampuan atau patologi. Fleksibilitas tipe (type flexibility) menunjukkan bahwa individu dapat mengembangkan kemampuan pada preferensi yang lebih lemah melalui pembelajaran dan pengalaman.
</p>

<hr class="my-10 border-neutral-300" />

<!-- BAGIAN 16 TIPE -->
<h2 class="text-3xl font-bold text-center">🌟 Enam Belas Tipe Kepribadian MBTI</h2>
<p class="text-center text-neutral-600 max-w-2xl mx-auto">
Kombinasi keempat dimensi menghasilkan 16 profil kepribadian yang unik, masing-masing dengan kekuatan, tantangan, dan path pengembangan yang spesifik.
</p>

<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">INTJ – The Architect</h3>
    <p class="text-neutral-600 mt-2">Visioner strategis dengan kapasitas pemodelan sistem kompleks dan eksekusi terukur.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">INTP – The Thinker</h3>
    <p class="text-neutral-600 mt-2">Peneliti konseptual yang mengeksplorasi sistem ide melalui analisis logis mendalam.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">ENTJ – The Commander</h3>
    <p class="text-neutral-600 mt-2">Leader organisator yang mengelola sumber daya dengan efisiensi dan orientasi hasil.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">ENTP – The Debater</h3>
    <p class="text-neutral-600 mt-2">Innovator fleksibel yang mengeksplorasi kemungkinan melalui diskusi dan eksperimentasi.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">INFJ – The Advocate</h3>
    <p class="text-neutral-600 mt-2">Idealis visioner yang menginspirasi perubahan positif melalui nilai dan autentisitas.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">INFP – The Mediator</h3>
    <p class="text-neutral-600 mt-2">Mediator empatik yang mengejar otentisitas dan penciptaan makna personal.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">ENFJ – The Protagonist</h3>
    <p class="text-neutral-600 mt-2">Pemimpin karismatik yang memberdayakan orang lain melalui visi dan kepedulian genuine.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">ENFP – The Campaigner</h3>
    <p class="text-neutral-600 mt-2">Enthusiast optimis yang menciptakan koneksi dan mengeksplorasi kemungkinan baru.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">ISTJ – The Logistician</h3>
    <p class="text-neutral-600 mt-2">Administrator praktis yang menjamin efisiensi dan keandalan melalui sistem terstruktur.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">ISFJ – The Defender</h3>
    <p class="text-neutral-600 mt-2">Pelindung penuh perhatian yang memberikan dukungan konsisten dan harmoni relasional.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">ESTJ – The Executive</h3>
    <p class="text-neutral-600 mt-2">Eksekutif organisator yang memimpin dengan standar objektif dan hasil terukur.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">ESFJ – The Consul</h3>
    <p class="text-neutral-600 mt-2">Konselor sosial yang menciptakan harmoni melalui layanan dan perhatian personal.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">ISTP – The Virtuoso</h3>
    <p class="text-neutral-600 mt-2">Virtuoso teknis yang memahami bagaimana sistem bekerja melalui eksplorasi praktis.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">ISFP – The Adventurer</h3>
    <p class="text-neutral-600 mt-2">Petualang artistik yang mengekspresikan nilai melalui kreativitas dan pengalaman.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">ESTP – The Entrepreneur</h3>
    <p class="text-neutral-600 mt-2">Entrepreneur energik yang merespons peluang dengan aksi dan eksperimen cepat.</p>
  </div>

  <div class="p-5 border rounded-xl shadow hover:shadow-lg duration-200 bg-white">
    <h3 class="font-bold text-xl">ESFP – The Entertainer</h3>
    <p class="text-neutral-600 mt-2">Entertainer yang menciptakan energi positif dan membuat setiap momen memorable.</p>
  </div>
</div>

<hr class="my-10 border-neutral-300" />

<h2 class="text-3xl font-bold text-center">🎯 Aplikasi Praktis: Dari Teori ke Aksi</h2>
<p class="text-lg text-neutral-700 text-center max-w-2xl mx-auto">
Memahami MBTI bukan hanya sekadar pengetahuan psikologi—ini adalah alat untuk self-awareness, komunikasi interpersonal yang lebih efektif, pengembangan karir yang aligned dengan preferensi natural, dan apresiasi terhadap perbedaan sebagai asset, bukan hambatan.
</p>

<div class="text-center mt-8">
<a href="/test">
<button class="btn text-lg px-8 border-black hover:btn-primary hover:text-yellow-200">Temukan Tipe Kamu dengan Tes ➜</button>
</a>
</div> 

</section>
</div>
