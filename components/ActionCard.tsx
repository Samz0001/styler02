import { StyleSheet, Text, View ,Linking,Image,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style ={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                Whats new in Javascript
            </Text>
        </View>
        <Image
        source={{
            uri: 'https://images.tech.co/wp-content/uploads/2022/10/14123538/socialmedia-1-1024x512.jpg'
        }}
        style={styles.cardImage}/>
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
            JavaScript is the dominant client-side scripting language of the Web, with 99% of all websites using it for this purpose. Scripts are embedded in or included from HTML documents and interact with the DOM. All major web browsers have a built-in JavaScript engine that executes the code on the user's device.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={()=> openWebsite('https://www.freecodecamp.org/news/the-biggest-changes-in-javascript-this-year/')}>
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> openWebsite('https://www.linkedin.com/in/shyam-dua-a3513b301/')}>
                <Text style=     {styles.socialLinks}>Follow me </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal: 8,
    },
    card: {
        width:350,
        height:360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: "blue",
        elevation: 3,
        shadowOffset: {
            width:1,
            height:1
        },
        shadowColor: "#333",
        shadowOpacity: 0.4

    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    headerText: {
        color: "white",
        fontSize:16,
        fontWeight: "600"

    },
    cardImage: {
        height:190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding:8,
        flexDirection: 'row',
        alignItems:"center",
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize:16,
        color:'black',
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius: 6
    },

})