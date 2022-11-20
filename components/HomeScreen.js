import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.main}>
            <ScrollView>
                <View style={styles.topContainer}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.headerGreetingText}>Hello,</Text>
                            <Text style={styles.headerNameText}>King Ibrahim</Text>
                        </View>

                        <View>
                            <EvilIcons name="user" size={45} color="#fff" />
                        </View>
                    </View>

                    <View style={styles.balanceContainer}>
                        <View>
                            <Text style={styles.balanceTitle}>Total Balance</Text>
                            <Text style={styles.balanceMoney}>$17,000</Text>
                        </View>

                        <View style={styles.iconsBalanceContainer}>
                            <TouchableOpacity style={styles.iconsBalanceButtons}>
                                <MaterialCommunityIcons name="cash-plus" size={24} color="#000002" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconsBalanceButtons}>
                                <MaterialCommunityIcons name="cash-minus" size={24} color="#000002" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.accountsContainer}>

                    <View style={styles.accountsTitleContainer}>
                        <Text style={styles.accountsTitle}>Accounts</Text>
                    </View>

                    <View style={styles.accountsCardsContainer}>
                        <TouchableOpacity style={styles.accountsCards}>
                            <View style={styles.accountsIconContainer}>
                                <Text style={styles.accountsIcon}>🐖</Text>
                            </View>

                            <View style={styles.accountsTextContainer}>
                                <Text style={styles.accountsText}>Saving</Text>
                                <Text style={styles.accountsBalance}>$15,000</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.accountsCards}>
                            <View style={styles.accountsIconContainer}>
                                <Text style={styles.accountsIcon}>💰</Text>
                            </View>

                            <View style={styles.accountsTextContainer}>
                                <Text style={styles.accountsText}>Liquid</Text>
                                <Text style={styles.accountsBalance}>$2,000</Text>
                            </View>
                        </TouchableOpacity>


                    </View>


                </View>

                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },

    topContainer: {
        padding: 25,
        backgroundColor: "#000002",
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15
    },

    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
    },

    headerGreetingText: {
        fontSize: 20,
        color: "#ffffff"
    },

    headerNameText: {
        fontSize: 15,
        color: "#ffffff"
    },

    balanceContainer: {
        width: "100%",
        marginTop: 20
    },

    balanceTitle: {
        fontSize: 20,
        color: "#2e2f31"
    },

    balanceMoney: {
        fontSize: 40,
        color: "#e5e4e4",
    },

    iconsBalanceContainer: {
        width: "47%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },

    iconsBalanceButtons: {
        padding: 15,
        backgroundColor: "#e5e4e4",
        borderRadius: 50
    },


    /*Accounts Section*/
    accountsContainer: {
        width: "100%",
        paddingHorizontal: 25
    },

    accountsTitleContainer: {
        width: "100%",
        marginVertical: 15
    },

    accountsTitle: {
        fontSize: 30,
    },

    accountsCardsContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap"
    },

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
        alignItems: "center"
    },

    accountsIcon: {
        fontSize: 25,
        padding: 25,
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