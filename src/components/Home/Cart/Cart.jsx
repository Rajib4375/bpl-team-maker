/* eslint-disable react/prop-types */
import './Cart.css'

const Cart = ({selectedActores, reamining, totalCost}) => {
    console.log(selectedActores)
    return (
        <div>
          <h3>Total Actore :{selectedActores.length}</h3> 
          <h5>Reamining: {reamining}$</h5>
          <h5>Total cost: {totalCost}$</h5>
          {
            selectedActores.map(actor =>(
                <li key={actor.id}>{actor.name}</li>
            ))
          }
        </div>
    );
};

export default Cart;