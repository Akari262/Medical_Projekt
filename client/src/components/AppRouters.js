import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom' ///
import {authRoutes, publicRoutes, doctorRoutes} from "../routes";
import {AUTH_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouters = () => {
    const {user} = useContext(Context)
///
    console.log(user)
    return (
        <Routes>
        {user.isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component />} />
        )}
        {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component />} />
        )}
            {user.isDoctor && doctorRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} />
            )}
            <Route path="*" element={<Navigate to ={AUTH_ROUTE} />} />
         </Routes>
    );
};
///
export default AppRouters;