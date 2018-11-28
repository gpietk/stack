import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Permissions, BarCodeScanner } from "expo";

export default class QrScannerStack extends React.Component {
  static navigationOptions = {
    title: "QrScanner"
  };

  state = {
    code: "",
    hasCameraPermission: null
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  handleBarCodeScanned = ({ data: code }) => {
    this.setState({ code });
  };

  render() {
    const { code } = this.state;

    return (
      <View style={styles.container}>
        {code ? (
          <View>
            <Text>Scanned code: {code}</Text>
            <Button
              title="Reset code"
              onPress={() => this.setState({ code: "" })}
            />
          </View>
        ) : (
          <BarCodeScanner
            style={StyleSheet.absoluteFill}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            onBarCodeScanned={this.handleBarCodeScanned}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
