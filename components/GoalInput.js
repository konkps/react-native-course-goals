import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

const GoalInput = (props) => {

    const [enteredGoalText, setEnteredGoalText] = useState();

    const goalInputHandler = (text) => {
        setEnteredGoalText(text);
    }
    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoalText);
        setEnteredGoalText();
    }

    return (
        <Modal visible={props.visible} animationType={"slide"} >
            <View style={styles.inputContainer} >
                <Image
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={"Enter your goal"}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                        title="Add Goal" 
                        onPress={addGoalHandler} 
                        color='cyan'
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                        title="Cancel" 
                        onPress={props.onToggleModal} 
                        color='red'
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderColor: "#ccc",
        backgroundColor: "purple",
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor:'#ede',
        color:'#535',
        width: '100%',
        padding: 5,
        marginRight: 8
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    button: {
        width: "40%",
        marginHorizontal: 8
    },
    image: {
        width: 150,
        height: 150,
        // margin: 16
    }
})