const Students = ({ student }) => {
  return (
    <>
      <h3>Students</h3>
      {student.map((stu, index) => (
        <ul key={index}>
          <li>name: {stu.name}</li>
          <li>age: {stu.age}</li>
          <li>email: {stu.email}</li>
        </ul>
      ))}
    </>
  );
};

export default Students;
