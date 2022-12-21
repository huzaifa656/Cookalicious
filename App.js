import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigation from './navigation/StackNavigation'
const App = () => {
  return (
    <StackNavigation />
  )
}

export default App




























// import { StatusBar } from 'expo-status-bar';
// 
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import Home from './src/Screens/Home';
// import Fav from './src/Screens/Fav';
// import Store from './src/Screens/Store';
// import Profile from'./src/Screens/Profile'
// import Icon from '@expo/vector-icons/Ionicons';
// import { Ionicons } from "@expo/vector-icons";
// import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
// import React from 'react';
// import LoginScreen from './src/Screens/LoginScreen';
// import Signup from './src/Screens/Signup';
// import { createStackNavigator } from '@react-navigation/stack';

//  const Tab = createBottomTabNavigator();
// import StackNavigation from './navigation/StackNavigation';
//  function App() {
//   return(
//     <Text></Text>
//   )

// }
// export default App;


/*

<NavigationContainer >
       <Tab.Navigator labeled={false} barStyle={{backgroundColor:'black'}}
      activeColor='white'>
      <Tab.Screen  name="Home" component={Home}
      
          options={{
            tabBarIcon:({ color,size})=>(
              <MaterialCommunityIcons
              name="home" color={color}
              size={26}
              />
            )
          }}
      />
      <Tab.Screen name="Favourite" component={Fav}
      options={{
        tabBarIcon:({ color,size})=>(
          <MaterialCommunityIcons
          name='heart' color={color}
          size={26}
          />
        )
      }}
      
      />
      <Tab.Screen name="Store" component={Store} 
      options={{
        tabBarIcon:({ color,size})=>(
          <MaterialCommunityIcons
          name='store' color={color}
          size={26}
          />
        )
      }}
      />
      <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarIcon:({ color,size})=>(
          <MaterialCommunityIcons
          name='account-circle' color={color}
          size={26}
          />
        )
      }}
      />
    </Tab.Navigator> 
     </NavigationContainer>
  )


*/













// const TabNavigator= createBottomTabNavigator({
//   Home:{
//     screen:Home
 
//   },
//   Fav:{ 
//     screen:Fav

//   }

// })
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
