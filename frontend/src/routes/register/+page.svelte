<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { Button } from '@/components/ui/button';
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

	let username: string = '';
	let name: string = '';
	let password: string = '';

	async function registerUser() {
		console.log('Submitting Data: ', name, username, password);
	}
</script>

<section>
	<form on:submit|preventDefault={registerUser} use:enhance method="post">
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
							window.location.href = "/login"
						}}
					>
						Login Instead
					</Button>
				</CardFooter>
			</Card>
		</div>
	</form>
</section>
