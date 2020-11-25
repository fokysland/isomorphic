type GetTodosResponse = {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}[];

export const getTodos = async (): Promise<GetTodosResponse> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const json = (await response.json()) as GetTodosResponse;
  return json.slice(0, 20);
};
