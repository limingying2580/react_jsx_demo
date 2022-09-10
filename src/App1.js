import React, { Component } from 'react';
import Header from './learning/jsx/practice1/Header';
import Footer from './learning/jsx/practice1/Footer';
import List from './learning/jsx/practice1/List';
import './learning/jsx/practice1/App.css';

// 统一修改成类组件
class App1 extends Component {
    //状态在哪，操作状态的方法就在哪
    // 初始化状态
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: false },
            { id: '003', name: '敲代码', done: true },
        ],
    };

    render() {
        // 解构赋值
        const { todos } = this.state;
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer
                        deleteAllDoneTodo={this.deleteAllDoneTodo}
                        todos={todos}
                        updateAllTodo={this.updateAllTodo}
                    />
                </div>
            </div>
        );
    }

    updateTodo = (id, done) => {
        /*
        // 禁止使用非setState的形式去修改state中的数据
        // 如下代码就是典型的违反上述原则案例
        console.log(id, done);
        // todos 从this.state进行解构赋值以后，不再是state的todos
        const { todos } = this.state;
        // 修改todos也不是修改state里的todos
        todos.map((todoObj) => {
            if (todoObj.id === id) todoObj.done = done;
            return todoObj;
        });
        this.setState({ todos });
        祖孙关系，一层一层传，item给list，list给app
        */
        const todos = this.state.todos;
        //拿到todo对象
        //如果id匹配上了，返回对象和done状态，否则返回对象
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done };
            return todoObj;
        });
        console.log(todos);
        console.log(newTodos);
        this.setState({ todos: newTodos });
    };

    // addTodo用于添加一个todo，接收的参数是一个todo对象
    addTodo = (todoObj) => {
        const { todos } = this.state; //获取原todos
        // 追加一个todo
        const newTodos = [todoObj, ...todos];
        // 更新状态
        this.setState({
            todos: newTodos,
        });
    };

    deleteTodo = (id) => {
        // 获取原来的todos
        const { todos } = this.state;
        // 删除指定id的对象，filter数组中的过滤方法
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id;
        });
        // 更新状态
        this.setState({ todos: newTodos });
    };

    //过滤数据，清除已完成
    deleteAllDoneTodo = () => {
        const newTodos = this.state.todos.filter((todoObj) => !todoObj.done);
        this.setState({
            todos: newTodos,
        });
    };

    updateAllTodo = (done) => {
        const newTodos = this.state.todos.map((todoObj) => {
            return { ...todoObj, done };
        });
        this.setState({
            todos: newTodos,
        });
    };
}

export default App1;

