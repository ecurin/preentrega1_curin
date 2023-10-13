import Titulo from "../Titulo/Titulo"

function ItemListContainer({greeting = 'valor inicial'}){
    
    const subTit = 'Bienvenidos a nuestro sitio.'

    return (
        <>
        <Titulo 
                titulo ={greeting}
            
        />
            {subTit}        
        </>
    )
}

export default ItemListContainer