import {StyleSheet, ViewStyle} from "react-native";
import {TransitionSpec} from "@react-navigation/stack/lib/typescript/src/types";

const sfFont : { regular: string, semiBold: string, bold: string } = {
    bold : 'san-francisco/SFProDisplay-Bold',
    regular : 'san-francisco/SFProDisplay-Regular',
    semiBold : 'san-francisco/SFProDisplay-Semibold'
}
const cbFont: { regular: string, semiBold: string, bold: string } = {
    bold : 'cabin/Cabin_700Bold',
    regular : 'cabin/Cabin_400Regular',
    semiBold : 'cabin/Cabin_600SemiBold'
}
const cabinFont: { regular: string, semiBold: string, bold: string } = {
    bold : sfFont.bold,
    regular : sfFont.regular,
    semiBold : sfFont.semiBold
}

const primaryColor: string = '#2D466F';
const primaryShade: string = '#D1D9E5';
const primaryShade2: string = '#7792BE';
const primaryBorder : string = '#7499D4';
const primaryTint : string = '#47628E';
const secondaryColor: string = '#CAA883';
const lighterShade: string = '#F1F1F1';
const greyShade: string = '#cccccc';
const currencySymbol: string = '\u20B9';
const shadow : any = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 7,
}
const globalStyle: { fab: ViewStyle, shadow: ViewStyle, cardStyle: ViewStyle, text: ViewStyle, modalButtons : ViewStyle }  = StyleSheet.create({
    fab : {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:70,
        position: 'absolute',
        bottom: 20,
        right: 20,
        height:70,
        backgroundColor: primaryColor,
        borderRadius:100,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.8,
        shadowRadius: 2.65,
        elevation: 5,
    },
    shadow : shadow,
    cardStyle : {
        borderWidth: 0,
        ...shadow
    },
    text : {
        fontFamily : cabinFont.semiBold,
        padding: 10,
        textAlign : 'center'
    },
    modalButtons : {
        padding: 5,
        paddingLeft: 0,
        paddingRight: 0,
        backgroundColor: primaryTint,
        borderWidth: 0.5,
        borderColor: primaryBorder,
        margin: 5,
        borderRadius: 5,
        width: 40,
        ...shadow
    },
})
const transitionConfig: TransitionSpec = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const modalStyle : ViewStyle = {
    backgroundColor: primaryColor,
    width: 300,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10
}

export {
    cabinFont,
    sfFont,
    cbFont,
    primaryColor,
    secondaryColor,
    primaryBorder,
    primaryTint,
    globalStyle,
    modalStyle,
    greyShade,
    primaryShade,
    primaryShade2,
    lighterShade,
    currencySymbol,
    transitionConfig
}
