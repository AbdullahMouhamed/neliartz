
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import GalleryPage from './GalleryPage/GalleryPage';

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <MainPage /> },

  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
