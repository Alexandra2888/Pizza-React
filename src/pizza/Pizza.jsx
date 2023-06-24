import "./Pizza.css";

const Pizza = ({pizzaObj}) => {
    console.log(pizzaObj);
    const {name, ingredients, photoName, price, soldOut} = pizzaObj;

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`} key={name}>
      <img src={`./${photoName}`} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}

        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

export default Pizza;