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
        marginLeft: 15,
        marginTop:30,
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
        marginBottom: 20,
        borderRadius: 10,
        width: '13%',
        marginLeft: 170
    },


    //flatlist

    list:{
        marginTop:20,
        width:'80%'
    },

    itemList:{
        padding:24,
        marginLeft: 30,
        backgroundColor:'#FFF',
        borderRadius:7,
        marginBottom:10
    },

    //imagens

    bgList:{

        width: '115%',
        height: '101%'
    }
});
  
export default styles;  