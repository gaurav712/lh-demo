import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {SidebarContext} from './src/context/SidebarContext';
import Sidebar from './src/components/Sidebar';
import BackgroundImage from './src/assets/images/bg.png';
import BottomBar from './src/components/BottomBar';
import Explore from './src/screens/Explore';
import {NavigationContext} from './src/context/NavigationContext';

const App: () => React.JSX.Element = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [activeScreenName, setActiveScreenName] = useState<string>('Explore');

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <NavigationContext.Provider value={{activeScreenName, setActiveScreenName}}>
      <SidebarContext.Provider
        value={{isSidebarOpen, openSidebar, closeSidebar}}>
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
            <Explore />
          </SafeAreaView>
          <BottomBar />
          <Sidebar />
        </ImageBackground>
      </SidebarContext.Provider>
    </NavigationContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#00000099',
    paddingTop: StatusBar.currentHeight,
  },
});

export default App;
