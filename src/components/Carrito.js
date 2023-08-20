import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import '../main.css'
import { Container, Row, Table} from 'react-bootstrap';




const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito, cantidadEnCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    const [carr2, setCarr2] = useState(0);

    const handleRestar = (index) => {
        if (carrito[index].cantidad > 1){
            carrito[index].cantidad -= 1
            setCarr2(carrito[index].cantidad)
            console.log(carr2)
            localStorage.setItem("carrito", carrito )
        }
    }

    const handleSumar = (index) => {
        if (carrito[index].cantidad < carrito[index].stock) {
            carrito[index].cantidad += 1
            setCarr2(carrito[index].cantidad)
            console.log(carr2)
            localStorage.setItem("carrito", carrito )
        }
    }

    const handleEliminar = (index) => {
        if (carrito.length === 1){
            handleVaciar()
        } else {
            carrito.splice(index, 1)
            setCarr2(index + (Math.random()))
            localStorage.setItem("carrito", carrito)
            cantidadEnCarrito()
        }
    }

    return (


    <Container >
        <h1 className="main-title">Bienvenido al carrito de compras</h1>

        <Row className="justify-content-center ">

        {
            carrito.map((prod, index) => (
                <div key={prod.id} >
                    
                    <Table responsive="sm" striped bordered hover  className="mb-5"> 
                        <tbody>
                            <div style={{ background: 'teal', height: '8rem', overflow: 'hidden', display: 'flex',
                                            justifyContent: 'between-center', alignItems: 'center' }}>
                                <div style={{ padding: '3rem'}}> <td><h3>{prod.titulo}</h3></td></div>
                                <div style={{ padding: '3rem'}}><td><img src={prod.imagen } style={{ width: '5rem'}} alt={prod.imagen} /></td></div>
                                <div style={{ padding: '3rem'}}><td><h3>Precio unit: ${prod.precio}</h3></td></div>
                                <div style={{ padding: '3rem'}}>
                                    <td>
                                        <button className='operacion' onClick={() => handleRestar(index)}>-</button>
                                    </td>
                                    <td>
                                        <h3 style={{marginLeft: "1rem", marginRight: "1rem"}}>Cant: {prod.cantidad}</h3>
                                    </td>
                                    <td>
                                        <button className='operacion' onClick={() => handleSumar(index)}>+</button>
                                    </td>
                                </div>
                                <div style={{ padding: '3rem'}}><td><h3>Total de esta casilla: ${prod.precio * prod.cantidad}</h3></td></div>

                                <div  style={{ marginRight: "3rem"}}><button className='delet' onClick={() => handleEliminar(index)}>Eliminar</button></div>
                            </div>
                        </tbody>
                    </Table>
                </div>
            ))
        }
        </Row>

        <div style={{ marginBottom: "60px" }}>
        {  
            carrito.length > 0 ?
            <div style={{ background: 'teal', height: '3rem', overflow: 'hidden', display: 'flex',
            justifyContent: 'space-between', alignItems: 'center'}}>
                <h1 style={{marginLeft: "30px"}}>Precio Total: ${precioTotal()}</h1>

                <button className='carrito vaciar' onClick={handleVaciar}>Vaciar Carrito</button>

                <button className="carrito" ><Link to="/checkout"><h4 className="finalizar">Finalizar compra</h4> </Link> </button>
                
            </div> :  <h2>No has agregado nada al carrito de compras </h2>
        }
        </div>
        <>
        <button className="carrito seguir"> <Link className='seguir-comprando' to="/">Seguir comprando</Link> </button>
        </>
    </Container>

)

}


export default Carrito