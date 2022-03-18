import React from 'react';
import 'modern-normalize/modern-normalize.css';
import { HelloSection } from './components';
import s from './App.module.css'

function App() {
  return (
    <div className={s.app}>
      <HelloSection />
    </div>
  );
}

export default App;
