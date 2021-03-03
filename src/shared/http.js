import React from 'react';
import fetch from 'isomorphic-fetch';
import Cookies from 'js-cookie';

const url="http://localhost:8082/users/";
export function fetchPosts(endpoint){
	return fetch(endpoint);
}
export function fetchPost(id){
	return fetch("http://localhost:8082/users/${id}",generateFetchConfig("GET"))
}
function  generateFetchConfig(method, body=null){
	const casedMethod=method.toUpperCase();
	const token =Cookies.get("letter-token");
	const config={
		method:casedMethod,
		headder:{
			"Conent-Type":"Application/json",
			"Letter-Token":token
		},
	}
	if(["PUT","POST"].include(casedMethod)){
		config.body=JSON.stringify(body);
		}
		return config;
}
