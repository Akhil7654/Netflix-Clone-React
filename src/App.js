
import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import "./App.css"
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,actions,Trending,documentaries,romance,comedy,topRated,horror} from './urls'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <RowPost title='Trending Now' url={Trending} className='Trending_poster'></RowPost>
      <RowPost title='Netflix Originals' url={originals} isSmall></RowPost>
      <RowPost title='Top Rated' url={topRated} isSmall></RowPost>
      <RowPost title='Action' isSmall url={actions} ></RowPost>
      <RowPost title='Comedy' url={comedy} isSmall></RowPost>
      <RowPost title='Horror' url={horror} isSmall></RowPost>
      <RowPost title='Romance' url={romance} isSmall></RowPost>
      <RowPost title='Documentaries' url={documentaries} isSmall></RowPost>

      <Footer></Footer>
    </div>
  );
}

export default App;
