<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let currentIndex = 0;
	let isExtrovert = 0;
	let isSensing = 0;
	let isThinking = 0;
	let isJudging = 0;

	let nama = '';

	function hitungHasilJudging() {
		isJudging++;
		cekSelesai();
	}

	function hitungHasilPerceiving() {
		isJudging--;
		cekSelesai();
	}

	function jawab(yes: boolean) {
		const current = dataPertanyaan[currentIndex];
		if (yes) {
			current.actionYes();
		} else {
			current.actionNo();
		}
		currentIndex++;

		if (currentIndex >= dataPertanyaan.length) {
			cekSelesai();
		}
	}

	function cekSelesai() {
		if (currentIndex >= dataPertanyaan.length) {
			const tipe = getType();
			goto(`/${tipe.toLowerCase()}`);
		}
		function getType() {
			const EorI = isExtrovert >= 0 ? 'E' : 'I';
			const SorN = isSensing >= 0 ? 'S' : 'N';
			const TorF = isThinking >= 0 ? 'T' : 'F';
			const JorP = isJudging >= 0 ? 'J' : 'P';
			return `${EorI}${SorN}${TorF}${JorP}`;
		}
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
			pertanyaan:
				'Apakah Anda lebih suka memiliki jadwal terencana daripada mengikuti alur spontan?',
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
			actionYes: hitungHasilJudging,
			actionNo: hitungHasilPerceiving
		}
	];
</script>

<div class="animated-bg flex h-screen w-full items-center justify-center">
	<div class="flex min-h-screen w-full flex-col items-center justify-center p-4 outline">
		{#if currentIndex === 0}
			<div class="card bg-base-100 w-full max-w-md shadow-xl">
				<div class="card-body items-center text-center">
					<h2 class="card-title text-lg text-black">Masukkan Nama Anda</h2>
					<input
						id="nama"
						bind:value={nama}
						placeholder="Nama Anda"
						class="input input-primary mt-3 w-full"
					/>
					<button
						class="btn btn-primary text-first mt-4 w-full"
						on:click={() => currentIndex++}
						disabled={nama.trim() === ''}>Mulai Tes</button
					>
				</div>
			</div>
		{:else if currentIndex < dataPertanyaan.length}
			{#each dataPertanyaan.slice(currentIndex, currentIndex + 1) as soal}
				<div class="card bg-base-100 w-full max-w-md shadow-xl">
					<div class="card-body items-center text-center">
						<h2 class="card-title text-lg">{soal.pertanyaan}</h2>
						<div class="mt-6 flex w-full gap-2">
							<button class="btn bg-yes flex-1 text-black" on:click={() => jawab(true)}>Ya</button>
							<button class="btn bg-no flex-1 text-black" on:click={() => jawab(false)}
								>Tidak</button
							>
						</div>
					</div>
				</div>
			{/each}
		{:else}
			<p class="text-center">Loading hasil...</p>
		{/if}
	</div>
</div>

<style>
	.animated-bg {
		position: relative;
		width: 100%;
		height: 100vh;
		background: linear-gradient(-45deg, #ff6ec4, #7873f5, #4ade80, #facc15);
		background-size: 400% 400%;
		animation: gradientShift 15s ease infinite;
		overflow: hidden;
	}

	@keyframes gradientShift {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	.bg-yes {
		background: linear-gradient(-45deg, #1eff00, #00ffb3);
	}
	.bg-no {
		background: linear-gradient(45deg, #ff0000, #ff5e00);
	}
	.text-first {
		color: linear-gradient(45deg, #ff0000, #ff5e00);
	}
</style>
