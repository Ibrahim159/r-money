import { TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

export default function ProfileButton(){
    return(
        <TouchableOpacity>
            <EvilIcons name="user" size={45} color="#fff" />
        </TouchableOpacity>
    );
}