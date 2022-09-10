import React, { Component } from 'react';
import './App.css';

export default class Item extends Component {
    state = {
        mouse: false,
    };
    render() {
        const { mouse } = this.state;
        const { id, name, done } = this.props;
        return (
            <li
                style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}
                onMouseEnter={() => this.handleMouse(true)}
                onMouseLeave={() => this.handleMouse(false)}
            >
                <label>
                    {/*
						checkbox设置checked会报警告信息
						根据建议换成defaultChecked属性
						处理checkbox的勾选取消事件
					*/}
                    <input type='checkbox' checked={done} onChange={this.update(id)} />
                    <span>{name}</span>
                </label>
                <button
                    className='btn btn-danger'
                    onClick={() => this.handleDelete(id)}
                    style={{ display: mouse ? 'block' : 'none' }}
                >
                    删除
                </button>
            </li>
        );
    }

    handleMouse = (flag) => {
        this.setState({ mouse: flag });
    };

    //改变checkbox的回调
    update = (id) => {
        return (e) => {
            //拿的是当前的check状态，所以是e.target.checked
            this.props.updateTodo(id, e.target.checked);
        };
    };
    //删除一个todo的
    //confirm确定的话，返回一个值为真或为假，要加window
    handleDelete = (id) => {
        if (window.confirm('确认删除吗？')) {
            this.props.deleteTodo(id);
        }
    };
}

