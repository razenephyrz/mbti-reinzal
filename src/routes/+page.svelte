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

		const heroElements = ['.hero-heading', '.hero-sub1', '.hero-sub2', '.hero-btn'];

		const statElements = ['.stat-fst', '.stat-scnd', '.stat-thrd', '.stat-frth'];

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
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = 1;
					entry.target.style.transform = 'translateX(0)';
				} else {
					entry.target.style.opacity = 0;
					entry.target.style.transform = 'translateX(30px)';
				}
			});
		});
		const observerB = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = 1;
					entry.target.style.transform = 'translateX(0)';
				} else {
					entry.target.style.opacity = 0;
					entry.target.style.transform = 'translateX(-30px)';
				}
			});
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
				const index = statElements.findIndex(
					(selector) => document.querySelector(selector) === entry.target
				);
				if (entry.isIntersecting) {
					setTimeout(
						() => {
							entry.target.style.opacity = 1;
							entry.target.style.transform = 'translateY(0)';
						},
						100 + index * 100
					);
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
				setTimeout(
					() => {
						el.style.transition = 'all 0.6s ease';
						el.style.opacity = 1;
						el.style.transform = 'translateY(0)';
					},
					600 + index * 200
				);
			}
		});
	});
</script>

<!-- Navbar -->
<div
	class="navbar mt-6 flex w-7xl justify-between rounded-lg px-10 py-2 shadow-md outline outline-black will-change-transform hover:shadow-green-700"
>
	<div>
		<img src="/image/logo-mbti-web.png" class="h-12 w-auto" alt="MBTI Logo" />
	</div>
	<div class="flex items-center justify-center gap-5">
		<a href="/test" class="text-accent font-semibold duration-300 hover:text-green-800"
			>Personality Test</a
		>
		<a href="/types" class="text-accent font-semibold duration-300 hover:text-green-800"
			>Personality Type</a
		>
		<a href="/theory" class="text-accent font-semibold duration-300 hover:text-green-800"
			>Science Behind</a
		>
		<a href="#label" class="text-accent font-semibold duration-300 hover:text-green-800"
			>The Journey</a
		>
	</div>
	<div class="flex items-center gap-3">
		<a href="#kanjau" class="text-md text-primary font-semibold">Login</a>
		<button
			class="btn hover:btn-primary hover:text-primary-content mt-1 items-center border-black text-black"
		>
			Try Test
		</button>
	</div>
</div>

<!-- Hero -->
<div class=" flex h-[90vh] flex-col items-center justify-center">
	<h1 class="hero-heading mb-2.5 text-center text-4xl font-black text-black">
		“Kadang yang paling susah dipahami…<span class="begeh text-primary-content relative bg-black"
			>ya diri sendiri.”</span
		>
	</h1>
	<p class="hero-sub1 text-xl text-black">
		Hanya butuh 10 menit untuk mendapatkan gambaran “akurat banget” tentang
	</p>
	<p class="hero-sub2 text-xl text-black">siapa dirimu dan kenapa kamu bertindak seperti itu.</p>
	<button
		class="hero-btn btn btn-lg btn-primary hover:text-primary-content mt-6 w-66 rounded-2xl border-black bg-transparent text-black hover:bg-black"
		>Test Now</button
	>
</div>
<!-- stat -->

<div class=" mb-44 flex w-7xl justify-evenly px-10">
	<div class="stat-fst">
		<h1 class=" text-center text-3xl font-black text-purple-600">191K+</h1>
		<h1 class=" text-xl font-medium text-black">Test Taken Today</h1>
	</div>
	<div class="stat-scnd">
		<h1 class=" text-center text-3xl font-black text-yellow-600">31M+</h1>
		<h1 class=" text-xl font-medium text-black">Test Taken in Indonesia</h1>
	</div>
	<div class="stat-thrd">
		<h1 class=" text-center text-3xl font-black text-blue-600">1.4B+</h1>
		<h1 class=" text-xl font-medium text-black">Total Test Taken</h1>
	</div>
	<div class="stat-frth">
		<h1 class=" text-center text-3xl font-black text-green-600">91.2%</h1>
		<h1 class=" text-xl font-medium text-black">Results accuracy</h1>
	</div>
</div>
<!-- CTA First -->
<section class="cta-first w-full bg-white px-6 py-24 md:px-20">
	<div
		class="cta-first mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 md:flex-row"
	>
		<!-- Left Text -->
		<div class="max-w-xl space-y-5">
			<p class="text-sm tracking-widest text-yellow-600 uppercase">Personality Types</p>
			<h2 class="text-4xl leading-tight font-bold text-black">Understand Others</h2>
			<p class="leading-relaxed text-gray-700">
				In our free type descriptions you’ll learn what really drives, inspires, and worries
				different personality types, helping you build more meaningful relationships.
			</p>
			<div class="flex gap-4 pt-2">
				<button
					class="rounded-full border border-black bg-black px-8 py-3 text-white transition hover:bg-gray-900"
				>
					Check It Out
				</button>
				<button class="rounded-full px-6 py-3 text-black transition hover:underline">
					Theory Behind
				</button>
			</div>
		</div>

		<!-- Right Image -->
		<div class="transition-transform duration-300 hover:scale-105">
			<img src="./image/cta-section-first.png" class="w-64" alt="Understand Others Illustration" />
		</div>
	</div>
</section>

<!-- CTA Second -->
<section class="cta-second my-12 w-full bg-white px-6 py-24 md:px-20">
	<div
		class="cta-second mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 md:flex-row"
	>
		<!-- Left Image -->
		<div class="transition-transform duration-300 hover:scale-105">
			<img src="./image/cta-section-first.png" class="w-64" alt="Journey Illustration" />
		</div>

		<!-- Right Text -->
		<div class="max-w-xl space-y-5">
			<p class="text-sm tracking-widest text-purple-600 uppercase">The Journey</p>
			<h2 class="text-4xl leading-tight font-bold text-black">
				Explore The Journey<br class="hidden md:block" /> Of Developing This Test
			</h2>
			<p class="leading-relaxed text-gray-700">
				In our free type descriptions you’ll learn what really drives, inspires, and worries
				different personality types, helping you build more meaningful relationships.
			</p>
			<div class="pt-2">
				<button
					class="rounded-full border border-black bg-black px-8 py-3 text-white transition hover:text-purple-400"
				>
					Check It Out
				</button>
			</div>
		</div>
	</div>
</section>
<section class="mb-12 w-full px-6 py-20 md:px-20">
	<!-- Heading -->
	<div class="mb-12 text-center">
		<div class="mb-2 flex justify-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="text-primary h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M7 8h10M7 12h4m1 8l-4-4h-3a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v7a2 2 0 01-2 2h-3l-4 4z"
				/>
			</svg>
		</div>
		<h2 class="mb-2 text-3xl font-bold text-black">Testimonials</h2>
		<p class="text-gray-600">We can't talk. Let the results talk.</p>
	</div>

	<!-- Testimonial Slider -->
	<div class="group relative overflow-hidden">
		<div class="animate-scroll flex gap-6 group-hover:[animation-play-state:paused]">
			<!-- CARD 1 -->
			<div
				class="border-primary/20 relative min-w-[280px] overflow-hidden rounded-xl border shadow-xl"
			>
				<div class="bg-primary absolute inset-0"></div>
				<div class="bg-primary/30 absolute inset-0 backdrop-blur-md"></div>
				<div class="relative z-10 flex flex-col items-center p-6 text-center text-white">
					<div class="bg-secondary mb-4 h-1 w-20 rounded"></div>
					<img
						src="https://randomuser.me/api/portraits/men/11.jpg"
						alt="card-1"
						class="mb-4 h-20 w-20 rounded-full border-4 border-white shadow-lg"
					/>
					<p class="text-sm font-medium">
						“Very insightful and helped me understand myself better!”
					</p>
				</div>
			</div>

			<!-- CARD 2 -->
			<div
				class="border-secondary/20 relative min-w-[280px] overflow-hidden rounded-xl border shadow-xl"
			>
				<div class="bg-secondary absolute inset-0"></div>
				<div class="bg-secondary/30 absolute inset-0 backdrop-blur-md"></div>
				<div class="relative z-10 flex flex-col items-center p-6 text-center text-white">
					<div class="bg-accent mb-4 h-1 w-20 rounded"></div>
					<img
						src="https://randomuser.me/api/portraits/women/12.jpg"
						alt="card-2"
						class="mb-4 h-20 w-20 rounded-full border-4 border-white shadow-lg"
					/>
					<p class="text-sm font-medium">
						“Loved how accurate the results were. Simple yet powerful.”
					</p>
				</div>
			</div>

			<!-- CARD 3 -->
			<div
				class="border-accent/20 relative min-w-[280px] overflow-hidden rounded-xl border shadow-xl"
			>
				<div class="bg-accent absolute inset-0"></div>
				<div class="bg-accent/30 absolute inset-0 backdrop-blur-md"></div>
				<div class="relative z-10 flex flex-col items-center p-6 text-center text-white">
					<div class="bg-primary mb-4 h-1 w-20 rounded"></div>
					<img
						src="https://randomuser.me/api/portraits/men/15.jpg"
						alt="card-3"
						class="mb-4 h-20 w-20 rounded-full border-4 border-white shadow-lg"
					/>
					<p class="text-sm font-medium">“It gave me clarity I didn’t know I needed.”</p>
				</div>
			</div>

			<!-- CARD 4 -->
			<div
				class="border-primary/20 relative min-w-[280px] overflow-hidden rounded-xl border shadow-xl"
			>
				<div class="bg-primary absolute inset-0"></div>
				<div class="bg-primary/30 absolute inset-0 backdrop-blur-md"></div>
				<div class="relative z-10 flex flex-col items-center p-6 text-center text-white">
					<div class="mb-4 h-1 w-20 rounded bg-pink-400"></div>
					<img
						src="https://randomuser.me/api/portraits/women/22.jpg"
						alt="card-4"
						class="mb-4 h-20 w-20 rounded-full border-4 border-white shadow-lg"
					/>
					<p class="text-sm font-medium">“Very well designed and accurate to my personality.”</p>
				</div>
			</div>

			<!-- CARD 5 -->
			<div
				class="border-secondary/20 relative min-w-[280px] overflow-hidden rounded-xl border shadow-xl"
			>
				<div class="bg-secondary absolute inset-0"></div>
				<div class="bg-secondary/30 absolute inset-0 backdrop-blur-md"></div>
				<div class="relative z-10 flex flex-col items-center p-6 text-center text-white">
					<div class="mb-4 h-1 w-20 rounded bg-yellow-400"></div>
					<img
						src="https://randomuser.me/api/portraits/men/29.jpg"
						alt="card-5"
						class="mb-4 h-20 w-20 rounded-full border-4 border-white shadow-lg"
					/>
					<p class="text-sm font-medium">“My whole team took it and we had so much fun!”</p>
				</div>
			</div>

			<!-- CARD 6 -->
			<div
				class="border-accent/20 relative min-w-[280px] overflow-hidden rounded-xl border shadow-xl"
			>
				<div class="bg-accent absolute inset-0"></div>
				<div class="bg-accent/30 absolute inset-0 backdrop-blur-md"></div>
				<div class="relative z-10 flex flex-col items-center p-6 text-center text-white">
					<div class="mb-4 h-1 w-20 rounded bg-green-400"></div>
					<img
						src="https://randomuser.me/api/portraits/women/30.jpg"
						alt="card-6"
						class="mb-4 h-20 w-20 rounded-full border-4 border-white shadow-lg"
					/>
					<p class="text-sm font-medium">“Insightful. Introspective. Incredible.”</p>
				</div>
			</div>

			<!-- CARD 7 -->
			<div
				class="border-primary/20 relative min-w-[280px] overflow-hidden rounded-xl border shadow-xl"
			>
				<div class="bg-primary absolute inset-0"></div>
				<div class="bg-primary/30 absolute inset-0 backdrop-blur-md"></div>
				<div class="relative z-10 flex flex-col items-center p-6 text-center text-white">
					<div class="mb-4 h-1 w-20 rounded bg-red-400"></div>
					<img
						src="https://randomuser.me/api/portraits/men/31.jpg"
						alt="card-7"
						class="mb-4 h-20 w-20 rounded-full border-4 border-white shadow-lg"
					/>
					<p class="text-sm font-medium">“Honestly? Scarily accurate.”</p>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- Last Sect -->
<section
	class="relative overflow-hidden px-6 pt-16 pb-20 text-center font-sans text-black md:px-20"
>
	<div class="relative z-10 mx-auto max-w-3xl space-y-8">
		<!-- Headline -->
		<h2 class="text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-5xl">
			Kamu udah lihat semuanya kan?
		</h2>
		<!-- Subheadline -->
		<p class="text-lg leading-relaxed font-medium text-black sm:text-xl">
			Tipe kepribadian, validasi orang-orang, sampai proses di baliknya.<br />
			Sekarang giliran kamu buat cari tahu siapa dirimu sebenarnya.
		</p>
		<!-- Buttons -->
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<button
				class="btn btn-lg btn-primary transform rounded-xl px-10 font-semibold tracking-wide shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
			>
				Mulai Tes Sekarang 🚀
			</button>
		</div>
	</div>
</section>

<style>
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
	.animate-scroll {
		animation: scroll 40s linear infinite;
	}
</style>
