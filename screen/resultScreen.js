import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"
import SearchResult from '../component/result.js'
import Copyright from '../component/copyright.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ResultScreen = ({route, navigation}) =>{

    const { data } = route.params;
    return (
        <View style={{minHeight:780, width:'100%'}}>
          <View style={headStyle.menu}>
          <MaterialCommunityIcons 
                        style={headStyle.menuIcon}
                        name="arrow-left"
                        color={'#fff'}
                    />
            <Text style={{fontSize:20, textAlign: 'center', color:'white'}}>Hiling.id</Text>
            <MaterialCommunityIcons 
                        style={headStyle.userIcon}
                        name="account"
                        color={'#fff'}
                    />
          </View>
          <SearchResult navigation={navigation} data = {data}/>
          <Copyright/>
        </View>
      )
}

const headStyle = StyleSheet.create({
  menu: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#86b257',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 80,
  },
  menuIcon: {
    fontSize: 40,
    marginLeft:20, 
  },
  userIcon: {
    fontSize: 40,
    marginRight:20,
  },
})

export default ResultScreen

