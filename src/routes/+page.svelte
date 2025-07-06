<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const navbar = document.querySelector('.navbar');
		if (navbar) {
			navbar.style.opacity = 0;
			navbar.style.transform = 'translateY(-30px)';
			setTimeout(() => {
				navbar.style.transition = 'all 0.6s ease';
				navbar.style.opacity = 1;
				navbar.style.transform = 'translateY(0)';
			}, 100);
		}

		const heroElements = [
			'.hero-heading',
			'.hero-sub1',
			'.hero-sub2',
			'.hero-btn'
		];

		const statElements = [
			'.stat-fst',
			'.stat-scnd',
			'.stat-thrd',
			'.stat-frth',
		];

		const ctaFirst = document.querySelector('.cta-first');
		const ctaSecond = document.querySelector('.cta-second');

		if (ctaSecond) {
			ctaSecond.style.opacity = 0;
			ctaSecond.style.transform = 'translateX(-30px)';
			ctaSecond.style.transition = 'all 0.6s ease';
		}
		if (ctaFirst) {
			ctaFirst.style.opacity = 0;
			ctaFirst.style.transform = 'translateX(30px)';
			ctaFirst.style.transition = 'all 0.6s ease';
		}

		const observerA = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = 1;
					entry.target.style.transform = 'translateX(0)';
				} else {
					entry.target.style.opacity = 0;
					entry.target.style.transform = 'translateX(30px)';
				}
			})
		});
		const observerB = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = 1;
					entry.target.style.transform = 'translateX(0)';
				} else {
					entry.target.style.opacity = 0;
					entry.target.style.transform = 'translateX(-30px)';
				}
			})
		});

		if (ctaFirst) observerA.observe(ctaFirst);
		if (ctaSecond) observerB.observe(ctaSecond);

		statElements.forEach((selector, index) => {
			const el = document.querySelector(selector);
			if (el) {
				el.style.opacity = 0;
				el.style.transform = 'translateY(30px)';
				el.style.transition = 'all 0.6s ease';
			}
		});

		const observerStats = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const index = statElements.findIndex(selector => document.querySelector(selector) === entry.target);
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.style.opacity = 1;
						entry.target.style.transform = 'translateY(0)';
					}, 100 + index * 100);
				}
			});
		});

		statElements.forEach((selector) => {
			const el = document.querySelector(selector);
			if (el) observerStats.observe(el);
		});

		heroElements.forEach((selector, index) => {
			const el = document.querySelector(selector);
			if (el) {
				el.style.opacity = 0;
				el.style.transform = 'translateY(30px)';
				setTimeout(() => {
					el.style.transition = 'all 0.6s ease';
					el.style.opacity = 1;
					el.style.transform = 'translateY(0)';
				}, 600 + index * 200);
			}
		});
	});
</script>

<!-- Navbar -->
<div class="navbar will-change-transform px-10 w-7xl rounded-lg py-2 flex justify-between outline mt-6 outline-black shadow-md hover:shadow-green-700">
	<div>
		<img src="/image/logo-mbti-web.png" class="h-12 w-auto" alt="MBTI Logo" />
	</div>
	<div class="flex justify-center gap-5 items-center">
		<a href="/test" class="font-semibold text-accent hover:text-green-800 duration-300">Personality Test</a>
		<a href="/types" class="font-semibold text-accent hover:text-green-800 duration-300">Personality Type</a>
		<a href="/theory" class="font-semibold text-accent hover:text-green-800 duration-300">Science Behind</a>
		<a href="#label" class="font-semibold text-accent hover:text-green-800 duration-300">The Journey</a>
	</div>
	<div class="flex items-center gap-3">
		<a href="#kanjau" class="font-semibold text-md text-primary">Login</a>
		<button class="btn border-black text-black items-center mt-1 hover:btn-primary hover:text-primary-content">
			Try Test
		</button>
	</div>
</div>

<!-- Hero -->
 <div class=" flex flex-col justify-center items-center h-[90vh]">
    <h1 class="hero-heading text-4xl font-black text-black text-center mb-2.5">“Kadang yang paling susah dipahami…<span class="begeh bg-black relative text-primary-content">ya diri sendiri.”</span></h1>
    <p class="hero-sub1 text-xl text-black">Hanya butuh 10 menit untuk mendapatkan gambaran “akurat banget” tentang</p>
    <p class="hero-sub2 text-xl text-black">siapa dirimu dan kenapa kamu bertindak seperti itu.</p>
    <button class="hero-btn btn btn-lg btn-primary mt-6 rounded-2xl w-66 border-black text-black hover:bg-black hover:text-primary-content bg-transparent">Test Now</button>
</div>
<!-- stat -->

<div class=" flex justify-evenly w-7xl px-10 mb-44">
	<div class="stat-fst">
		<h1 class=" text-center font-black text-3xl text-purple-600">191K+</h1>
		<h1 class=" font-medium text-xl text-black">Test Taken Today</h1>
	</div>
	<div class="stat-scnd">
		<h1 class=" text-center font-black text-3xl text-yellow-600">31M+</h1>
		<h1 class=" font-medium text-xl text-black">Test Taken in Indonesia</h1>
	</div>
	<div class="stat-thrd">
		<h1 class=" text-center font-black text-3xl text-blue-600">1.4B+</h1>
		<h1 class=" font-medium text-xl text-black">Total Test Taken</h1>
	</div>
	<div class="stat-frth">
		<h1 class=" text-center font-black text-3xl text-green-600">91.2%</h1>
		<h1 class=" font-medium text-xl text-black">Results accuracy</h1>
	</div>
</div>
<!-- CTA First -->
<section class="cta-first w-full bg-white py-24 px-6 md:px-20">
  <div class="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto cta-first">
    <!-- Left Text -->
    <div class="max-w-xl space-y-5">
      <p class="uppercase tracking-widest text-sm text-yellow-600">Personality Types</p>
      <h2 class="text-4xl font-bold text-black leading-tight">
        Understand Others
      </h2>
      <p class="text-gray-700 leading-relaxed">
        In our free type descriptions you’ll learn what really drives, inspires, and worries
        different personality types, helping you build more meaningful relationships.
      </p>
      <div class="flex gap-4 pt-2">
        <button class="rounded-full px-8 py-3 border border-black bg-black text-white hover:bg-gray-900 transition">
          Check It Out
        </button>
        <button class="rounded-full px-6 py-3 hover:underline text-black transition">
          Theory Behind
        </button>
      </div>
    </div>

    <!-- Right Image -->
    <div class="transition-transform duration-300 hover:scale-105">
      <img src="./image/cta-section-first.png" class="w-64" alt="Understand Others Illustration">
    </div>
  </div>
</section>

<!-- CTA Second -->
<section class="cta-second w-full bg-white py-24 px-6 md:px-20 my-12">
  <div class="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto cta-second">
    <!-- Left Image -->
    <div class="transition-transform duration-300 hover:scale-105">
      <img src="./image/cta-section-first.png" class="w-64" alt="Journey Illustration">
    </div>

    <!-- Right Text -->
    <div class="max-w-xl space-y-5">
      <p class="uppercase tracking-widest text-sm text-purple-600">The Journey</p>
      <h2 class="text-4xl font-bold text-black leading-tight">
        Explore The Journey<br class="hidden md:block" /> Of Developing This Test
      </h2>
      <p class="text-gray-700 leading-relaxed">
        In our free type descriptions you’ll learn what really drives, inspires, and worries
        different personality types, helping you build more meaningful relationships.
      </p>
      <div class="pt-2">
        <button class="rounded-full px-8 py-3 border border-black bg-black text-white hover:text-purple-400 transition">
          Check It Out
        </button>
      </div>
    </div>
  </div>
</section>
<section class="w-full mb-12 py-20 px-6 md:px-20">
  <!-- Heading -->
  <div class="text-center mb-12">
    <div class="flex justify-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4h-3a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v7a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    </div>
    <h2 class="text-3xl font-bold text-black mb-2">Testimonials</h2>
    <p class="text-gray-600">We can't talk. Let the results talk.</p>
  </div>

  <!-- Testimonial Slider -->
  <div class="overflow-hidden group relative">
    <div class="flex gap-6 animate-scroll group-hover:[animation-play-state:paused]">
      <!-- CARD 1 -->
      <div class="min-w-[280px] relative rounded-xl overflow-hidden shadow-xl border border-primary/20">
        <div class="absolute inset-0 bg-primary"></div>
        <div class="absolute inset-0 bg-primary/30 backdrop-blur-md"></div>
        <div class="relative p-6 flex flex-col items-center text-center z-10 text-white">
          <div class="w-20 h-1 bg-secondary mb-4 rounded"></div>
          <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="card-1" class="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-4" />
          <p class="text-sm font-medium">
            “Very insightful and helped me understand myself better!”
          </p>
        </div>
      </div>

      <!-- CARD 2 -->
      <div class="min-w-[280px] relative rounded-xl overflow-hidden shadow-xl border border-secondary/20">
        <div class="absolute inset-0 bg-secondary"></div>
        <div class="absolute inset-0 bg-secondary/30 backdrop-blur-md"></div>
        <div class="relative p-6 flex flex-col items-center text-center z-10 text-white">
          <div class="w-20 h-1 bg-accent mb-4 rounded"></div>
          <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="card-2" class="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-4" />
          <p class="text-sm font-medium">
            “Loved how accurate the results were. Simple yet powerful.”
          </p>
        </div>
      </div>

      <!-- CARD 3 -->
      <div class="min-w-[280px] relative rounded-xl overflow-hidden shadow-xl border border-accent/20">
        <div class="absolute inset-0 bg-accent"></div>
        <div class="absolute inset-0 bg-accent/30 backdrop-blur-md"></div>
        <div class="relative p-6 flex flex-col items-center text-center z-10 text-white">
          <div class="w-20 h-1 bg-primary mb-4 rounded"></div>
          <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="card-3" class="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-4" />
          <p class="text-sm font-medium">
            “It gave me clarity I didn’t know I needed.”
          </p>
        </div>
      </div>

      <!-- CARD 4 -->
      <div class="min-w-[280px] relative rounded-xl overflow-hidden shadow-xl border border-primary/20">
        <div class="absolute inset-0 bg-primary"></div>
        <div class="absolute inset-0 bg-primary/30 backdrop-blur-md"></div>
        <div class="relative p-6 flex flex-col items-center text-center z-10 text-white">
          <div class="w-20 h-1 bg-pink-400 mb-4 rounded"></div>
          <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="card-4" class="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-4" />
          <p class="text-sm font-medium">
            “Very well designed and accurate to my personality.”
          </p>
        </div>
      </div>

      <!-- CARD 5 -->
      <div class="min-w-[280px] relative rounded-xl overflow-hidden shadow-xl border border-secondary/20">
        <div class="absolute inset-0 bg-secondary"></div>
        <div class="absolute inset-0 bg-secondary/30 backdrop-blur-md"></div>
        <div class="relative p-6 flex flex-col items-center text-center z-10 text-white">
          <div class="w-20 h-1 bg-yellow-400 mb-4 rounded"></div>
          <img src="https://randomuser.me/api/portraits/men/29.jpg" alt="card-5" class="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-4" />
          <p class="text-sm font-medium">
            “My whole team took it and we had so much fun!”
          </p>
        </div>
      </div>

      <!-- CARD 6 -->
      <div class="min-w-[280px] relative rounded-xl overflow-hidden shadow-xl border border-accent/20">
        <div class="absolute inset-0 bg-accent"></div>
        <div class="absolute inset-0 bg-accent/30 backdrop-blur-md"></div>
        <div class="relative p-6 flex flex-col items-center text-center z-10 text-white">
          <div class="w-20 h-1 bg-green-400 mb-4 rounded"></div>
          <img src="https://randomuser.me/api/portraits/women/30.jpg" alt="card-6" class="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-4" />
          <p class="text-sm font-medium">
            “Insightful. Introspective. Incredible.”
          </p>
        </div>
      </div>

      <!-- CARD 7 -->
      <div class="min-w-[280px] relative rounded-xl overflow-hidden shadow-xl border border-primary/20">
        <div class="absolute inset-0 bg-primary"></div>
        <div class="absolute inset-0 bg-primary/30 backdrop-blur-md"></div>
        <div class="relative p-6 flex flex-col items-center text-center z-10 text-white">
          <div class="w-20 h-1 bg-red-400 mb-4 rounded"></div>
          <img src="https://randomuser.me/api/portraits/men/31.jpg" alt="card-7" class="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-4" />
          <p class="text-sm font-medium">
            “Honestly? Scarily accurate.”
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Last Sect -->
<section class="relative text-black pt-16 pb-20 px-6 md:px-20 text-center overflow-hidden font-sans">
  <div class="max-w-3xl mx-auto space-y-8 relative z-10">
    <!-- Headline -->
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
      Kamu udah lihat semuanya kan?
    </h2>
    <!-- Subheadline -->
    <p class="text-lg sm:text-xl text-black font-medium leading-relaxed">
      Tipe kepribadian, validasi orang-orang, sampai proses di baliknya.<br />
      Sekarang giliran kamu buat cari tahu siapa dirimu sebenarnya.
    </p>
    <!-- Buttons -->
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <button class="btn btn-lg btn-primary rounded-xl px-10 font-semibold shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl tracking-wide">
        Mulai Tes Sekarang 🚀
      </button>
    </div>
  </div>
</section>



<style>
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-scroll {
  animation: scroll 40s linear infinite;
}

</style>