import { lazy, Suspense } from 'react';

import { Routes, Route} from 'react-router-dom';
import Spinner from './components/spinner/spinner.component';

const Navigation = lazy(() =>import("./routes/navigation/navigation.component"));
const Home = lazy(() => import('./routes/home/home.component'));
const ReadMe = lazy(() =>import('./routes/read_me/read_me.component'));
const Projects = lazy(() => import('./routes/projects/projects.component'));
const Contact = lazy(() =>import('./routes/contact/contact.component'));

function App() {

  return (
    <div className="main-container">
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path='readme' element={<ReadMe/>}/>
            <Route path='projects' element={<Projects/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
