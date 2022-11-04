import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState();
  const [courseGoals, setCourseGoals] = useState([]);


  const goalInputHandler = (text) => {
    setEnteredGoalText(text);
  }
  const addGoalHandler = () => {
    setCourseGoals(prevGoals => [...prevGoals, { text: enteredGoalText, id: Math.random().toString() }]);
    setEnteredGoalText();
  }
  const removeGoalHandler = (e) => {
    console.log(e.target.value);
  }
  return (
    <View style={styles.appContainer}>

      {/* <Text style={styles.dummyText} >Hello World !!</Text> */}

      <View style={styles.inputContainer} >
        <TextInput
          style={styles.textInput}
          placeholder={"Enter your goal"}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="ADD GOAL" onPress={addGoalHandler} />
      </View>

      <Text> Goals List </Text>
      <View style={styles.goalsContainer}>

        <FlatList
          data={courseGoals}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => item.id}
          renderItem={itemData => {
            return <View style={styles.goalItem} >
              <Text style={styles.goalText} onPress={removeGoalHandler}>
                {itemData.item.text}
              </Text>
            </View>
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
    borderBottomWidth: 1,
    borderColor: "#ccc"
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    padding: 5,
    marginRight: 8
  },
  goalsContainer: {
    flex: 4
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 6
  },
  goalText: {
    color: 'white'
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
