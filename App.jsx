 import React, { useState} from 'react';
 import{BrowserRouter, Routes,Route,Navigate} from "react-router-dom";
 import Login from "./pages/Login";
 import AdminDashboard from "./pages/AdminDashboard";
 import ProtectedRoute from './ProtectedRoute';
 function App(){
  const[isAuthenticated,setIsAuthenticated]=useState(false);
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login setAuth={setIsAuthenticated}/>}/>
      <Route 
      path="/admin"
      element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <AdminDashboard />
        </ProtectedRoute>
      }
      />
      <Route path="*" element={<Navigate to="/login"/>} />
    </Routes>
    </BrowserRouter>
  );
 }
 export default App;

 