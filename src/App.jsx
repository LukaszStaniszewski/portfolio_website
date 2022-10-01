import { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import Spinner from "./components/spinner/spinner.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import ReadMe from "./routes/read_me/read_me.component";

const Contact = lazy(() => import("./routes/contact/contact.component"));
const Projects = lazy(() => import("./routes/projects/projects.component"));

function App() {
   return (
      <div className="main-container">
         <Suspense fallback={<Spinner />}>
            <Routes>
               <Route path="/" element={<Navigation />}>
                  <Route index element={<Home />} />
                  <Route path="readme" element={<ReadMe />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="contact" element={<Contact />} />
               </Route>
            </Routes>
         </Suspense>
      </div>
   );
}

export default App;
