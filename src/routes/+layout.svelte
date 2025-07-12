<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<style>
	@font-face {
  font-family: 'Kurag';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url($lib/fonts/ImperialScript-Regular.ttf);
}
</style>