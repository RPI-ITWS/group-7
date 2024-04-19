import { Link } from "react-router-dom";
import pic from "../../images/homeImages/Museo.jpg";

function FriendsList(params) {
  return (
    <>
      <h3>Your Friends</h3>
      <div className="friendList">
        <ul>
          <li>Friend #1</li>
          <li>Friend #2</li>
          <li>Friend #3</li>
          <li>Friend #4</li>
          <li>Friend #5</li>
        </ul>
      </div>
    </>
  );
}

export default FriendsList;
