import React, { Component } from 'react';
import './index.css';

export default class List extends Component {
    render() {
        const {users,isFirst,isLoading,err} = this.props
        return (
            <div className='row'>
                {
                    isFirst ? <h2>输入关键字，随后点击搜索</h2> :
                        isLoading ? <h2>展示loading</h2> :
                            err ? <h2 style={{color:"red"}}>{err}</h2> :
                    this.props.users.map((userObj,index) => {
                        if(index <= 5) {
                            return (
                                <div key={userObj.id} className='card'>
                                    <a rel='noreferrer' href='https://github.com/reactjs' target='_blank'>
                                        <img src={userObj.avatar_url} style={{width: '100px'}} alt='avatar'/>
                                    </a>
                                    <p className='card-text'>{userObj.login}</p>
                                </div>
                            )
                        } else {
                            return false;
                        }
                    })
                }
            </div>
        )
    }
}
