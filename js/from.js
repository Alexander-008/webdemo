let verifyCode = new GVerify("v_container");
document.getElementById("appointment_code").onblur = function(){
    let res =verifyCode.validate(document.getElementById("appointment_code").value);
    console.log(res);
    let veri=document.querySelector("#verification");
    if(document.getElementById("appointment_code").value=="")
    {
        veri.style.display="block";
        veri.innerHTML="*验证码不能为空*";
        veri.style.color="red";
        return false;
    }
    else if(res===false){
        veri.style.display="block";
        veri.innerHTML="验证码错误";
        veri.style.color="red";
        return false;
    }
    veri.innerHTML="✔";
    veri.style.color="green";
    return true;
}

function validateName(){
    let name = document.getElementById("userName").value;
    let msg=document.getElementById("nameMsg");
    if(name==""){
        msg.style.display="block";
        msg.innerHTML="*用户名不能为空*";
        msg.style.color="red";
        return false;
    }else if(name.length<6){
        msg.innerHTML="*用户名长度不合法*";
        msg.style.color="red";
        return false;
    }
    msg.innerHTML="✔";
    msg.style.color="green";
    return true;
}

//公司号码
function validatePhone(){
    let phone= document.getElementById("appointment_tel");
    let msg=document.getElementById("phoneMsg");
    let regex = /^\d{11}$/;
    if(phone.value==""){
        msg.style.display="block";
        msg.innerHTML="*电话不能为空*";
        msg.style.color="red";
        return false;
    }
    if(!regex.test(phone.value)){
        msg.innerHTML="*电话不合法*";
        msg.style.color="red";
        return false;
    }
    msg.innerHTML="✔";
    msg.style.color="green";
    return true;
}

//微信
function  validateWeixin(){
    let name = document.getElementById("appointment_wechat");
    let msg=document.getElementById("weixinMsg");
    if(name.value==""){
        msg.style.display="block";
        msg.innerHTML="*微信不能为空*";
        msg.style.color="red";
        return false;
    }else if(name.value.length<5){
        msg.innerHTML="*微信号不规范*";
        msg.style.color="red";
        return false;
    }
    msg.innerHTML="✔";
    msg.style.color="green";
    return true;
}

//地点
function validateAddress(){
    let address=document.querySelector("#appointment_address");
    let msg=document.querySelector("#addressMsg");
    if(address.value==""){
        msg.style.display="block"
        msg.innerHTML="*地址不能为空*";
        msg.style.color="red";
        return false;
    }
    else if(address.value.length<9){
        msg.style.display="block"
        msg.innerHTML="*地址的长度不够*";
        msg.style.color="red";
        return false;
    }
    msg.innerHTML="✔";
    msg.style.color="green";
    return true;
}
//判断时间
function  validateTime(){
    let tim=document.querySelector("#appointment_time");
    let msg=document.querySelector("#timeMsg");
    let currentDate=new Date();
    if(tim.value==""){
        msg.style.display="block"
        msg.innerHTML="*预约时间不能为空*";
        msg.style.color="red";
        return false;
    }
    //判断输入的值是否大于当前时间
    else if(new Date(tim.value)<currentDate){
        msg.style.display="block"
        msg.innerHTML="*时间过期了*";
        msg.style.color="red";
        return false;
    }
    else if(tim.value.slice(tim.value.indexOf("-")+1,tim.value.lastIndexOf("-"))<=0||tim.value.slice(tim.value.lastIndexOf("-")+1)<=0||tim.value.slice(0,tim.value.indexOf("-"))<=0){
        msg.style.display="block"
        msg.innerHTML="*时间不能为0*";
        msg.style.color="red";
        return false;
    }
    msg.innerHTML="✔";
    msg.style.color="green";
    return true;
}
//禁止刷新
function func()
{
    return false;
}