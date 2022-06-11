import './App.css';
import { Component } from 'react';
import Notas from './Components/Notas';
import Nome from './Components/Nome';

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <Nome />
        <Notas />
      </div>
    );
  }
}

export default App;