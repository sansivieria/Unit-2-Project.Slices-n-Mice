const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {
    const buyItem = () => {
      if (this.props.product.qty > 0) {
        return (
          <>
            <p>{this.props.product.qty} in stock</p>
            <form action={`/products/${this.props.product.id}/buy`}>
            <button type="submit" value="BUY">BUY IT</button>
            </form>
          </>
        )
      } else {
          return (
            <p>Sold Out</p>
          )
      }
    }
    const product = this.props.product;
    return (
      <DefaultLayout title={"GET GOOD...PIZZA!"} styles={[{ key: 0, href: '/css/app.css' }, { key: 1, href: '/css/showpage.css' }]}>
      <div className="show">
        <div><img src={product.img}/></div>
        <div>Name: {product.name}</div>
        <div>Manufacturer: {product.manufacturer}</div>
        <div>Group: {product.group}</div>
        <div>Rating: {product.rating}</div>
        <div>Price: ${product.price}</div>
        <div>{buyItem()}</div>
        <button><a href={`/products/${product._id}/edit`}>Edit This Listing</a></button>
        <form method="POST" action={`/products/${product._id}?_method=DELETE`}>
          <input type="submit" value="DELETE"/>
            </form>
            <div className= "home"><a href="/products/">Home</a></div>
      </div>
      </DefaultLayout>
    )
  }
}

module.exports= Show;
