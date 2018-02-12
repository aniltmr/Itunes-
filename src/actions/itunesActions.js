import axios from 'axios';
import {GET_SEARCH_DATA, AUTH_TOKEN} from './types'

export function get_all_search_data(data){
    return{
        type: GET_SEARCH_DATA,
        data
    }
}

export function get_facebook_auth(payload){
    return{
        type: AUTH_TOKEN,
        payload
    }
}

export function getTrackName(search_term){
    return dispatch=>{
        return axios.post("https://itunes.apple.com/search?term="+search_term+"&limit=25").then(res=>{
            // console.log(res.data.results)
             dispatch(get_all_search_data(res.data.results))
        })
    }
}