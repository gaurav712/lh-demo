import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SidebarContext} from '../context/SidebarContext';
import Logo from '../assets/icons/Logo';
import SidebarIcon from '../assets/icons/SidebarIcon';
import {NavigationContext} from '../context/NavigationContext';

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
});

export default Explore;
