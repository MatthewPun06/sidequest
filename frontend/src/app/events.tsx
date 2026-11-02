import { Event , getDate } from "@/types/event";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { events, discoverEvents } from "@/test/testdata";


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
            <SafeAreaView>
                <View className="">
                    <Text className="font-caveatbold text-6xl text-text text-center py-3 h-[10%]">quests</Text>
                    <ScrollView className="px-5 h-[92%]">
                        <Text className="font-quicksandbold text-2xl text-text text-left py-5">upcoming</Text>
                        {
                            displayEvents(events)
                        }
                        <Text className="font-caveatbold text-6xl text-text text-center my-5">discover</Text>
                        {
                            displayEvents(discoverEvents)
                        }
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    );
}

function displayEvents(events : Event[]) {
    return (
        <View>
        {
            events.map(event => 
                <View key={event.id} className="flex-1 flex-row py-5">
                    <View className="flex-1 ">
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
                    <View className="flex-1 flex-col items-start">
                        <Text className="font-caveatbold text-2xl w-full overflow-wrap">{event.name}</Text>
                        <Text className="font-caveat text-lg oerflow-wrap w-full">{getDate(event)}</Text>
                        <Text className="font-caveat text-sm overflow-wrap w-full">{event.description} </Text>
                    </View>
                </View>
            )
        }
        </View>
    );
}