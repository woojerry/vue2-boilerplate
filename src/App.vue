<template>
	<div id="app">
		<TodoList />
	</div>
</template>

<script>
import TodoList from '@/components/feature/TodoList';

export default {
	name: 'App',
	components: {
		TodoList,
	},
};
</script>

<style lang="scss" scoped>
#app {
	font-family: 'Noto Sans KR', sans-serif;
}
</style>
