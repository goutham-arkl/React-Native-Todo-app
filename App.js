import { StatusBar } from 'expo-status-bar';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Task } from './components/Task';
import { useState } from 'react';

export default function App() {
  const[task,setTask]=useState('')
  const  [taskItems,setTaskItems]=useState([])

  const handleAddTask=()=>{
    Keyboard.dismiss()
      setTaskItems([...taskItems,task])
      setTask('')
  }
  const compleateTask=(index)=>{
    let itemsCopy=[...taskItems];
    const item=itemsCopy.splice(index,1);
    Alert.alert('Congratulations',`You completed the task 👍`)
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.item}>
         {taskItems.map((item,index)=>(
          <TouchableOpacity  key={index} onPress={()=>compleateTask(index)}>

            <Task text={item}/>
          </TouchableOpacity>
))}
         
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS==='ios' ? 'padding ':'height'} style={styles.writeTaskWrapper}>
        <TextInput onChangeText={setTask} value={task} style={styles.input} placeholder={'Write a task'}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
tasksWrapper:{
  padding:80,
  paddingHorizontal:20

},
sectionTitle:{
  fontSize:24,
  fontWeight:'bold'

},
item:{
  marginTop:20
},
writeTaskWrapper:{
  position:'absolute',
  bottom:50,
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center'
},
input:{
paddingVertical:15,
width:270,
backgroundColor:'#fff',
borderRadius:60,
paddingHorizontal:15,
borderColor:'#CBCBCB',
borderWidth:1,

},
addWrapper:{
  width:60,
  height:60,
  backgroundColor:'#fff',
  borderRadius:60,
  justifyContent:'center',
  alignItems:'center',
  borderColor:'#CBCBCB',
borderWidth:1
},
addText:{},
          
});
