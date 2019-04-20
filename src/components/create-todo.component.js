import React, { Component } from 'react';
import axios from "axios";

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);
        this.onChangeTodo_name = this.onChangeTodo_name.bind(this);
        this.onChangeTodo_desc = this.onChangeTodo_desc.bind(this);
        this.onChangeTodo_priority = this.onChangeTodo_priority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_name: '',
            todo_description: '',
            todo_priority: '',
        }
    }
    onChangeTodo_name(e) {
        this.setState({
            todo_name: e.target.value
        });
    }
    onChangeTodo_desc(e) {
        this.setState({
            todo_description: e.target.value
        });
    }
    onChangeTodo_priority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newTodo = {
            todo_name: this.state.todo_name,
            todo_description: this.state.todo_description,
            todo_priority: this.state.todo_priority,

        }

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then((res) => console.log(`result ${res.data}`));

        this.setState({
            todo_priority: '',
            todo_name: '',
            todo_description: ''

        });
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Todo Name</label>
                        <input type="text"
                            style={{ "width": "70%" }}
                            className="form-control"
                            value={this.state.todo_name}
                            onChange={this.onChangeTodo_name} />
                    </div><div className="form-group">
                        <label>Description</label>
                        <input type="text"
                            style={{ "width": "70%" }}
                            className="form-control"
                            value={this.state.todo_description}
                            onChange={this.onChangeTodo_desc} />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                className="form-check-input"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.todo_priority === 'Low'}
                                onChange={this.onChangeTodo_priority} />
                            <label className="form-check-label"> Low</label>

                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                className="form-check-input"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={this.state.todo_priority === 'Medium'}
                                onChange={this.onChangeTodo_priority} />
                            <label className="form-check-label"> Medium</label>

                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                className="form-check-input"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={this.state.todo_priority === 'High'}
                                onChange={this.onChangeTodo_priority} />
                            <label className="form-check-label"> High</label>

                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />

                    </div>
                </form>
            </div>
        );


    }
}