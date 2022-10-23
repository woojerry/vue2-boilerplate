<template>
	<div class="background--wrapper">
		<slot />
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.background--wrapper {
	display: flex;
	justify-content: center;
	min-height: 100vh;
	background-color: $color-background;
}
</style>
