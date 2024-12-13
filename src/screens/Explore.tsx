import React, {useContext} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SidebarContext} from '../context/SidebarContext';
import Logo from '../assets/icons/Logo';
import SidebarIcon from '../assets/icons/SidebarIcon';
import {NavigationContext} from '../context/NavigationContext';
import ExploreIcon from '../assets/icons/ExploreIcon';
import {FlatList} from 'react-native-gesture-handler';
import {
  connectionRecommendations,
  eventRecommendations,
  nearYou,
} from '../constants/staticData';
import {BlurView} from '@react-native-community/blur';
import FilterIcon from '../assets/icons/FilterIcon';
import HamburgerIcon from '../assets/icons/HamburgerIcon';

interface IEvent {
  title: string;
  location: string;
  topLabel: string;
  time: string;
  cover: string;
}

interface IProfile {
  name: string;
  location: string;
  cover: string;
}

const renderEvent = ({item}: {item: IEvent}) => (
  <ImageBackground source={{uri: item.cover}} style={styles.eventCard}>
    <View style={styles.topLabelContainer}>
      <BlurView style={styles.topLabel}>
        <View>
          <Text style={styles.label}>{item.topLabel}</Text>
        </View>
      </BlurView>
    </View>
    <View style={styles.timeLabelContainer}>
      <BlurView style={styles.timeLabel}>
        <View>
          <Text style={styles.label}>{`🗓️ ${item.time}`}</Text>
        </View>
      </BlurView>
    </View>
    <View style={styles.eventInfoContainer}>
      <BlurView style={styles.blurContainer}>
        <View>
          <Text style={styles.eventTitle}>{item.title}</Text>
        </View>
        <View>
          <Text style={styles.eventLocation}>{item.location}</Text>
        </View>
      </BlurView>
    </View>
  </ImageBackground>
);

const renderProfile = ({item}: {item: IProfile}) => (
  <ImageBackground
    source={{uri: item.cover}}
    style={styles.profileCard}
    blurRadius={90}>
    <View style={styles.profileContent}>
      <Image style={styles.profileImage} source={{uri: item.cover}} />
      <Text style={styles.profileName}>{item.name}</Text>
      <Text style={styles.profileLocation}>{item.location}</Text>
      <TouchableOpacity style={styles.addConnectionButton}>
        <BlurView style={styles.addConnectionBlur}>
          <View>
            <Text style={styles.addConnection}>Add to Pending</Text>
          </View>
        </BlurView>
      </TouchableOpacity>
    </View>
  </ImageBackground>
);

const Explore = () => {
  const {openSidebar} = useContext(SidebarContext);
  const {activeScreenName} = useContext(NavigationContext);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.logoContainer}>
            <Logo />
          </View>
          <Text style={styles.title}>{activeScreenName}</Text>
        </View>
        <TouchableOpacity style={styles.sidebarToggle} onPress={openSidebar}>
          <SidebarIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchIcon}>
          <ExploreIcon tint="#7F7F7F" />
        </View>
        <TextInput
          style={styles.searchInput}
          numberOfLines={1}
          placeholder="Search or paste a link"
          placeholderTextColor={'#7F7F7F'}
        />
      </View>
      <ScrollView
        style={styles.bottomContentContainer}
        contentContainerStyle={styles.bottomContent}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionHeading}>
          Near you<Text style={styles.count}>{` (${nearYou.length})`}</Text>
        </Text>
        <FlatList
          style={styles.eventsList}
          data={nearYou}
          renderItem={renderEvent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.sectionHeading}>
          Events you may like
          <Text
            style={styles.count}>{` (${eventRecommendations.length})`}</Text>
        </Text>
        <View style={styles.filter}>
          <View style={styles.filterTextContainer}>
            <View style={styles.filterIcon}>
              <FilterIcon />
            </View>
            <Text style={styles.filterText}>Filter by your interest</Text>
          </View>
          <View style={styles.filterIcon}>
            <HamburgerIcon />
          </View>
        </View>
        <FlatList
          style={styles.eventsList}
          data={eventRecommendations}
          renderItem={renderEvent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.sectionHeading}>Find new people</Text>
        <FlatList
          style={styles.eventsList}
          data={connectionRecommendations}
          renderItem={renderProfile}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 40,
    aspectRatio: 1,
  },
  title: {
    marginLeft: 10,
    fontSize: 24,
    fontFamily: 'SF-Pro-Display-Semibold',
    color: '#fff',
  },
  sidebarToggle: {
    width: 40,
    aspectRatio: 1,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginTop: 5,
    marginBottom: 15,
  },
  searchIcon: {
    width: 16,
    aspectRatio: 1,
    position: 'absolute',
    left: 30,
    top: 12,
  },
  searchInput: {
    width: '100%',
    color: '#7F7F7F',
    backgroundColor: '#7F7F7F33',
    fontFamily: 'SF-Pro-Display-Regular',
    borderRadius: 10,
    fontSize: 16,
    includeFontPadding: false,
    padding: 10,
    paddingLeft: 35,
  },
  bottomContentContainer: {
    backgroundColor: '#7F7F7F15',
    borderWidth: 0.2,
    borderColor: '#9C9C9C',
    borderRadius: 15,
    marginHorizontal: -0.2,
    paddingVertical: 20,
  },
  bottomContent: {
    paddingBottom: 140,
  },
  sectionHeading: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'SF-Pro-Display-Semibold',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  count: {
    color: '#7F7F7F',
  },
  eventsList: {
    paddingHorizontal: 20,
  },
  eventCard: {
    width: 260,
    aspectRatio: 274 / 311,
    marginRight: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  topLabelContainer: {
    position: 'absolute',
    overflow: 'hidden',
    left: 10,
    top: 10,
    borderRadius: 10,
  },
  topLabel: {
    backgroundColor: '#4242424D',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
  },
  label: {
    textAlign: 'center',
    fontFamily: 'SF-Pro-Display-Regular',
    color: '#fff',
  },
  timeLabelContainer: {
    position: 'absolute',
    overflow: 'hidden',
    right: 10,
    bottom: 80,
    borderRadius: 10,
  },
  timeLabel: {
    backgroundColor: '#4242424D',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
  },
  eventInfoContainer: {
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  blurContainer: {
    position: 'relative',
    width: '100%',
    paddingHorizontal: 10,
  },
  eventTitle: {
    maxWidth: '100%',
    color: '#fff',
    fontFamily: 'SF-Pro-Display-Semibold',
    fontSize: 16,
    includeFontPadding: false,
    marginBottom: 2,
    marginTop: 15,
  },
  eventLocation: {
    maxWidth: '100%',
    color: '#7F7F7F',
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 16,
    includeFontPadding: false,
    marginBottom: 15,
  },
  filter: {
    paddingHorizontal: 20,
    marginBottom: 15,
    marginTop: -10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterIcon: {
    width: 16,
    aspectRatio: 1,
  },
  filterText: {
    color: '#7F7F7F',
    marginLeft: 5,
    fontFamily: 'SF-Pro-Display-Regular',
  },
  profileCard: {
    width: 180,
    aspectRatio: 161 / 173,
    marginRight: 20,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  profileContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  profileImage: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 40,
  },
  profileName: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'SF-Pro-Display-Semibold',
    includeFontPadding: false,
  },
  profileLocation: {
    textAlign: 'center',
    color: '#C2C2C2',
    fontFamily: 'SF-Pro-Display-Regular',
    includeFontPadding: false,
  },
  addConnectionButton: {
    width: '80%',
    borderRadius: 30,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  addConnectionBlur: {
    paddingVertical: 10,
    backgroundColor: '#3D3D3D80',
  },
  addConnection: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'SF-Pro-Display-Semibold',
    includeFontPadding: false,
  },
});

export default Explore;
