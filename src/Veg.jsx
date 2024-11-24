import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "./store";
import { useEffect } from "react";

function Veg() {
    const vegProducts = useSelector(state => state.products.veg);
    const dispatch = useDispatch();

                useEffect( ()=>{
                    dispatch(fetchProducts())
                },
                [dispatch]
                )

    const vegItems = vegProducts.map((product, index) => (
        <div className="col-md-4 mb-4" key={index}>
            <div className="card">
            <div className="centered-container">
                <img
                    src={`/images/${product.image}`} // Assuming you have images for products
                    className="card-img-top"
                    alt={product.name}
                />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price: ${product.price}</p>
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
            <h1 className="text-center my-4" style={{color:"blue"}}>Select  Veg Items</h1>
            <div className="container">
                <div className="row">
                    {vegItems}
                </div>
            </div>
        </>
    );
}

export default Veg;
