import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Page from "./page/Page";
import DetailPage from "./DetailPage/DetailPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page/>
    },
    {
      path: "/detailPage/:id",
      element:<DetailPage/> 
    },
  ]);
  
  return (
     <RouterProvider router={router} />
  )
}

export default App
