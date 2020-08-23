import AsyncStorage from "@react-native-community/async-storage";
import moment from "moment/moment";

export interface ICacheItem{
    expiry: number,
    item: any
}

const cacheManager: {
    save(key: string, data: any, expiry: number): any,
    get_with_fallback<T>(key: string, fallback : () => Promise<T | undefined>) : Promise<T | undefined>,
    get<T>(key: string) : Promise<T | undefined>,
    remove(key: string): any,
    clear(): any
} = {
    save : async(key: string, data: any, expiry: number) => {
        await AsyncStorage.removeItem(key);
        expiry = Math.ceil(moment().add(expiry, 'minutes').toDate().getTime()/1000);
        let item: ICacheItem = {
            expiry : expiry,
            item : data
        }
        await AsyncStorage.setItem('cache_' + key, JSON.stringify(item));
    },
    get_with_fallback : async <T>(key: string, fallback : () => Promise<T>): Promise<T> =>{
        let v = await AsyncStorage.getItem('cache_' + key).catch(() => undefined)
        if(v){
            let item = JSON.parse(v) as ICacheItem;
            if(item.expiry > (moment().toDate().getTime()/1000))
                return item.item as T;
            else
                v = undefined;
        }

        if(!v && fallback)
            return await fallback();
        else
            return {} as T;
    },
    get : async <T>(key: string): Promise<T | undefined> =>{
        let v = await AsyncStorage.getItem('cache_' + key)
        if(v){
            let item = JSON.parse(v) as ICacheItem;
            if(item.expiry > (moment().toDate().getTime()/1000))
                return item.item as T;
        }
        return undefined;
    },
    remove: async (key: string) => await AsyncStorage.removeItem('cache_' + key),
    clear: async () => {
        let keys = await AsyncStorage.getAllKeys();
        for (const key of keys.filter(m => m.indexOf('cache_') > -1)) {
            await AsyncStorage.removeItem(key);
        }
    }
}

export default cacheManager;
