/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import IconButton from "./components/iconButton";
import CircleButton from "./components/CircleButton";

import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const onReset = () => {
    // setImage(null);
    setShowAppOptions(false);
  };

  const onAddSticker = () => {};

  const onSaveImageAsync = async () => {};

  const [image, setImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You cancelled picking an image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} image={image} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => {
              setShowAppOptions(true);
            }}
          />
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    flex: 1 / 3,
    justifyContent: "flex-end",
    bottom: 80,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 60,
    alignItems: "center",
  },
});
