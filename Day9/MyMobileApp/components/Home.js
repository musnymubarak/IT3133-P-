import { StyleSheet, View } from 'react-native';
import { Text, Divider, Button } from 'react-native-paper';

export default function Home() {
    return (
        <>
            <Text variant="headlineLarge">Headline Large</Text>
            <Divider />
            <Text variant="bodyMedium" style={styles.body}>
                The peacock, renowned for its dazzling beauty, is one of nature’s most captivating birds. 
                Native to South Asia and a member of the pheasant family, the male peacock is celebrated for 
                its vibrant, iridescent plumage, featuring hues of blue, green, and gold. Its iconic train, adorned 
                with eye-like patterns, is not part of its tail but elongated upper tail coverts used in courtship 
                displays to attract mates. These breathtaking displays symbolize grace and symmetry. 
                Culturally, the peacock holds deep significance, representing immortality, pride, and renewal 
                in various traditions. In Hinduism, it is associated with Kartikeya, the god of war. 
                Beyond its visual allure, the peacock is a resilient bird, thriving in diverse habitats 
                from forests to grasslands. While males captivate with their display, the more subdued 
                peahen blends into her environment, protecting her eggs. Together, they epitomize the balance 
                of brilliance and subtlety, enchanting admirers worldwide.
            </Text>
            <Button 
                icon="camera" 
                mode="outlined" 
                onPress={() => console.log('Pressed')}
            >
                Press Me
            </Button>
        </>
    );
}

const styles = StyleSheet.create({
    body: {
        padding: 9,
        textAlign: 'justify'
    }
});
