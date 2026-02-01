import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "./CartSlice";

const plantsArray = [
  {
    name: "Aloe Vera",
    cost: "$10",
    description: "Medicinal plant for healing",
    image: "https://via.placeholder.com/150",
    category: "Medicinal",
  },
  {
    name: "Lavender",
    cost: "$12",
    description: "Aromatic and relaxing plant",
    image: "https://via.placeholder.com/150",
    category: "Aromatic",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart({ ...addedToCart, [plant.name]: true });
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant, index) => (
        <div className="product-card" key={index}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>{plant.cost}</p>

          <button
            disabled={addedToCart[plant.name]}
            onClick={() => handleAddToCart(plant)}
          >
            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
