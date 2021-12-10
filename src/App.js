import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'components/ui';
import { Home, Users } from 'containers';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
