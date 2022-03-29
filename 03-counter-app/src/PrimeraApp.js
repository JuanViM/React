import PropTypes from "prop-types";


const PrimeraApp = ({saludo,subtitulo}) => {

   
    return (
    <>
    <h1>{saludo}</h1>
    <p>{subtitulo}</p>
    </>
    );
}

PrimeraApp.propTypes={
    saludo: PropTypes.string.isRequired,
    // numero: arcaxofa.number.isRequired,
    // ultimo:arcaxofa.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
}

export default PrimeraApp;