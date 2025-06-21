
import './App.css';
import Footer from './shopping/Footer';
import Navbar from './shopping/Navbar';
import Shop from './shopping/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './shopping/About'
import Contact from './shopping/Contact';
import Login from './shopping/Login';
import React, { useState } from 'react'
import Fashion from './shopping/Fashion';
import Search from './shopping/Search';

function App() {
  const [popup, setPopup] = useState(false);
  const [fashion, setFashion] = useState(false);
  const showFashion = () => {
    if (fashion == true)
      setFashion(false)
  }

  const showFashionn = () => {
    setFashion(!fashion)
  }

  const [search, setSearch] = useState(' ');
  const showSearch = () => {
    setSearch(!search)
  }

  const [active, setActive] = useState('');
  const clickHandler = (text) => {
    setActive(text)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setTrigger={setPopup} search={search} showSearch={showSearch} setFashion={setFashion} active={active} clickHandler={clickHandler} showFashion={showFashion} showFashionn={showFashionn} />
        <Routes>
          <Route path='/home' element={<Shop />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Fashion fashion={fashion} />
        <Login trigger={popup} setTrigger={setPopup} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
