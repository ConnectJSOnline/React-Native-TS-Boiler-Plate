import {IProduct} from "../models/product";
import {combineReducers, createStore} from "redux";
import {env} from "../services/environment";
import storageService, {KEYS} from "../services/appStorage";
import {ActionTypes, IActions, IState, IUser} from "../models/stateModel";
import {ICartItem} from "../models/cart-item";

let initial_state: IState = {
    products : [],
    cart : {
        items : []
    },
    userMetadata : {
        orders : 0,
        subscriptions : 0
    },
    signed(): boolean {
        return !!this.token && !!this.UserProf && !!this.UserProf.phone;
    }
}

storageService.get<IProduct[]>(KEYS.AUTH, []).then((res: any) => {

}).catch();


if(!env.production){

}


const store = (state = initial_state, action: any) => {
    let index = -1;
    let cartItem : ICartItem;
    switch (action.type) {
        case ActionTypes.UPDATE_APP_CONFIG:
            initial_state.AppConfig = {...action.payload}
            return state;
        default :
            return state;
    }
}

const reducers = combineReducers({store});
export default createStore(reducers);
