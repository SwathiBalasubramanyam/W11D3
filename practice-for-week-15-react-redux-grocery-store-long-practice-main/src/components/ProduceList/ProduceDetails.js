import { useDispatch } from "react-redux";
import { populateCart } from "../../store/cart";
import { likeUnlikeProduce } from "../../store/produce";

function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(populateCart(produce.id));
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={() => dispatch(likeUnlikeProduce(produce.id))}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={handleClick}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;