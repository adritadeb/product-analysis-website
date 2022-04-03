import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
