import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3000/', // 추후에 env 필요
});

export const addTodo = () => instance.post('add', {});
