import { createRoot } from 'react-dom/client';
import Hello from './components/Hello';

import Ap from './components/Ap';

const App = () =>{
    return (
        <>
       
        <Hello/>
        <Ap/>
        </>
    )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
