import PropTypes from 'prop-types';
const Header = (props) => {
    return (
        <div>
            <h1 style={{ color: 'pink' }}>Olá, {props.nome}, seja bem-vindo!</h1>
        </div>
    );
};

Header.propTypes = { 
     nome: PropTypes.string,
     } 
     

Header.defaultProps = {
    nome: 'Nome padrão',
};

export default Header;

