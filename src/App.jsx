import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Portofolio from "./components/portofolio/Portofolio";
import Resume from "./components/resume/Resume";
import Service from "./components/services/Service";
import Sidebar from "./components/sidebar/Sidebar";
import { BackgroundLines } from "./components/ui/background-lines";

function App() {
  return (
    <>
      <Sidebar />
      <BackgroundLines>
        <main className='ml-[5rem] relative z-40'>
          <Home />
          <About />
          <Service />
          <Resume />
          <Portofolio />
          <Contact />
        </main>
      </BackgroundLines>
    </>
  );
}

export default App;
