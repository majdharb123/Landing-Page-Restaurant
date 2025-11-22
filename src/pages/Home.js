import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Background from "../assets/images/Background.jpeg";
import Button from "../components/Button";
import Pasta from "../assets/images/Pasta.png";
import Burger from "../assets/images/Cheeseburger.jpg";
import Salad from "../assets/images/Salad.jpg";
import Carts from "../components/Carts";
const Home = () => {
  const DataCarts = [
    {
      id:1,  
      src: Pasta,
      name: "Pasta",
      price: "12",
    },
    {
      id:2,  
      src: Burger,
      name: "Cheeseburger",
      price: "10",
    },
    {
      id:3,  
      src: Salad,
      name: "Salad",
      price: "5",
    },
  ];
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          width: "100%",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="d-flex flex-column align-items-center text-center text-white p-5 ">
          <h1 className="fw-bold font-sans p-2" style={{ fontSize: "3rem" }}>
            Welcome To Our Restaurant
          </h1>
          <h5 className="font-sans">A delightful experience awalts</h5>
          <div className="mt-3">
            <Button name="Order Now" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center text-center mt-3">
        <div>
          <h3 className="font-sans fw-bold">About Our Restaurant</h3>
        </div>
        <div
          style={{
            maxWidth: "600px",
            fontSize: "18px",
            lineHeight: "1.8",
            marginTop: "20px",
          }}
        >
          <p className="font-sans">
            We are a family-owned restaurant serving a variety of delicious
            dishes made from fresh, locally sourced ingredients. Our menu offers
            something for everyone, from classic favorites to modern creations.
          </p>
        </div>
      </div>
      <div className="text-center">
        <div className="mb-3">
          <h2 className="fw-bold">Our Menu</h2>
        </div>
        <div className="d-flex gap-4 justify-content-center align-items-center">
          {DataCarts.map((p) => (
            <Carts key={p.id} Data={p} />
          ))}
        </div>
        <div className="mb-3">
            <Button name="View Full Menu" className="p-3"/>
        </div>
      </div>
    </div>
  );
};
export default Home;
