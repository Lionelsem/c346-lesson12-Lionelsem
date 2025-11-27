import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { datasource } from "./Data.js";
import { TextInput, View, StatusBar, Button, Text } from "react-native";

const Add = ({ navigation }) => {
    const [name, setName] = useState("");
    const [routine, setRoutine] = useState("Morning");

    return (
        <View>
            <StatusBar />
            <Text>Skincare Name:</Text>
            <TextInput
                style={{ borderWidth: 1 }}
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Picker
                selectedValue={routine}
                onValueChange={(value) => setRoutine(value)}
            >
                <Picker.Item label="🌞 Morning Skincare" value="Morning" />
                <Picker.Item label="🌙 Night Skincare" value="Night" />
            </Picker>
            <Button
                title="Submit"
                onPress={() => {
                    if (!name.trim()) return;
                    let item = { key: name.trim() };
                    let indexnum = 0;
                    if (routine === "Night") {
                        indexnum = 1;
                    }
                    datasource[indexnum].data.push(item);
                    navigation.navigate("Home");
                }}
            />
        </View>
    );
};

export default Add;
