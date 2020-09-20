import React from 'react';
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

function App() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) =>
      res.json()
    )
  );
  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

export default App;
