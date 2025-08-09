const User = (data) => {
  return (
    <div style={{
      border: "1px solid green",
      padding: "10px",
      margin: "10px",
      width: "400px",
      borderRadius: "10px"
    }}>
      <h3>name : <span style={{ color: 'green' }}>{data.data.name}</span></h3>
      <h3>email : <span style={{ color: 'green' }}>{data.data.email}</span></h3>
      <h3>age : <span style={{ color: 'green' }}>{data.data.age}</span></h3>
    </div>
  );
};

export default User;
