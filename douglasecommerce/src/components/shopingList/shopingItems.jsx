import "../components.css/shopingList.css";

const ShoppingList = ({ result }) => {
  return (
    <div>
      <section className="card-container">{result}</section>
    </div>
  );
};

export default ShoppingList;