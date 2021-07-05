const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Edit extends React.Component {
  render () {
    return (
      <DefaultLayout title="Edit Page">
        <form method="POST" action={`/products/${this.props.product._id}?_method=PUT`}>
          Image: <input type="text" name="image" defaultValue={this.props.product.img}/><br/>
          Manufacturer: <input type="text" name="manufacturer" defaultValue={this.props.product.manufacturer}/><br/>
          Group: <input type="text" name="image" defaultValue={this.props.product.img}/><br/>
          Rating: <input type="text" name="image" defaultValue={this.props.product.img}/><br/>
          Price: <input type="text" name="image" defaultValue={this.props.product.img}/><br/>
          Quantity: <input type="text" name="image" defaultValue={this.props.product.img}/><br/>
          <input type="submit" value="Save"/>
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = Edit;
