import React from 'react';


class AddItem extends React.Component {

  state = {}

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onProductAdded(this.state)
  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <p>
          <label>
            ID: <input type="text" onChange={ (e)=> this.setState({id: e.target.value}) }/>
          </label>
        </p>
        <p>
          <label>
            Product Name: <input type="text" onChange={ (e)=> this.setState({name: e.target.value})} name="productName"/>
          </label>
        </p>
        <p>
          <label>
            Product Price: <input type="text" onChange={ (e)=> this.setState({priceInCents: e.target.value})} name="priceInCents"/>
          </label>
        </p>
        <p>
          <label>
            Quantity: <input type="text" onChange={ (e)=> this.setState({quantity: e.target.value})}/>
          </label>
        </p>
        <p>
          <input type="submit" value="Create Product"/>
        </p>
      </form>
    )
  }
}

export default AddItem
