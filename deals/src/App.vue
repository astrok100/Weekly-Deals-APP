<template>
	<div id="Deals">
			<nav-bar :routeMap="routeMap"></nav-bar>
			<router-view></router-view>
	</div>
</template>


<script>
	import NavBar from '@/components/NavBar'
	export default {
		name: 'app',
		components: {'nav-bar': NavBar}
	}
</script>

<style>

</style>
