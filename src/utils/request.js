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
        // console.log(config,'请求拦截器')
        return config
    },
    error => {
        return Promise.error(error);
    }
)

instance.interceptors.response.use(
    response => {
        // console.log(response,'响应拦截器')
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    }
)

function request(data) {
    console.log(data)
    //处理form-data
    if(data.isFormdata) {
        data.data = Formdata(data.data);
        data.headers = {
            'Content-Type': 'multipart/form-data;charset=UTF-8'
        }
    }
    //请求配置项
    let options = {}
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

function Formdata(data){
    let formdata = new FormData();
    const keys = Object.keys(data);
    for (let prop of keys){
        formdata.append(prop,data[prop])
    }
    return formdata
}

// class MyAxios {

// }

export default request