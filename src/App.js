import { Routes, Route} from 'react-router-dom';

import Navigation from "./routes/navigation/navigation.component";
import Home from './routes/home/home.component';
import ReadMe from './routes/read_me/read_me.component';

function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='readme' element={<ReadMe/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
