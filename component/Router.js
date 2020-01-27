import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Soal from './Soal/Soal';
import Main from './Main/Main';
import M1 from './Materi/M1';
import M2 from './Materi/M2';
import M3 from './Materi/M3';
import M4 from './Materi/M4';
import Q1 from './Quiz/Q1';
// import First from './Router/DrawerNav';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
  Soal: {
    screen: Soal,
  },
  M1: {
    screen: M1
  },
  M2: {
    screen: M2
  },
  M3: {
    screen: M3
  },
  M4: {
    screen: M4
  },
  Q1: {
    screen: Q1
  },


  Main: {
    screen: Main,
    navigationOptions: {
      header: null,
    }
  },
},
  {
      initialRouteName: 'Login'
  },
  
);

export default createAppContainer(AppNavigator);