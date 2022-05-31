import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import FormSearch from '../component/form'
import Copyright from '../component/copyright'
const SearchScreen = ({navigation}) =>{
    return (
      <View style={{backgroundColor: 'white', height: 700, zIndex:0, alignContent: 'center', flexDirection: 'column'}}>
        <View style={{backgroundColor: '#86b257',height:'60%',width:'100%', zIndex:0, position: 'absolute'}}></View>
        <View style={{zIndex: 2, alignContent: 'center', alignItems:'center', flexDirection: 'column', justifyContent: 'center', marginTop:'100px', alignSelf:'center'}}>
          <View style={{width: "90%", backgroundColor:"white", elevation:30, borderRadius:5, minHeight:100, borderColor:'black', borderWidth:2}}>
            <Text style={{fontSize:20, textAlign: 'center', paddingTop:20}}>Hiling.id</Text>
            <FormSearch navigation={navigation}/>
          </View>
        </View>
        <Copyright/>
      </View>
    )
}

export default SearchScreen