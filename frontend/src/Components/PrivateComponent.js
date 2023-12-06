import React from "react";
import { Navigate,Outlet } from 'react-router-dom';

const PrivatiComponent = () =>{
    const auth = localStorage.getItem('user');
    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivatiComponent;