const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Index extends React.Component {
  render() {
    const products = this.prop.products;
    return (
      <DefaultLayout
      title={"Products Index Page"}>
      <ul>
        {
          products.map((product) => {
            return (
              <li key={product._id}>
                <a href={`/products/${product._id}`}><img src={`${product.image}`}/></a><br/>
                Name: {product.name}<br/>
                Manufacturer: {product.company}<br/>
                Group: {product.group}<br/>
                Rating: {product.rating}<br/>
                Price: ${product.price}<br/>
                Quantity: {product.qty}<br/>
                </li>
            );
          })
        }
      </ul>
    </DefaultLayout>
    )
  }
}

module.exports = Index;
