import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SectionList,
    Image,
    ToastAndroid,
    TouchableOpacity,
    Button,
} from "react-native";
import { datasource } from "./Data";

const handler = () => {
    ToastAndroid.show("Skincare Selected!", ToastAndroid.SHORT);
};

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() => {
                    handler();
                    navigation.navigate("Edit", {
                        index: index,
                        type: section.title,
                        key: item.key,
                        pic: item.pic,
                    });
                }}
            >
                <View
                    style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
                >
                    <Image source={{ uri: item.pic }} style={styles.image} />
                    <Text style={styles.textStyle}>{item.key}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const sectionHeader = ({ section: { title, bgcolor, fontcolor } }) => {
        return (
            <View style={[styles.headerContainer, { backgroundColor: bgcolor }]}>
                <Text style={[styles.headerText, { color: fontcolor }]}>{title}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    title="ADD SKINCARE"
                    color="red"
                    onPress={() => navigation.navigate("Add")}
                />
            </View>
            <View style={styles.list}>
                <SectionList
                    renderSectionHeader={sectionHeader}
                    sections={datasource}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => item.key + index}
                    contentContainerStyle={{ paddingBottom: 80 }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        flex: 1,
        fontSize: 20,
        textAlign: "left",
        fontWeight: "bold",
        marginLeft: 10,
    },
    opacityStyle: {
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 8,
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: "#FFF",
    },
    headerContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
    },
    headerText: {
        fontSize: 25,
        fontWeight: "bold",
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: "cover",
    },
    buttonContainer: {
        padding: 15,
        borderWidth: 1,
        height: 105,
        justifyContent: "flex-end",
    },
    list: {
        width: "90%",
        marginHorizontal: 20,
        borderWidth: 2,
        margin: 5,
        backgroundColor: "lightgray",
        borderRadius: 8,
    },
    container: {
        flex: 1,
        backgroundColor: "lightpink",
    },
});

export default Home;
