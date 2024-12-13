import {useContext, useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from 'react-native';
import {SidebarContext} from '../context/SidebarContext';
import {BlurView} from '@react-native-community/blur';

const ANIMATION_DURATION = 200; // in ms

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useContext(SidebarContext);
  const {width} = useWindowDimensions();
  const animatedValue = useRef(new Animated.Value(-1 * width)).current;

  const close = () => {
    Animated.timing(animatedValue, {
      toValue: -1 * width,
      duration: ANIMATION_DURATION,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start();
    closeSidebar();
  };

  useEffect(() => {
    if (isSidebarOpen) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }).start();
    }
  }, [isSidebarOpen]);

  return (
    <Animated.View
      style={[
        styles.absoluteFill,
        {
          transform: [{translateX: animatedValue}],
        },
      ]}>
      <TouchableWithoutFeedback onPress={close}>
        <View style={styles.absoluteFill}>
          <TouchableWithoutFeedback>
            <View style={styles.sidebarContainer}>
              <BlurView style={styles.blurContainer} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  absoluteFill: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  sidebarContainer: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    height: '100%',
    backgroundColor: '#7F7F7F33',
    width: '80%',
    overflow: 'hidden',
  },
  blurContainer: {
    flex: 1,
  },
});

export default Sidebar;
