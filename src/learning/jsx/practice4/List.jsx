import React, { Component } from 'react';
import '../practice3/index.css';

import PubSub from 'pubsub-js';

export default class List extends Component {
    state = {
        users: [],
        isFirst: true, // 是否第一次打开
        isLoading: false, // 是否显示isLoading
        err: '', // 错误提示内容
    };

    //做初始化的事情，开启时间定时器、发送网络请求、订阅消息
    //第一个参数是消息名，第二个是参数值，用下划线占位
    componentDidMount() {
        this.psEvent = PubSub.subscribe('pubsubEvent', (_, data) => {
            this.setState(data);
        });
    }

    //组件将要被卸载的时候会被调用
    componentWillUnmount() {
        PubSub.unsubscribe(this.psEvent);
    }

    render() {
        // this.props转成this.state
        const { isFirst, isLoading, err, users } = this.state;
        return (
            <div className='row'>
                {isFirst ? (
                    <h2>欢迎使用，输入关键字，随后点击搜索</h2>
                ) : isLoading ? (
                    <h2>Loading...</h2>
                ) : err ? (
                    <h2 style={{ color: 'red' }}>{err.toString()}</h2>
                ) : (
                    users.map((userObj) => (
                        <div className='card' key={userObj.id}>
                            <a rel='noreferrer' href={userObj.html_url} target='_blank'>
                                <img src={userObj.avatar_url} style={{ width: '100px' }} alt='avatar' />
                            </a>
                            <p className='card-text'>{userObj.login}</p>
                        </div>
                    ))
                )}
            </div>
        );
    }
}
