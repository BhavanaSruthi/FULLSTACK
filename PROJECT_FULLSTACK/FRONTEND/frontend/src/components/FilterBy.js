import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import CloseButton from 'react-bootstrap/CloseButton';
import ProductList from "./ProductList";
 function FilterBy({pageHandler}) {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState('false');
  const [product, setProduct] = useState({})
  const sendRequest = async(url) => {
    await fetch(url)
      .then((res) => (res.json()))
      .then((data) => {setData(data);
      pageHandler(1,data);}
      )
  };
  const updateData = e => {
  setProduct({
    ...product,
    [e.target.name]: e.target.value
})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  console.log(product);
    setIsPending(true);
    fetch('http://localhost:3200/shopPageEvents',{
      method:'POST',
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(product)
    }).then(()=>{
      console.log("new product added");
      setIsPending(false);
    })
  }
  return (
    <div>
    <div style={{marginBottom:"50px"}}>
      <p style={{ marginLeft: "20px" }}>Filter By</p>
      <div class="accordion accordion-flush " id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <p>Collection</p>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <ul style={{ listStyle: "none", textDecoration: "none" }}>
                 <Link onClick={() =>sendRequest("http://localhost:3200/shopPageEvents?collection=Coombes")}  >
                  <li >Coombes</li>
                </Link>
                <Link onClick={() =>sendRequest("http://localhost:3200/shopPageEvents?collection=Nille")}  >
                  <li >Nille</li>
                </Link>
              
                <Link onClick={() =>sendRequest("http://localhost:3200/shopPageEvents?collection=Keeve")}  >
                  <li >Keeve</li>
                </Link>
                <Link onClick={() =>sendRequest("http://localhost:3200/shopPageEvents?collection=Penemille")}  >
                  <li >Penemille</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <p>Color</p>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <ul style={{ listStyle: "none", textDecoration: "none" }}>
                <a href="#">
                  <li>White</li>
                </a>
                <a href="#">
                  <li>Brown</li>
                </a>
                <a href="#">
                  <li>Black</li>
                </a>
                <a href="#">
                  <li>Burlywood</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <p>Category</p>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <ul style={{ listStyle: "none", textDecoration: "none" }}>
              <Link onClick={() =>sendRequest("http://localhost:3200/shopPageEvents?category=LOUNGE")}  >
                  <li >LOUNGE</li>
                </Link>
                <Link onClick={() =>sendRequest("http://localhost:3200/shopPageEvents?category=CHAIR")}  >
                  <li >CHAIR</li>
                </Link>
                <Link onClick={() =>sendRequest("http://localhost:3200/shopPageEvents?category=SHELVES")}  >
                  <li >SHELVES</li>
                </Link>
                <Link onClick={() =>sendRequest("http://localhost:3200/shopPageEvents?category=TABLE")}  >
                  <li >TABLE</li>
                </Link>
              </ul>
            </div>
          </div>
          <div class="accordion-item mb-0">
            <h2 class="accordion-header" id="flush-headingFour">
              <button class="accordion-button collapsed" aria-expanded="false">
                <p>Price Range</p>
              </button>
            </h2>
            <div id="flush-collapseFour">
              <div class="accordion-body"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="range ">
        <input type="range" class="form-range" id="customRange1" />
        <div class="row">
          <p class="col-6">
            <small>
              <small>$1300</small>
            </small>
          </p>
          <p class="col-6" style={{ float: "right" }}>
            <small>
              <small>$10,000+</small>
            </small>
          </p>
        </div>
      </div>
    </div>
     <div style={{width:"30%"}}>
     <input  type="number" name="id" placeholder="id" onChange={updateData}/>

    <input className="mb-2" type="text" name="name" placeholder="name" onChange={updateData}/>
    <input  type="text" name="category" placeholder="category" onChange={updateData}
/>
    <input  type="text"  name="rating" placeholder="rating" onChange={updateData}/>
    <input  type="text" name="price" placeholder="price" onChange={updateData}/>
     <button className="btn-primary" type="submit" style={{marginTop:"20px"}} onClick={handleSubmit}>ADD PRODUCT</button>
  </div>
  </div>
  );
}
export default FilterBy;
