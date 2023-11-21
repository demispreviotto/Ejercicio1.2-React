import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <Home />
      </div>
    </>
  )
}

export default App
