import router from './router/router';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
// import LoaderComponent from './core/shared/loader/loader.component';
// import { ToastContainer } from 'react-toastify';
import useGlobalStyles from './assets/styles/style';
// import { useStore } from './store/store.config';

const queryClient = new QueryClient();

function App() {
  // const loader = useStore('loader');

  useGlobalStyles();
  return (
    <QueryClientProvider client={queryClient}>
        <div className='App'>
          <RouterProvider router={router} />
          {/* {loader ? <LoaderComponent/> : null} */}
        </div>
        {/* <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          closeButton={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme='light'
          style={{
            minHeight: 'auto',
            maxHeight: '80vh',
          }}
        /> */}
    </QueryClientProvider>
  );
}

export default App;
