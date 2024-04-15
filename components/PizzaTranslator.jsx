import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function PizzaTranslator() {
  const [text, setText] = useState('');
  return (
    <View style={{marginBottom: 10}}>
      <TextInput 
        style={{height: 40}}
        placeholder="문장을 입력하세요."
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding:10, fontSize:40, borderWidth:1, borderColor:'gray'}}>
        {text.split(' ').map(word => word && '🍕').join(' ')}
      </Text>
    </View>
  );
}