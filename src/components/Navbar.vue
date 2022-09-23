<template>
	<nav class="">
		<transition name="fade">
			<div class="overlay" v-if="toggle">
				<div class="closebtn" @click="toggleNav">&times;</div>
				<ul class="overlay-content">
					<li class="" @click="toggleNav">Benefits</li>
					<router-link to="/about">
						<li class="" @click="toggleNav">About Us</li>
					</router-link>
					<router-link to="/contact">
						<li class="" @click="toggleNav">FAQ</li>
					</router-link>
					<router-link to="/contact">
						<li class="" @click="toggleNav">
							<button class="dashboard" type="submit">Contact Us</button>
						</li>
					</router-link>
				</ul>
			</div>
		</transition>

		<div class="d-flex justify-content-between align-items-center nav">
			<div>
				<router-link to="/">
					<img src="@/assets/logo.png" />
				</router-link>
			</div>

			<ul class="d-flex justify-content-between align-middle nav-list">
				<router-link :to="{name: 'home', hash:'benefits'}"><li class="">Benefits</li></router-link>
				<router-link to="/about">
					<li class="">About Us</li>
				</router-link>
				<router-link to="/faq">
					<li class="">FAQ</li>
				</router-link>
				<router-link to="/contact">
					<button class="dashboard" type="submit">Contact Us</button>
				</router-link>
			</ul>

			<div class="breadcrumb" @click="toggleNav">
				<svg
					width="16"
					height="12"
					viewBox="0 0 16 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M15.75 6C15.75 5.58579 15.4142 5.25 15 5.25H1C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75H15C15.4142 6.75 15.75 6.41421 15.75 6Z"
						fill="black"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M15.75 1C15.75 0.585786 15.4142 0.25 15 0.25H1C0.585786 0.25 0.25 0.585786 0.25 1C0.25 1.41421 0.585786 1.75 1 1.75H15C15.4142 1.75 15.75 1.41421 15.75 1Z"
						fill="black"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M15.75 11C15.75 10.5858 15.4142 10.25 15 10.25H1C0.585786 10.25 0.25 10.5858 0.25 11C0.25 11.4142 0.585786 11.75 1 11.75H15C15.4142 11.75 15.75 11.4142 15.75 11Z"
						fill="black"
					/>
				</svg>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navbar",
	data() {
		return {
			toggle: false,
		};
	},
	methods: {
		toggleNav() {
			this.toggle = !this.toggle;
		},
	},
};
</script>

<style scoped>
nav {
	width: 100%;
	font-family: "Poppins";
	font-style: normal;
	position: fixed;
	top: 0;
	background: white;
	z-index: 999;
}
.nav {
	width: 85%;
	margin: auto;
}

a {
	font-weight: normal;
}
img {
	width: 120px;
}
ul {
	list-style: none;
	margin-top: 20px;
	margin-left: -70px;
	align-items: center;
}
li {
	padding: 0 20px;
	font-size: 17px;
	color: #46266e;
}
.breadcrumb {
	display: none !important;
}
.dashboard {
	color: white;
	border: 1px solid #46266e;
	padding: 10px 23px;
	border-radius: 9px;
	background: #46266e;
	margin-left: 150px;
}
.overlay {
	height: 100%;
	width: 100%;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.9);
	overflow-x: hidden;
	transition: 0.5s;
}

.overlay-content {
	position: relative;
	top: 25%;
	width: 100%;
	text-align: center;
	margin-top: 30px;
}

.overlay a {
	padding: 8px;
	text-decoration: none;
	font-size: 36px;
	color: white;
	display: block;
	transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
	color: #f1f1f1;
}

.overlay .closebtn {
	position: absolute;
	top: 20px;
	right: 45px;
	font-size: 60px;
}

.overlay a {
	font-size: 20px;
}
.overlay .closebtn {
	font-size: 70px;
	top: 15px;
	right: 35px;
	color: white;
}
.overlay {
	display: none;
}
@media screen and (max-width: 767px) {
	nav {
		padding-top: 30px !important;
		padding-bottom: 10px !important;
	}
	.overlay {
		display: block;
	}
	.breadcrumb {
		display: block !important;
		margin-top: -15px !important;
	}
	ul {
		margin-left: -10px;
		margin-top: -30px !important;
	}

	.dashboard {
		color: white;
		border: 1px solid white;
		padding: 13px 23px;
		border-radius: 10px;
		font-size: 20px;
		background: transparent !important;
		margin-left:0px;
	}

	li {
		padding: 15px 0px;
		font-size: 20px;
		color: White;
	}

	.nav-list,
	.lg {
		display: none !important;
	}
	img {
		width: 80px;
		margin-top: -30px;
	}
}
</style>
