import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Tab() {
    return (
        <View style={styles.container}>
            <Text>Tab [Home]</Text>
            <Link href="/settings" style={styles.link}> settings</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        backgroundColor: "#fefe67",
        color: 'blue',
        padding: 8,
        borderRadius: 16,
        borderStyle: 'dashed',
        borderColor: 'red',
        borderWidth: 2,
        borderCurve: 'circular',
        borderBottomRightRadius: 4,
        borderTopStartRadius: 4
    }
});
