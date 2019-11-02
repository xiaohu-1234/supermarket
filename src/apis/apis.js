import axios from 'axios';

export const IP = 'http://localhost:3000';
const ax = axios.create({
    baseURL:IP
})
//获取token
export function getToken(token){
    return ax.get('/gettoken',{params:{token}})
}

//登录
export function login(acc,pwd){
    return ax.post('/login',{acc,pwd})
}
//添加用户
export function addUser(acc,pwd,userGroup){
    return ax.post('/adduser',{acc,pwd,userGroup})
}
//用户列表
export function userList(){
    return ax.get('/userlist')
}
//删除用户
export function delUser(id){
    return ax.get(`/deluser?id=${id}`)
}
//修改密码
export function modifyPwd(id,pwd,oldpwd){
    return ax.post('/modifypwd',{id,pwd,oldpwd})
}

//添加商品
export function addpic(obj){
    return ax.get('/addpic',{params:obj})
}

//商品列表
export function picList(page,row,category,keywords){
    return ax.get('/piclist',{params:{page,row,category,keywords}})
}

//删除商品
export function delPic(id){
    return ax.get('/delpic',{params:{id}})
}

//修改商品
export function updatePic(obj){
    return ax.get('/updatepic',{params:obj})
}