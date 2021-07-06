const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx');

class Edit extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <DefaultLayout title="Edit Page">
        <form method="POST" action={`/products/${this.props.product._id}?_method=PUT`}>
          Image: <input type="text" name="image" defaultValue={this.props.product.img}/><br/>
          Manufacturer: <input type="text" name="manufacturer" defaultValue={this.props.product.manufacturer}/><br/>
          Group: <input type="text" name="image" defaultValue={this.props.product.group}/><br/>
          Rating: <input type="text" name="image" defaultValue={this.props.product.rating}/><br/>
          Price: <input type="text" name="image" defaultValue={this.props.product.price}/><br/>
          Quantity: <input type="text" name="image" min="0" defaultValue={this.props.product.qty}/><br/>
          <button type="submit" value="Save">Save</>
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = Edit;
