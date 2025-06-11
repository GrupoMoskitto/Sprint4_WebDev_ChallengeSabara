import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './routes/Error'
import Home from './routes/Home'
import Admin from './routes/Admin'
import Dashboard from './routes/Dashboard'

function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path='*' element={<Error/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App