import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    //textos e títulos

    textTitle:{
        textAlign:'center',
        paddingTop: 12,
        color: '#fff',
    },

    textDesc:{

        textAlign: 'justify',
        width: '60%',
        marginLeft: 80,
        paddingTop: 12,
        color:'#fff'
    },

    textSecDesc:{

        textAlign: 'justify',
        width: '60%',
        marginLeft: 80,
        paddingTop: 15
    },

    textBtn:{

        textAlign:'center'
    },

    textAutors:{

        textAlign:'center',
        paddingTop: 15,
        paddingBottom: 15
    },

    textTitleSec:{

        textAlign:'center',
        paddingTop: 30
    },


    //views

    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#f4f4f4',
        alignItems: 'center'
    },

    viewFirst:{

        width:'100%',
        height: 300,
        backgroundColor: '#0ff'
    },

    viewSec:{

        width:'100%',
        height: 300,
        backgroundColor: '#fff'
    },

    
    //imagens

    imgBg:{

        width: '100%',
        height: 350
    },

    atomLogo:{

        height: 80,
        width:80,
        padding:0,
        marginLeft: 170,
        marginTop:15
    },
    
    imgAutors:{

        height: 90,
        width: 90,
        borderRadius: 100,
    },


    //botões

    btnConsult:{

        padding: 15,
        backgroundColor: '#ff69b4',
        width: 150,
        marginLeft: 130,
        marginTop: 20   
    },
});
  
export default styles;  