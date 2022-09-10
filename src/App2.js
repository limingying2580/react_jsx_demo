import './index.css'
import React from 'react'
import axios from 'axios'

/*axios.get('/xxx')
    .then((res) => {
        // ... do something
    })
    .catch((err) => {
        // ... do someting
    })*/
class App2 extends React.Component {
    getStudentData = () => {
        // axios.get('http://localhost:3000/api1/student') 会转发到api1的代理请求
        axios.get('/student.txt').then(
            response => {console.log("成功，",response.data);},
            error => {console.log("失败",error)}
        )
    }
    // addStudentData = () => {
    //     // axios.get('http://localhost:3000/api1/student') 会转发到api1的代理请求
    //     axios.post('/student.txt',{
    //         "id": "4",
    //         "name": "赵六",
    //         "age": 25
    //     }).then(
    //         response => {console.log("成功，",response.data);},
    //         error => {console.log("失败",error)}
    //     )
    // }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
                {/*<button onClick={this.addStudentData}>点我增加学生数据</button>*/}
            </div>
        )
    }
}
export default App2
