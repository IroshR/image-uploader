import React, { Component } from "react";
import axios from "../../axios";
import NewItem from "../NewItem/NewItem";
import Modal from "../UI/Modal/Modal";
import Table from "../Table/Table";
import "./Items.css";

var items;

class Items extends Component {
  state = { addingNew: false, posts: [] };

  componentDidMount() {
    axios.get("/items").then((response) => {
      items = response.data;
      this.setState({ posts: response.data });
    });
  }

  addingNewHandler = () => {
    this.setState({
      addingNew: true,
    });
  };

  addNewHandler = (data) => {
    this.setState({
      addingNew: false,
    });
    items.push(data.data.data);
  };

  render() {
    const columns = [
      { Header: "Item Id", accessor: "itemId" },
      { Header: "Name", accessor: "name" },
      { Header: "Category", accessor: "category" },
      { Header: "Description", accessor: "description" },
      { Header: "Image URL", accessor: "imageUrl" },
    ];
    const data = this.state.posts;

    return (
      <div className="Items">
        <Modal show={this.state.addingNew}>
          <NewItem addNew={this.addNewHandler} />
        </Modal>
        <h3>Items List</h3>
        <button onClick={this.addingNewHandler} style={{ float: "right" }}>
          Add Item
        </button>
        <Table columns={columns} data={data} />
      </div>
    );
  }
}

export default Items;
