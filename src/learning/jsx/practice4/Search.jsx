import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';

export default class Search extends Component {
    keyword = React.createRef();

    search = () => {
        const {
            current: { value: keyword },
        } = this.keyword; // 解构+赋值别名

        // 发送请求前通知List更新状态
        PubSub.publish('pubsubEvent', { isFirst: false, isLoading: true });

        // 关键字可以尝试用`atguigu`
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            (res) => {
                // 请求成功以后通知List更新状态
                PubSub.publish('pubsubEvent', { isLoading: false, users: res.data.items });
            },
            (err) => {
                // 请求失败以后通知List更新状态
                PubSub.publish('pubsubEvent', { isLoading: false, err: err });
            }
        );
    };

    render() {
        return (
            <section className='jumbotron'>
                <h3 className='jumbotron-heading'>搜索github用户</h3>
                <div>
                    <input ref={this.keyword} type='text' placeholder='请输入搜索的用户名称' />
                    &nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        );
    }
}
