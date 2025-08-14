import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["上班", "下班", "吃飯"],
    };
  }

  render() {
    return (
      <Fragment>
        {/* */}
        <div>
          <label htmlFor="insertArea">Todo：</label>
          <input
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <div>
                <TodoItem
                  content={item}
                  index={index}
                  deleteItem={this.handleItemDelete.bind(this)}
                ></TodoItem>
              </div>
            );
          })}
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleBtnClick(e) {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: "",
    });
  }

  handleItemDelete(index) {
    // immutable
    // state 不允許我們做任何的改變
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list: list,
    });
  }
}

export default TodoList;
