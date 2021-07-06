const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Index extends React.Component {
  render() {
    const products = this.props.products;
    return (
      <DefaultLayout title={"SLICES N MICE"}>
        <div id="catalog">
          {
            products.map((product) => {
              return (
                <div className="productId" key={product._id}>
                  <div className="contents">
                    <div><img src={product.img}></div>
                    <label>Name: </label><div className="info">{product.name}</div>
                    <label>Manufacturer: </label><div className="info">{product.company}</div>
                    <label>Group: </label><div className="info">{product.group}</div>
                    <label>Rating: </label><div className="info">{product.rating}</div>
                    <label>Price: </label><div className="info">${product.price}</div>
                    <label>Quantity: </label><div className="info">{product.qty}</div>
                  </div>
                </div>
              );
            })
          }
         </div>

    </DefaultLayout>
    )
  }
}

module.exports = Index;
