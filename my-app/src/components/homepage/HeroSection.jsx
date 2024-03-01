import pic from "../../images/homeImages/Museo.jpg";

function Hero(params) {
  return (
    <div className="heroSection">
      <div className="heroText">
        <h2>MUSEO</h2>
        <h4>Your museum stampbook!</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet.
        </p>
        <button>SIGN UP</button>
      </div>
      <img
        className="heroImg"
        src={pic}
        alt="Close-up of a museum display shelf."
      />
    </div>
  );
}

export default Hero;
