import { StatusBar } from 'expo-status-bar';
import React from 'react';
import PromiseMW from 'redux-promise';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import RootReducer from './src/redux/reducers/index'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpenseList from './src/components/ExpenseList';
import IncomeList from './src/components/IncomeList';
import Reports from './src/components/Reports';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();
const createStoreWithMW=applyMiddleware(PromiseMW)(createStore);
export default function App() {
  return (
    <SafeAreaProvider>
    <Provider store={createStoreWithMW(RootReducer)} >
    <NavigationContainer>
      <Tab.Navigator >
      <Tab.Screen name="Expense" component={ExpenseList} />
      <Tab.Screen name="Income" component={IncomeList} />
      <Tab.Screen name="Reports" component={Reports} />
      </Tab.Navigator>
      </NavigationContainer>
      </Provider>
      </SafeAreaProvider>
  );
}

