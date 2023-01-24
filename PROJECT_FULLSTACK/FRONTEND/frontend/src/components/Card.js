export default function Card({ product, top, height }) {
  const topp = String(top) + "px";
  const heigt = String(height) + "px";
  return (
    <div className="container-fluid m-2 p-2 ">
      <div className="px-0 mx-0">
        <img
          src={product.src}
          alt="Avatar"
          style={{
            width: "100%",
            height: heigt,
            objectFit: "cover",
            position: "relative",
            top: 0,
            left: 0,
          }}
        />
        <div
          style={{
            padding: "10px",
            backgroundColor: "rgb(19, 19, 81)",
            color: "white",
            position: "absolute",
            width: "200",
            top: topp,
          }}
        >
          <h4>
            <b>{product.name}</b>
          </h4>
          <p>{product.category}</p>
        </div>
      </div>
    </div>
  );
}
