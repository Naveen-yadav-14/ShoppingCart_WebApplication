import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function NonVeg() {
    const nonVeg = useSelector((state) => state.products.nonveg);
    const dispatch = useDispatch();

    const nonVegItems = nonVeg.map((product, index) => (
        <div className="col-md-4 mb-4" key={index}>
            <div className="card">
                <img
                    src={`/images/${product.image}`} // Assuming you have images for products
                    className="card-img-top"
                    alt={product.name}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price: ${product.price.toFixed(2)}</p>
                    <button
                        className="btn btn-success"
                        onClick={() => dispatch(addToCart(product))}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <h1 className="text-center my-4" style={{color:"red"}}>Select  Non-Veg Items</h1>
            <div className="container">
                <div className="row">
                    {nonVegItems}
                </div>
            </div>
        </>
    );
}

export default NonVeg;
