import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      groceries: groceries
    }
  }

  handleAddItem = (name) => {
    const item = {
      name: name,
      id: this.state.groceries.length,
      purchased: false
    }

    const newGroceries = [...this.state.groceries, item]
    this.setState({
      groceries: newGroceries
    })
  }

  handleItemToggle = (itemId) => {
    this.setState({
      groceries: this.state.groceries.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            purchased: !item.purchased
          };
        }
        return item;
      })
    });
  }

  handleClearItems = () => {
    const newGroceries = this.state.groceries.filter(item => {
      return !item.purchased
    })

    this.setState({
      groceries: newGroceries
    })
  }

  // Class methods to update state
  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm handleAddItem={this.handleAddItem} />
         </div>
        <GroceryList handleClearItems={this.handleClearItems} handleItemToggle={this.handleItemToggle} groceries={this.state.groceries} />
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);