import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar'
import AboutPage from './pages/AboutPage'

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageSelect = (event) => {
    console.log(event);
    setCurrentPage(event);
  }

  return (
    <>
      <TopBar onPageSelect={handlePageSelect} />
      <div className='pageCont'>
        {currentPage == 0 && <AboutPage />}
      </div>
      
    </>
  );
}

export default App
