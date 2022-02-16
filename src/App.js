import React from "react";
import './App.css';
import ListItems from "./ListItems";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    if (this.state.currentItem.text !== "") {
      this.setState({
        items: [...this.state.items, this.state.currentItem],
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  updateItem(text, key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }
  deleteItem(key) {
    this.setState({
      items: this.state.items.filter(item => item.key !== key)
    })
  }
  render() {
    return (
      <div className="app">
        <header>
          <div>
            <img src="./todolist-icon.png" alt="TodoList logo" />
            <p>TodoList</p>
          </div>
        </header>
        <div>
          <form onSubmit={this.addItem} id="to-do-form">
            <input onChange={this.handleInput} value={this.state.currentItem.text} type="text" placeholder="Enter task here..." />
            <button type="submit">Add</button>
          </form>
        </div>
        <ListItems 
          items={this.state.items} 
          updateItem={this.updateItem}
          deleteItem={this.deleteItem} 
        />
      </div>
    )
  }
}

export default App;