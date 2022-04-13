import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [navOptions] = useState(['About', 'Portfolio', 'Contact', 'Resume']);
  
  // set default navigation selection to the About Me section
  const [currentNav, setCurrentNav] = useState(navOptions[0]);

  function renderCurrentNav() {
    switch (currentNav) {
      case 'About':
        return (
          <About></About>
        );
      case 'Portfolio':
        return (
          <Portfolio></Portfolio>
        );
      case 'Contact':
        return (
          <Contact></Contact>
        );
      case 'Resume':
        return (
          <Resume></Resume>
        );
    }
  };

  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Header
          navOptions={navOptions}
          currentNav={currentNav}
          setCurrentNav={setCurrentNav}
        ></Header>
        <main>
          {/* conditionally render components here */}
          {renderCurrentNav()}
        </main>
      </div>
      {currentNav !== 'Contact' && 
        <Footer></Footer>
      }
    </div>
  );
}

export default App;
