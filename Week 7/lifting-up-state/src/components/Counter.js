export default function Counter({ count, updateCount }) {
  return (
    <div style={{ border: "2px dashed orange" }}>
      <div>Count: {count}</div>
      <button onClick={updateCount}>Add count</button>
    </div>
  );
}
