<script lang="ts">
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';

	interface Props {
		id: string;
	}

	let { id }: Props = $props();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild >
		{#snippet children({ builder })}
				<Button variant="ghost" builders={[builder]} size="icon" class="relative h-8 w-8 p-0">
				<span class="sr-only">Open menu</span>
				<Ellipsis class="h-4 w-4" />
			</Button>
					{/snippet}
		</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<!-- TODO: fix delete and edit here and you're done! -->
		<DropdownMenu.Group>
			<DropdownMenu.Label>Actions</DropdownMenu.Label>
			<DropdownMenu.Item on:click={() => {navigator.clipboard.writeText(id); console.log(id)}}>
				Edit
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				Delete
			</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<!-- <DropdownMenu.Item>View customer</DropdownMenu.Item>
		<DropdownMenu.Item>View payment details</DropdownMenu.Item> -->
	</DropdownMenu.Content>
</DropdownMenu.Root>
