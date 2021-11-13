import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    //textos e títulos
    
    textProd:{
        marginTop:20,
        color: '#8b0000',
    },

    txtInp:{

        width:'80%',
        backgroundColor:'#fff',
        marginTop:20,
        height: 35,
        borderRadius: 10,
        padding: 10

    },

    //views

    container: {
        flex: 1,
        backgroundColor: '#0B699E',
        alignItems: 'center',
        justifyContent: 'center',
      },


    //botões

    button:{

        fontSize:20
    },

    btnBack:{

        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10
    },


    //flatlist

    list:{
        marginTop:32,
        width:'80%'
    },

    itemList:{
        padding:24,
        backgroundColor:'#FFF',
        borderRadius:7,
        marginBottom:16
    },
});
  
export default styles;  