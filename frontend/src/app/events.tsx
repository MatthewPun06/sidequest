import { Event } from "@/types/event"
import { StyleSheet, View, Text} from "react-native";
import { Image } from "expo-image"; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { events } from "@/test/testdata";


export default function Events() {
    // fetch data from database using api

    //filter? 
    return (
    <View>
        <Image
            source={require('../assets/background.png')}
            style={StyleSheet.absoluteFill}
        />
        <SafeAreaView>
            <Text>quests</Text>
            <Text>upcoming</Text>
            {
                events.map(event => 
                    <View key={event.id}>
                        <Text>{event.name}</Text>
                    </View>
                )
            }
            <Text>discover</Text>
        </SafeAreaView>
    </View>);
}