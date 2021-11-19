import './style.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Repositories from './components/Repositories';

function App() {
    return (
        <main>
            <Header />
            <Profile />
            <Repositories />
        </main>
    );
}

export default App;
