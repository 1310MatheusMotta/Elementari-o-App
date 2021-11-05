import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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

    textTitle:{
        textAlign:'center',
        paddingTop: 12,
        color: '#fff'
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

    viewSec:{

        width:'100%',
        height: 300,
        backgroundColor: '#fff'
    },

    btnConsult:{

        padding: 15,
        backgroundColor: '#ff69b4',
        width: 150,
        marginLeft: 135,
        marginTop: 20   
    },

    textBtn:{

        textAlign:'center'
    },

    textAutors:{

        textAlign:'center',
        paddingTop: 15
    },

    textTitleSec:{

        textAlign:'center',
        paddingTop: 30
    },

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
        borderRadius: 100
    }
});
  
export default styles;  