<template>
	<div class="homepage">
		<section class="hero is-fullheight is-primary">
			<div class="hero-body">
				<div class="container has-text-centered">
					<img class="obentoImage" src="static/obento.png" />
					<h1 class="title level-item">Hello world!</h1>
					<h2 class="subtitle level-item">Vue + Typescript + Buefy</h2>
					<button class="button is-dark" @click="onClick">Click me</button>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.obentoImage {
	width: 150px;
	margin-bottom: 20px;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class HomePage extends Vue {
	onClick(): void {
		this.$toast.open({
			type: 'is-white',
			message: 'Yo mama',
			position: 'is-bottom'
		});
	}
}
</script>
