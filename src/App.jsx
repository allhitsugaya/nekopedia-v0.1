import {ErrorBoundaries} from "./components/ErrorBoundaries/ErrorBoundaries.jsx";
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './components/route/router.jsx';




function App() {
    const routing = useRoutes(routes);
    return(
        <ErrorBoundaries>
            {routing}
        </ErrorBoundaries>
    )
}

export default App;