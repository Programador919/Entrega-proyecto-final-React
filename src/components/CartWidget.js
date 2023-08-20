import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { FaCartArrowDown } from 'react-icons/fa';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    
    <div>
      
        <Link className="menu-link" to="/carrito">
            <FaCartArrowDown/>
            <>_</>
            <span className="numerito">{cantidadEnCarrito()}</span>
        </Link>
        
    </div>
  )
}

export default CartWidget