import React from 'react';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import store from '../store/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator,} from '@react-navigation/stack';
import {ApplicationProvider, Icon, IconRegistry, Text,} from '@ui-kitten/components';
import Constants, {registerFn} from "../lib/commons";
import HomePage from "./index";
import {navigate, navigationRef} from "../services/rootNavigation";
import {appService} from "../services/appService";
import {cabinFont, primaryColor, secondaryColor} from "../lib/styles";
import {TouchableOpacity} from "react-native";

const Stack = createStackNavigator();

export default class App extends React.Component<any, any> {
    stateUncheck: any;
    private ActionTypes: any;
    constructor(props: any) {
        super(props);
        this.state = store.getState().store;
        this.stateUncheck = store.subscribe(() => {
            this.setState(store.getState().store);
        });
        registerFn(this.signedInRoutes, this);
        registerFn(this.unSignedInRoutes, this);
    }

    async componentDidMount() {
        await this.loadAppConfig();
        console.log('App Loaded');
        console.log('token', this.state.token);

    }
    componentWillUnmount() {
        this.stateUncheck();
    }

    async loadAppConfig() {
        let config = await appService.fetchAppConfig();
        console.log(config);

        if (config) {
            Constants.AppConfig = config;
            store.dispatch({
                type: this.ActionTypes.UPDATE_APP_CONFIG,
                payload: config
            })
        }
    }

    renderHeaderOptions(show: boolean = false, showCart: boolean = false) {
        return {
            headerShown: show,
            headerStyle: {
                backgroundColor: primaryColor
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontFamily: cabinFont.bold,
            },
            headerRight: () => showCart ? (
                <TouchableOpacity
                    style={{flexDirection: "row", marginRight: 10}}
                    onPress={() => navigate('cart')}>
                    <Icon name='shopping-cart' fill={secondaryColor} style={{height: 32, width: 32}}/>
                    <Text
                        style={{
                            fontFamily: cabinFont.bold,
                            color: 'white',
                            paddingLeft: 5
                        }}>{this.state.cart?.items.length}</Text>
                </TouchableOpacity>
            ) : <></>,
        }
    }

    productDetailScreen() {
        return <Stack.Screen
            options={({ route }) =>
                ({
                    ...this.renderHeaderOptions(true, true),
                    title: (route.params as any).title + ' ' + (route.params as any).subTitle,
                    headerTitleStyle:{ fontSize: 15 }
                })} name={'product'} component={HomePage}/>
    }



    signedInRoutes() {
        return (
            <>
                <Stack.Screen options={{...this.renderHeaderOptions()}} name={'index'} component={HomePage} />
            </>
        );
    }

    unSignedInRoutes() {
        return (
            <>
                <Stack.Screen options={{...this.renderHeaderOptions(true), title: 'Login' }} name={'login'} component={HomePage} />
            </>
        );
    }

    render() {
        return (
                <Provider store={store}>
                    <IconRegistry icons={EvaIconsPack}/>
                    <ApplicationProvider {...eva} theme={eva.light}>
                        <NavigationContainer ref={navigationRef}>
                            <Stack.Navigator
                                initialRouteName={'index'}
                                screenOptions={{
                                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                                    animationEnabled: true,
                                    gestureEnabled: true,
                                    gestureDirection: "horizontal"
                                }}>
                                {
                                    this.state.signed && this.state.signed() ? this.signedInRoutes() : this.unSignedInRoutes()
                                }
                            </Stack.Navigator>
                        </NavigationContainer>
                    </ApplicationProvider>
                </Provider>
        );
    }
}
