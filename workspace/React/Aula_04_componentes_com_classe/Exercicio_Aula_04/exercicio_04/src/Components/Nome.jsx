import { Component } from "react";

class Nome extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: 'Hercules',
        }
    }

    render() {
        return (
            <div>
                <h2>Nota do Aluno: {this.state.nome}</h2>
                <hr />
            </div>
        )
    }
}

export default Nome;