import { Link } from "react-router-dom";

const TableData = ({ problems }) => {
  // console.log(problems);
  return (
    <div className="main-container">
      <table className="problem-table">
        <thead className="table-head-col">
          <tr>
            <th className="table-heading">Rank</th>
            <th className="table-heading">Title</th>
            <th className="table-heading">Difficulty</th>
            <th className="table-heading">Category</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((doc, idx) => {
            const difficulyColor =
              doc.difficult === "Easy"
                ? "green"
                : doc.difficult === "Medium"
                ? "yellow"
                : "red";
            return (
              <tr className={`${idx % 2 == 1 ? "row-odd" : ""}`} key={doc.id}>
                <th>{doc.order}</th>
                <td className="title">
                  <Link to={`/problems/${doc.id}`}>{doc.title}</Link>
                </td>
                <td style={{ color: difficulyColor }}>{doc.difficult}</td>
                <td>{doc.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
