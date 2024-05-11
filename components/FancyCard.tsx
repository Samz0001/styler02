import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
        source={{
            uri: 'https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_red_fort_l_341_817.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>India Gate</Text>
            <Text style={styles.cardLabel}>Delhi</Text>
            <Text style={styles.cardDescription}>The India Gate structure is oblong, with a large archway on each of the four faces, but the arches on the long sides are larger and higher</Text>

            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    cardElevated: {
      backgroundColor: "#FFFFFF",
      elevation: 3,
      shadowOffset: {
        width:1,
        height:1,
      }
    },
    cardImage:{
        height:180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius:6,
    },
    cardBody: {flex:1,
      flexGrow:1,
      paddingHorizontal:12
    },
    cardTitle: {
      color: '#000000',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom:4
    },
    cardLabel: { color: '#000000',
      fontSize:14,
      marginBottom: 4
    
    },
    cardDescription: { color: '#242B2E',
      fontSize:12,
      marginTop:6,
      marginBottom:12,
      
    },
    cardFooter:{ color: '#000000',},
})