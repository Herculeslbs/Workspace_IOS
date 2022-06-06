import './App.css';
import { Component } from 'react';
import Exemplo from './Componentes/Exemplo';
import Header from './Componentes/Header';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <Header nome='Hercules' />
                <Exemplo />

            </div>
        );
    }
}

export default App;
