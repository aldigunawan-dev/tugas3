import React from 'react'
import { View, Text, StyleSheet, Colors, Image } from "react-native"
import { Maskapai, Jadwal, Bandara } from '../data/data.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchResult = ({data}) => {
    let available = true
    
    var listJadwal = () => {

        var newJadwal = Jadwal.filter( (x) => {
            let checkBandaraK = Bandara.filter( (x) => {
                return x.bandara_nama.toLowerCase() == data.asal.toLowerCase()
            })

            let checkBandaraT = Bandara.filter( (x) => {
                return x.bandara_nama.toLowerCase() == data.tujuan.toLowerCase()
            })

            try{
                return (
                    x.bandara_kode_keberangkatan.toLowerCase() == checkBandaraK[0].bandara_kode.toLowerCase() &&
                    x.bandara_kode_tujuan.toLowerCase() == checkBandaraT[0].bandara_kode.toLowerCase() &&
                    data.tanggal.length === 10
                )
            }
            catch(err){
                return available = false
            }

        })

        if(newJadwal.length>0){
            return newJadwal.map( (printJadwal, i ) => {

                let checkMaskapai = Maskapai.filter( (x) => {
                    return x.maskapai_id == printJadwal.maskapai_id
                })
                
    
                //fungsi kapital huruf pertama disetiap kata
                let capitalizeTheFirstLetterOfEachWord = (words) => {
                    let separateWord = words.toLowerCase().split(' ');
                    for (let i = 0; i < separateWord.length; i++) {
                       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
                       separateWord[i].substring(1);
                    }
                    return separateWord.join(' ');
                }
    
                if(available == true){
                    return(
                        <View style={resultStyle.box} key={i}>
                            <View style={resultStyle.backgroundImage}>
                            <Image 
                                style={resultStyle.Image}
                                source={checkMaskapai[0].maskapai_logo}
                            ></Image>
                            </View>
                            <View style={resultStyle.textBox}>
                                <View style={resultStyle.upperText}>
                                    <Text style={resultStyle.text}>{capitalizeTheFirstLetterOfEachWord(data.asal)}</Text>
                                    <Text style={resultStyle.text}>{"   >>   "}</Text>
                                    <Text style={resultStyle.text}>{capitalizeTheFirstLetterOfEachWord(data.tujuan)}</Text>
                                </View>
                                <View style={resultStyle.underText}>
                                    <Text style={resultStyle.text}>{checkMaskapai[0].maskapai_nama}</Text>
                                    <Text style={resultStyle.textBlue}>{data.tanggal}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }
            })
        }else{
            return(
                <View style={resultStyle.boxNotAvail}>
                    <Text style={resultStyle.textNotAvail}>Maaf, jadwal penerbangan tidak tersedia</Text>
                    <MaterialCommunityIcons 
                        style={resultStyle.userIcon}
                        name="emoticon-sad-outline"
                        color={'#777777'}
                    />
                </View>
            )
        }

        
    }

    return(
        <View>
            {listJadwal()}
        </View>
    )
}

const resultStyle = StyleSheet.create({
    textBox:{
    },
    backgroundImage:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 30,
    },
    notAvailable:{
        alignItems: 'center',
    }, 
    box:{
        backgroundColor: '#363c40',
        borderRadius: 10,
        padding: 10,
        width: '90%',
        left: '5%',
        elevation: 5,
        marginTop: 10,
        alignContent: 'center',
        flexDirection: 'row'
    },
    boxNotAvail:{
        backgroundColor: '#363c40',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        left: '10%',
        elevation: 5,
        top: '100%',
        alignItems: 'center',
    },
    textNotAvail:{
        textAlign: 'center',
        color: '#f0f0f0',
    },
    userIcon: {
        marginTop: 25,
        fontSize: 60,
        paddingHorizontal: 50,
        alignItems: 'center',
    },
    upperText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 30,
    },
    Image:{
        width: 60,
        resizeMode: 'contain',
        height: 60,
    },
    underText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 30,
    },
    text:{
        fontWeight: 'bold',
        color: '#f0f0f0',
    },
    textBlue:{
        fontWeight: 'bold',
        color: '#a6d1ed',
    }
})

export default SearchResult