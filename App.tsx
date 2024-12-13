import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SidebarContext} from './src/context/SidebarContext';
import Sidebar from './src/components/Sidebar';
import BackgroundImage from './src/assets/images/bg.png';
import BottomBar from './src/components/BottomBar';

const App: () => React.JSX.Element = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <SidebarContext.Provider value={{isSidebarOpen, openSidebar, closeSidebar}}>
      <ImageBackground
        style={styles.container}
        source={BackgroundImage}
        blurRadius={90}>
        <SafeAreaView style={styles.innerContainer}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor="transparent"
            translucent={true}
          />
          <TouchableOpacity onPress={openSidebar}>
            <Text
              style={{color: 'white', fontFamily: 'SF-Pro-Display-Regular'}}>
              OpenSidebar
            </Text>
            <Text
              style={{color: 'white', fontFamily: 'SF-Pro-Display-Semibold'}}>
              OpenSidebar
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
        <BottomBar />
        <Sidebar />
      </ImageBackground>
    </SidebarContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default App;
