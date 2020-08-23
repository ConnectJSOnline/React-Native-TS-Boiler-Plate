import React, {Component} from "react";
import {Text, View, ViewStyle} from "react-native";
import {cabinFont} from "./styles";
import {Spinner} from "@ui-kitten/components";

export default class Loader extends Component<{
    message?: string,
    style?: ViewStyle,
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'giant' | string,
    status?: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'control' | string
}, any>{
    render() {
        return <View style={[{alignItems: "center", justifyContent: "center"}, this.props.style]}>
            <View style={{}}>
                <Spinner status={this.props.status} size={this.props.size} />
            </View>
            <Text style={{textAlign: "center", fontFamily: cabinFont.bold, fontSize: 15, marginTop: 20}}>{this.props.message}</Text>
        </View>
    }
}
