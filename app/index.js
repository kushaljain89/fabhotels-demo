import React from 'react'
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native'
import {
    MaterialIcons,
    Ionicons,
    MaterialCommunityIcons,
    FontAwesome,
    Feather,
    Entypo,
    EvilIcons
} from '@expo/vector-icons'
import {Styles, Colors, window} from "./styles";

class AppRoot extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            promoPopupVisible: true
        }
    }

    closePromoPopup() {
        this.setState({
            promoPopupVisible: false
        })
    }

    render() {
        return (
            <View>
                {/* Scroll View */}
                <ScrollView style={{height: window.height * 0.85, width: window.width}}>
                    {/* Header */}
                    <View style={Styles.header}>
                        <View style={Styles.backButton}>
                            <MaterialIcons name="chevron-left" style={Styles.icons}></MaterialIcons>
                        </View>
                    </View>
                    {
                        // Promo Pop up
                        this.state.promoPopupVisible ? (<View style={Styles.promoPopup}>
                            <View style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
                                <Image source={require('./assets/images/coupon/coupon.png')}/>
                            </View>
                            <View style={{flex: 0.6, alignItems: 'flex-start', justifyContent: 'center'}}>
                                <Text style={{fontSize: 13, color: Colors.darkBlue}}>
                                    <Text style={{fontWeight: 'bold'}}>STAYFAB</Text> coupon code pre-applied!
                                </Text>
                            </View>
                            <View style={{flex: 0.2, justifyContent: 'center'}}>
                                <View style={{
                                    backgroundColor: Colors.green,
                                    width: 65,
                                    height: 25,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{color: Colors.white, fontWeight: 'bold', fontSize: 12}}>37% off</Text>
                                </View>
                            </View>
                            <View style={{flex: 0.1, alignItems: 'flex-start', justifyContent: 'center'}}>
                                <EvilIcons name="close" onPress={this.closePromoPopup.bind(this)} style={{
                                    fontSize: 32
                                }}/>
                            </View>
                        </View>) : <View></View>
                    }
                    <View style={Styles.contentWrapper}>
                        <View style={{width: window.width, height: 220}}>
                            <View style={Styles.roomsLeft}><Text style={{
                                color: '#ffffff',
                                fontSize: 14,
                                fontWeight: 'bold'
                            }}>4 rooms left</Text></View>
                            <Image
                                style={{width: window.width, height: 220}}
                                source={{uri: 'https://pimg.fabhotels.com/propertyimages/642/main/main-photos-fabhotel-cabana-gk1-new-delhi-Hotels-20180115010632.jpg'}}/>
                        </View>

                        <View style={{width: window.width, height: 130, paddingLeft: 10, paddingTop: 15}}>
                            <View style={{height: 10}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#3c3c3c'}}> Fabhotel
                                    Cabana </Text>
                            </View>
                            <View style={{height: 30, paddingTop: 20, flexDirection: 'row'}}>
                                <View style={{
                                    flex: 0.18,
                                    backgroundColor: Colors.green,
                                    height: 30,
                                    marginLeft: 3,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{fontSize: 20, color: Colors.white}}>4.0</Text>
                                </View>
                                <View style={{
                                    flex: 0.22,
                                    height: 30,
                                    paddingLeft: 3,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center'
                                }}>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: Colors.green,
                                            fontWeight: 'bold'
                                        }}> Good </Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <Text style={{fontSize: 14, color: Colors.lightBlue, fontWeight: '400'}}> 547
                                            Reviews</Text>
                                    </View>
                                </View>
                                <View style={{flex: 0.15, height: 30, justifyContent: 'center', paddingLeft: 5}}>
                                    <FontAwesome name="angle-right"
                                                 style={{color: Colors.lightBlue, fontSize: 16}}/>
                                </View>
                            </View>
                            <View style={{height: 30, paddingTop: 30}}>
                                <Text style={{color: Colors.black, opacity: 0.5}}>R23, Greater Kailash 1, New Delhi,
                                    India - 110048</Text>
                                <Text style={{color: Colors.lightBlue, fontWeight: '400'}}>Show on map</Text>
                            </View>
                        </View>
                        <View style={{
                            width: window.width,
                            height: 133,
                            paddingLeft: 10,
                            paddingTop: 15,
                            backgroundColor: '#f0f3f7',
                            paddingRight: 10
                        }}>
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
                                    <Text style={{fontSize: 14, color: '#4d4b4e', opacity: 0.5}}>CHECK IN</Text>
                                    <Text
                                        style={{fontSize: 20, marginTop: 5, fontWeight: 'bold', color: '#4d4b4e'}}>Tue,
                                        15 May</Text>
                                    <Text style={{fontSize: 14, color: '#4d4b4e', opacity: 0.5, marginTop: 5}}>From
                                        12:00 PM</Text>
                                </View>
                                <View style={{flex: 1, alignItems: 'flex-end'}}>
                                    <Text style={{fontSize: 14, color: '#4d4b4e', opacity: 0.5}}>CHECK OUT</Text>
                                    <Text
                                        style={{fontSize: 20, marginTop: 5, fontWeight: 'bold', color: '#4d4b4e'}}>Wed,
                                        16 May</Text>
                                    <Text style={{fontSize: 14, color: '#4d4b4e', opacity: 0.5, marginTop: 5}}>Till
                                        11:00 AM</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            width: window.width,
                            height: 255,
                            paddingLeft: 10,
                            paddingTop: 15,
                            paddingRight: 10
                        }}>
                            <View>
                                <Text style={{color: '#4d4b4e', fontSize: 20, fontWeight: 'bold'}}>Room
                                    Features</Text>
                            </View>
                            <View>
                                <View style={{flexDirection: 'row', paddingTop: 15}}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Image source={require('./assets/images/wifi/wifi.png')}/>
                                        <Text style={{color: '#4d4b4e', fontSize: 15, marginLeft: 7}}>Free
                                            Wifi</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Image
                                            source={require('./assets/images/windconditioning/windconditioning.png')}/>
                                        <Text style={{color: '#4d4b4e', fontSize: 15, marginLeft: 7}}>Air
                                            Conditioner</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', paddingTop: 20}}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Image source={require('./assets/images/towels/towels.png')}/>
                                        <Text style={{color: '#4d4b4e', fontSize: 15, marginLeft: 7}}>Towels</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Image source={require('./assets/images/safebox/safebox.png')}/>
                                        <Text style={{color: '#4d4b4e', fontSize: 15, marginLeft: 7}}>Lockers</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={{color: '#4d4b4e', fontSize: 18, fontWeight: 'bold', paddingTop: 20}}>Other
                                    Features</Text>
                            </View>
                            <View>
                                <View style={{flexDirection: 'row', paddingTop: 15}}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Image source={require('./assets/images/parking/parking.png')}/>
                                        <Text
                                            style={{color: '#4d4b4e', fontSize: 15, marginLeft: 7}}>Parking</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Image source={require('./assets/images/conference/conference.png')}/>
                                        <Text style={{color: '#4d4b4e', fontSize: 15, marginLeft: 7}}>Conference
                                            Hall</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{alignItems: 'flex-end', paddingTop: 20}}>
                                <Text style={{color: 'rgb(55, 154, 255)', fontSize: 14, fontWeight: 'bold'}}>VIEW
                                    MORE</Text>
                            </View>
                        </View>
                        <View style={{
                            width: window.width,
                            height: 370,
                            paddingLeft: 10,
                            paddingTop: 10,
                            paddingRight: 10
                        }}>
                            <View>
                                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#4d4b4e'}}>Overview</Text>
                            </View>
                            <View>
                                <View>
                                    <Text style={{color: '#4d4b4e', paddingTop: 10, lineHeight: 23, fontSize: 15}}>
                                        FabHotel Cabana is located in the affluent colony of Greater Kailash, and is
                                        one of the premium properties for travelers looking for an affordable yet
                                        luxurious stay. It offers:
                                    </Text>
                                </View>
                                {
                                    [
                                        'A delightful stay for business travelers and families close in a safe and posh locality',
                                        'Spacious air-conditioned rooms with modern interiors and all basic amenities such as TV, attached bathrooms, laptop table, and free Wi-Fi',
                                        'Easy access to popular shopping destinations in Delhi such as M-Block and N-Block Greater Kailash-I markets, and Lajpat Nagar markets'
                                    ].map((rowData, index) => (
                                        <View style={{paddingTop: 10, flexDirection: 'row'}} key={index}>
                                            <View style={{flex: 0.1}}>
                                                <Entypo name="dot-single"
                                                        style={{color: '#4d4b4e', opacity: 0.7, fontSize: 46}}/>
                                            </View>
                                            <View style={{flex: 0.9}}>
                                                <Text style={{color: '#4d4b4e', lineHeight: 23}}>{rowData}</Text>
                                            </View>
                                        </View>))
                                }
                            </View>
                            <View style={{alignItems: 'flex-end', paddingTop: 20}}>
                                <Text style={{color: 'rgb(55, 154, 255)', fontSize: 14, fontWeight: 'bold'}}>VIEW
                                    MORE</Text>
                            </View>
                        </View>

                        <View style={{width: window.width, height: 5, backgroundColor: Colors.lightGrey}}/>

                        <View style={{
                            width: window.width,
                            paddingTop: 10
                        }}>
                            <View style={{paddingRight: 10, paddingLeft: 10}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#4d4b4e'}}>Hotel Map</Text>
                            </View>
                            <View style={Styles.mapViewWrapper}>
                                <View>
                                    <Text>Hello</Text>
                                </View>
                                <View style={{flexDirection: 'row', position: 'absolute', bottom: 0}}>
                                    <View style={{flex: 0.5, height: 20, backgroundColor: Colors.white}}/>
                                    <View style={[Styles.triangleCorner, {
                                        transform: [
                                            {rotate: '270deg'}
                                        ]
                                    }]}/>
                                    <View style={[Styles.triangleCorner, {
                                        transform: [
                                            {rotate: '180deg'}
                                        ]
                                    }]}/>
                                    <View style={{flex: 0.5, height: 20, backgroundColor: Colors.white}}/>
                                </View>
                            </View>
                            <View style={{paddingRight: 10, paddingLeft: 10, height: 165}}>
                                <View>
                                    <Text style={{fontSize: 14, fontWeight: 'bold', color: Colors.black}}>Nearest
                                        Landmarks</Text>
                                </View>
                                {
                                    [{
                                        place: 'Airport',
                                        distance: 5.3
                                    }, {
                                        place: 'Metro Station',
                                        distance: 7.6
                                    }, {
                                        place: 'Railway Station',
                                        distance: 9.5
                                    }].map((place, index) => <View style={{flexDirection: 'row', paddingTop: 15}}
                                                                   key={index}>
                                        <View style={{flex: 1, alignItems: 'flex-start'}}>
                                            <Text style={{color: Colors.black}}>{place.place}</Text>
                                        </View>
                                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                                            <Text style={{color: Colors.black}}>{place.distance} Km</Text>
                                        </View>
                                    </View>)
                                }
                                <View style={{alignItems: 'flex-end', paddingTop: 20}}>
                                    <Text style={{color: 'rgb(55, 154, 255)', fontSize: 14, fontWeight: 'bold'}}>VIEW
                                        MORE</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            width: window.width,
                            height: 180,
                            paddingTop: 10,
                            paddingBottom: 10,
                            backgroundColor: Colors.lightGrey
                        }}>
                            <View style={{flexDirection: 'row', paddingTop: 15}}>
                                <View style={{
                                    flex: 0.15,
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    paddingLeft: 10,
                                    paddingRight: 10
                                }}>
                                    <FontAwesome name="vcard-o" style={{color: '#4d4b4e', fontSize: 30}}/>
                                </View>
                                <View style={{
                                    flex: 0.85,
                                    paddingRight: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{color: '#4d4b4e'}}>
                                        All Indian guests are required to present a valid photo ID proof
                                        (Voter's ID, Driving License, Aadhar Card, Passport or any other ID with
                                        address approved by the Government of India)
                                        at the time of check-in, else the property has the right to deny admission.
                                        A PAN Card is not acceptable.
                                    </Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', paddingTop: 15}}>
                                <View style={{
                                    flex: 0.15,
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    paddingLeft: 10,
                                    paddingRight: 10
                                }}>
                                    <MaterialCommunityIcons name="passport"
                                                            style={{color: '#4d4b4e', fontSize: 30}}/>
                                </View>
                                <View style={{
                                    flex: 0.85,
                                    paddingRight: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{color: '#4d4b4e'}}>
                                        Foreign guests are required to produce a valid passport and visa.
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={{width: window.width, height: 60, flexDirection: 'row'}}>
                            <View style={{flex: 1, paddingLeft: 10, justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4d4b4e'}}>Cancellation
                                    Policies</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                paddingRight: 10,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <Entypo name="chevron-thin-down"
                                        style={{fontSize: 26, color: 'rgb(55, 154, 255)'}}/>
                            </View>
                        </View>
                        <View style={{width: window.width, height: 1, backgroundColor: '#f0f3f7', opacity: 0.7}}>
                        </View>
                        <View style={{width: window.width, height: 60, flexDirection: 'row'}}>
                            <View style={{flex: 1, paddingLeft: 10, justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4d4b4e'}}>Children and
                                    Extra Beds</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                paddingRight: 10,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <Entypo name="chevron-thin-down"
                                        style={{fontSize: 26, color: 'rgb(55, 154, 255)'}}/>
                            </View>
                        </View>

                        <View style={{width: window.width, height: 5, backgroundColor: Colors.lightGrey}}/>

                        <View style={{
                            width: window.width,
                            height: 260,
                            paddingBottom: 10,
                            backgroundColor: '#f0f3f7'
                        }}>
                            <View style={{
                                backgroundColor: '#ffffff',
                                height: 250,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 15
                            }}>
                                <View style={{height: 20, flexDirection: 'row'}}>
                                    <View style={{flex: 1.5}}>
                                        <Text style={{color: '#4d4b4e', fontSize: 20, fontWeight: 'bold'}}>1500+
                                            Reviews</Text>
                                    </View>
                                    <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                                        <Text style={{color: 'rgb(55, 154, 255)'}}>VIEW ALL</Text>
                                    </View>
                                </View>
                                <View style={{height: 30, paddingTop: 20, flexDirection: 'row'}}>
                                    <View style={{
                                        flex: 0.16,
                                        backgroundColor: '#00b96e',
                                        height: 20,
                                        marginLeft: 3,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: '#ffffff',
                                            fontWeight: 'bold'
                                        }}>4.0/5</Text>
                                    </View>
                                    <View style={{
                                        flex: 0.44,
                                        height: 20,
                                        paddingLeft: 3,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{fontSize: 15, color: '#4d4b4e', fontWeight: 'bold'}}> Sachin
                                            Rangwani </Text>
                                    </View>
                                    <View style={{
                                        flex: 0.4,
                                        height: 20,
                                        paddingLeft: 3,
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{fontSize: 14, color: '#4d4b4e', opacity: 0.7}}> 07 May </Text>
                                    </View>
                                </View>
                                <View style={{height: 50, paddingTop: 20, flexDirection: 'row'}}>
                                    <View style={{flex: 0.05, justifyContent: 'center'}}>
                                        <Feather name="shield" style={{color: Colors.green}}></Feather>
                                    </View>
                                    <View style={{flex: 0.95, justifyContent: 'center'}}>
                                        <Text style={{color: Colors.green, marginLeft: 3}}>Verified Guest</Text>
                                    </View>
                                </View>
                                <View style={{height: 90, paddingTop: 20}}>
                                    <Text style={{fontStyle: 'italic', color: Colors.black}}>
                                        “Best hotel with good location and polite staff. It’s nearby the metro station
                                        and had an amazing time over here. I would love to visit again.“Best hotel with
                                        good location and polite staff. It’s nearby the metro station.”
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            width: window.width,
                            paddingBottom: 40,
                            paddingTop: 40,
                            backgroundColor: '#f0f3f7'
                        }}>
                            <View style={{paddingBottom: 20}}>
                                <Text style={{color: Colors.black, fontSize: 18, fontWeight: 'bold'}}>FABHOTELS
                                    NEARBY</Text>
                            </View>
                            <ScrollView horizontal={true} style={{height: 190, backgroundColor: Colors.white}}>
                                <View style={{
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    width: 400,
                                    height: 150,
                                    flexDirection: 'row'
                                }}>
                                    <View style={{flex: 0.32, flexDirection: 'column'}}>
                                        <View style={{height: 130}}>
                                            <Image
                                            resizeMode={'cover'}
                                            source={{
                                                uri: 'https://pimg.fabhotels.com/propertyimages/642/main/main-photos-fabhotel-cabana-gk1-new-delhi-Hotels-20180115010632.jpg'
                                            }} style={{
                                                height: '100%',
                                                width: '100%'
                                            }}
                                            />
                                        </View>
                                        <View style={{height: 20, backgroundColor: Colors.green, alignItems: 'center'}}>
                                            <Text style={{color: Colors.white, fontWeight: 'bold'}}>37% Discount</Text>
                                        </View>
                                    </View>
                                    <View style={{flex: 0.68, paddingLeft: 10, flexDirection: 'column'}}>
                                        <View>
                                            <Text style={{fontSize: 18, color: Colors.lightBlue, fontWeight: 'bold'}}>FabHotel Daffodil</Text>
                                            <Text style={{fontSize: 14, color: Colors.grey, opacity: 0.5, paddingTop: 3}}>Connaught Place</Text>
                                        </View>
                                        <View style={{paddingTop: 5, flexDirection: 'row', height: 30}}>
                                            <View style={{flex: 0.2, backgroundColor: Colors.green, alignItems: 'center', justifyContent: 'center'}}>
                                                <Text style={{color: Colors.white, fontWeight: 'bold', fontSize: 15}}>4.2/5</Text>
                                            </View>
                                            <View style={{flex: 0.8, marginLeft: 5, alignItems: 'flex-start', justifyContent: 'center'}}>
                                                <Text style={{fontSize: 12, color: Colors.green, fontWeight: 'bold'}}>220 Reviews</Text>
                                            </View>
                                        </View>
                                        <View style={{paddingTop: 30, flexDirection: 'row'}}>
                                            <View style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
                                                <Text style={{color: Colors.black, fontWeight: 'bold', fontSize: 15}}>F</Text>
                                            </View>
                                            <View style={{flex: 0.9, marginLeft: 5, alignItems: 'flex-start', justifyContent: 'center'}}>
                                                <Text style={{fontSize: 12, color: Colors.black}}>Earn upto 200 points</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={{fontSize: 12, color: Colors.black}}>Per night price</Text>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
                {/* End Scroll View */}
                <View style={Styles.footer}>
                    <View style={[Styles.footerTabs, {flexDirection: 'column'}]}>
                        <View style={{flex: 1, alignItems: 'flex-start', paddingLeft: window.width * 0.05}}>
                            <Text style={{color: '#3c3c3c', opacity: 0.69}}>Starts from</Text>
                        </View>
                        <View style={{
                            flex: 1,
                            alignItems: 'flex-start',
                            paddingLeft: window.width * 0.05,
                            flexDirection: 'row'
                        }}>
                            <View style={{flexDirection: 'row'}}>
                                <FontAwesome name="rupee" style={{
                                    color: '#3c3c3c',
                                    opacity: 0.69,
                                    textDecorationLine: 'line-through',
                                    textDecorationStyle: 'solid',
                                    fontSize: 11
                                }}/>
                                <Text style={{
                                    color: '#3c3c3c',
                                    opacity: 0.69,
                                    textDecorationLine: 'line-through',
                                    textDecorationStyle: 'solid',
                                    fontSize: 11
                                }}>1,666</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingLeft: 12}}>
                                <FontAwesome name="rupee" style={{color: '#3c3c3c', fontSize: 16}}/>
                                <Text style={{color: '#3c3c3c', fontSize: 16}}>1,053/night</Text>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.footerTabs}>
                        <TouchableOpacity
                            onPress={() => console.log('button pressed')}
                            style={Styles.footerButton}>
                            <Text style={{color: '#1e254a', fontSize: 16, fontWeight: 'bold'}}>SELECT ROOM</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default AppRoot