import Header from './components/header/Header';
import './App.scss';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
    <Header/>
    
    <main className="main">
    <Home/>
    <About/>
    <Skills/>
    </main>

    
    </>
  );
}

export default App;
