<script>
	import '../app.css';
	import { Toaster } from '$lib/components/ui/sonner';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="app">
	<Toaster />
	{@render children?.()}
</div>
