import { Component } from 'react';

const nota = [8, 6, 7, 7];

export class Notas extends Component {
    render() {
        return (
            <div>
                <table border={3}>
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Nota</th>
                        </tr>

                    </thead>

                    <tbody>
                    <tr>
                        <td>1°</td>
                        <td>{nota[0]}</td>
                    </tr>

                    <tr>
                        <td>2°</td>
                        <td>{nota[1]}</td>
                    </tr>

                    <tr>
                        <td>3°</td>
                        <td>{nota[2]}</td>
                    </tr>

                    <tr>
                        <td>4°</td>
                        <td>{nota[3]}</td>
                    </tr>

                    <tr>
                        <th>Média</th>
                        <td>{(nota[0] + nota[1] + nota[2] + nota[3]) / 4}</td>
                    </tr>

                    </tbody>

                </table>
            </div>
        );
    }
}

export default Notas;