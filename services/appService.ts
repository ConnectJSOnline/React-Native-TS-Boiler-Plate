import getEnvVars from './environment';
import {IProduct} from "../models/product";
import {IConfig} from "../models/config";
import {IOrder, IPriceModel, Payment} from "../models/order";
import {IError, Itoken} from "../models/identity";
import store from "../store/store";
import {ActionTypes, IUser} from "../models/stateModel";
import {updateState} from "../lib/commons";
import {OrderItem} from "../models/cart-item";
import {IMessage} from "../models/alerts";

const { apiUrl, apiKey } = getEnvVars() ?? { apiUrl: '', apiKey: '' };
enum method{
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}
class AppService {
    private static requestConfig(): any {
        return {
            method: 'get',
            baseURL: apiUrl,
            headers : {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                apiKey : apiKey,
                token : store.getState().store.token ?? ''
            }
        }
    }

    async Execute<T>(method: method, url: string, body: any = undefined, _default : T) : Promise<T>{
        let request = AppService.requestConfig();
        request.method = method;
        request.baseURL += url;
        if(body)
            request.body = JSON.stringify(body);

        return await fetch(request.baseURL as string, {
            headers : request.headers,
            method : request.method,
            body : body ? request.body : undefined
        })
            .then(res => res.json())
            .then(res => res as T)
            .catch(err => {
                console.log(err);
                return _default
            })
    }

    async handleException(response: any) {
        console.log('api-exception', response);
    }

    async fetchAppConfig(exception: any = undefined): Promise<IConfig> {
        return await this.Execute<IConfig>(method.GET, '/api/rigava/config', null, {})
    }


}

export const appService: AppService = new AppService();
