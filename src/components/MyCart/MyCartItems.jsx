import { useProducts } from "../../provider/ProductProvider";
import { actionTypes } from "../state/actionTypes";


const MyCartItems = ({cart}) => {
    const {dispatch}=useProducts();
    const {strDrinkThumb, strInstructions,strCategory}=cart;
    return (
    
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={strDrinkThumb} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{strCategory}</h2>
                <p>{strInstructions}</p>
                <div className="card-actions">
                <button onClick={()=> dispatch({type: actionTypes.REMOVE_ITEM, payload:cart})} className="btn bg-red-400">Remove</button>
                </div>
            </div>
            </div>
        
    );
};

export default MyCartItems;