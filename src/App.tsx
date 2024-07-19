import router from './router/router';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'; 
import useGlobalStyles from './assets/styles/style';
const queryClient = new QueryClient();

function App() {

  useGlobalStyles();  
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
        <div className='App'>
          <RouterProvider router={router} />
        </div>
    </QueryClientProvider>
  );
}

export default App;
