import CartItem from './CartItem';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { emptyCart } from '../../store/cart';


function Cart() {

  const cart = useSelector((state) => {
    return state.cart;
  })
  const produce = useSelector((state) => {
    return state.produce;
  });

  const dispatch = useDispatch();

  const cartItems = [];

  // cart.forEach((k, v) => {
  //     let newObj = {...v, ...produce[k]}
  //     cartItems.push(newObj)
  // });

  for(const key in cart){
    let newObj = {...cart[key], ...produce[key]}
    cartItems.push(newObj)
  }

  // const cartItems = Object.keys(cart).map(
  //   key => {
  //     return {
  //       ...cart[key], ...produce[key]
  //     }
  //   }
  // )




  // const cartItems = Object.values(cart)
  //   .map(item => {
  //     return {
  //       ...item,
  //       ...produce[item.id]
  //     };
  //   });

  if (!cartItems || !cartItems.length) return (
    <div className="cart">
      No items in the cart. Start selecting items to purchase.
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(emptyCart());
    window.alert(
      "Purchased the following:\n" +
      `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
    );
  }

  return (
    <div className="cart">
      <ul>
        {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button type="submit">Purchase</button>
      </form>
    </div>
  )
}

export default Cart;