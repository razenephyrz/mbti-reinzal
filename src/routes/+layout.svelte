<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<style>
	@font-face {
  font-family: 'Handwrite';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url($lib/fonts/ImperialScript-Regular.ttf);
}
	@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url($lib/fonts/Poppins-Regular.ttf);
}
	@font-face {
  font-family: 'Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url($lib/fonts/CalSans-Regular.ttf);
}
	@font-face {
  font-family: 'Helvetica';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url($lib/fonts/Helvetica.ttf);
}
</style>