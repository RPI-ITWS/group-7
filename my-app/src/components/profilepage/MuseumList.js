// import { Link } from "react-router-dom";

function MuseumList(params) {
  return (
    <>
      <h3>{params.listType}</h3>
      <ul>
        <li>Museum #1</li>
        <li>Museum #2</li>
        <li>Museum #3</li>
      </ul>
    </>
  );
}

export default MuseumList;
