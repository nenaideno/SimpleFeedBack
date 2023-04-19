import React, { lazy, Suspense } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom'

// components
import Preloader from './Components/Preloader/Preloader';

// lazy
const Home = lazy(() => import('./Components/Home/Home'))
const GeneratorContainer = lazy(() => import('./Components/Generator/GeneratorContainer'))
const ResultFormContainer = lazy(() => import('./Components/ResultForm/ResultFormContainer'))
const LogContainer = lazy(() => import('./Components/Log/LogContainer'))

const App = () => {


  return (
    <div className="app">
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/generator' element={<GeneratorContainer />} />
          <Route path='/form/:id' element={<ResultFormContainer />} />
          <Route path='/log' element={<LogContainer />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
