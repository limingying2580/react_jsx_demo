import './index.css'
import React from 'react'
import Search from './learning/jsx/practice3/Search';
import List from './learning/jsx/practice3/List';
import axios from 'axios'

/*axios.get('/xxx')
    .then((res) => {
        // ... do something
    })
    .catch((err) => {
        // ... do someting
    })*/
class App3 extends React.Component {
    //初始化状态,users为数组
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }
    render() {
        return (
            <div className='container'>
                <Search updateAppState={this.updateAppState} />
                <List {...this.state} />
            </div>
        );
    }
}
export default App3

