import Titulo     from '../Titulo/Titulo'

const Formulario = () => {

    const t = 'Titulo del Form'
    const s = 'SubTit del form'
    return (
        <form >
        <Titulo titulo = {t}
                subtitulo ={s}
         />
          <input type='text' placeholder='ingrese su nombre' />
        </form>
    )
  }

  export default Formulario