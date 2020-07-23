import React, { Component } from "react";
import axios from "../../axios";

import "./NewItem.css";

class NewItem extends Component {
  state = {
    name: "",
    description: "",
    category: "Animal",
    imageUrl: "",
  };

  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      imageUrl: event.target.files[0].name,
    });
  };

  addItemHandler = () => {
    const data = {
      name: this.state.name,
      description: this.state.description,
      category: this.state.category,
      imageUrl: this.state.imageUrl,
    };

    console.log(data);

    axios.post("/items", data).then((response) => {
      if (response.status === 201) {
        this.setState(
          {
            name: "",
            description: "",
            category: "Animal",
            imageUrl: "",
          },
          () => {
            this.props.addNew(response);
          }
        );
      }
    });
  };

  render() {
    return (
      <div className="NewItem">
        <h3>Add a Item</h3>
        <label>Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <label>Description</label>
        <textarea
          rows="4"
          value={this.state.description}
          onChange={(event) =>
            this.setState({ description: event.target.value })
          }
        />
        <label>Category</label>
        <select
          value={this.state.category}
          onChange={(event) => this.setState({ category: event.target.value })}
        >
          <option value="Animal">Animal</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Building">Building</option>
        </select>

        <label></label>
        <div>
          <input type="file" onChange={this.fileSelectedHandler} />
        </div>
        <label></label>

        <button onClick={this.addItemHandler}>Add Item</button>
      </div>
    );
  }
}

export default NewItem;
