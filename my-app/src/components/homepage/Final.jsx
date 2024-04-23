import { Link } from "react-router-dom";

function FinalSell() {
  return (
    <div className="finalSell">
      <h6>
        Start your museum experience scrapbook with Museo today. Create a free
        account and start stampin!
      </h6>
      <Link to="/LogIn">
        <button>JOIN MUSEO!</button>
      </Link>
    </div>
  );
}

export default FinalSell;
