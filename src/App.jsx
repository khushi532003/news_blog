import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<News key="general" pageSize={5} country="us" category="general" />}> </Route>
          <Route path='/business' element={<News key="business" pageSize={5} country="us" category="business" />}> </Route>
          <Route path='/entertainment' element={<News key="entertainment" pageSize={5} country="us" category="entertainment" />}> </Route>
          <Route path='/health' element={<News key="health" pageSize={5} country="us" category="health" />}> </Route>
          <Route path='/science' element={<News key="science" pageSize={5} country="us" category="science" />}> </Route>
          <Route path='/sports' element={<News key="sports" pageSize={5} country="us" category="sports" />}> </Route>
          <Route path='/technology' element={<News key="technology" pageSize={5} country="us" category="technology" />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;