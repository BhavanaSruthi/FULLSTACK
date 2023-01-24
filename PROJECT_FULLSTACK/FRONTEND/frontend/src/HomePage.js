import Card from "./components/Card";
import Header from './components/Header';
import ImageCarousal from "./components/Carousal/ImageCarousal";
import React, { useEffect, useState } from "react";
import MagazinePage from "./Magazine/Magazine";
import ShopPage from "./Shop/shop";
export default function HomePage(props) {
  const [data, setData] = useState();
  const sendRequest = () => {
    fetch("http://localhost:3200/homePageEvents")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e));
      console.log(data);
  };
  useEffect(() => {
    sendRequest();
  }, []);
  if (data) {
    const products = data.slice(data.length / 2);
    return (
      <div>
        <div>
          <ImageCarousal data={data.slice(0, 3)} />
        </div>
        <div className="container-fluid row mb-20 col-sm-12">
          <div className="col-5 col-xs-12">
            <Card product={products[0]} top={750} height={250} />
          </div>
          <div className="col-3 col-xs-12 m-0 p-0">
            <Card product={products[1]} top={750} height={250} />
          </div>
          <div className="col-4 col-xs-12">
            <Card product={products[2]} top={750} height={250} />
          </div>
        </div>
        <div style={{ marginLeft: "38px", marginTop: "40px" }}>
          <h4>Scandanavian Collection</h4>
        </div>
      </div>
    );
  }
}
