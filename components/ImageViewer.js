import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, image }) {
    const imageSource = image ? { uri: image } : placeholderImageSource;
    return (
        <Image source={imageSource} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});
