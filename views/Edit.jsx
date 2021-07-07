const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx');

class Edit extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <DefaultLayout title="Edit Page" styles={[{ key: 0, href: '/css/app.css' }, { key: 1, href: '/css/indexpage.css' }]}>
        <form method="POST" action={`/products/${this.props.product._id}?_method=PUT`}>
          Image: <input type="text" name="image" defaultValue={this.props.product.img}/><br/>
          Manufacturer: <input type="manufacturer" name="manufacturer" defaultValue={this.props.product.manufacturer}/><br/>
          Group: <input type="text" name="group" defaultValue={this.props.product.group}/><br/>
          Rating: <input type="text" name="rating" defaultValue={this.props.product.rating}/><br/>
          Price: <input type="number" name="price" defaultValue={this.props.product.price}/><br/>
          Quantity: <input type="number" name="qty" defaultValue={this.props.product.qty}/><br/>
          <button type="submit" value="Save">Save</button>
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = Edit;
