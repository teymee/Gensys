<template>
	<div @click="toggle" class="d-flex justify-content-between mt-3">
		<p class="title">{{ title }}</p>
		<div class="cursor-pointer">
			<img src="@/assets/plus.svg" v-show="!isOpen" />
			<img src="@/assets/minus.png" v-show="isOpen" />
		</div>
	</div>

	<transition v-show="isOpen" name="fade">
		<slot></slot>
	</transition>
</template>

<script>
export default {
	name: "Accordion",
	props: ["title"],
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		toggle() {
			this.isOpen = !this.isOpen;
			console.log(this.isOpen);
		},
	},
};
</script>

<style scoped>
p {
	font-size: 20px;
	width: 90%;
}
img{
	cursor:pointer
}
.title{
	font-weight: 700;
}

@media screen and (max-width: 800px) {
	p {
		font-size: 13px;
	}
	img {
		width: 15px;
		margin-top: -6px;
	}
}
</style>
