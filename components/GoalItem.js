import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {

    return (

        <View style={styles.goalItem} >
            <Pressable
                onPress={props.onDeleteItem.bind(this, props.id)}
                android_ripple={{ color: '#200640' }}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText} //onPress={props.onDeleteItem}
                >
                    {props.text}
                </Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        // opacity:0.5
    },
    goalText: {
        color: 'white',
        padding: 6,
    }
})