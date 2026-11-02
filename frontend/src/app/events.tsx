import { Event , getDate } from "@/types/event"
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { events } from "@/test/testdata";


export default function Events() {
    // fetch data from database using api

    //filter? 
    return (
    <View>
        <Image
            source={require('../assets/background.png')}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
            }}
            resizeMode="stretch"
        />
        <View className="mx-5">
            <Text className="font-caveatbold text-6xl text-text text-center my-5">quests</Text>
            <ScrollView>
                <Text className="font-quicksandbold text-2xl text-text text-left my-5">upcoming</Text>
                {
                    events.map(event => 
                        <View key={event.id} className="flex-1 flex-row py-5">
                            <View className="flex-1 items-end">
                                <Image
                                    source={require('../assets/background.png')}
                                    className="border border-text rounded-md mx-5"
                                    resizeMode="cover"
                                    style={{
                                        height: 200,
                                        width: 150
                                    }}
                                />
                            </View>
                            <View className="flex-1 flex-col mx-5 items-start justify-start">
                                <Text className="font-caveatbold text-2xl">{event.name}</Text>
                                <Text className="font-caveat text-lg oerflow-wrap">{getDate(event)}</Text>
                                <Text className="font-caveat text-sm overflow-wrap">{event.description} </Text>
                            </View>
                        </View>
                    )
                }
                <Text className="font-caveatbold text-6xl text-text text-center my-5">discover</Text>
                {
                    events.map(event => 
                        <View key={event.id} className="flex-1 flex-row py-5">
                            <View className="flex-1 items-end">
                                <Image
                                    source={require('../assets/background.png')}
                                    className="border border-text rounded-md mx-5"
                                    resizeMode="cover"
                                    style={{
                                        height: 200,
                                        width: 150
                                    }}
                                />
                            </View>
                            <View className="flex-1 flex-col mx-5 items-start justify-start">
                                <Text className="font-caveatbold text-2xl">{event.name}</Text>
                                <Text className="font-caveat text-lg oerflow-wrap">{getDate(event)}</Text>
                                <Text className="font-caveat text-sm overflow-wrap">{event.description} </Text>
                            </View>
                        </View>
                    )
                }
            </ScrollView>
        </View>
    </View>);
}