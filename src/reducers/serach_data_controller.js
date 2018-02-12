import {GET_SEARCH_DATA, AUTH_TOKEN} from '../actions/types';
import isEmpty from 'lodash/isEmpty';


export default (state= {search_data:"", auth:""}, action={})=>{
    switch(action.type){
        
        case GET_SEARCH_DATA : 
                            return Object.assign({}, state, {
                            search_data: action.data,
                            });

        case AUTH_TOKEN : 
                            return Object.assign({}, state, {
                            isAuthenticated: true,
                            auth: action.payload,
                            });                    
        default: return state;
    }
}