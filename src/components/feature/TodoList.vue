<template>
	<Background>
		<main class="todo-main">TodoList</main>
	</Background>
</template>

<script>
import Background from '@/components/common/Background.vue';

export default {
	components: {
		Background,
	},
};
</script>

<style lang="scss" scoped>
.todo-main {
	display: flex;
	flex-direction: column;
}
</style>
