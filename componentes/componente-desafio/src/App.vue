<template>
	<v-app>
		<v-menu></v-menu>
		<v-home></v-home>
		<v-footer></v-footer>
	</v-app>
</template>

<script>

import Menu from './menu' 
import Home from './home'
import Footer from './footer'


export default {
	components: {
		'v-menu': Menu,
		'v-home': Home,
		'v-footer': Footer
	}
}
</script>
