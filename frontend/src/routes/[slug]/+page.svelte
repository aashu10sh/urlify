<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

{#if data.link}
	{@html `<script>window.location.href = "${data.link.originalUrl}";</script>`}
{:else}
	<h1 class="text-xl">No such URL {data.slug}</h1>
{/if}