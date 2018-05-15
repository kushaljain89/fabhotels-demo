import React from 'react'
import {Text, View, Dimensions, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native'
import {MaterialIcons, Ionicons, MaterialCommunityIcons, FontAwesome, Feather, Entypo} from '@expo/vector-icons'

const window = Dimensions.get('window');

class AppRoot extends React.Component {
    render() {
        return (
            <View>
                <ScrollView style={{height: window.height * 0.85, width: window.width}}>
                    <View style={styles.header}>
                        <View style={styles.backButton}>
                            <MaterialIcons name="arrow-back" style={styles.icons}></MaterialIcons>
                        </View>
                        <View style={styles.rightNavs}>
                            <View style={styles.rightNavIconWrapper}>
                                <MaterialCommunityIcons name="magnify" style={styles.icons}></MaterialCommunityIcons>
                            </View>
                            <View style={styles.rightNavIconWrapper}>
                                <Ionicons name="ios-call-outline" style={styles.icons}></Ionicons>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentWrapper}>
                        <View style={{width: window.width, height: 220}}>
                        <Image
                            style={{width: window.width, height: 220}}
                            source={{uri: 'https://pimg.fabhotels.com/propertyimages/642/main/main-photos-fabhotel-cabana-gk1-new-delhi-Hotels-20180115010632.jpg'}}/>
                        </View>
                        <View style={{width: window.width, height: 130, paddingLeft: 10, paddingTop: 15}}>
                            <View style={{height: 10}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#3c3c3c'}}> Fabhotel Cabana </Text>
                            </View>
                            <View style={{height: 30, paddingTop: 20, flexDirection: 'row'}}>
                                <View style={{ flex: 0.18, backgroundColor: '#00b96e', height: 30, marginLeft: 3, alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 20, color: '#ffffff', fontWeight: 'bold'}}>4.0</Text>
                                </View>
                                <View style={{ flex: 0.22, height: 30, paddingLeft: 3, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
                                    <View style={{flex: 1}}>
                                        <Text style={{fontSize: 16, color: '#00b96e'}}> Good </Text>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <Text style={{fontSize: 14, color: 'rgb(55, 154, 255)'}}> 547 Reviews</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 0.25 }}>
                                    <FontAwesome name="angle-right" style={{color: 'rgb(55, 154, 255)', fontSize: 16}}/>
                                </View>
                            </View>
                            <View style={{height: 30, paddingTop: 30}}>
                                <Text style={{color: '#4d4b4e', opacity: 0.69}}>R23, Greater Kailash 1, New Delhi, India - 110048</Text>
                                <Text style={{color: 'rgb(55, 154, 255)'}}>Show on map</Text>
                            </View>
                        </View>
                        <View style={{width: window.width, height: 133, paddingLeft: 10, paddingTop: 15, backgroundColor: '#f0f3f7', paddingRight: 10}}>
                            <View style={{height: 20, flexDirection: 'row'}}>
                                <View style={{flex: 1.75}}>
                                    <Text style={{color: '#4d4b4e'}}>Your search: 1 Adult, 1-night stay</Text>
                                </View>
                                <View style={{flex: 0.25, alignItems: 'flex-end'}}>
                                    <Text style={{color: 'rgb(55, 154, 255)'}}>EDIT</Text>
                                </View>
                            </View>
                            <View style={{height: 30, flexDirection: 'row', marginTop: 10}}>
                                <View style={{flex: 1}}>
                                    <Text style={{fontSize: 14, color: '#4d4b4e', opacity: 0.7}}>CHECK IN</Text>
                                    <Text style={{fontSize: 20, marginTop: 5, fontWeight: 'bold', color: '#4d4b4e'}}>Tue, 15 May</Text>
                                    <Text style={{fontSize: 14, color: '#4d4b4e', opacity: 0.7, marginTop: 5}}>From 12:00 PM</Text>
                                </View>
                                <View style={{flex: 1, alignItems: 'flex-end'}}>
                                    <Text style={{fontSize: 14, color: '#4d4b4e', opacity: 0.7}}>CHECK OUT</Text>
                                    <Text style={{fontSize: 20, marginTop: 5, fontWeight: 'bold', color: '#4d4b4e'}}>Wed, 16 May</Text>
                                    <Text style={{fontSize: 14, color: '#4d4b4e', opacity: 0.7, marginTop: 5}}>Till 11:00 AM</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{width: window.width, height: 245, paddingLeft: 10, paddingTop: 15, paddingRight: 10}}>
                            <View>
                                <Text style={{color: '#4d4b4e', fontSize: 20, fontWeight: 'bold'}}>Room Features</Text>
                            </View>
                            <View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flex: 1, flexDirection: 'row', paddingTop: 15}}>
                                        <Feather name="wifi" style={{color: '#4d4b4e', fontSize: 20}}/>
                                        <Text style={{color: '#4d4b4e', fontSize: 15, marginLeft: 7}}>Free Wifi</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row', paddingTop: 15}}>
                                        <FontAwesome name="newspaper-o" style={{color: '#4d4b4e', fontSize: 20}}/>
                                        <Text style={{color: '#4d4b4e', fontSize: 15, marginLeft: 7}}>News Paper</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', paddingTop: 20}}>
                                    <FontAwesome name="newspaper-o" style={{color: '#4d4b4e', fontSize: 19}}/>
                                    <Text style={{color: '#4d4b4e', fontSize: 15, marginLeft: 7}}>News Paper</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{color: '#4d4b4e', fontSize: 18, fontWeight: 'bold', paddingTop: 20}}>Other Features</Text>
                            </View>
                            <View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flex: 1, flexDirection: 'row', paddingTop: 15}}>
                                        <Feather name="wifi" style={{color: '#4d4b4e', fontSize: 20}}/>
                                        <Text style={{color: '#4d4b4e', fontSize: 15, marginLeft: 7}}>Breakfast</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row', paddingTop: 15}}>
                                        <FontAwesome name="newspaper-o" style={{color: '#4d4b4e', fontSize: 20}}/>
                                        <Text style={{color: '#4d4b4e', fontSize: 15, marginLeft: 7}}>24X7 Security</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{alignItems: 'flex-end', paddingTop: 20}}>
                                <Text style={{color: 'rgb(55, 154, 255)', fontSize: 14, fontWeight: 'bold'}}>VIEW MORE</Text>
                            </View>
                        </View>
                        <View style={{width: window.width, height: 10, backgroundColor: '#f0f3f7'}}></View>
                        <View style={{width: window.width, height: 370, paddingLeft: 10, paddingTop: 15, paddingRight: 10}}>
                            <View>
                                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#4d4b4e'}}>Overview</Text>
                            </View>
                            <View>
                                <View>
                                    <Text style={{color: '#4d4b4e', paddingTop: 10, lineHeight: 23, fontSize: 15}}>
                                        FabHotel Cabana is located in the affluent colony of Greater Kailash, and is one of the premium properties for travelers looking for an affordable yet luxurious stay. It offers:
                                    </Text>
                                </View>
                                <View style={{paddingTop: 10, flexDirection: 'row'}}>
                                    <Entypo name="dot-single" style={{color: '#4d4b4e', opacity: 0.7, marginRight: 3, fontSize: 26}}/>
                                    <Text style={{color: '#4d4b4e', lineHeight: 23, paddingRight: 30}}>A delightful stay for business travelers and families close in a safe and posh locality</Text>
                                </View>
                                <View style={{paddingTop: 10, flexDirection: 'row'}}>
                                    <Entypo name="dot-single" style={{color: '#4d4b4e', opacity: 0.7, marginRight: 3, fontSize: 26}}/>
                                    <Text style={{color: '#4d4b4e', lineHeight: 23, paddingRight: 30}}>Spacious air-conditioned rooms with modern interiors and all basic amenities such as TV, attached bathrooms, laptop table, and free Wi-Fi</Text>
                                </View>
                                <View style={{paddingTop: 10, flexDirection: 'row'}}>
                                    <Entypo name="dot-single" style={{color: '#4d4b4e', opacity: 0.7, marginRight: 3, fontSize: 26}}/>
                                    <Text style={{color: '#4d4b4e', lineHeight: 23, paddingRight: 30}}>Easy access to popular shopping destinations in Delhi such as M-Block and N-Block Greater Kailash-I markets, and Lajpat Nagar markets</Text>
                                </View>
                            </View>
                            <View style={{alignItems: 'flex-end', paddingTop: 20}}>
                                <Text style={{color: 'rgb(55, 154, 255)', fontSize: 14, fontWeight: 'bold'}}>VIEW MORE</Text>
                            </View>
                        </View>
                        <View style={{width: window.width, height: 110, backgroundColor: '#f0f3f7', padding: 20}}>
                            <View style={{borderWidth: 1, borderColor: 'rgb(255, 0, 0)', height: 70, backgroundColor: 'rgba(245,33,65,.1)', flexDirection: 'row'}}>
                                <View style={{flex: 0.15, alignItems: 'center', justifyContent: 'center', paddingLeft: 10, paddingRight: 10}}>
                                    <Ionicons name="ios-alarm-outline" style={{color: 'rgb(255, 0, 0)', fontSize: 38}}/>
                                </View>
                                <View style={{flex: 0.85, paddingRight: 10, alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{color: 'rgb(255, 0, 0)'}}>5 people have recently booked this FabHotel.
                                        Hurry up! Book now before it's sold out.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{width: window.width, height: 150, paddingBottom: 10, backgroundColor: '#f0f3f7'}}>
                            <View style={{backgroundColor: '#ffffff', height: 130, paddingLeft: 10, paddingRight: 10, paddingTop: 15}}>
                                <View style={{height: 20, flexDirection: 'row'}}>
                                    <View style={{flex: 1.5}}>
                                        <Text style={{color: '#4d4b4e', fontSize: 20, fontWeight: 'bold'}}>547 Reviews</Text>
                                    </View>
                                    <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                                        <Text style={{color: 'rgb(55, 154, 255)'}}>VIEW ALL</Text>
                                    </View>
                                </View>
                                <View style={{height: 30, paddingTop: 20, flexDirection: 'row'}}>
                                    <View style={{ flex: 0.16, backgroundColor: '#00b96e', height: 20, marginLeft: 3, alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 16, color: '#ffffff', fontWeight: 'bold'}}>4.0/5</Text>
                                    </View>
                                    <View style={{ flex: 0.44, height: 20, paddingLeft: 3, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
                                            <Text style={{fontSize: 15, color: '#4d4b4e', fontWeight: 'bold'}}> Sachin Rangwani </Text>
                                    </View>
                                    <View style={{ flex: 0.4, height: 20, paddingLeft: 3, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 14, color: '#4d4b4e', opacity: 0.7}}> 07 May </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{width: window.width, height: 60, flexDirection: 'row'}}>
                            <View style={{flex: 1, paddingLeft: 10, justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4d4b4e'}}>Cancellation Policies</Text>
                            </View>
                            <View style={{flex: 1, paddingRight: 10, alignItems: 'flex-end', justifyContent: 'center'}}>
                                <Entypo name="chevron-thin-down" style={{fontSize: 26, color: 'rgb(55, 154, 255)'}}/>
                            </View>
                        </View>
                        <View style={{width: window.width, height: 1, backgroundColor: '#f0f3f7', opacity: 0.7}}>
                        </View>
                        <View style={{width: window.width, height: 60, flexDirection: 'row'}}>
                            <View style={{flex: 1, paddingLeft: 10, justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4d4b4e'}}>Children and Extra Beds</Text>
                            </View>
                            <View style={{flex: 1, paddingRight: 10, alignItems: 'flex-end', justifyContent: 'center'}}>
                                <Entypo name="chevron-thin-down" style={{fontSize: 26, color: 'rgb(55, 154, 255)'}}/>
                            </View>
                        </View>
                        <View style={{width: window.width, height: 180, paddingTop: 10, paddingBottom: 10, backgroundColor: '#f0f3f7'}}>
                            <View style={{flexDirection: 'row', paddingTop: 15}}>
                                <View style={{flex: 0.15, alignItems: 'center', justifyContent: 'flex-start', paddingLeft: 10, paddingRight: 10}}>
                                    <FontAwesome name="vcard-o" style={{color: '#4d4b4e', fontSize: 30}}/>
                                </View>
                                <View style={{flex: 0.85, paddingRight: 10, alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{color: '#4d4b4e'}}>
                                        All Indian guests are required to present a valid photo ID proof
                                        (Voter's ID, Driving License, Aadhar Card, Passport or any other ID with address approved by the Government of India)
                                        at the time of check-in, else the property has the right to deny admission. A PAN Card is not acceptable.
                                    </Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', paddingTop: 15}}>
                                <View style={{flex: 0.15, alignItems: 'center', justifyContent: 'flex-start', paddingLeft: 10, paddingRight: 10}}>
                                    <MaterialCommunityIcons name="passport" style={{color: '#4d4b4e', fontSize: 30}}/>
                                </View>
                                <View style={{flex: 0.85, paddingRight: 10, alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{color: '#4d4b4e'}}>
                                        Foreign guests are required to produce a valid passport and visa.
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <View style={[styles.footerTabs, { flexDirection: 'column' }]}>
                        <View style={{ flex: 1, alignItems: 'flex-start', paddingLeft: window.width * 0.05}}>
                            <Text style={{color: '#3c3c3c', opacity: 0.69}}>Starts from</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-start', paddingLeft: window.width * 0.05, flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row'}}>
                                <FontAwesome name="rupee" style={{color: '#3c3c3c', opacity: 0.69, textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 11}}></FontAwesome>
                                <Text style={{color: '#3c3c3c', opacity: 0.69, textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 11}}>1,666</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingLeft: 12}}>
                                <FontAwesome name="rupee" style={{color: '#3c3c3c', fontSize: 16}}></FontAwesome>
                                <Text style={{color: '#3c3c3c', fontSize: 16}}>1,053/night</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.footerTabs}>
                        <TouchableOpacity
                            onPress={() => console.log('button pressed')}
                            style={styles.footerButton}
                        >
                            <Text style={{color: '#1e254a', fontSize: 16, fontWeight: 'bold'}}>SELECT ROOM</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: window.height * 0.1,
        width: window.width,
        backgroundColor: '#1e254a',
        flexDirection: 'row',
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2
    },
    backButton: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 5
    },
    rightNavs: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    rightNavIconWrapper: {
        flex: 0.25,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 8,
    },
    icons: {
        color: '#ffffff',
        fontSize: 24
    },
    footer: {
        height: window.height * 0.15,
        width: window.width,
        flexDirection: 'row',
        paddingTop: window.height * 0.15 * 0.2,
        paddingBottom: window.height * 0.15 * 0.35,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2
    },
    footerTabs: {
        flex: 1
    },
    footerButton: {
        backgroundColor: '#fddc2c',
        alignItems: 'center',
        justifyContent: 'center',
        width: window.width * 0.47,
        height: window.height * 0.15 * 0.55 * 0.8,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
    },
    contentWrapper: {
        width: window.width
    }
})

export default AppRoot