import axios from 'axios';
const url = "https://jsonplaceholder.typicode.com/todos";

export const getTodoList = () => {
    return axios.get(url);
};