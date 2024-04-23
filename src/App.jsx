import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar'
import AboutPage from './pages/AboutPage'
import CapstonePage from './pages/CapstonePage'
import ResearchPage from './pages/ResearchPage'

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageSelect = (event) => {
    setCurrentPage(event);
  }

  return (
    <>
      <TopBar onPageSelect={handlePageSelect} />
      <div className='pageCont'>
        {currentPage == 0 && <AboutPage />}
        {currentPage == 1 && <CapstonePage />}
        {currentPage == 2 && <ResearchPage />}
      </div>
      
    </>
  );
}

export default App
