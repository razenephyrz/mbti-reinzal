<script lang="ts">
	import { onMount } from 'svelte';
	export let imageUrl: string;

	onMount(() => {
		// Ungu Inter
		const unguLine = ['.ungu-1', '.ungu-2', '.ungu-3', '.ungu-4'];

		unguLine.forEach((selector, index) => {
			const el = document.querySelector(selector);
			if (el) {
				el.style.opacity = 0;
				el.style.transform = 'translateX(60px)';
				el.style.transition = 'all 0.6s ease';
			}
		});

		const observerA = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const index = unguLine.findIndex(
					(selector) => document.querySelector(selector) === entry.target
				);
				if (entry.isIntersecting) {
					setTimeout(
						() => {
							entry.target.style.opacity = 1;
							entry.target.style.transform = 'translateX(0)';
						},
						100 + index * 100
					);
				} else {
					entry.target.style.opacity = 0;
					entry.target.style.transform = 'translateX(60px)';
				}
			});
		});
		unguLine.forEach((selector, index) => {
			const el = document.querySelector(selector);
			if (el) observerA.observe(el);
		});

		//Hijau Inter
		const hijauLine = ['.hijau-1', '.hijau-2', '.hijau-3', '.hijau-4'];

		hijauLine.forEach((selector, index) => {
			const el = document.querySelector(selector);
			if (el) {
				el.style.opacity = 0;
				el.style.transform = 'translateX(-60px)';
				el.style.transition = 'all 0.6s ease';
			}
		});

		const observerB = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const index = hijauLine.findIndex(
					(selector) => document.querySelector(selector) === entry.target
				);
				if (entry.isIntersecting) {
					setTimeout(
						() => {
							entry.target.style.opacity = 1;
							entry.target.style.transform = 'translateX(0)';
						},
						100 + index * 100
					);
				} else {
					entry.target.style.opacity = 0;
					entry.target.style.transform = 'translateX(-60px)';
				}
			});
		});
		hijauLine.forEach((selector, index) => {
			const el = document.querySelector(selector);
			if (el) observerB.observe(el);
		});
		// Biru Inter
		const biruLine = ['.biru-1', '.biru-2', '.biru-3', '.biru-4'];

		biruLine.forEach((selector, index) => {
			const el = document.querySelector(selector);
			if (el) {
				el.style.opacity = 0;
				el.style.transform = 'translateX(60px)';
				el.style.transition = 'all 0.6s ease';
			}
		});

		const observerC = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const index = biruLine.findIndex(
					(selector) => document.querySelector(selector) === entry.target
				);
				if (entry.isIntersecting) {
					setTimeout(
						() => {
							entry.target.style.opacity = 1;
							entry.target.style.transform = 'translateX(0)';
						},
						100 + index * 100
					);
				} else {
					entry.target.style.opacity = 0;
					entry.target.style.transform = 'translateX(60px)';
				}
			});
		});
		biruLine.forEach((selector, index) => {
			const el = document.querySelector(selector);
			if (el) observerC.observe(el);
		});
		// Oren Inter
		const orenLine = ['.oren-1', '.oren-2', '.oren-3', '.oren-4'];

		orenLine.forEach((selector, index) => {
			const el = document.querySelector(selector);
			if (el) {
				el.style.opacity = 0;
				el.style.transform = 'translateX(-60px)';
				el.style.transition = 'all 0.6s ease';
			}
		});

		const observerD = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const index = orenLine.findIndex(
					(selector) => document.querySelector(selector) === entry.target
				);
				if (entry.isIntersecting) {
					setTimeout(
						() => {
							entry.target.style.opacity = 1;
							entry.target.style.transform = 'translateX(0)';
						},
						100 + index * 100
					);
				} else {
					entry.target.style.opacity = 0;
					entry.target.style.transform = 'translateX(-60px)';
				}
			});
		});
		orenLine.forEach((selector, index) => {
			const el = document.querySelector(selector);
			if (el) observerD.observe(el);
		});
	});
</script>

<div
	class="navbar mt-6 mb-24 flex w-7xl justify-between rounded-lg px-10 py-2 shadow-md outline outline-black duration-300 will-change-transform hover:shadow-pink-800"
>
	<div>
		<img src="./image/logo-mbti-web.png" class="h-12 w-auto" alt="" />
	</div>
	<div class="flex items-center justify-center gap-5">
		<a
			href="./test"
			aria-label="anjay"
			class="text-accent font-semibold duration-300 hover:text-pink-800">Personality Test</a
		>
		<a
			href="./types"
			aria-label="anjay"
			class="text-accent font-semibold duration-300 hover:text-pink-800">Personality Type</a
		>
		<a
			href="./theory"
			aria-label="anjay"
			class="text-accent font-semibold duration-300 hover:text-pink-800">Science Behind</a
		>
		<a
			href="#label"
			aria-label="anjay"
			class="text-accent font-semibold duration-300 hover:text-pink-800">The Journey</a
		>
	</div>
	<div class="flex items-center gap-3">
		<a href="#kanjau" class="text-md text-primary font-semibold">Login</a>
		<button
			class=" btn hover:btn-primary hover:text-primary-content mt-1 items-center border-black text-black"
			>Try Test</button
		>
	</div>
</div>
<h1 class="text-center text-5xl font-black tracking-widest text-pink-800">THE ANALYST</h1>
<section class="my-12 flex w-full flex-wrap justify-evenly gap-4">
	<!-- Kartu 1 -->
	<div
		class=" ungu-1 group relative aspect-[3/4] w-72 overflow-hidden rounded-lg border border-black bg-white shadow-md hover:shadow-xl hover:shadow-pink-800"
	>
		<img src="./image/mbti-illustration/ENTJ.png" alt="card" class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<p class="text-lg font-semibold tracking-wide text-pink-600">ENTJ</p>
		</div>
		<div class="absolute top-2 left-2 flex w-6 flex-col items-center text-pink-800 drop-shadow-md">
			<svg class="h-auto w-full" viewBox="0 0 20 20" fill="currentColor">
				<text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">A</text>
			</svg>
			<svg class="mt-1 h-auto w-full" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
                 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 
                 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 
                 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                 6.86-8.55 11.54L12 21.35z"
				/>
			</svg>
		</div>
	</div>

	<!-- Kartu 2 -->
	<div
		class=" ungu-2 group relative aspect-[3/4] w-72 overflow-hidden rounded-lg border border-black bg-white shadow-md hover:shadow-xl hover:shadow-pink-800"
	>
		<img src="./image/mbti-illustration/INTJ.png" alt="card" class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<p class="text-lg font-semibold tracking-wide text-pink-600">INTJ</p>
		</div>
		<div class="absolute top-2 right-2 flex w-6 flex-col items-center text-pink-800 drop-shadow-md">
			<svg class="h-auto w-full" viewBox="0 0 20 20" fill="currentColor">
				<text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">K</text>
			</svg>
			<svg class="mt-1 h-auto w-full" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
                 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 
                 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 
                 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                 6.86-8.55 11.54L12 21.35z"
				/>
			</svg>
		</div>
	</div>

	<!-- Kartu 3 -->
	<div
		class=" ungu-3 group relative aspect-[3/4] w-72 overflow-hidden rounded-lg border border-black bg-white shadow-md hover:shadow-xl hover:shadow-pink-800"
	>
		<img src="./image/mbti-illustration/INTP.png" alt="card" class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<p class="text-lg font-semibold tracking-wide text-pink-600">INTP</p>
		</div>
		<div class="absolute top-2 right-2 flex w-6 flex-col items-center text-pink-800 drop-shadow-md">
			<svg class="h-auto w-full" viewBox="0 0 20 20" fill="currentColor">
				<text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">Q</text>
			</svg>
			<svg class="mt-1 h-auto w-full" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
                 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 
                 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 
                 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                 6.86-8.55 11.54L12 21.35z"
				/>
			</svg>
		</div>
	</div>

	<!-- Kartu 4 -->
	<div
		class=" ungu-4 group relative aspect-[3/4] w-72 overflow-hidden rounded-lg border border-black bg-white shadow-md hover:shadow-xl hover:shadow-pink-800"
	>
		<img src="./image/mbti-illustration/ENTP.png" alt="card" class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<p class="text-lg font-semibold tracking-wide text-pink-600">ENTP</p>
		</div>
		<div class="absolute top-2 left-2 flex w-6 flex-col items-center text-pink-800 drop-shadow-md">
			<svg class="h-auto w-full" viewBox="0 0 20 20" fill="currentColor">
				<text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">J</text>
			</svg>
			<svg class="mt-1 h-auto w-full" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
                 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 
                 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 
                 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                 6.86-8.55 11.54L12 21.35z"
				/>
			</svg>
		</div>
	</div>
</section>
<!-- Bagian Ijo -->
<h1 class="text-center text-5xl font-black tracking-widest text-green-600">THE DIPLOMATS</h1>
<section class="my-12 flex w-full flex-wrap justify-evenly gap-4">
	<!-- Kartu 1 -->
	<div
		class=" hijau-1 group relative aspect-[3/4] w-72 overflow-hidden rounded-lg border border-black bg-white shadow-md hover:shadow-xl hover:shadow-green-700"
	>
		<img src="./image/mbti-illustration/ENFJ.png" alt="card" class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<p class="text-lg font-semibold tracking-wide text-green-200">ENFJ</p>
		</div>
		<div class="absolute top-2 left-2 flex w-6 flex-col items-center text-green-700 drop-shadow-md">
			<svg class="h-auto w-full" viewBox="0 0 20 20" fill="currentColor">
				<text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">A</text>
			</svg>
			<svg class="mt-1 h-auto w-full" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 2C10.34 2 9 3.34 9 5c0 .35.06.69.18 1.01C8.14 6.4 7 7.57 7 9c0 1.66 1.34 3 3 3 
                 .26 0 .52-.03.77-.1L9.58 13H8c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2h-1.58
                 l-1.19-1.1c.25.07.51.1.77.1 1.66 0 3-1.34 3-3 
                 0-1.43-1.14-2.6-2.18-2.99.12-.32.18-.66.18-1.01 
                 0-1.66-1.34-3-3-3z"
				/>
			</svg>
		</div>
	</div>

	<!-- Kartu 2 -->
	<div
		class=" hijau-2 group relative aspect-[3/4] w-72 overflow-hidden rounded-lg border border-black bg-white shadow-md hover:shadow-xl hover:shadow-green-700"
	>
		<img src="./image/mbti-illustration/INFJ.png" alt="card" class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<p class="text-lg font-semibold tracking-wide text-green-200">INFJ</p>
		</div>
		<div
			class="absolute top-2 right-2 flex w-6 flex-col items-center text-green-700 drop-shadow-md"
		>
			<svg class="h-auto w-full" viewBox="0 0 20 20" fill="currentColor">
				<text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">K</text>
			</svg>
			<svg class="mt-1 h-auto w-full" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 2C10.34 2 9 3.34 9 5c0 .35.06.69.18 1.01C8.14 6.4 7 7.57 7 9c0 1.66 1.34 3 3 3 
                 .26 0 .52-.03.77-.1L9.58 13H8c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2h-1.58
                 l-1.19-1.1c.25.07.51.1.77.1 1.66 0 3-1.34 3-3 
                 0-1.43-1.14-2.6-2.18-2.99.12-.32.18-.66.18-1.01 
                 0-1.66-1.34-3-3-3z"
				/>
			</svg>
		</div>
	</div>

	<!-- Kartu 3 -->
	<div
		class=" hijau-3 group relative aspect-[3/4] w-72 overflow-hidden rounded-lg border border-black bg-white shadow-md hover:shadow-xl hover:shadow-green-700"
	>
		<img src="./image/mbti-illustration/ENFP.png" alt="card" class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<p class="text-lg font-semibold tracking-wide text-green-200">ENFP</p>
		</div>
		<div
			class="absolute top-2 right-2 flex w-6 flex-col items-center text-green-700 drop-shadow-md"
		>
			<svg class="h-auto w-full" viewBox="0 0 20 20" fill="currentColor">
				<text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">Q</text>
			</svg>
			<svg class="mt-1 h-auto w-full" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 2C10.34 2 9 3.34 9 5c0 .35.06.69.18 1.01C8.14 6.4 7 7.57 7 9c0 1.66 1.34 3 3 3 
                 .26 0 .52-.03.77-.1L9.58 13H8c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2h-1.58
                 l-1.19-1.1c.25.07.51.1.77.1 1.66 0 3-1.34 3-3 
                 0-1.43-1.14-2.6-2.18-2.99.12-.32.18-.66.18-1.01 
                 0-1.66-1.34-3-3-3z"
				/>
			</svg>
		</div>
	</div>

	<!-- Kartu 4 -->
	<div
		class=" hijau-4 group relative aspect-[3/4] w-72 overflow-hidden rounded-lg border border-black bg-white shadow-md hover:shadow-xl hover:shadow-green-700"
	>
		<img src="./image/mbti-illustration/INFP.png" alt="card" class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<p class="text-lg font-semibold tracking-wide text-green-200">INFP</p>
		</div>
		<div class="absolute top-2 left-2 flex w-6 flex-col items-center text-green-700 drop-shadow-md">
			<svg class="h-auto w-full" viewBox="0 0 20 20" fill="currentColor">
				<text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">J</text>
			</svg>
			<svg class="mt-1 h-auto w-full" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 2C10.34 2 9 3.34 9 5c0 .35.06.69.18 1.01C8.14 6.4 7 7.57 7 9c0 1.66 1.34 3 3 3 
                 .26 0 .52-.03.77-.1L9.58 13H8c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2h-1.58
                 l-1.19-1.1c.25.07.51.1.77.1 1.66 0 3-1.34 3-3 
                 0-1.43-1.14-2.6-2.18-2.99.12-.32.18-.66.18-1.01 
                 0-1.66-1.34-3-3-3z"
				/>
			</svg>
		</div>
	</div>
</section>
<!-- Bagian Biru -->
<h1 class="text-center text-5xl font-black tracking-widest text-blue-500">THE SENTINELS</h1>
<section class="my-12 flex w-full flex-wrap justify-evenly gap-4">
	<!-- Kartu 1 -->
	<div
		class=" biru-1 group relative aspect-[3/4] w-72 overflow-hidden rounded-lg border border-black bg-white shadow-md hover:shadow-xl hover:shadow-blue-800"
	>
		<img src="./image/mbti-illustration/ISTJ.png" alt="card" class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<p class="text-lg font-semibold tracking-wide text-blue-400">ISTJ</p>
		</div>
		<div class="absolute top-2 left-2 flex w-6 flex-col items-center text-blue-600 drop-shadow-md">
			<svg class="h-auto w-full" viewBox="0 0 20 20" fill="currentColor">
				<text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">A</text>
			</svg>
			<svg class="mt-1 h-auto w-full" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 2L4 12l8 10 8-10L12 2z" />
			</svg>
		</div>
	</div>

	<!-- Kartu 2 -->
	<div
		class=" biru-2 group relative aspect-[3/4] w-72 overflow-hidden rounded-lg border border-black bg-white shadow-md hover:shadow-xl hover:shadow-blue-800"
	>
		<img src="./image/mbti-illustration/ESFJ.png" alt="card" class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<p class="text-lg font-semibold tracking-wide text-blue-400">ESFJ</p>
		</div>
		<div class="absolute top-2 left-2 flex w-6 flex-col items-center text-blue-600 drop-shadow-md">
			<svg class="h-auto w-full" viewBox="0 0 20 20" fill="currentColor">
				<text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">K</text>
			</svg>
			<svg class="mt-1 h-auto w-full" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 2L4 12l8 10 8-10L12 2z" />
			</svg>
		</div>
	</div>

	<!-- Kartu 3 -->
	<div
		class=" biru-3 group relative aspect-[3/4] w-72 overflow-hidden rounded-lg border border-black bg-white shadow-md hover:shadow-xl hover:shadow-blue-800"
	>
		<img src="./image/mbti-illustration/ESTJ.png" alt="card" class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<p class="text-lg font-semibold tracking-wide text-blue-400">ESTJ</p>
		</div>
		<div class="absolute top-2 left-2 flex w-6 flex-col items-center text-blue-600 drop-shadow-md">
			<svg class="h-auto w-full" viewBox="0 0 20 20" fill="currentColor">
				<text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">Q</text>
			</svg>
			<svg class="mt-1 h-auto w-full" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 2L4 12l8 10 8-10L12 2z" />
			</svg>
		</div>
	</div>

	<!-- Kartu 4 -->
	<div
		class=" biru-4 group relative aspect-[3/4] w-72 overflow-hidden rounded-lg border border-black bg-white shadow-md hover:shadow-xl hover:shadow-blue-800"
	>
		<img src="./image/mbti-illustration/ISFJ.png" alt="card" class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<p class="text-lg font-semibold tracking-wide text-blue-400">ISFJ</p>
		</div>
		<div class="absolute top-2 left-2 flex w-6 flex-col items-center text-blue-600 drop-shadow-md">
			<svg class="h-auto w-full" viewBox="0 0 20 20" fill="currentColor">
				<text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">J</text>
			</svg>
			<svg class="mt-1 h-auto w-full" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 2L4 12l8 10 8-10L12 2z" />
			</svg>
		</div>
	</div>
</section>
<!-- Bagian Oren -->
<h1 class="text-center text-5xl font-black tracking-widest text-yellow-600">THE EXPLORERS</h1>
<section class="my-12 flex w-full flex-wrap justify-evenly gap-4">
	<!-- ISTP -->
	<div
		class="oren-1 group relative aspect-[3/4] w-72 overflow-hidden rounded-lg border border-black bg-white shadow-md hover:shadow-xl hover:shadow-yellow-600"
	>
		<img src="./image/mbti-illustration/ISTP.png" alt="card" class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<p class="text-lg font-semibold tracking-wide text-yellow-400">ISTP</p>
		</div>
		<div
			class="absolute top-2 left-2 flex w-6 flex-col items-center text-yellow-600 drop-shadow-md"
		>
			<svg class="h-auto w-full" viewBox="0 0 20 20" fill="currentColor">
				<text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">A</text>
			</svg>
			<svg class="mt-1 h-auto w-full" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 2C10 5 5 8 5 12c0 2.21 1.79 4 4 4h2v2H9v2h6v-2h-2v-2h2c2.21 0 4-1.79 4-4 0-4-5-7-7-10z"
				/>
			</svg>
		</div>
	</div>

	<!-- ESTP -->
	<div
		class=" oren-2 group relative aspect-[3/4] w-72 overflow-hidden rounded-lg border border-black bg-white shadow-md hover:shadow-xl hover:shadow-yellow-600"
	>
		<img src="./image/mbti-illustration/ESTP.png" alt="card" class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<p class="text-lg font-semibold tracking-wide text-yellow-400">ESTP</p>
		</div>
		<div
			class="absolute top-2 left-2 flex w-6 flex-col items-center text-yellow-600 drop-shadow-md"
		>
			<svg class="h-auto w-full" viewBox="0 0 20 20" fill="currentColor">
				<text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">K</text>
			</svg>
			<svg class="mt-1 h-auto w-full" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 2C10 5 5 8 5 12c0 2.21 1.79 4 4 4h2v2H9v2h6v-2h-2v-2h2c2.21 0 4-1.79 4-4 0-4-5-7-7-10z"
				/>
			</svg>
		</div>
	</div>

	<!-- ESFP -->
	<div
		class=" oren-3 group relative aspect-[3/4] w-72 overflow-hidden rounded-lg border border-black bg-white shadow-md hover:shadow-xl hover:shadow-yellow-600"
	>
		<img src="./image/mbti-illustration/ESFP.png" alt="card" class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<p class="text-lg font-semibold tracking-wide text-yellow-400">ESFP</p>
		</div>
		<div
			class="absolute top-2 left-2 flex w-6 flex-col items-center text-yellow-600 drop-shadow-md"
		>
			<svg class="h-auto w-full" viewBox="0 0 20 20" fill="currentColor">
				<text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">Q</text>
			</svg>
			<svg class="mt-1 h-auto w-full" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 2C10 5 5 8 5 12c0 2.21 1.79 4 4 4h2v2H9v2h6v-2h-2v-2h2c2.21 0 4-1.79 4-4 0-4-5-7-7-10z"
				/>
			</svg>
		</div>
	</div>

	<!-- ISFP -->
	<div
		class=" oren-4 group relative aspect-[3/4] w-72 overflow-hidden rounded-lg border border-black bg-white shadow-md hover:shadow-xl hover:shadow-yellow-600"
	>
		<img src="./image/mbti-illustration/ISFP.png" alt="card" class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<p class="text-lg font-semibold tracking-wide text-yellow-400">ISFP</p>
		</div>
		<div
			class="absolute top-2 right-2 flex w-6 flex-col items-center text-yellow-600 drop-shadow-md"
		>
			<svg class="h-auto w-full" viewBox="0 0 20 20" fill="currentColor">
				<text x="0" y="15" font-size="18" font-family="serif" font-weight="bold">J</text>
			</svg>
			<svg class="mt-1 h-auto w-full" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 2C10 5 5 8 5 12c0 2.21 1.79 4 4 4h2v2H9v2h6v-2h-2v-2h2c2.21 0 4-1.79 4-4 0-4-5-7-7-10z"
				/>
			</svg>
		</div>
	</div>
</section>
