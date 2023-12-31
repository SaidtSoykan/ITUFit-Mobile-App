// Layout.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Pages
import Home from './Home';
import Login from './Login';
import Reservation from './Reservation';
import ReservationManagement from './ReservationManagement';
import Comments from './Comments';
import RankingPage from './RankingPage';
import UserProfile from './UserProfile';
import styles from './styles';

const loginName = "Login";
const homeName = "Home";
const reservationName = "Reservation";
const reservationManagementName = "ReservationManagement";
const commentName = "Comments";
const rankingName = "RankingPage";
const profileName = "UserProfile";

const Tab = createBottomTabNavigator();

const Layout = ({ navigation }) => {
  return (
        <Tab.Navigator
          initialRouteName={loginName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? 'home' : 'home';
              } else if (rn === reservationName) {
                iconName = focused ? 'calendar' : 'calendar';
              } else if (rn === reservationManagementName) {
                iconName = focused ? 'calendar' : 'calendar';
              } else if (rn === commentName) {
                iconName = focused ? 'chatbox' : 'chatbox';
              } else if (rn === rankingName) {
                iconName = focused ? 'trophy' : 'trophy';
              } else if (rn === profileName) {
                iconName = focused ? 'person' : 'person';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70 }
          }}>
          <Tab.Screen name={loginName} component={Login} />
          <Tab.Screen name={homeName} component={Home} />
          <Tab.Screen name={reservationName} component={Reservation} />
          <Tab.Screen name={reservationManagementName} component={ReservationManagement} />
          <Tab.Screen name={commentName} component={Comments} />
          <Tab.Screen name={rankingName} component={RankingPage} />
          <Tab.Screen name={profileName} component={UserProfile} />

        </Tab.Navigator>
    //<Stack.Navigator initialRouteName="Login">
    //  <Stack.Screen name="Login" component={Login} />
    //  <Stack.Screen name="Home" component={Home} />
    //  <Stack.Screen name="CreateProgram" component={CreateProgram} />
    //  <Stack.Screen name="Reservation" component={Reservation} />
    //  <Stack.Screen name="ReservationManagement" component={ReservationManagement} />
    //  <Stack.Screen name="Comments" component={Comments} />
    //  <Stack.Screen name="RankingPage" component={RankingPage} />   
    //  <Stack.Screen name="UserProfile" component={UserProfile} /> 
//
    //  <Stack.Screen name="AcademicProgram" component={AcademicProgram} /> 
    //  <Stack.Screen name="Logout" component={Logout} /> 
    //  <Stack.Screen name="PersonalInfo" component={PersonalInfo} /> 
    //  <Stack.Screen name="ExerciseSuggestion" component={ExerciseSuggestion} /> 
    //  <Stack.Screen name="ChangePassword" component={ChangePassword} /> 
//
//
    //  {/* Diğer sayfaları ekleyebilirsiniz */}
    //</Stack.Navigator>

  );
};

export default Layout;
