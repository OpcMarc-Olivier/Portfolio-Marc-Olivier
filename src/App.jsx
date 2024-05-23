
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Work from './pages/Work';
import Error from './components/Error';

function App() {
  return (
      <Routes>
        <Route path='/Portfolio-Marc-Olivier/marc-olivier-perrois-cv-2023.pdf'/>
        <Route path='/Portfolio-Marc-Olivier' element={<Home/>}/>
        <Route path='/Portfolio-Marc-Olivier/home' element={<Home/>}/>
        <Route path="/Portfolio-Marc-Olivier/:id" element={<Work />} />
        <Route path="/Portfolio-Marc-Olivier/*" element={<Error />} />
      </Routes>
  );
}

export default App;
