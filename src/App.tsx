import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/pages/home/Home';
import Layout from './components/templates/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
