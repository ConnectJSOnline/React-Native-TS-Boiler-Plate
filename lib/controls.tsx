import {Icon, ListItem, Modal, Text} from "@ui-kitten/components";
import {cabinFont, currencySymbol, globalStyle, greyShade, modalStyle} from "./styles";
import React, {ReactNode} from "react";
import {
    Alert,
    Dimensions,
    StyleProp,
    StyleSheet,
    TextStyle,
    TouchableNativeFeedback,
    View,
    ViewStyle
} from "react-native";
import {navigate} from "../services/rootNavigation";

export const listItem = (key: string, value: number) => {
    return (<ListItem appearance={'default'}
                      style={{
                          flex : 1,
                          alignItems : "stretch",
                          flexDirection : "row",
                          justifyContent : "center"
                      }}>
        <Text style={{borderWidth: 0, flex: 0.5, fontFamily: cabinFont.bold}}>{key}</Text>
        <Text style={{borderWidth : 0, flex: 0.5, textAlign: "right", fontFamily: cabinFont.bold}}>{currencySymbol} {value}</Text>
    </ListItem>);
}

export const home_box_item = (
    icon: string,
    caption: string,
    link: string,
    badgeLabel: string | number | null,
    style: {box?: ViewStyle, icon?: ViewStyle, text?: ViewStyle} = {}
    ) => {
    return (
        <TouchableNativeFeedback onPress={() => navigate(link)}>
            <View style={[styles.boxes, style.box]}>
                <Icon style={[styles.boxIcon, style.icon]} name={icon} fill={'white'}/>
                {
                    !!badgeLabel ? <Text style={styles.badge}>{badgeLabel}</Text> : <></>
                }
                <Text style={[styles.boxText, style.text]}>{caption}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export const ModalBox = (props: {
        style? : ViewStyle,
        children?: ReactNode,
        visible?: boolean,
        width?: number,
        borderRadius?: number
    }) => {
    return <Modal
        backdropStyle={{backgroundColor: 'white', opacity: 0.5}}
        style={[
            modalStyle,
            props.width ? { width : Dimensions.get("screen").width + props.width } : {},
            (props.borderRadius ?? 0) >= 0 ? { borderRadius : props.borderRadius } : {},
            props.style
        ]} visible={props.visible}>
        { props.children }
    </Modal>
}

export const Label = (props: {
    style? : TextStyle,
    bgColor? : string,
    fgColor?: string,
    children?: string | number | undefined,
    align?: 'auto' | 'left' | 'right' | 'center' | 'justify',
    flex?: number,
    fontSize?: number;
}, state: any) => {
    return (
        <Text style={[{
            fontFamily : cabinFont.semiBold,
            backgroundColor: props.bgColor ?? 'transparent',
            color: props.fgColor ?? 'black' ,
            textAlign : props.align ?? "left",
            fontSize : props.fontSize ?? 14,
            flex : props.flex
        }, props.style]}>
            {props.children}
        </Text>);
}

export const Touch = (props : {
    onTouch? : (props?: any) => void,
    children?: ReactNode
}, state: any) => {
    return <TouchableNativeFeedback onPress={props.onTouch}>
        {props.children}
    </TouchableNativeFeedback>
}

export const Div = (props: {
    visible?: boolean,
    children?: ReactNode,
    style?: ViewStyle,
    flexDirection?: 'row' | 'column',
    flex?: number
}, state: any) => {
    let visible = props.visible ?? true;
    return visible ? <View style={[
        { flexDirection : props.flexDirection ?? 'column', flex : props.flex },
        props.style]}>{props.children}</View> : <></>
}

export const Symbol = (props : {
    name : string,
    fill? : string,
    width?: number,
    height?: number,
    style?: ViewStyle
}, state: any) => {
    return <Icon name={props.name} fill={props.fill ?? 'black'} style={[{
        width : props.width ?? 22,
        height : props.height ?? 22,
    } , props.style]}  />
}

export const NoData = (props : {message : string, style?: ViewStyle }) => {
    return <View style={[{
        alignSelf: "center",
        marginTop: 100,
        padding : 25
    }, props.style]}>
        <Text style={{
            fontFamily: cabinFont.bold,
            backgroundColor: greyShade,
            color : 'black',
            fontSize: 15,
            padding: 10,
            paddingLeft : 20,
            paddingRight: 20,
            borderRadius : 25,
            textAlign: "center",
            lineHeight: 25
        }}>{props.message}</Text>
    </View>
}

const styles = StyleSheet.create({
    boxes: {
        backgroundColor: '#47628E',
        borderWidth: 0.5,
        borderColor: '#7499D4',
        height : 75,
        borderRadius: 5,
        overflow : "hidden",
        margin: 7,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        ...globalStyle.shadow
    },
    boxIcon: {
        width: 25,
        height: 25
    },
    boxText: {
        fontFamily: cabinFont.regular,
        color: 'white',
        marginTop: 5
    },
    badge: {
        position: "absolute",
        color: '#ccc',
        fontSize: 14,
        paddingTop: 2,
        paddingBottom: 2,
        top: 0,
        right: 0,
        width: 30,
        textAlign: "center",
        fontFamily: cabinFont.bold,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 10,
        borderColor: '#7499D4',
        backgroundColor: 'maroon',
        borderWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
    }
})


export const msgbox = (title: string, msg: string) => Alert.alert(title, msg);

