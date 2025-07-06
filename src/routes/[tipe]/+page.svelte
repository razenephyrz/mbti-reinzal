<script lang="ts">
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';

  const tipe = derived(page, ($page) => $page.params.tipe.toUpperCase());

  const dataMBTI: Record<string, {
    nama: string;
    kode: string;
    tags: string[];
    deskripsi: string;
    insight: string;
    karakterAnime: string;
    lagu: string;
    pasanganCocok: string;
  }> = {
  ISTJ: {
    nama: 'Logistician',
    kode: 'ISTJ Personality',
    tags: ['Introverted', 'Observant', 'Thinking', 'Judging'],
    deskripsi: 'Orang ISTJ sangat logis, bertanggung jawab, dan disiplin. Mereka senang menjalani hidup secara terstruktur dan bisa diandalkan.',
    insight: 'Disiplin adalah jembatan antara tujuan dan pencapaian. – Jim Rohn',
    karakterAnime: 'Levi Ackerman (Attack on Titan)',
    lagu: 'Centuries - Fall Out Boy',
    pasanganCocok: 'ESFP atau ESTP',
  },
  ISFJ: {
    nama: 'Defender',
    kode: 'ISFJ Personality',
    tags: ['Introverted', 'Observant', 'Feeling', 'Judging'],
    deskripsi: 'ISFJ dikenal hangat, protektif, dan penuh perhatian. Mereka setia dan sering menjadi penjaga nilai-nilai tradisional.',
    insight: 'Kebaikan adalah bahasa yang bisa didengar oleh tuli dan dilihat oleh buta. – Mark Twain',
    karakterAnime: 'Hinata Hyuga (Naruto)',
    lagu: 'Safe & Sound - Taylor Swift',
    pasanganCocok: 'ESFP atau ESTP',
  },
  INFJ: {
    nama: 'Advocate',
    kode: 'INFJ Personality',
    tags: ['Introverted', 'Intuitive', 'Feeling', 'Judging'],
    deskripsi: 'Tipe langka dan idealis dengan nilai moral tinggi. INFJ sangat intuitif dan suka membantu orang lain menemukan makna hidup.',
    insight: 'Yang penting bukan durasi hidup, tapi kedalaman hidup. – Ralph Waldo Emerson',
    karakterAnime: 'Itachi Uchiha (Naruto)',
    lagu: 'Demons - Imagine Dragons',
    pasanganCocok: 'ENFP atau ENTP',
  },
  INTJ: {
    nama: 'Architect',
    kode: 'INTJ Personality',
    tags: ['Introverted', 'Intuitive', 'Thinking', 'Judging'],
    deskripsi: 'INTJ adalah perencana strategis yang berpikiran luas dan logis. Mereka sangat independen dan suka menyempurnakan sistem.',
    insight: 'Pengetahuan adalah kekuatan. Informasi adalah pembebasan. – Kofi Annan',
    karakterAnime: 'L (Death Note)',
    lagu: 'Radioactive - Imagine Dragons',
    pasanganCocok: 'ENFP atau ENTP',
  },
  ISTP: {
    nama: 'Virtuoso',
    kode: 'ISTP Personality',
    tags: ['Introverted', 'Observant', 'Thinking', 'Perceiving'],
    deskripsi: 'ISTP suka mengeksplorasi dunia dengan tangan mereka. Mereka ahli dalam memecahkan masalah praktis dan menyukai kebebasan.',
    insight: 'Tindakan adalah kunci dasar untuk semua kesuksesan. – Pablo Picasso',
    karakterAnime: 'Spike Spiegel (Cowboy Bebop)',
    lagu: 'Believer - Imagine Dragons',
    pasanganCocok: 'ESFJ atau ENFJ',
  },
  ISFP: {
    nama: 'Adventurer',
    kode: 'ISFP Personality',
    tags: ['Introverted', 'Observant', 'Feeling', 'Perceiving'],
    deskripsi: 'ISFP adalah seniman yang sensitif, kreatif, dan menghargai keindahan. Mereka fleksibel dan hidup di momen saat ini.',
    insight: 'Hidup adalah seni menggambar tanpa penghapus. – John W. Gardner',
    karakterAnime: 'Ken Kaneki (Tokyo Ghoul)',
    lagu: 'Lovely - Billie Eilish & Khalid',
    pasanganCocok: 'ESFJ atau ENFJ',
  },
  INFP: {
    nama: 'Mediator',
    kode: 'INFP Personality',
    tags: ['Introverted', 'Intuitive', 'Feeling', 'Perceiving'],
    deskripsi: 'INFP adalah idealis yang sangat peduli dengan moral dan nilai pribadi. Mereka puitis, kreatif, dan penuh empati.',
    insight: 'Hanya dengan hati, kita bisa melihat dengan baik. – Antoine de Saint-Exupéry',
    karakterAnime: 'Shinji Ikari (Evangelion)',
    lagu: 'Fix You - Coldplay',
    pasanganCocok: 'ENFJ atau ENTJ',
  },
  INTP: {
    nama: 'Logician',
    kode: 'INTP Personality',
    tags: ['Introverted', 'Intuitive', 'Thinking', 'Perceiving'],
    deskripsi: 'INTP adalah pemikir yang logis, analitis, dan penasaran. Mereka menikmati teori dan pencarian kebenaran.',
    insight: 'Saya berpikir, maka saya ada. – René Descartes',
    karakterAnime: 'Lelouch Lamperouge (Code Geass)',
    lagu: 'Somewhere I Belong - Linkin Park',
    pasanganCocok: 'ENTJ atau ENFJ',
  },
  ESTP: {
    nama: 'Entrepreneur',
    kode: 'ESTP Personality',
    tags: ['Extraverted', 'Observant', 'Thinking', 'Perceiving'],
    deskripsi: 'ESTP suka petualangan, spontan, dan sangat praktis. Mereka hidup di momen sekarang dan pandai membaca situasi.',
    insight: 'Hidup adalah petualangan yang berani atau tidak sama sekali. – Helen Keller',
    karakterAnime: 'Bokuto Koutarou (Haikyuu!!)',
    lagu: 'Can’t Hold Us - Macklemore & Ryan Lewis',
    pasanganCocok: 'ISFJ atau ISTJ',
  },
  ESFP: {
    nama: 'Entertainer',
    kode: 'ESFP Personality',
    tags: ['Extraverted', 'Observant', 'Feeling', 'Perceiving'],
    deskripsi: 'ESFP suka bersosialisasi, menyenangkan, dan mencintai kehidupan. Mereka hidup dengan gairah dan spontanitas.',
    insight: 'Kebahagiaan bukan sesuatu yang dibuat. Itu berasal dari tindakan Anda sendiri. – Dalai Lama',
    karakterAnime: 'Naruto Uzumaki (Naruto)',
    lagu: 'Shake It Off - Taylor Swift',
    pasanganCocok: 'ISTJ atau ISFJ',
  },
  ENFP: {
    nama: 'Campaigner',
    kode: 'ENFP Personality',
    tags: ['Extraverted', 'Intuitive', 'Feeling', 'Perceiving'],
    deskripsi: 'ENFP adalah jiwa bebas yang bersemangat, penuh ide, dan inspiratif. Mereka suka mengejar kemungkinan dan mimpi.',
    insight: 'Jadilah perubahan yang ingin kamu lihat di dunia. – Mahatma Gandhi',
    karakterAnime: 'Ponyo (Ponyo)',
    lagu: 'On Top of the World - Imagine Dragons',
    pasanganCocok: 'INFJ atau INTJ',
  },
  ENTP: {
    nama: 'Debater',
    kode: 'ENTP Personality',
    tags: ['Extraverted', 'Intuitive', 'Thinking', 'Perceiving'],
    deskripsi: 'ENTP suka tantangan, adu argumen, dan berpikir kreatif. Mereka antusias dan senang bereksperimen dengan ide.',
    insight: 'Pertanyaan seringkali lebih penting dari jawaban. – Albert Einstein',
    karakterAnime: 'Edward Elric (Fullmetal Alchemist)',
    lagu: 'The Phoenix - Fall Out Boy',
    pasanganCocok: 'INFJ atau INTJ',
  },
  ESTJ: {
    nama: 'Executive',
    kode: 'ESTJ Personality',
    tags: ['Extraverted', 'Observant', 'Thinking', 'Judging'],
    deskripsi: 'ESTJ adalah pemimpin alami yang percaya pada ketertiban, tradisi, dan kepraktisan. Mereka suka membuat sistem berjalan efisien.',
    insight: 'Kepemimpinan adalah tindakan, bukan posisi. – Donald H. McGannon',
    karakterAnime: 'Roy Mustang (Fullmetal Alchemist)',
    lagu: 'Stronger - Kanye West',
    pasanganCocok: 'ISFP atau INFP',
  },
  ESFJ: {
    nama: 'Consul',
    kode: 'ESFJ Personality',
    tags: ['Extraverted', 'Observant', 'Feeling', 'Judging'],
    deskripsi: 'ESFJ sangat peduli terhadap orang lain, senang membantu, dan menjaga keharmonisan sosial. Mereka hangat dan suka berorganisasi.',
    insight: 'Kita hidup dengan apa yang kita berikan. – Winston Churchill',
    karakterAnime: 'Tohru Honda (Fruits Basket)',
    lagu: 'Count on Me - Bruno Mars',
    pasanganCocok: 'ISFP atau INFP',
  },
  ENFJ: {
    nama: 'Protagonist',
    kode: 'ENFJ Personality',
    tags: ['Extraverted', 'Intuitive', 'Feeling', 'Judging'],
    deskripsi: 'ENFJ adalah pemimpin karismatik yang penuh empati. Mereka tergerak oleh idealisme dan sangat terhubung dengan orang lain.',
    insight: 'Hidup yang paling baik adalah hidup untuk orang lain. – Albert Einstein',
    karakterAnime: 'Tanjiro Kamado (Demon Slayer)',
    lagu: 'Hall of Fame - The Script',
    pasanganCocok: 'INFP atau ISFP',
  },
  ENTJ: {
    nama: 'Commander',
    kode: 'ENTJ Personality',
    tags: ['Extraverted', 'Intuitive', 'Thinking', 'Judging'],
    deskripsi: 'ENTJ adalah pemimpin strategis, penuh visi, dan berani mengambil keputusan. Mereka sangat fokus pada efisiensi dan hasil.',
    insight: 'Jika kamu ingin menjadi pemimpin, kamu harus belajar untuk berdiri sendiri. – John Wooden',
    karakterAnime: 'Light Yagami (Death Note)',
    lagu: 'Power - Kanye West',
    pasanganCocok: 'INFP atau INTP',
  }
};
</script>

<div class="relative min-h-screen p-6 flex flex-col items-center justify-center overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-[#1e1e2f] to-[#11111b] blur-sm opacity-40 z-0"></div>
  <div class="relative z-10 w-full max-w-3xl px-4 text-center">
    {#if dataMBTI[$tipe]}
      <h1 class="text-5xl font-bold mt-6 text-white">{dataMBTI[$tipe].nama}</h1>
      <h2 class="text-2xl mt-2 text-orange-400">{dataMBTI[$tipe].kode}</h2>

      <!-- Tags -->
      <div class="flex flex-wrap justify-center mt-4 gap-3">
        {#each dataMBTI[$tipe].tags as tag}
          <span class="badge badge-outline border-primary text-primary hover:scale-105 transition transform duration-200 shadow-md">{tag}</span>
        {/each}
      </div>

      <!-- Deskripsi -->
      <div class="flex justify-center">
      <p class="mt-6 max-w-xl text-center text-white text-lg">{dataMBTI[$tipe].deskripsi}</p>
      </div>
      <!-- Insight -->
      <div class="bg-gradient-to-r from-amber-500 to-orange-400 text-white p-6 rounded-xl shadow-lg mt-6 max-w-md mx-auto">
        <blockquote class="italic text-lg">
          “{dataMBTI[$tipe].insight}”
        </blockquote>

      </div>

      <!-- Detail -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-white">
        <div class="bg-base-100 rounded-xl p-4 shadow-lg">
          <strong>Karakter Anime</strong>
          <p>{dataMBTI[$tipe].karakterAnime}</p>
        </div>
        <div class="bg-base-100 rounded-xl p-4 shadow-lg">
          <strong>Lagu Cocok</strong>
          <p>{dataMBTI[$tipe].lagu}</p>
        </div>
        <div class="bg-base-100 rounded-xl p-4 shadow-lg">
          <strong>Pasangan Cocok</strong>
          <p>{dataMBTI[$tipe].pasanganCocok}</p>
        </div>
      </div>

      <!-- Tombol -->
      <a href="/" class="btn mt-10 px-6 py-3 text-white rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:brightness-110 transition">
        🔄 Coba Tes Lagi
      </a>
    {:else}
      <p class="text-red-500 mt-4">Tipe MBTI tidak ditemukan!</p>
    {/if}
  </div>
</div>
