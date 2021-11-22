import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouters from "./components/AppRouters";
import NawBar from "./components/NawBar";
import {observer} from "mobx-react-lite";

const App = observer(() => {
    return (
        <BrowserRouter>
            <NawBar/>
            <AppRouters />
        </BrowserRouter>

    );
});

export default App;
