<script lang="ts">
	import { goto } from '$app/navigation';
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let currentIndex = 0;
	let isExtrovert = 0;
	let isSensing = 0;
	let isThinking = 0;
	let isJudging = 0;

	// background mood per trait
	$: currentTraitClass =
		currentIndex < 5 ? 'bg-extrovert' :
		currentIndex < 10 ? 'bg-sensing' :
		currentIndex < 15 ? 'bg-thinking' :
		'bg-judging';

	// progress %
	$: progressPercent = Math.round((currentIndex / dataPertanyaan.length) * 100);

	function axisPercent(score: number) {
		const min = -5;
		const max = 5;
		return Math.round(((score - min) / (max - min)) * 100);
	}

	function jawab(yes: boolean) {
		const current = dataPertanyaan[currentIndex];
		yes ? current.actionYes() : current.actionNo();
		currentIndex++;
		if (currentIndex >= dataPertanyaan.length) cekSelesai();
	}

	function cekSelesai() {
		const tipe =
			(isExtrovert >= 0 ? 'E' : 'I') +
			(isSensing >= 0 ? 'S' : 'N') +
			(isThinking >= 0 ? 'T' : 'F') +
			(isJudging >= 0 ? 'J' : 'P');

		goto(`/${tipe.toUpperCase()}`);
	} 

	const dataPertanyaan = [
		{
			pertanyaan: 'Apakah Anda merasa lebih bersemangat saat berada di sekitar banyak orang?',
			actionYes: () => isExtrovert++,
			actionNo: () => isExtrovert--
		},
		{
			pertanyaan: 'Apakah Anda lebih suka berbicara secara langsung daripada mengobrol lewat teks?',
			actionYes: () => isExtrovert++,
			actionNo: () => isExtrovert--
		},
		{
			pertanyaan:
				'Apakah Anda merasa lebih nyaman berbagi ide secara spontan dibandingkan merenungkannya terlebih dahulu?',
			actionYes: () => isExtrovert++,
			actionNo: () => isExtrovert--
		},
		{
			pertanyaan: 'Apakah Anda sering mencari aktivitas sosial dibandingkan menyendiri?',
			actionYes: () => isExtrovert++,
			actionNo: () => isExtrovert--
		},
		{
			pertanyaan:
				'Apakah Anda lebih suka mendiskusikan masalah dengan orang lain daripada menyelesaikannya sendiri?',
			actionYes: () => isExtrovert++,
			actionNo: () => isExtrovert--
		},
		{
			pertanyaan: 'Apakah Anda lebih percaya pada pengalaman nyata daripada teori atau firasat?',
			actionYes: () => isSensing++,
			actionNo: () => isSensing--
		},
		{
			pertanyaan:
				'Apakah Anda lebih suka mengandalkan fakta konkret dibandingkan memikirkan kemungkinan abstrak?',
			actionYes: () => isSensing++,
			actionNo: () => isSensing--
		},
		{
			pertanyaan:
				'Apakah Anda lebih nyaman dengan metode yang sudah terbukti daripada mencoba cara baru?',
			actionYes: () => isSensing++,
			actionNo: () => isSensing--
		},
		{
			pertanyaan:
				'Apakah Anda lebih fokus pada apa yang bisa Anda lihat dan rasakan sekarang daripada memikirkan kemungkinan di masa depan?',
			actionYes: () => isSensing++,
			actionNo: () => isSensing--
		},
		{
			pertanyaan:
				'Apakah Anda lebih suka mempelajari sesuatu melalui pengalaman langsung daripada berimajinasi atau menganalisis teori?',
			actionYes: () => isSensing++,
			actionNo: () => isSensing--
		},
		{
			pertanyaan: 'Apakah Anda cenderung mengambil keputusan berdasarkan logika daripada emosi?',
			actionYes: () => isThinking++,
			actionNo: () => isThinking--
		},
		{
			pertanyaan: 'Apakah Anda lebih menghargai keadilan dan objektivitas dibandingkan empati?',
			actionYes: () => isThinking++,
			actionNo: () => isThinking--
		},
		{
			pertanyaan:
				'Apakah Anda lebih suka memberikan kritik jujur daripada menjaga perasaan seseorang?',
			actionYes: () => isThinking++,
			actionNo: () => isThinking--
		},
		{
			pertanyaan:
				'Apakah Anda merasa keputusan terbaik adalah yang paling masuk akal secara logis?',
			actionYes: () => isThinking++,
			actionNo: () => isThinking--
		},
		{
			pertanyaan: 'Apakah Anda lebih menghargai efisiensi daripada harmoni dalam tim?',
			actionYes: () => isThinking++,
			actionNo: () => isThinking--
		},
		{
			pertanyaan: 'Apakah Anda lebih suka memiliki jadwal terencana daripada mengikuti alur spontan?',
			actionYes: () => isJudging++,
			actionNo: () => isJudging--
		},
		{
			pertanyaan:
				'Apakah Anda merasa lebih nyaman saat segala sesuatu sudah diputuskan daripada membiarkannya terbuka?',
			actionYes: () => isJudging++,
			actionNo: () => isJudging--
		},
		{
			pertanyaan: 'Apakah Anda lebih suka menyelesaikan tugas jauh sebelum tenggat waktu?',
			actionYes: () => isJudging++,
			actionNo: () => isJudging--
		},
		{
			pertanyaan: 'Apakah Anda lebih memilih bekerja dengan struktur dan aturan yang jelas?',
			actionYes: () => isJudging++,
			actionNo: () => isJudging--
		},
		{
			pertanyaan:
				'Apakah Anda lebih suka memiliki daftar tugas dan menyelesaikannya satu per satu daripada bekerja fleksibel?',
			actionYes: () => isJudging++,
			actionNo: () => isJudging--
		}
	];
</script>

<!-- UI -->
<div class="root-container {currentTraitClass}">
	<div class="blob blob-top"></div>
	<div class="blob blob-bottom"></div>

	<div class="particles" aria-hidden="true">
		{#each Array(28) as _, i}
			<span
				class="particle"
				style="
					left: {Math.random() * 100}%;
					top: {Math.random() * 100}%;
					animation-duration: {6 + Math.random() * 8}s;
					animation-delay: {-Math.random() * 6}s;
				"
			></span>
		{/each}
	</div>

	{#if currentIndex < dataPertanyaan.length}
		<section in:fly="{{ y: 12, duration: 350, easing: cubicOut }}" class="card large">
			<h3 class="question">{dataPertanyaan[currentIndex].pertanyaan}</h3>

			<div class="btn-row">
				<button class="btn yes" on:click={() => jawab(true)}>
					<span class="emoji">👍</span> Ya
				</button>
				<button class="btn no" on:click={() => jawab(false)}>
					<span class="emoji">👎</span> Tidak
				</button>
			</div>

			<div class="progress-wrap">
				<div class="progress-bar">
					<div class="progress-fill" style="width: {progressPercent}%"></div>
				</div>
				<p class="muted">{currentIndex}/{dataPertanyaan.length} — {progressPercent}%</p>
			</div>
		</section>
	{:else}
		<section class="card">
			<p class="muted">Menghitung hasil…</p>
		</section>
	{/if}
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: Inter, system-ui;
		background: #000;
	}

	.root-container {
		min-height: 100vh;
		width: 100vw;
		position: fixed;
		inset: 0;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2px;
	}

	/* Full background themes */
	.bg-extrovert { background: linear-gradient(135deg, #7f7fd5, #86a8e7, #91eae4); }
	.bg-sensing { background: linear-gradient(135deg, #ffe29f, #ffa99f, #ff719a); }
	.bg-thinking { background: linear-gradient(135deg, #a18cd1, #fbc2eb); }
	.bg-judging { background: linear-gradient(135deg, #43cea2, #185a9d); }

	.blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(40px);
		opacity: .3;
	}
	.blob-top {
		width: 380px; height: 380px;
		top: -100px; left: -60px;
		background: rgba(255,255,255,.4);
	}
	.blob-bottom {
		width: 480px; height: 480px;
		bottom: -140px; right: -90px;
		background: rgba(255,255,255,.25);
	}

	.particles {
		position: absolute; inset: 0;
		pointer-events: none;
	}
	.particle {
		position: absolute;
		width: 6px; height: 6px;
		border-radius: 50%;
		background: rgba(255,255,255,0.8);
		opacity: .1;
		animation: floaty linear infinite;
	}
	@keyframes floaty {
		0%{ transform:translateY(0) }
		50%{ transform:translateY(-25px) }
		100%{ transform:translateY(0)}
	}

	.card {
		background: rgba(255,255,255,0.7);
		backdrop-filter: blur(8px);
		padding: 22px;
		border-radius: 18px;
		max-width: 700px;
		width: 90%;
		box-shadow: 0 10px 30px rgba(0,0,0,0.2);
		text-align: center;
	}
	.card.large { padding: 30px; }

	.question {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 18px;
		color: #222;
	}

	.btn-row {
		display: flex;
		gap: 18px;
		justify-content: center;
	}
	.btn {
		flex: 1;
		padding: .9rem;
		border: none;
		border-radius: 12px;
		color: white;
		font-weight: 700;
		font-size: 1rem;
		cursor: pointer;
	}
	.btn.yes { background: #10b981; }
	.btn.no { background: #ef4444; }

	.progress-bar {
		background: rgba(255,255,255,.4);
		height: 8px;
		border-radius: 999px;
		overflow: hidden;
		margin-top: 18px;
	}
	.progress-fill {
		height: 100%;
		background: #6366f1;
		transition: width .4s ease;
	}

	.muted { color: #444; font-size: .85rem; margin-top: 8px; }
</style>
