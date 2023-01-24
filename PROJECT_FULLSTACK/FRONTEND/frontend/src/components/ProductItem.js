import styles from "./ProductItem.module.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function ProductItem({ product }) {
   const handleIcon=()=>{
    console.log("icon click");
    fetch(`http://localhost:3200/shopPageEvents?id=${product.id}`,{
      method:'DELETE',
    }).then(()=>{
      console.log("product deleted");
    })
   }
  var rating = [];
  for (let i = 0; i < product.rating; i++) {
    rating.push(
      <div style={{ width: "20px", height: "20px", display: "inline" }}>
        &#9733;
      </div>
    );
  }
  for (let i = 0; i < 5 - product.rating; i++) {
    rating.push(
      <div style={{ width: "20px", height: "20px", display: "inline" }}>
        &#9734;
      </div>
    );
  }
  return (
    <div className="col-xs-6  col-sm-6 col-lg-4 bg-light ">
      <div className="container">
        <div className=" row  my-4 py-0  position-relative ">
          <Link  to={{ pathname: `/Shop/${product.id}`, query: product }}> 
            <img className={styles.img} src={product.src} alt="image" />
            </Link>
            <a className=" position-absolute top-0 " style={{cursor:"pointer"}} onClick={handleIcon}>
            <i class="bi bi-x"></i>
            </a>
           
          <div className="row  ms-1 px-2 ">
            <div className="col-6 px-1  pt-3 bg-light position-absolute bottom-0">
              <ul className={styles.ul} style={{ paddingTop: "4px" }}>
                <li>
                  <h5>{product.name}</h5>
                </li>
                <li>{product.category}</li>
                <li>{rating}</li>
              </ul>
            </div>
          </div>
          <div className="col-4 ps-4 position-relative ms-auto ">
            <ul className={styles.ul}>
              <li>&#36;{product.price}</li>
              <li>
                <a>
                  <i class="bi bi-cart3 "></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
