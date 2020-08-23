import React from "react";
import {Text, View} from "react-native";
import {cabinFont} from "../lib/styles";


export default class Error extends React.Component<any, any>{
 render() {
     return (
         <View>
             <Text style={{
                 color: 'white',
                 borderRadius : 20,
                 fontSize : 15,
                 marginTop : 50,
                 backgroundColor: 'red',
                 padding : 15,
                 alignSelf: "center",
                 justifyContent : "center",
                 fontFamily: cabinFont.bold
             }}>Unable to Load Products. Server/Network Error</Text>
         </View>
     )
 }
}
