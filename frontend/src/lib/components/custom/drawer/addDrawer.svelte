<script lang="ts">
	import { mediaQuery } from 'svelte-legos';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { CirclePlusIcon } from 'lucide-svelte';
	import AuthController from '@/controllers/authController';
	import LinkController from '@/controllers/listController';
	import { toast } from 'svelte-sonner';
	let open = false;
	const isDesktop = mediaQuery('(min-width: 768px)');
	let name: string = '';
	let originalUrl: string = '';
	let slug: string = '';
	$: finalUrl = `http://localhost:5173/${slug}`;
	async function addLink() {
		const authController = new AuthController();
		const linkController = new LinkController(authController);
		console.log(`Adding ${name} ${originalUrl} ${finalUrl}`);
		const addLinkResponse = await linkController.addLink(name, originalUrl, slug, finalUrl);
		addLinkResponse.match(
			(success: string) => {
				toast.success(success);
			},
			(failure: string) => {
				toast.error(failure);
			}
		);
		open = false;
	}
</script>

{#if $isDesktop}
	<Dialog.Root bind:open>
		<Dialog.Trigger asChild let:builder>
			<Button variant="outline" class="w-40" builders={[builder]}>
				<CirclePlusIcon class="mr-2 h-4 w-4" /> Add Link</Button
			>
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header>
				<Dialog.Title>Add a new Link</Dialog.Title>
				<Dialog.Description>
					Create a new link here. Click save when you're done.
				</Dialog.Description>
			</Dialog.Header>
			<form class="grid items-start gap-4" on:submit|preventDefault={addLink}>
				<div class="grid gap-2">
					<Label for="name">Name</Label>
					<Input type="text" id="name" bind:value={name} />
				</div>
				<div class="grid gap-2">
					<Label for="originalUrl">Original URL</Label>
					<Input id="originalUrl" bind:value={originalUrl} />
				</div>
				<div class="grid gap-2">
					<Label for="slug">Slug</Label>
					<Input id="slug" bind:value={slug} />
				</div>
				<div class="grid gap-2">
					<Label for="username">New Url</Label>
					<Input id="username" bind:value={finalUrl} disabled />
				</div>
				<Button type="submit">Add Link</Button>
			</form>
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open>
		<Drawer.Trigger asChild let:builder>
			<Button variant="outline" builders={[builder]}>Edit Profile</Button>
		</Drawer.Trigger>
		<Drawer.Content>
			<Drawer.Header class="text-left">
				<Drawer.Title>Edit profile</Drawer.Title>
				<Drawer.Description>
					Make changes to your profile here. Click save when you're done.
				</Drawer.Description>
			</Drawer.Header>
			<form class="grid items-start gap-4 px-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input type="email" id="email" value="shadcn@example.com" />
				</div>
				<div class="grid gap-2">
					<Label for="username">Username</Label>
					<Input id="username" value="@shadcn" />
				</div>

				<Button type="submit">Save changes</Button>
			</form>
			<Drawer.Footer class="pt-2">
				<Drawer.Close asChild let:builder>
					<Button variant="outline" builders={[builder]}>Cancel</Button>
				</Drawer.Close>
			</Drawer.Footer>
		</Drawer.Content>
	</Drawer.Root>
{/if}
