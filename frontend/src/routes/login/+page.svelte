<script>
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
</script>

<section>
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
					<Input id="username" placeholder="Enter your username" required />
				</div>
				<div class="space-y-2">
					<Label for="password">Password</Label>
					<Input id="password" type="password" placeholder="Enter your password" required />
				</div>
			</CardContent>
			<CardFooter>
				<Button class="w-full">Sign In</Button>
			</CardFooter>
		</Card>
	</div>
</section>
