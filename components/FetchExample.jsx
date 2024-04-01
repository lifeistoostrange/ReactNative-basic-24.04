import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

export default function FetchExample() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then(res => res.json())
            .then(obj => {
                console.log(obj);       // {title, releaseYear}
                setData(obj.movies);
            })
            .catch(error => {console.error(error);})
            .finally(setLoading(false));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, padding: 15, fontWeight: 20 }}>내가 좋아하는 과일</Text>
            <FlatList
                data={[
                    { key: 'Apple' }, { key: 'Banana' }, { key: 'Cherry' }, { key: 'Orange' }, { key: 'Mango' },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
}