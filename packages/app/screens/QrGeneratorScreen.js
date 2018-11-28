import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import QRCode from "react-native-qrcode";

export default class QrGeneratorStack extends React.Component {
  static navigationOptions = {
    title: "QrGenerator"
  };

  state = {
    preparedText: "",
    text: ""
  };

  render() {
    const { preparedText, text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text, preparedText: "" })}
          value={text}
        />
        <Button
          title="Generate QR code"
          onPress={() => this.setState({ preparedText: text })}
        />
        {preparedText ? (
          <QRCode
            value={preparedText}
            size={200}
            bgColor="purple"
            fgColor="white"
          />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5
  }
});
