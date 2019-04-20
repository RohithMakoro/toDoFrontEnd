import React, { Component } from 'react';
import Todo from './todos-list.components'
import axios from 'axios';
export default class EditTodo extends Component {

    constructor(props) {
        super(props);
        this.state = { item: props.todo }
        this.delete = this.delete.bind(this);
    }

    delete(id){
        axios.delete('http://localhost:4000/todos/delete/' + this.props.todo._id)
            .then(res => {
                console.log(res);
                this.props.deleteItem(id);
            })
            .catch((err) => console.log(err));
    }


    render() {
        const { item } = this.state;
        return (
            <tr>
                <td>{this.props.todo.todo_name}</td>
                <td>{this.props.todo.todo_description}</td>
                <td>{this.props.todo.todo_priority}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => this.delete(item._id)}> Delete</button>
                </td>
            </tr>
        );

    }
}