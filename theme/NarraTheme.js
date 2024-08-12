import { createTheme } from '@rneui/themed';

// palette is make it easy to change colours
const themePalette = {
    primary: '#5F8671',
    primaryDarker: '#333333',
    primaryLighter: '#ffffff',
    
}

export const NarraTheme = createTheme({    
    components: {
        Button:{
            buttonStyle: {
                raised: true,
                borderRadius: 5,
                height: 50,
                width: '90%',
                backgroundColor: themePalette.primary,
                marginTop:10,
                alignSelf:'center',
                
            },
            titleStyle: {
                
                color: themePalette.primaryLighter,
            },
            type:'clear', 
      
        },
        Text: {
            h1Style: {
                color: themePalette.primaryDarker,
                fontWeight: 'bold',                
                fontWeight:'normal',
                fontFamily:'Merriweather_700Bold',               
            },
            h2Style: {
                color: themePalette.primaryDarker,
                fontSize: 26,
                margin: 10,
                fontWeight:'normal',
                fontFamily:'Merriweather_400Regular', 
            },
            h3Style: {
                color: themePalette.primaryDarker,
                fontSize: 20,
                margin: 5,
                fontWeight:'normal',
                fontFamily:'Merriweather_400Regular', 
            },
            h4Style: {
                color: themePalette.primaryDarker,
                fontSize: 16,
                margin: 5,
                fontWeight:'normal',
                fontFamily:'Merriweather_400Regular', 
            },
            style: {
                fontSize: 12,
                margin: 5,
                fontFamily:'Merriweather_400Regular',
            }
        },
        Avatar: {
            avatarStyle: {
               alignItems:'center',
               justifyContent:'center',
            },
            size: 100
        },
        CheckBox: {
            //Clear the background default color
            containerStyle: { 
                backgroundColor: 'transparent',
                borderWidth: 0,
                marginTop:0,
                marginBottom:0,  
            },
            size: 20,
            type:'clear',
        },

        Overlay:{
            overlayStyle:{
                borderRadius:15,
                width:'90%',
                height:250,
                justifyContent:'center',
                alignItems:'center',
            }
        },
        Input:{
            inputContainerStyle:{
                width:'95%',
                paddingHorizontal:15,
                backgroundColor: "#fff",
                borderRadius:5,
                elevation: 5,
                shadowColor: '#333',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 4,
                borderBottomWidth:0,
            },
        
        },

        Badge:{
            containerStyle:{ 
                position: 'absolute', 
                bottom:7, 
                right: 7
            },
        },
    },


});