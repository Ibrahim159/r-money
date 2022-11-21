import { View, Text, StyleSheet } from "react-native";

export default function TotalBalance(props) {
    return (
        <View>
            <Text style={styles.balanceTitle}>Total Balance</Text>
            <Text style={styles.balanceMoney}>${props.balanceMoney}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    balanceTitle: {
        fontSize: 20,
        color: "#2e2f31"
    },

    balanceMoney: {
        fontSize: 40,
        color: "#e5e4e4",
    },
});