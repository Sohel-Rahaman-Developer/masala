import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartIcon = ({ quantity }) => {
  return (
    <div className="relative">
      <FontAwesomeIcon icon={faShoppingCart} className="text-2xl text-gray-800" />
      {quantity > 0 && (
        <span className="absolute top-[-16px] right-[-9px] flex items-center justify-center w-5 h-5 text-xs text-white bg-red-600 rounded-full">
          {quantity}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
