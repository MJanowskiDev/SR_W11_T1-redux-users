import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'components/ui';
import { Home, Users, Contact } from 'containers';

import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
