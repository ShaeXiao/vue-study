import axios from "axios";
// import {
//     response
// } from "express";

// data:{
//     method:'',
//     url:'',
//     data:{}
// }
console.log(process.env.NODE_ENV)


let instance = axios.create({
    timeout:10000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    baseURL:process.env.NODE_ENV == 'development' ? '/':''
})


instance.interceptors.request.use(
    config => {
        console.log(config)
        return config
    },
    error => {
        return Promise.error(error);
    }
)

instance.interceptors.response.use(
    response => {
        console.log(response,'响应拦截器')
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }

    }
)

function request(data) {
    //请求配置项
    let options = {

    }
    options = Object.assign(options, data)
    return new Promise((resolve, reject)=>{
        instance(options).then(res => {
            if(res.status === 200){
                resolve(res.data)
            }else{
                reject(res)
            }
        })
    })
}

// class MyAxios {

// }

export default request