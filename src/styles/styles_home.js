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
        paddingTop: 20,
        color: '#fff'
    },

    textDesc:{

        textAlign: 'justify',
        width: '60%',
        marginLeft: 80,
        paddingTop: 15,
        color:'#fff'
    },

    textSecDesc:{

        textAlign: 'justify',
        width: '60%',
        marginLeft: 80,
        paddingTop: 20
    },

    viewSec:{

        width:'100%',
        height: 245,
        backgroundColor: '#fff'
    },

    btnConsult:{

        padding: 15,
        backgroundColor: '#ff69b4',
        width: 150,
        marginLeft: 135,
        marginTop: 30   
    },

    textBtn:{

        textAlign:'center'
    },

    textAutors:{

        textAlign:'center',
        paddingTop: 30
    },

    textTitleSec:{

        textAlign:'center',
        paddingTop: 15
    },

    imgBg:{

        width: '100%',
        height: 400
    },

    atomLogo:{

        height: 80,
        width:80,
        padding:0,
        marginLeft: 170,
        marginTop:30
    }
});
  
export default styles;  