function Fruits() {
  const fruits = [
    {
      name: "Apple",
      units: 3,
      price: 0.25,
    },
    {
      name: "Mango",
      units: 6,
      price: 0.35,
    },
    {
      name: "Banana",
      units: 4,
      price: 0.15,
    },
  ];

  return (
    <div>
      {fruits.map((fruit, index) => (
        <div>
          {index + 1}. {fruit.units} units of {fruit.name} costs $
          {(fruit.price * fruit.units).toFixed(2)}
        </div>
      ))}
    </div>
  );
}
export default Fruits;
