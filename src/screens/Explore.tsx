import React, {useContext} from 'react';
import {
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
      <ScrollView style={styles.bottomContentContainer}>
        <FlatList data={[]} renderItem={() => <></>} />
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
  },
});

export default Explore;
