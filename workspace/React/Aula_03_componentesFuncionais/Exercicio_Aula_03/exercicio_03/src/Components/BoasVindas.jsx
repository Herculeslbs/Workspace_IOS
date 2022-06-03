import PropTypes from 'prop-types';
const BoasVindas = (props) => {
    return (
        <section>
            <h1 style = {{ color: 'pink'}}>Ola {props.nome}, seja bem vindo</h1>
            <p style = {{fontWeight: 'bold'}}>React. js é, portanto, uma biblioteca de JavaScript, open source, utilizada para construir user interfaces, nomeadas para aplicações de página única.</p>
        </section>
    )
}

BoasVindas.defaultProps = {
    nome: 'Nome padrão'
 };

BoasVindas.propTypes = { 
    nome: PropTypes.string
    };
    

export default BoasVindas;
