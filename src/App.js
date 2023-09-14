import HomePage from './routes/HomePage';
import { Route, Routes } from 'react-router-dom';
import LogInPage from './routes/LogInPage';
import CreateAccountPage from './routes/CreateAccountPage';
import FindDevPage from './routes/FindDevPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/LogIn' element={ <LogInPage /> } />
            <Route path='/CreateAccount' element={ <CreateAccountPage /> } />
            <Route path='/FindDev' element={ <FindDevPage /> } />
        </Routes>
    );
}

export default App;