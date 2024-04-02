import React, { useState } from 'react';
import { View, TextInput, Image, FlatList, StyleSheet, Text } from 'react-native';

const imageUrl = 'https://picsum.photos/200/200';
const initialFruit = ['사과', '복숭아', '수박'];

export default function FlatListTest() {
    const [text, setText] = useState('');
    const [data, setData] = useState(initialFruit);

    const handleAddItem = () => {
        if (text.trim() !== '') {
            setData([...data, text]);
            setText('');
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                    placeholder="과일 이름을 입력하세요."
                    onSubmitEditing={handleAddItem}
                />
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});
