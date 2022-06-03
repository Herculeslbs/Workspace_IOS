const estilo = { fontWeight: 'bold'}
const estilo1 = { color: 'blue'}
const Sobre = () => {
    return (
        <article>
            <h2 style = {estilo1}>Ola, seja bem vindo</h2>
            <p style = {estilo}> diferencial do React é ser rápida, escalável e simples, podendo ser usada com outras bibliotecas ou frameworks de JavaScript, como o Angular JS.</p>
        </article>
    )
}

export default Sobre;
