import React from 'react';
import uuid from 'react-uuid';

import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


class App extends React.Component {
  //setup state
  state = {
    items: [],
    id:uuid(),
    item: '',
    editItem: false

  };

  handleChange = (e)=>{
    this.setState ({
      item : e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id : this.state.id,
      title : this.state.item
    }
/// ...spread operator whatever the value it holds 
    const updatedItems = [...this.state.items, newItem]

    this.setState({
      items: updatedItems,
      item : [],     //initialize item to empty array to add more item further after adding items
      id : uuid(),
      editItem: false
    }
    )


  }

  clearList = () => {
    this.setState({
      items: []
    })
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter( item => (item.id !== id));
    this.setState ({
      items: filteredItems
    }) 
  }

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter( item => (item.id !== id));
    const selectedItem = this.state.items.find(item => (item.id === id));
    // console.log(selectedItem);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    })
  }





  render() {
     
    return (
      <div className ='container'>
        <div className ='row'>
          <div className = 'col-10.mx-auto.col-md-8.mt-5'>
            <h3 className ="text-capitalize text-center">
              to do input
            </h3>
            <TodoInput item ={this.state.item} 
            handleChange ={this.handleChange}
            handleSubmit = {this.handleSubmit} 
            editItem ={this.state.editItem} />
            <TodoList item = {this.state.items}
            clearList = {this.clearList} 
            handleEdit ={this.handleEdit}
            hanldeDelete = {this.handleDelete}
            />

          </div>

        </div>

      </div>

    );

  }
  
}

export default App;
