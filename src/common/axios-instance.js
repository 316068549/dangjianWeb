/**
 * Created by Administrator on 2018/11/27.
 */
import axios from 'axios';
import qs from 'qs';
import {SERVER_HOST} from './../common/portConfig'
import router from './../router'
import { Message } from 'element-ui';


const instance = axios.create({
    baseURL: SERVER_HOST, // api的base_url
    timeout: 10000,               // 请求超时时间
    transformRequest: data => qs.stringify(data),
    headers: {
        'Authorization': ''
    }
});

instance.interceptors.request.use(
    config => {
        config.headers.Authorization = sessionStorage.getItem('Authorization');
        return config
    }, err => {
        return Promise.reject(err)
    });

//拦截器
instance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        // if (error.response) {
        //     switch (error.response.status) {
        //         case 401:
        //             // 返回 401 清除token信息并跳转到登录页面
        //             // confirm('过期')
        //             router.replace({path: '/login'})
        //             location.reload()
        //     }
        // }
        // this.$router.push('/administrator/login');


        Message({
            message: "该用户已在其他设备登录，请重新登录！",
            type: 'error',
        });
        router.replace({path: '/administrator/login'})
        sessionStorage.removeItem('Authorization');

        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    })

export default instance
