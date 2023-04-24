import React, { useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({children}) => {
    const {user, loading} = useState(AuthContext)
    const location = useLocation()
    if(loading){
        return <div>Loading....</div>
    }
    if(user){
        return children ;
    }
    return (
        <Navigate to ="/login" state={{from: location}} replace></Navigate>
    );
};

export default PrivateRout;