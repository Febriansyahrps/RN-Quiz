import { StackNavigator } from 'react-navigation';
import Login from './../Login/Login';
import Register from './../Register/Register';
import Home from './../Home/Home';
import Profile from './../Profile/Profile';
import Soal from './../Soal/Soal';

  export const LoginScreen = StackNavigator(
    {
      Login: {
        screen: Login,
        navigationOptions: {
          tabBarVisible: false
        }
      },
    },
    { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
  );

  export const RegisterScreen = StackNavigator(
    {
      Register: {
        screen: Register,
        navigationOptions: {
          tabBarVisible: false
        }
      },
    },
    { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
  );
  
  export const HomeScreen = StackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          tabBarVisible: true
        }
      },
    },
    { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
  );
  
  export const ProfileScreen = StackNavigator(
    {
      Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarVisible: true
        }
      },
    },
    { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
  );

  export const SoalScreen = StackNavigator(
    {
      Soal: {
        screen: Soal,
        navigationOptions: {
          tabBarVisible: true
        }
      },
    },
    { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
  );
  


  