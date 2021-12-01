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
        paddingTop: 30,
        paddingBottom: 15
    },

    textTitleSec:{

        textAlign:'center',
        paddingTop: 30
    },

    descTonin:{

        marginLeft: 75
    },

    descDanilo:{

        marginLeft: 240

    },

    descLuis:{

        marginLeft: 45,

    },

    descMatheus:{

        marginLeft: 240,
        paddingBottom: 50
        
    },

    descDudu:{

        marginLeft: 141,
        paddingBottom: 50
    },


    //views

    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#f4f4f4',
        alignItems: 'center'
    },

    viewSec:{

        width:'100%',
        height: 330,
        backgroundColor: '#fff'
    },

    divAutors:{

        paddingBottom: 100
    },

    
    //imagens

    imgBg:{

        width: '100%',
        height: 400
    },

    atomLogo:{

        height: 80,
        width:80,
        padding:0,
        marginLeft: 155,
        marginTop:15
    },
    
    imgTonin:{

        height: 90,
        width: 90,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 70,
        marginTop: 30
    },

    imgDanilo:{

        height: 90,
        width: 90,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 240,
        marginTop: -110
    },

    imgLuis:{

        height: 90,
        width: 90,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 70,
        marginTop: 50
    },

    imgMatheus:{

        height: 90,
        width: 90,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 240,
        marginTop: -110
    },

    imgDudu:{

        height: 90,
        width: 90,
        borderRadius: 100,
        marginLeft: 150,

    },


    //botões

    btnConsult:{

        padding: 15,
        backgroundColor: '#ff69b4',
        width: 150,
        marginLeft: 120,
        marginTop: 20   
    },
});
  
export default styles;  