/**
 * Created by youli on 2017/9/18.
 */
import Config from '../../config';
import Proxy from '../utils/Proxy'
import {
    Platform
} from 'react-native';
import JPush from 'react-native-jpush'
// var RNFS = require('react-native-fs');
// import RNFetchBlob from 'react-native-fetch-blob'
import {
    NOTIFICATION_RECVED,
    MAKE_MESSAGE_POP,
    ON_MESSAGE_CLOSE,
    UPDATE_NOTIFICATIONS
} from '../constants/JpushConstants';




export let updateNotifications=(payload)=>{
    return (dispatch,getState)=> {
        dispatch({
            type:UPDATE_NOTIFICATIONS,
            payload:payload
        });
    }
}


//拉取用户目前的消息
export let fetchNotifications=()=>{
    return (dispatch,getState)=> {
        return new Promise((resolve, reject) => {
            var state=getState();
            var accessToken=state.user.accessToken;

            Proxy.postes({
                url: Config.server + '/svr/request',
                headers: {
                    'Authorization': "Bearer " + accessToken,
                    'Content-Type': 'application/json'
                },
                body: {
                    request: 'fetchNotifications',
                    info:{
                        side:'customer'
                    }
                }
            }).then((json)=>{
                resolve(json);
            }).catch((e)=>{
                reject(e);
            })


        });
    }
}


//下载生成的订单播报文件
export let downloadGeneratedTTS=(payload)=>{

    return (dispatch,getState)=> {
        return new Promise((resolve, reject) => {

            var state=getState();
            var accessToken=state.user.accessToken;
            var ttsToken=state.user.ttsToken;

            var {content}=payload;

            var url =  Config.server+ '/svr/request';
            let dirs = RNFetchBlob.fs.dirs
            var  downloadDest = `${RNFS.DocumentDirectoryPath}/tempTTS.mp3`;

            RNFetchBlob
                .config({
                    // add this option that makes response data to be stored as a file,
                    // this is much more performant.
                    fileCache : true,
                    appendExt : 'mp3',
                    path : dirs.DocumentDir + '/tempTTS.mp3'
                })
                .fetch('POST',url, {
                        Authorization : 'Bearer '+accessToken,
                        "Content-Type":"application/json"
                    },
                    JSON.stringify({
                        request:'generateTTSSpeech',
                        text:content,
                        ttsToken:ttsToken
                    })
                )
                // when response status code is 200
                .then((res) => {
                    // the conversion is done in native code
                    resolve({re:1,data:res.path()});
                })
                // Status code is not 200
                .catch((errorMessage, statusCode) => {
                    alert(errorMessage);
                    reject(errorMessage);
                })

        });
    }
}

export let updateRegistrationId=function (payload) {

    return new Promise((resolve, reject) => {
        if(Platform.OS=='ios'||Platform.OS=='android')
        {
            JPush.getRegistrationID().then(function (res) {
                if(res&&res!='')
                {
                    var {accessToken} =payload;
                    var registrationId=res;
                    console.log('jPush获得registrationId='+registrationId);
                    Proxy.postes({
                        url: Config.server + '/svr/request',
                        headers: {
                            'Authorization': "Bearer " + accessToken,
                            'Content-Type': 'application/json'
                        },
                        body: {
                            request: 'activatePersonOnline',
                            info:{
                                registrationId:registrationId
                            }
                        }
                    }).then(function (json) {

                        if (json.re == 1) {
                        }
                        resolve(json);

                    }).catch(function (err) {
                        reject(err)
                        alert(err);
                    })

                }else{
                    resolve({re:2,data:'registrationId无法获得'});
                }
            });

        }else{
            resolve({re:1,data:null});
        }

    })

}

//审车单体推送
export let sendCustomMessage=(payload)=>{

    return (dispatch,getState)=> {
        return new Promise((resolve, reject) => {

            var state=getState();
            var accessToken=state.user.accessToken;
            var {order,serviceName,category,isBatch,servicePersonIds}=payload;

            var info=null;
            //侯选范围推送
            if(isBatch==true)
            {
                info={
                    orderId: order.orderId,
                    orderNum:order.orderNum,
                    serviceItems: null,
                    servicePersonIds: servicePersonIds,
                    serviceName: serviceName,
                    type: 'to-servicePerson'
                };
            }else{
                info={
                    order: order,
                    orderId:order.orderId,
                    servicePersonId: order.servicePersonId,
                    serviceName: serviceName,
                    category:category,
                    type: 'to-servicePerson',
                    subType:'customer_appoint'
                };
            }

            Proxy.postes({
                url: Config.server + '/svr/request',
                headers: {
                    'Authorization': "Bearer " + accessToken,
                    'Content-Type': 'application/json'
                },
                body: {
                    request: 'sendCustomMessage',
                    info: info
                }
            }).then((json)=>{

                resolve(json);
            }).catch((e)=>{
                reject(e);
            });

        });
    }
}

export  let createNotification=(payload,type)=>{

    return (dispatch,getState)=>{
        return new Promise((resolve, reject) => {


            var state=getState();
            var accessToken=state.user.accessToken;

            var {orderId,content,date}=payload;

            Proxy.postes({
                url: Config.server + '/svr/request',
                headers: {
                    'Authorization': "Bearer " + accessToken,
                    'Content-Type': 'application/json'
                },
                body: {
                    request: 'createNotification',
                    info:{
                        ownerId:orderId,
                        content:content,
                        notyTime:date,
                        recv:'customer',
                        subType:null,
                        type:type,
                    }
                }
            }).then(function (json) {
                if(json.re==1)
                {
                    resolve({re:1});
                }else{
                    reject(json.data);
                }
            })

        });
    }
}


export let notificationRecved=(payload)=>{
    return {
        type:NOTIFICATION_RECVED,
        payload:payload
    }
}

let makeMessagePop=(payload)=>{
    return {
        type:MAKE_MESSAGE_POP,
        payload:payload
    }
}

export let alertWithType=(payload)=>{
    return (dispatch,getState)=> {
        dispatch(makeMessagePop(payload));
    }
}

//消息关闭
let onMessageClose=()=>{
    return {
        type:ON_MESSAGE_CLOSE
    }
}

export let closeMessage=()=>{
    return (dispatch,getState)=> {

        dispatch(onMessageClose());
    }
}

