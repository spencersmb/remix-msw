export const fetchExampleTest = async () => {
  // Fetch Subscriber
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  return await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
