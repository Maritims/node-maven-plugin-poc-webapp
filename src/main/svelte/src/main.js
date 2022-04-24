import App from './App.svelte';

const app = new App({
	target: document.body.getElementById('svelte-app'),
	props: {
		name: 'world'
	}
});

export default app;