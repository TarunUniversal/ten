import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
         <main>
           <Route path="/" exact component={Home} />
         </main>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
