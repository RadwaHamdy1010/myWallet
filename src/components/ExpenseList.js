import React from 'react';
import {View, Text ,ScrollView ,ActivityIndicator ,TouchableOpacity} from 'react-native';
import { Icon ,Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import style from '../styles/styles';
import AddExpense from './AddExpense';
//import { Button } from 'native-base';
const Stack = createStackNavigator();

const ExpenseList =(props)=>{

    return (
       <ScrollView style={style.container}>
           {/* List Header */}
           <View style={style.header}>
               <View>
                   <Text style={style.headerText}>Expenses</Text>
                   <Stack.Navigator>
                           <Stack.Screen name="AddExpense" component={AddExpense}/> 
                    </Stack.Navigator>
               </View>
               <View>
                <Button style={{backgroundColor:'purple',marginRight:10 ,width:50 , height:40 ,alignItems:'center'}} 
                onPress={()=>{ 
                    console.log(props.route)
                   // alert("done"); 
                    props.navigation.navigate('AddExpense');
                }}> 
                 <Icon name="add"/>
                 </Button>
               </View>
            </View>

            {/* AddExpense  component */}            

            {/* render it if there's no data yet  */}
            {/* <ActivityIndicator color="#d28888" size="large" /> */}
            
            {/* else , render list  */}
            
            
       </ScrollView>
    );
}
export default ExpenseList;