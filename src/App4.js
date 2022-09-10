import React, { Component } from 'react';
import Search from './learning/jsx/practice4/Search';
import List from './learning/jsx/practice4/List';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <Search />
                <List />
            </div>
        );
    }
}
export default App;
