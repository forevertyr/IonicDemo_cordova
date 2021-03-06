/*
 * *********************************************************
 *   author   colin
 *   company  telchina
 *   email    wanglin2046@126.com
 *   date     18-7-31 下午12:53
 * ********************************************************
 */

import {ZReply} from "./ZReply";
import {HttpHeaders} from "@angular/common/http";
import {HttpResult} from "./http-result";

/**
 * Http 请求参数类
 */
export interface ZHttpOption<T> {
    url?: string;                //请求地址
    type?: 'get' | 'post';
    body?: any;                 //请求参数
    header?: HttpHeaders;       //请求头
    isHideLoading?: boolean;    //是否显示进度条，此属性在multiRequest中失效
    loadingMsg?: string;        //进度条信息，，此属性在multiRequest中失效
    isHideToastError?: boolean; //是否显示错误toast
    timeOut?: number;            //请求超时时间
    zreply?: ZReply;            //返回值错误处理对象
    result?: HttpResult<T>;    //返回处理回调对象
}

