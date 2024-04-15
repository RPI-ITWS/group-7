import { Link } from "react-router-dom";

function FinalSell() {
  return (
    <div className="finalSell">
      <h6>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna.
      </h6>
      <Link to="/LogIn">
        <button>JOIN MUSEO!</button>
      </Link>
    </div>
  );
}

export default FinalSell;
