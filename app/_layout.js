// Layout.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Login from './login';
import CreateProgram from './CreateProgram';
import Reservation from './Reservation';
import ReservationManagement from './ReservationManagement';
import Comments from './Comments';
import RankingPage from './RankingPage';

import UserProfile from './UserProfile';
import AcademicProgram from './AcademicProgram';
import Logout from './Logout';
import PersonalInfo from './PersonalInfo';
import ExerciseSuggestion from './ExerciseSuggestion';
import ChangePassword from './ChangePassword';



const Stack = createStackNavigator();

const Layout = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateProgram" component={CreateProgram} />
      <Stack.Screen name="Reservation" component={Reservation} />
      <Stack.Screen name="ReservationManagement" component={ReservationManagement} />
      <Stack.Screen name="Comments" component={Comments} />
      <Stack.Screen name="RankingPage" component={RankingPage} />   
      <Stack.Screen name="UserProfile" component={UserProfile} /> 

      <Stack.Screen name="AcademicProgram" component={AcademicProgram} /> 
      <Stack.Screen name="Logout" component={Logout} /> 
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} /> 
      <Stack.Screen name="ExerciseSuggestion" component={ExerciseSuggestion} /> 
      <Stack.Screen name="ChangePassword" component={ChangePassword} /> 


      {/* Diğer sayfaları ekleyebilirsiniz */}
    </Stack.Navigator>
  );
};

export default Layout;
