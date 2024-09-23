<script lang="ts">
	import AuthController from '@/controllers/authController';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { toast } from 'svelte-sonner';
	import UserNav from '@/components/custom/userNav.svelte';
	import AddDrawer from '@/components/custom/drawer/addDrawer.svelte';
	import DataTable from '@/components/custom/table/DataTable.svelte';

	const controller = new AuthController();
	export let data: PageData;

	if (!data.user) {
		toast.error('Failed to Fetch User');
		window.location.href = '/login';
	}

	const user = data.user!;
	const links = data.links!;

	let token: string;

	onMount(async () => {
		if (!(await AuthController.validate())) {
			window.location.href = '/login';
		}
		token = await controller.fetchToken();
	});
</script>

<svelte:head>
	<title>{user.name}&apos; Dashboard</title>
</svelte:head>

<div class="md:hidden">
	<enhanced:img alt="Tasks" class="block dark:hidden" />
	<enhanced:img alt="Tasks" class="hidden dark:block" />
</div>
<div class="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
	<div class="flex items-center justify-between space-y-2">
		<div class="">
			<h2 class="text-2xl font-bold tracking-tight">Welcome back {user.name} !</h2>
			<p class="text-muted-foreground">Here's a list of all your shortened links!</p>
		</div>
		<div class="flex items-center space-x-2">
			<UserNav {user} />
		</div>
	</div>
	<AddDrawer />
	<DataTable data={links}/>
</div>
