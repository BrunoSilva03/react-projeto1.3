import Button from './Button'

function Evento() {

    function meuEvento() {
        console.log('Primeiro evento')
    }

    function segundoEvento() {
        console.log('Segundo evento')
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento"/>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento