import store from "../store/store";

export default class Constants {
    public static AppConfig: any;
}

export const app_test_mode = (): boolean =>
    (Constants.AppConfig.testUsers ?? []).indexOf(store.getState().store.UserProf?.phone ?? '53cb225a-6c08-43e3-9826-3e54f78cd762') > -1;

export const registerFn = (Fn: any, Context: any) => {
    Context[Fn] = Fn.bind(Context);
}

export const updateState = (type: any, payload: any) => {
    store.dispatch({type : type, payload: payload});
}
