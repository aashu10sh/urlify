<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';

	let username : string = '';
	let password : string = '';


	async function loginUser(){
		console.log("Logging In user")
		console.log(username,password)
	}
</script>

<svelte:head>
	<title>Log in to URLify</title>
</svelte:head>

<section>
	<form on:submit|preventDefault={loginUser}>
	<div class="flex min-h-screen items-center justify-center bg-background">
		<Card class="w-full max-w-sm">
			<CardHeader>
				<CardTitle class="text-center text-2xl font-bold">Login</CardTitle>
				<CardDescription class="text-center"
					>Enter your credentials to access your URLify account</CardDescription
				>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="space-y-2">
					<Label for="username">Username</Label>
					<Input id="username" placeholder="Enter your username" bind:value={username} required />
				</div>
				<div class="space-y-2">
					<Label for="password">Password</Label>
					<Input id="password" type="password" placeholder="Enter your password" bind:value={password} required />
				</div>
			</CardContent>
			<CardFooter class="flex flex-col gap-5">
				<Button class="w-full" type="submit">Log In</Button>
				<Button
					class="w-full "
					variant="secondary"
					on:click={() => {
						window.location.href = '/register';
					}}>Register Instead</Button
				>
			</CardFooter>
		</Card>
	</div>
	</form>
</section>
