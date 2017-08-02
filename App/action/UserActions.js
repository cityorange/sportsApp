import Config from '../../config'
import Proxy from '../utils/Proxy'
import PreferenceStore from '../utils/PreferenceStore';



import {
    UPDATE_CERTIFICATE,
    UPDATE_PERSON_INFO,
    UPDATE_TRAINER_INFO,
    UPDATE_PERSON_INFO_AUXILIARY,
    UPDATE_USERTYPE,
    ACCESS_TOKEN_ACK,
    ON_USER_NAME_UPDATE,
    ON_MOBILE_PHONE_UPDATE,
    ON_SELF_LEVEL_UPDATE,
    ON_SPORT_LEVEL_UPDATE,
    ON_PER_NAME_UPDATE,
    ON_WECHAT_UPDATE,
    ON_PER_ID_CARD_UPDATE,
    ON_RELATIVE_PERSON_UPDATE,
    UPDATE_PORTRAIT
} from '../constants/UserConstants'

export let updateCertificate=(payload)=>{
    return {
        type:UPDATE_CERTIFICATE,
        payload:payload
    }
}

export let updateTrainerInfo=(payload)=>{
    return {
        type:UPDATE_TRAINER_INFO,
        payload:payload
    }
}

export let updatePersonInfo=(payload)=>{
    return {
        type:UPDATE_PERSON_INFO,
        payload:payload
    }
}

export let updatePersonInfoAuxiliary=(payload)=>{
    return {
        type:UPDATE_PERSON_INFO_AUXILIARY,
        payload:payload
    }
}

export let updateUserType=(usertype)=>{
    return {
        type:UPDATE_USERTYPE,
        payload:{
            usertype
        }
    }
}

let getAccessToken= (accessToken)=>{
    if(accessToken!==null)
        return {
            type: ACCESS_TOKEN_ACK,
            accessToken: accessToken,
            auth:true,
        };
    else
        return {
            type:ACCESS_TOKEN_ACK,
            accessToken:accessToken,
            auth:'failed'
        }
}

//自身水平更改
export let updateSelfLevel=(selfLevel)=>{
    return (dispatch,getState)=> {
        return new Promise((resolve, reject) => {
            var state=getState();
            var accessToken = state.user.accessToken;

            Proxy.postes({
                url: Config.server + '/svr/request',
                headers: {
                    'Authorization': "Bearer " + accessToken,
                    'Content-Type': 'application/json'
                },
                body: {
                    request: 'updateSelfLevel',
                    info:{
                        selfLevel
                    }
                }
            }).then((json)=>{
                resolve(json)

            }).catch((e)=>{
                alert(e);
                reject(e);
            })
        })
    }
}

//运动水平更改
export let updateSportLevel=(sportLevel)=>{
    return (dispatch,getState)=> {
        return new Promise((resolve, reject) => {
            var state=getState();
            var accessToken = state.user.accessToken;

            Proxy.postes({
                url: Config.server + '/svr/request',
                headers: {
                    'Authorization': "Bearer " + accessToken,
                    'Content-Type': 'application/json'
                },
                body: {
                    request: 'updateSportLevel',
                    info:{
                        sportLevel
                    }
                }
            }).then((json)=>{
                resolve(json)

            }).catch((e)=>{
                alert(e);
                reject(e);
            })
        })
    }
}

//用户名更改
export let updateUsername=(username)=>{
    return (dispatch,getState)=>{
        return new Promise((resolve, reject) => {
            var state=getState();
            var accessToken = state.user.accessToken;

            Proxy.postes({
                url: Config.server + '/svr/request',
                headers: {
                    'Authorization': "Bearer " + accessToken,
                    'Content-Type': 'application/json'
                },
                body: {
                    request: 'updateUsername',
                    info:{
                        username:username
                    }
                }
            }).then((json)=>{
                resolve(json)

            }).catch((e)=>{
                alert(e);
                reject(e);
            })

        })
    }
}

export let onMobilePhoneUpdate=(mobilePhone)=>{
    return (dispatch,getState)=>{

        dispatch({
            type:ON_MOBILE_PHONE_UPDATE,
            payload: {
                mobilePhone
            }
        })
    }
}

export let onUsernameUpdate=(username)=>{
    return (dispatch,getState)=>{

        dispatch({
            type:ON_USER_NAME_UPDATE,
                payload: {
                    username
                }
        })
    }
}

export let onSelfLevelUpdate=(selfLevel)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:ON_SELF_LEVEL_UPDATE,
            payload: {
                selfLevel
            }
        })
    }
}

export let onSportLevelUpdate=(sportLevel)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:ON_SPORT_LEVEL_UPDATE,
            payload: {
                sportLevel
            }
        })
    }
}

//手机号更改
export let updateMobilePhone=(mobilePhone)=>{
    return (dispatch,getState)=>{
        return new Promise((resolve, reject) => {
            var state=getState();
            var accessToken = state.user.accessToken;

            Proxy.postes({
                url: Config.server + '/svr/request',
                headers: {
                    'Authorization': "Bearer " + accessToken,
                    'Content-Type': 'application/json'
                },
                body: {
                    request: 'updateMobilePhone',
                    info:{
                        mobilePhone
                    }
                }
            }).then((json)=>{
                resolve(json)

            }).catch((e)=>{
                alert(e);
                reject(e);
            })
        })
    }
}

//手机验证
export let verifyMobilePhone=(mobilePhone)=>{
    return (dispatch,getState)=>{
        return new Promise((resolve, reject) => {

            Proxy.postes({
                url: Config.server + '/securityCode',
                headers: {
                    'Authorization': "Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW",
                    'Content-Type': 'application/json'
                },
                body: {
                    phoneNum:mobilePhone
                }
            }).then((json)=>{
                resolve(json)

            }).catch((e)=>{
                alert(e);
                reject(e);
            })

        })
    }
}

//真实姓名更改
export let updatePerName=(perName)=>{
    return (dispatch,getState)=>{
        return new Promise((resolve, reject) => {
            var state=getState();
            var accessToken = state.user.accessToken;

            Proxy.postes({
                url: Config.server + '/svr/request',
                headers: {
                    'Authorization': "Bearer " + accessToken,
                    'Content-Type': 'application/json'
                },
                body: {
                    request: 'updatePerName',
                    info:{
                        perName:perName
                    }
                }
            }).then((json)=>{
                resolve(json)

            }).catch((e)=>{
                alert(e);
                reject(e);
            })

        })
    }
}

//微信号更改
export let updateWeChat=(wechat)=>{
    return (dispatch,getState)=>{
        return new Promise((resolve, reject) => {
            var state=getState();
            var accessToken = state.user.accessToken;

            Proxy.postes({
                url: Config.server + '/svr/request',
                headers: {
                    'Authorization': "Bearer " + accessToken,
                    'Content-Type': 'application/json'
                },
                body: {
                    request: 'updateWeChat',
                    info:{
                        wechat:wechat
                    }
                }
            }).then((json)=>{
                resolve(json)

            }).catch((e)=>{
                alert(e);
                reject(e);
            })

        })
    }
}

//身份证证件号更改
export let updatePerIdCard=(perIdCard)=>{
    return (dispatch,getState)=>{
        return new Promise((resolve, reject) => {
            var state=getState();
            var accessToken = state.user.accessToken;

            Proxy.postes({
                url: Config.server + '/svr/request',
                headers: {
                    'Authorization': "Bearer " + accessToken,
                    'Content-Type': 'application/json'
                },
                body: {
                    request: 'updatePerIdCard',
                    info:{
                        perIdCard:perIdCard
                    }
                }
            }).then((json)=>{
                resolve(json)

            }).catch((e)=>{
                alert(e);
                reject(e);
            })

        })
    }
}

export let onPerNameUpdate=(perName)=>{
    return (dispatch,getState)=>{

        dispatch({
            type:ON_PER_NAME_UPDATE,
            payload: {
                perName
            }
        })
    }
}

export let onWeChatUpdate=(wechat)=>{
    return (dispatch,getState)=>{

        dispatch({
            type:ON_WECHAT_UPDATE,
            payload: {
                wechat
            }
        })
    }
}

export let onPerIdCardUpdate=(perIdCard)=>{
    return (dispatch,getState)=>{

        dispatch({
            type:ON_PER_ID_CARD_UPDATE,
            payload: {
                perIdCard
            }
        })
    }
}

//同步用户关联人
export let onRelativePersonsUpdate=(persons)=>{
    return (dispatch,getState)=>{

        dispatch({
            type:ON_RELATIVE_PERSON_UPDATE,
            payload: {
                persons
            }
        })
    }
}

//新增用户关联人
export let addRelativePerson=(payload)=> {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            var state=getState();
            var accessToken = state.user.accessToken;

            Proxy.postes({
                url: Config.server + '/svr/request',
                headers: {
                    'Authorization': "Bearer " + accessToken,
                    'Content-Type': 'application/json'
                },
                body: {
                    request: 'addRelativePerson',
                    info:payload
                }
            }).then((json)=>{
                if(json.re==1){
                    resolve(json)
                }else{
                    if(json.re==2){
                        resolve(json)
                    }
                }

            }).catch((e)=>{
                alert(e);
                reject(e);
            })
        })
    }
}

//用户注册
export let registerUser=(payload)=>{
    return (dispatch,getState)=>{
        return new Promise((resolve, reject) => {
            var state=getState();
            var {userType,username,password,genderCode,mobilePhone,nickName}=payload;

            Proxy.postes({
                url: Config.server + '/register',
                headers: {
                    'Authorization': "Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW",
                    'Content-Type': 'application/json'
                },
                body: {
                    username: username,
                    password:password,
                    mobilePhone:mobilePhone,
                    genderCode:genderCode,
                    nickName:nickName,
                    userType:userType
                }
            }).then((json)=>{
                resolve(json)

            }).catch((e)=>{
                alert(e);
                reject(e);
            })


        });
    }
}

//用户登录
// export let doLogin=function(username,password){
//
//     return dispatch=> {
//
//         return new Promise((resolve, reject) => {
//             var versionName = '1';
//
//             var personId=null;
//
//             Proxy.postes({
//                 url: Config.server + '/func/auth/webLogin',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: {
//                     loginName: username,
//                     password: password,
//                     loginType:1,
//                     parameter:{appVersion:versionName}
//                 }
//             }).then((json)=> {
//                 //accessToken = json.access_token;
//                 personId = json.personId;
//
//                 //TODO:make a dispatch
//                 dispatch(updateCertificate({username: username, password: password}));
//
//
//                 PreferenceStore.put('username', username);
//                 PreferenceStore.put('password', password);
//
//                 return Proxy.postes({
//                     url:Config.server + '/func/node/getUserTypeByPersonId',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: {
//                         personId:personId,
//                     }
//                 });
//
//             }).then((json)=> {
//
//                 if (json.re == 1) {
//                     dispatch(updateUserType(json.data))
//                 }
//                 var userType = json.data
//                 if (parseInt(userType) == 0)//用户
//                 {
//                     return {re: 1}
//                 } else {
//                     //教练,获取教练信息
//                     return Proxy.postes({
//                         url: Config.server + '/svr/request',
//                         headers: {
//                             'Authorization': "Bearer " + accessToken,
//                             'Content-Type': 'application/json'
//                         },
//                         body: {
//                             request: 'fetchBadmintonTrainerInfo'
//                         }
//                     });
//                 }
//             }).then((json)=>{
//
//                 if(json.re==1&&json.data)
//                 {
//                     dispatch(updateTrainerInfo({data:json.data}))
//                 }
//
//
//
//                 return Proxy.postes({
//                     url: Config.server + '/svr/request',
//                     headers: {
//                         'Authorization': "Bearer " + accessToken,
//                         'Content-Type': 'application/json'
//                     },
//                     body: {
//                         request: 'getPersonInfoByPersonId'
//                     }
//                 });
//             }).then((json) => {
//
//                 if (json.re == 1)
//                     dispatch(updatePersonInfo({data: json.data}));
//
//
//                 return Proxy.postes({
//                     url: Config.server + '/svr/request',
//                     headers: {
//                         'Authorization': "Bearer " + accessToken,
//                         'Content-Type': 'application/json'
//                     },
//                     body: {
//                         request: 'getPersonInfoAuxiliaryByPersonId'
//                     }
//                 })
//
//             }).then((json)=>{
//                 if(json.re==1)
//                     dispatch(updatePersonInfoAuxiliary({data: json.data}));
//                 dispatch(getAccessToken(accessToken));
//                 resolve(json)
//             }).catch((err)=> {
//                 dispatch(getAccessToken(null));
//                 reject(err)
//             });
//         });
//     }
// }

//用户登录（node）
export let doLogin=function(username,password){

    return dispatch=> {

        return new Promise((resolve, reject) => {

            var accessToken=null;
            Proxy.postes({
                url: Config.server + '/login',
                headers: {
                    'Authorization': "Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW",
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: "grant_type=password&password=" + password + "&username=" + username
            }).then((json)=> {
                accessToken = json.access_token;

                //TODO:make a dispatch
                dispatch(updateCertificate({username: username, password: password}));


                PreferenceStore.put('username', username);
                PreferenceStore.put('password', password);


                return Proxy.postes({
                    url: Config.server + '/svr/request',
                    headers: {
                        'Authorization': "Bearer " + accessToken,
                        'Content-Type': 'application/json'
                    },
                    body: {
                        request: 'getUserTypeByPersonId'
                    }
                });

            }).then((json)=> {

                if (json.re == 1) {
                    dispatch(updateUserType(json.data))
                }
                var userType = json.data
                if (parseInt(userType) == 0)//用户
                {
                    return {re: 1}
                } else {
                    //教练,获取教练信息
                    return Proxy.postes({
                        url: Config.server + '/svr/request',
                        headers: {
                            'Authorization': "Bearer " + accessToken,
                            'Content-Type': 'application/json'
                        },
                        body: {
                            request: 'fetchBadmintonTrainerInfo'
                        }
                    });
                }
            }).then((json)=>{

                if(json.re==1&&json.data)
                {
                    dispatch(updateTrainerInfo({data:json.data}))
                }



                return Proxy.postes({
                    url: Config.server + '/svr/request',
                    headers: {
                        'Authorization': "Bearer " + accessToken,
                        'Content-Type': 'application/json'
                    },
                    body: {
                        request: 'getPersonInfoByPersonId'
                    }
                });
            }).then((json) => {

                if (json.re == 1)
                    dispatch(updatePersonInfo({data: json.data}));


                return Proxy.postes({
                    url: Config.server + '/svr/request',
                    headers: {
                        'Authorization': "Bearer " + accessToken,
                        'Content-Type': 'application/json'
                    },
                    body: {
                        request: 'getPersonInfoAuxiliaryByPersonId'
                    }
                })

            }).then((json)=>{
                if(json.re==1)
                    dispatch(updatePersonInfoAuxiliary({data: json.data}));
                dispatch(getAccessToken(accessToken));
                resolve(json)
            }).catch((err)=> {
                dispatch(getAccessToken(null));
                reject(err)
            });
        });
    }
}

//测试
export let doGetType=function(){

    return dispatch=> {

        return new Promise((resolve, reject) => {

            var personId=38;

            Proxy.postes({
                url:Config.server+'/func/commodity/getQueryDataListByInputStringMobile',
                headers: {
                    //'Authorization': "Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW",
                    //'Content-Type': 'application/x-www-form-urlencoded'
                    'Content-Type': 'application/json'
                },
                //body: "codigo=" + codeNum + "&merchantId=" + merchantId
                body: {
                    codigo:codeNum,
                    merchantId:merchantId
                }
            }).then((json)=>{
                if(json.re==1){
                    alert('xxx');
                }
            })
        });
    }
}

//上传身份证
export let uploadPersonIdCard=(path,personId)=> {
    //var personId = personId.toString();
    return (dispatch,getState)=>{
        return new Promise((resolve, reject) => {
            var data = new FormData();
            data.append('file', {uri: path, name: 'portrait.jpg', type: 'multipart/form-data'});
            //限定为jpg后缀

            Proxy.post({
                url:Config.server+'/uploadPersonIdCard?personId='+personId.toString(),
                headers: {
                    'Authorization': "Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW",
                    'Content-Type':'multipart/form-data',
                },
                body: data,
            },(json)=> {
               resolve(json)

            }, (err) =>{
                reject(err)
            });


        })
    }
}

export let updatePortrait=(payload)=>{
    return {
        type:UPDATE_PORTRAIT,
        payload:payload
    }
}

//测试下载头像
export let downloadPortrait=()=>{
    return (dispatch,getState)=> {
        return new Promise((resolve, reject) => {
            var state=getState();

            var accessToken=state.user.accessToken;
            var portrait='';

            //检查头像是否存在
            Proxy.post({

                url:Config.server+'/svr/request',
                headers: {
                    'Authorization': "Bearer " + accessToken,
                    'Content-Type': 'application/json'
                },
                body: {
                    request:'checkPortrait',
                }
            },(json)=> {
                for(var field in json) {
                    console.log('field=' + field + '\r\n' + json[field]);
                }
                if(json.re==1)
                {
                    var portrait=json.data;

                    var url =  Config.server+ '/svr/request?request=downloadPortrait&filePath='+portrait;
                    var dirs = RNFetchBlob.fs.dirs

                    RNFetchBlob.fs.exists(dirs.DocumentDir + '/portrait.png')
                        .then((exist) => {
                            console.log(`file ${exist ? '' : 'not'} exists`);
                            if(exist==true){
                                RNFetchBlob.fs.unlink(dirs.DocumentDir + '/portrait.png').then(() => {
                                    RNFetchBlob
                                        .config({
                                            fileCache : true,
                                            appendExt : 'png',
                                            path : dirs.DocumentDir + '/portrait.png'
                                        })
                                        .fetch('POST',url, {
                                                Authorization : 'Bearer '+accessToken,
                                                "Content-Type":"application/json"
                                            },

                                        ).then((res)=>{
                                        //alert('portrait filePath='+res.path());
                                        resolve({re:1,data:'file://' + res.path()});
                                    });
                                })

                            }else{

                                RNFetchBlob
                                    .config({
                                        fileCache : true,
                                        appendExt : 'png',
                                        path : dirs.DocumentDir + '/portrait.png'
                                    })
                                    .fetch('POST',url, {
                                            Authorization : 'Bearer '+accessToken,
                                            "Content-Type":"application/json"
                                        },
                                    ).then((res)=>{
                                    //alert('portrait filePath='+res.path());
                                    resolve({re:1,data:'file://' + res.path()});
                                });
                            }


                        })
                        .catch(() => {console.log('判断文件是否存在出错');})


                }
                else{
                    resolve({re:2,data:''});
                }

            }, (err) =>{
                Alert.alert(
                    'error',
                    err
                );
            });

        });
    }
}

//上传头像
export let uploadPortrait=(portrait,personId)=>{
    return (dispatch,getState)=> {
        return new Promise((resolve, reject) => {
            var state=getState();
            var accessToken=state.user.accessToken;

            // Create the form data object
            var data = new FormData();
            data.append('file', {uri: portrait, name: 'portrait.jpg', type: 'multipart/form-data'});

            //限定为jpg后缀
            Proxy.post({
                url:Config.server+'/svr/request?request=uploadBadmintonPortrait&suffix=jpg&personId='+personId.toString(),
                headers: {
                    'Authorization': "Bearer " + accessToken,
                    'Content-Type':'multipart/form-data',
                },
                body: data,
            },(json)=> {
                resolve(json)

            }, (err) =>{
                reject(err)
            });
        });
    }
}

//微信统一下单
export let wechatPay=(pay,eventId)=>{
    return (dispatch,getState)=>{
        return new Promise((resolve, reject) => {
            var state=getState();
            var accessToken = state.user.accessToken;

            Proxy.postes({
                url: Config.server + '/svr/request',
                headers: {
                    'Authorization': "Bearer " + accessToken,
                    'Content-Type': 'application/json'
                },
                body: {
                    request: 'addPaymentInfo',
                    info:{
                        pay:pay,
                        eventId:eventId
                    }
                }
            }).then((json)=>{
                if(json.re==1){

                    var total_fee = pay.payment*100;
                    var nonce_str = Math.random().toString(36).substr(2, 15);
                    var out_trade_no = json.data;

                    if(pay.payType=='微信'){
                        Proxy.postes({
                            url: Config.server + '/svr/request',
                            headers: {
                                'Authorization': "Bearer " + accessToken,
                                'Content-Type': 'application/json'
                            },
                            body: {
                                request: 'wechatPay',
                                info:{
                                    app_id:'wx9068ac0e88c09e7a',//应用ID
                                    mch_id:'1485755962',//商户号
                                    nonce_str:nonce_str,//随机字符串
                                    notify_url:'http://192.168.1.111:3011/wechatPayBack',
                                    out_trade_no:out_trade_no,
                                    total_fee:total_fee,
                                    attach:'山东体育热科技有限公司',
                                    body:'群活动费用',

                                }

                            }
                        }).then((json)=>{
                            resolve(json)

                        }).catch((e)=>{
                            alert(e);
                            reject(e);
                        })

                    }
                    else{
                        resolve(json);
                    }
                }
                else{
                    console.log('添加支付订单信息不完整');

                }


            }).catch((e)=>{
                alert(e);
                reject(e);
            })


        })
    }
}