import React, { Component } from 'react';
import './App.css';

export default class Footer extends Component {
    render() {
        const { todos } = this.props;
        //计算已完成的个数，reduce对数组做条件统计，第一个参数是回调值(上一次的返回值)，第二个参数是当前值
        //defaultchecked只在第一次起作用
        const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
        return (
            <div className='todo-footer'>
                <label>
                    <input
                        type='checkbox'
                        checked={todos.length === doneCount && todos.length > 0}
                        onChange={this.updateAll}
                    />
                </label>
                <span>
					<span>已完成{doneCount}</span> / 全部{todos.length}
				</span>
                <button onClick={this.deleteAllDone} className='btn btn-danger'>
                    清除已完成任务
                </button>
            </div>
        );
    }

    deleteAllDone = () => {
        this.props.deleteAllDoneTodo();
    };
    //全选按钮更改，要传一个当前选中的状态值
    updateAll = (e) => {
        this.props.updateAllTodo(e.target.checked);
    };
}
