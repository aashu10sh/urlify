<script lang="ts">
	import { Button } from '@/components/ui/button';
	import { toast } from 'svelte-sonner';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '@/components/ui/card';
	import { Input } from '@/components/ui/input';
	import { Label } from '@/components/ui/label';
	import AuthController from '@/controllers/authController';
	import { onMount } from 'svelte';

	let username: string = '';
	let name: string = '';
	let password: string = '';

	onMount(async () => {
		const hasSession = await AuthController.validate();
		if (hasSession) {
			window.location.href = '/dashboard';
		}
	});


	async function registerUser() {
		const controller = new AuthController();
		const registerResult = await controller.register(name, username, password);

		registerResult.match(
			async (token) => {
				console.log('Registration successful. Token:', token);
				// Handle successful registration (e.g., save token, redirect)
				await controller.saveToken(token);
				toast.success('Registered!, Redirecting!');

				window.location.href = '/dashboard';
			},
			(error) => {
				toast.error('Unable to Register', {
					description: error
				});
			}
		);
	}
</script>

<svelte:head>
	<title>Register to URLify</title>
</svelte:head>

<main>
	<form on:submit|preventDefault={registerUser}>
		<div class="flex min-h-screen items-center justify-center bg-background">
			<Card class="w-full max-w-sm">
				<CardHeader>
					<CardTitle class="text-center text-2xl font-bold">Register</CardTitle>
					<CardDescription class="text-center">Register to use URLify</CardDescription>
				</CardHeader>
				<CardContent class="space-y-4">
					<div class="space-y-2">
						<Label for="name">Name</Label>
						<Input id="name" bind:value={name} placeholder="Enter your name" required />
					</div>
					<div class="space-y-2">
						<Label for="username">Username</Label>
						<Input id="username" bind:value={username} placeholder="Enter your username" required />
					</div>
					<div class="space-y-2">
						<Label for="password">Password</Label>
						<Input
							id="password"
							type="password"
							bind:value={password}
							placeholder="Enter your password"
							required
						/>
					</div>
				</CardContent>
				<CardFooter class="flex flex-col">
					<Button class="w-full" type="submit">Register</Button><br />
					<Button
						class="w-full"
						variant="outline"
						on:click={() => {
							window.location.href = '/login';
						}}
					>
						Login Instead
					</Button>
				</CardFooter>
			</Card>
		</div>
	</form>
</main>
