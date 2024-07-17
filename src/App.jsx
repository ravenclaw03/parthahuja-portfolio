import Sidenav from './components/Sidenav'
import Home from './components/Home'
import Experience from './components/Experience'
import Project from './components/Project'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Skills from './components/Skills'
import ProjectList from './components/ProjectList'
import Responsibility from './components/Resposnisbility'

function App() {
  

  return (
    <>
      <Sidenav />
      <Home />
      <AboutMe />
      <Experience />
      {/* <Project /> */}
      <ProjectList/>
      <Skills />
      <Responsibility/>
      <Contact/>
    </>
  );
}

export default App
