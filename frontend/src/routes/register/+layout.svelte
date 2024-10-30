<script lang="ts">
	import { Toaster } from '$lib/components/ui/sonner';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Toaster />

{@render children?.()}
