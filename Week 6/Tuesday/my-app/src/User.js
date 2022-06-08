function User() {
  const users = [
    { id: 1, name: "Brandon T" },
    { id: 2, name: "John Doe" },
    { id: 3, name: "Jane Tate" },
    { id: 4, name: "George" },
  ];
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}> My name is {user.name} </div>
      ))}
    </div>
  );
}
export default User;
