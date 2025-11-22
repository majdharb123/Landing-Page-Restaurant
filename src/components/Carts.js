import "bootstrap/dist/css/bootstrap.min.css";
const Carts = ({ Data }) => {
  return (
    <div className="card border-0" style={{ width: "18rem"}}>
      <img
        src={Data.src}
        className="card-img-top mx-auto"
        alt={Data.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover", 
        }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{Data.name}</h5>
        <p className="card-text">${Data.price}</p>
      </div>
    </div>
  );
};
export default Carts;
