import React from "react";
import {Div} from "../lib/controls";
import {View} from "react-native";

export default class Header extends React.Component<any, any> {
    stateUnSub: any

    constructor(props: any) {
        super(props);

    }

    componentDidMount() {

    }

    componentWillUnmount() {
        this.stateUnSub();
    }

    goBack() {
        this.props.navigation.pop();
    }

    go2Cart() {
        this.props.navigation.navigate('cart');
    }

    render() {
        return <View style={[{flex: 0.08, flexDirection: "row", backgroundColor: 'white', alignItems: "center"}, this.props.style]}>

        </View>
    }
}
