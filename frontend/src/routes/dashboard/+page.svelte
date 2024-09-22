<script lang="ts">
	import AuthController from '@/controllers/authController';
	import { onMount } from 'svelte';
	const controller = new AuthController();
	let token: string;

	onMount(async () => {
		if (!(await AuthController.validate())) {
			window.location.href = '/login';
		}
		token = await controller.fetchToken();
	});
</script>

<h1>
	Hey You are {token}
</h1>
