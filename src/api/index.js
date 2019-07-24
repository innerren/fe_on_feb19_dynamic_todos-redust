const BASE_URL = " https://jsonplaceholder.typicode.com";

export const getUsers = async() => {
  return fetch(`${BASE_URL}/users`).then(response => response.json());
};

export const getUser = (users, userId) => {
  return users.find(user => user.id === Number(userId));
};

export const getTodos = async() => {
  return fetch(`${BASE_URL}/todos`).then(response => response.json());
};

export const getTodo = (todos, todoId) => {
  return todos.find(todo => todo.id === Number(todoId));
};

export const getUserTodos = (todos, userId) => {
  return userId ? todos.filter(todo => todo.userId === Number(userId)) : todos;
};

export const getFullTodos = async() => {
  const todos = await getTodos();
  const users = await getUsers();
  return todos.map(todo => {
    todo.username = users.find(user => user.id === todo.userId).username;
    return todo;
  });
};
