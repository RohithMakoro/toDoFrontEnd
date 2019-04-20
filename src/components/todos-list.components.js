import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import EditTodo from './edit-todo.component'

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id) {
        this.setState(todoPrev => {
            const newItem = todoPrev.todos.filter((item) => item._id !== id);
            return { todos: newItem }
        })
    }
    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(res => {
                this.setState({ todos: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })

    }


    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Todo Name</th>
                            <th>Todo Description</th>
                            <th>PRIORITY</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map((currentTodo, i) => (
                            <EditTodo todo={currentTodo} key={i} deleteItem={this.deleteItem} />
                        )

                        )}
                    </tbody>
                </table>

            </div>

        );


    }
}