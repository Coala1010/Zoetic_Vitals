import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesomeIco from 'react-native-vector-icons/FontAwesome';
import MaterialIconsIco from 'react-native-vector-icons/MaterialIcons';
import FontistoIco from 'react-native-vector-icons/Fontisto';

// Home
import HomeFirst from './src/screens/Home/HomeFirst';
// Vitals
import VitalsHome from './src/screens/Vitals/VitalsHome';
import MeasureScreen from './src/screens/Vitals/Measure';
// Doctor
import DoctorFirst from './src/screens/Doctor/DoctorFirst';

// Styles
import { brandColors, textStyles } from './src/styles/baseStyles';

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName='HomeFirst' >
      <HomeStack.Screen
        name="HomeFirst"
        component={HomeFirst}
        options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

const VitalStack = createStackNavigator();
const VitalStackScreen = () => {
  return (
    <VitalStack.Navigator
      initialRouteName='VitalsHome'
      screenOptions={{ gestureEnabled: false }}>
      <VitalStack.Screen
        name="VitalsHome"
        component={VitalsHome}
        options={{ headerShown: false }} />
      <VitalStack.Screen
        name="Measure"
        component={MeasureScreen}
        options={{
          headerBackTitle: ' ',
          headerTitle: 'Vitals',
          headerTintColor: brandColors.brandPrimary,
          headerStyle: {
            backgroundColor: 'white',
            shadowColor: 'transparent',
            shadowRadius: 0,
            shadowOffset: {
              height: 0
            }
          }
        }}/>
    </VitalStack.Navigator>
  );
}

const DoctorStack = createStackNavigator();
const DoctorStackScreen = () => {
  return (
    <DoctorStack.Navigator
      initialRouteName='DoctorFirst'>
      <DoctorStack.Screen
        name="DoctorFirst"
        component={DoctorFirst}
        options={{ headerShown: false }} />
    </DoctorStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const AppStackScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName='Doctor'
      tabBarOptions={{
        activeTintColor: brandColors.brandPrimary,
        gestureEnabled: false,
        style: { backgroundColor: brandColors.backgroundColor },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={({ route }) =>({
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIco name="home" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Vitals"
        component={VitalStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIconsIco name="insert-chart" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Doctor"
        component={DoctorStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontistoIco name="doctor" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='App'
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}>
          <Stack.Screen name="App" component={AppStackScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;