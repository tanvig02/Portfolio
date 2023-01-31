// function App() {
//   return (
//     <div className="App">
//       <h1 className="text-3xl font-bold underline text-center">Tanvi</h1>
//       <h2>Tanvi gaikwad</h2>
//     </div>
//   );
// }

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contacts />
    </>
  );
};

export default App;
