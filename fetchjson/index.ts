import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo: ITodo = response.data;
  logTodo(todo);
});

const logTodo = (todo: ITodo) => {
  const { id, title, completed } = todo;
  console.log(id, title, completed);
};
