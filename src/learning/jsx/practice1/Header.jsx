import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import './App.css';
// prop-types为默认安装模块，不需要再安装

export default class Header extends Component {
    //对接收的todo对类型和必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired,
        // 添加todos将报以错误
    };

    render() {
        return (
            <div className='todo-header'>
                <input type='text'
                       onKeyUp={this.handleKeyUp}
                       placeholder='请输入你的任务名称，按回车键确认' />
            </div>
        );
    }

    handleKeyUp = (e) => {
        // console.log(e.target.value, e.keyCode);
        const { keyCode, target } = e;
        if (keyCode !== 13) return; // 只能是按下回车键
        // 添加的名称不能为空
        //trim用来移除掉一个字串中的字头或字尾。
        if (target.value.trim() === '') {
            alert('输入不能为空');
            return;
        }
        //yarn install uuid/nanoid
        //uuid、nanoid是生成id的库
        const todoObj = { id: nanoid(), name: target.value, done: false };
        // 将todoObj传递给App组件中的addTodo函数
        this.props.addTodo(todoObj);
        // 清空输入
        target.value = '';
    };
}

