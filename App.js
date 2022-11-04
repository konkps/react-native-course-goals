import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const togglemodalVisibility = () => {
    setModalIsVisible(prevState => !prevState)
  }
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals(prevGoals => [
      ...prevGoals, {
        text: enteredGoalText,
        id: Math.random().toString()
      }]);
      togglemodalVisibility()
  }
  const removeGoalHandler = (id) => {
    setCourseGoals(prevCourseGoals => {
      return prevCourseGoals.filter(goal => goal.id !== id)
    })
  }
  return (
    <View style={styles.appContainer}>

      <Button title={'Add New Goal'} color='#5e00cc' onPress={togglemodalVisibility} />

      {/* {modalIsVisible && */}
        <GoalInput
          addGoalHandler={addGoalHandler}
          visible={modalIsVisible} 
          onToggleModal={togglemodalVisibility} />
      {/* } */}
      <Text> Goals List </Text>
      <View style={styles.goalsContainer}>

        <FlatList
          data={courseGoals}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => item.id}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={removeGoalHandler}
              />
            )
          }}

        />

        {/* <ScrollView  alwaysBounceVertical={false}>
          {courseGoals.map((goal) => <View key={goal.key+"_view"}  style={styles.goalItem} >
            <Text  key={goal.key+"_text"} style={styles.goalText} onPress={removeGoalHandler}>
            {goal.text}
            </Text>
          </View>)}
        </ScrollView> */}
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 4
  }
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // dummyText: {
  //   margin: 20,
  //   borderWidth: 2,
  //   borderColor: "red",
  //   padding: 16
  // }
});
