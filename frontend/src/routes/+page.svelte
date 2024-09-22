<script>
	import { goto } from '$app/navigation';
	import Button from '@/components/ui/button/button.svelte';
</script>

<main class="justify-content-center flex flex-col items-center">
	<div class="relative overflow-hidden py-24 lg:py-32">
		<div aria-hidden="true" class="absolute -top-96 start-1/2 flex -translate-x-1/2 transform">
			<div
				class="h-[44rem] w-[25rem] -translate-x-[10rem] rotate-[-60deg] transform bg-gradient-to-r from-background/50 to-background blur-3xl"
			/>
			<div
				class="h-[50rem] w-[90rem] origin-top-left -translate-x-[15rem] -rotate-12 rounded-full bg-gradient-to-tl from-primary-foreground via-primary-foreground to-background blur-3xl"
			/>
		</div>
		<div class="relative z-10">
			<div class="container py-10 lg:py-16">
				<div class="mx-auto max-w-2xl text-center">
					<p class="">URLify</p>
					<div class="mt-5 max-w-2xl">
						<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
							Sleek links for smarter business
						</h1>
					</div>
					<div class="mt-5 max-w-3xl">
						<p class="text-xl text-muted-foreground">
							Make your business links cleaner, better and concise with URLify
						</p>
					</div>
					<div class="mt-8 flex justify-center gap-3">
						<Button
							size={'lg'}
							on:click={() => {
								goto('/register');
							}}>Create an Account</Button
						>
						<Button
							size={'lg'}
							variant={'outline'}
							on:click={() => {
								goto('/dashboard');
							}}>Dashboard</Button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
