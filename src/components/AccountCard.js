import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function AccountCard(props) {
    return (
        <TouchableOpacity style={styles.accountsCards}>
            <View style={styles.accountsIconContainer}>
                <Text style={styles.accountsIcon}>{props.emoji}</Text>
            </View>

            <View style={styles.accountsTextContainer}>
                <Text style={styles.accountsText}>{props.title}</Text>
                <Text style={styles.accountsBalance}>${props.balance}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    accountsCards: {
        width: "48%",

        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        marginVertical: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },

    accountsIconContainer: {
        width: "60%",
        borderRadius: 50,
        backgroundColor: "#000002",
        alignItems: "center",
        padding: "20%",
    },

    accountsIcon: {
        fontSize: 25,
        
    },

    accountsTextContainer: {
        alignItems: "center",
        justifyContent: "center",
    },

    accountsText: {
        fontSize: 25,
        marginVertical: 10
    },

    accountsBalance: {
        fontSize: 20
    }
});