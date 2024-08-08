import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import { SharedLayout } from './Layout/SharedLayout';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import NotFound from './Pages/NotFound';
import Products from './Component/Products';
import Login from './Pages/Login';  // Import the Login component

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<SharedLayout />} >
        <Route path="home" element={<Home />}>
          <Route index element={<Products />} />
        </Route>
        <Route path="admin" element={<Admin />} />
        <Route path="login" element={<Login />} /> {/* Add Login route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
