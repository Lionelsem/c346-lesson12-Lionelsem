import React, { useState } from 'react';
import {Text, TextInput, Button, StyleSheet, View, Alert,} from 'react-native';
import { datasource } from './Data.js';

const Edit = ({ navigation, route }) => {
    const [name, setName] = useState(route.params.key);
    const index = route.params.index;
    const type = route.params.type;

    let indexnum = type === '🌞 MORNING SKINCARE' ? 0 : 1;

    return (
        <View style={styles.container}>
            <Text>Skincare Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />

            <View style={{ flexDirection: "row", marginTop: 12 }}>
                <View style={{ flex: 1, marginRight: 4 }}>
                    <Button
                        title="Save"
                        onPress={() => {
                            datasource[indexnum].data[index].key = name;
                            navigation.navigate('Home');
                        }}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: 4 }}>
                    <Button
                        title="Delete"
                        onPress={() => {
                            Alert.alert(
                                "Are you sure?",
                                "",
                                [
                                    {
                                        text: "Yes",
                                        onPress: () => {
                                            datasource[indexnum].data.splice(index, 1);
                                            navigation.navigate('Home');
                                        }
                                    },
                                    { text: "No" }
                                ]
                            );
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        paddingVertical: 5,
    },
});

export default Edit;
