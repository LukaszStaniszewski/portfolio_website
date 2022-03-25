import { Routes, Route} from 'react-router-dom';

import Navigation from "./routes/navigation/navigation.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation/>}>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
