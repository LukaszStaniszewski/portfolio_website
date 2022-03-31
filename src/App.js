import { Routes, Route} from 'react-router-dom';

import Navigation from "./routes/navigation/navigation.component";
import Home from './routes/home/home.component';
import ReadMe from './routes/read_me/read_me.component';
import Projects from './routes/projects/projects.component';
import Contact from './routes/contact/contact.component';

function App() {

  return (
    <div className="main-container">
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='readme' element={<ReadMe/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
