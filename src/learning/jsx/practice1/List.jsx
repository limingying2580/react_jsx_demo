import React, { Component } from 'react';
import Item from './Item';
import './App.css';

export default class List extends Component {
    render() {
        const { todos, updateTodo, deleteTodo } = this.props;
        return (
            <ul className='todo-main'>
                {todos.map((todo) => {
                    // return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done} />;
                    // 利用展开式参数传递进行批量属性传递
                    //子给父数据，父给子一个函数
                    //updateTodo、deleteTodo不用加this，因为这是从app接收到的，不是自己的
                    return <Item key={todo.id}
                                 {...todo}
                                 updateTodo={updateTodo}
                                 deleteTodo={deleteTodo} />;
                })}
            </ul>
        );
    }
}
