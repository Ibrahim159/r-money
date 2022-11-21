import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import HeaderText from "../components/HeaderText";
import ProfileButton from "../components/ProfileButton";
import TotalBalance from "../components/TotalBalance";
import IconsBalance from "../components/IconsBalance";
import AccountCard from "../components/AccountCard";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.main}>
            <ScrollView>
                <View style={styles.topContainer}>
                    <View style={styles.header}>
                        <HeaderText username="Ibrahim" />
                        <ProfileButton />                        
                    </View>
                    <View style={styles.balanceContainer}>
                        <TotalBalance balanceMoney="17,000"/>

                        <View style={styles.iconsBalanceContainer}>
                            <IconsBalance value="plus" />
                            <IconsBalance value="minus" />
                        </View>
                    </View>
                </View>
                <View style={styles.accountsContainer}>
                    <View style={styles.accountsTitleContainer}>
                        <Text style={styles.accountsTitle}>Accounts</Text>
                    </View>

                    <View style={styles.accountsCardsContainer}>
                        <AccountCard emoji="🐖" title="Saving" balance="15,000"/>
                        <AccountCard emoji="💰" title="Liquid" balance="2,000"/>
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


    balanceContainer: {
        width: "100%",
        marginTop: 20
    },

    iconsBalanceContainer: {
        width: "47%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
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
});