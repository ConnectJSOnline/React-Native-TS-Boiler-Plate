import React from "react";
import {Image, View} from "react-native";

export default class Logo extends React.Component<any, any>{
    render() {
        return(
            <View>
                <Image source={require('../assets/logo-bg-black.png')} style={{height : 150, resizeMode: 'contain'}} />
            </View>
        )
    }
}
