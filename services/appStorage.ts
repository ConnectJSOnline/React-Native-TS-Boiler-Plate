import AsyncStorage from "@react-native-community/async-storage";

export const KEYS = {
    AUTH: '_auth_ident',
    CART: (userid?: string) : string => '_cart' + (userid ? `_${userid}` : ''),
    CONFIG: '_config',
    USER: '_user_prof',
    SUBS_ORDERS : 'subscription_orders',
    ORDERS : 'orders'
}

const storageService: {
    save(key: string, data: any): any,
    get<T>(key: string, _default: T) : Promise<T>,
    remove(key: string): any,
    clear(): any
} = {
    save : async(key: string, data: any) => {
        await AsyncStorage.removeItem(key);
        await AsyncStorage.setItem(key, JSON.stringify(data));
    },
    get : async <T>(key: string, _default: T): Promise<T> =>{
        let v = await AsyncStorage.getItem(key) ?? JSON.stringify(_default);
        return JSON.parse(v) as T
    },
    remove: async (key: string) => await AsyncStorage.removeItem(key),
    clear: async () => await AsyncStorage.clear()
}

export default storageService;
