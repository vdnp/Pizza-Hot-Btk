import { useEffect, useState } from "react";
import Pizza from "./Pizza";

export default function PizzaList() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    async function getPizzaList() {
      const response = await fetch("http://localhost:3000/pizzas");

      if (!response.ok) {
        throw new Error("Failed to fetch pizza list");
      }

      const pizzas = await response.json();
      setPizzas(pizzas);
    }
    getPizzaList();
  }, []);

  return (
    <div className="pizza-list">
      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
        {pizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}
