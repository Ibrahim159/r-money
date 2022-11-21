import { View, Text, StyleSheet } from "react-native";

export default function HeaderText(props) {
    return (
        <View>
            <Text style={styles.headerGreetingText}>Hello,</Text>
            <Text style={styles.headerNameText}>King {props.username}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerGreetingText: {
        fontSize: 20,
        color: "#ffffff"
    },

    headerNameText: {
        fontSize: 15,
        color: "#ffffff"
    },
});