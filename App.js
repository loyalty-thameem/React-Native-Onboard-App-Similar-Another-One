import React,{useState,useEffect} from 'react';
import{StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import AsyncStorage from '@react-native-community/async-storage';
 const AppStack = createStackNavigator();
 
 const App =()=>{
   const [isFirstLaunch,setIsFirstLaunch] = React.useState(null);
   useEffect(()=>{
     AsyncStorage.getItem('alreadyLauched').then(value =>{
       if(value === null){
         AsyncStorage.setItem('alreadyLauched','true');
         setIsFirstLaunch(true);
       }
       else{
         setIsFirstLaunch(false);
       }
     });
   },[]);

   if(isFirstLaunch === null){
     return null;
   }
   else if( isFirstLaunch === true){
     return(
          <NavigationContainer>
               <AppStack.Navigator 
                  headerMode='none'
                  >
                <AppStack.Screen name='Onboarding' component={OnboardingScreen} />
                <AppStack.Screen name='Login' component={LoginScreen} />
      </AppStack.Navigator>
      </NavigationContainer>
     );
   }
   else{
     return <LoginScreen />        
   }
//    return(
//            <NavigationContainer>
//                <AppStack.Navigator 
//                   headerMode='none'
//                   >
//                 <AppStack.Screen name='onboarding' component={OnboardingScreen} />
//                 <AppStack.Screen name='Login' component={LoginScreen} />
//       </AppStack.Navigator>
//       </NavigationContainer>
// )
 }
 export default App
// const style=styles.StyleSheet({
//   container:{
//     flex:1,
//     alignItems:'center',
//     justifyContent:'center'
//   },
// })
