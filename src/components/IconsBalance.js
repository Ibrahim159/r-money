import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function IconsBalance(props) {
    return (
        <TouchableOpacity style={styles.iconsBalanceButtons}>
            <MaterialCommunityIcons name={"cash-" + props.value} size={24} color="#000002" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    iconsBalanceButtons: {
        padding: "10%",
        backgroundColor: "#e5e4e4",
        borderRadius: 50
    },
});