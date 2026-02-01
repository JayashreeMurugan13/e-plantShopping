import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plantsArray = [
  {
    category: "Aromatic Plants",
    name: "Lavender",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    description: "Fragrant plant known for relaxation and stress relief.",
    cost: "$10"
  },
  {
    category: "Aromatic Plants",
    name: "Rosemary",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    description: "Aromatic herb used in cooking and home gardens.",
    cost: "$12"
  },
  {
    category: "Medicinal Plants",
    name: "Aloe Vera",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8c7c0b5",
    description: "Medicinal plant used for skin care and healing.",
    cost: "$15"
  },
  {
    category: "Medicinal Plants",
    name: "Tulsi",
    image: "https://images.unsplash.com/photo-1621955964441-c173e01cbb8d",
    description: "Sacred plant with powerful medicinal properties.",
    cost: "$8"
  },
  {
    category: "Indoor Plants",
    name: "Snake Plant",
    image: "https://images.unsplash.com/photo-1616627981465-8c60f2bb1b6f",
    description: "Low maintenance indoor plant that purifies air.",
    cost: "$20"
  },
  {
    category: "Indoor Plants",
    name: "Money Plant",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
    description: "Popular indoor plant believed to bring prosperity.",
    cost: "$18"
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart({ ...addedToCart, [plant.name]: true });
  };

  const categories = [...new Set(plantsArray.map(p => p.category))];

  return (
    <div>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {plantsArray
              .filter(plant => plant.category === category)
              .map(plant => (
                <div className="product-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} width="200" />
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <p>{plant.cost}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
