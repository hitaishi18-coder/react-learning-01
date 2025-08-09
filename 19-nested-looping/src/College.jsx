import Students from "./Student";

const College = ({ college }) => {
  return (
    <div style={{ backgroundColor: "beige", padding: "20px" }}>
      <h2>name: {college.name}</h2>
      <ul>
        <li><h2>city: {college.city}</h2></li>
        <li><h2>website: {college.website}</h2></li>
        <li>
          <Students student={college.student} />
        </li>
      </ul>
    </div>
  );
};

export default College;
