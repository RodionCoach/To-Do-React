import React from 'react';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
 
class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.todoItems = [];
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: this.todoItems};
  }
  addItem(todoItem) {
    this.todoItems.unshift({
      index: this.todoItems.length+1, 
      value: todoItem.newItemValue, 
      done: false
    });
    this.setState({todoItems: this.todoItems});
  }
  removeItem (itemIndex) {
    this.todoItems.splice(itemIndex, 1);
    this.setState({todoItems: this.todoItems});
  }
  markTodoDone(itemIndex) {
    let todo = this.todoItems[itemIndex];
    this.todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? this.todoItems.push(todo) : this.todoItems.unshift(todo);
    this.setState({todoItems: this.todoItems});  
  }
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={this.todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default TodoApp;
