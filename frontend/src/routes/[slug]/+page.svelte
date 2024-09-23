<script lang="ts">
	import { error, redirect } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.link}
	{@html `<script>window.location.href = "${data.link.originalUrl}";</script>`}
{:else}
	<h1 class="text-xl">No such URL {data.slug}</h1>
{/if}