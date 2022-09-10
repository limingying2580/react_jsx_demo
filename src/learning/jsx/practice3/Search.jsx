import React, { Component } from 'react';
import axios from 'axios'

export default class Search extends Component {
    search = () =>{
        // const {value} = this.keyWordElement //常规解构赋值
        const {keyWordElement: {value:keyWord}} = this //连续解构赋值写法 并进行重命名
        console.log(this.keyWordElement.value)
        this.props.updateAppState({isFirst: false, isLoading: true})
        // console.log(keyWord)
        //这种情况下没有跨域，因为github的后端通过cors解决了跨域问题
     /*   axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            (res) => {
                console.log(res.data.items);
                // this.props.saveUsers(res.data.items);
                this.props.updateAppState({isLoading: false,users:res.data.items})
            }).catch((err) => {
            console.log(err)
            this.props.updateAppState({isLoading: false,err:err.message})
        })*/

        //使用fetch发送请求的方法，要学习promise
        //promise中.then的链式调用
        fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                console.log("连接服务器成功");
                //回调成功的promise返回值，作为下一个.then的值
                return response.json()
            },
            //统一处理错误，这部分可以不写
            error => {
                //返回undefined，返回的是非promise值
                console.log("连接服务器失败",error);
                //中断promise链，返回一个初始化的promise值
                return new Promise( ()=>{})
            }).then(
                response => {console.log("获取数据成功",response);},
                error => {console.log("获取数据失败",error)}
        )
    }
    //另一种请求方法 使用率不高，老版本的浏览器不行
    /*
    async search =() => {
        try{
            const response = await fetch(``)
            const data = await response.json()
        }
        catch(error) {
            console.log("请求出错",error)
        }
    }
    */
    render() {
        return (
            <section className='jumbotron' >
                <h3 className='jumbotron-heading'>Search Github Users</h3>
                <div style={{"marginTop":"20px"}}>
                    <input ref = {e => this.keyWordElement = e} type='text' placeholder='enter the name you search' />
                    &nbsp;<button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}

