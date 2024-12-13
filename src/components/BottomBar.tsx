import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import HomeIcon from '../assets/icons/HomeIcon';
import PeopleIcon from '../assets/icons/PeopleIcon';
import ExploreIcon from '../assets/icons/ExploreIcon';
import NewPlanIcon from '../assets/icons/NewPlanIcon';
import PlansIcon from '../assets/icons/PlansIcon';
import {NavigationContext} from '../context/NavigationContext';

interface IButton {
  Icon: ({tint}: {tint: string}) => React.JSX.Element;
  label: string;
}

const BUTTONS: Record<string, IButton> = {
  Home: {Icon: HomeIcon, label: 'Home'},
  People: {Icon: PeopleIcon, label: 'People'},
  ['New Plan']: {Icon: NewPlanIcon, label: 'New Plan'},
  Plans: {Icon: PlansIcon, label: 'Plans'},
  Explore: {Icon: ExploreIcon, label: 'Explore'},
};

const BottomBar = () => {
  const {activeScreenName, setActiveScreenName} = useContext(NavigationContext);

  return (
    <View style={styles.rootContainer}>
      <BlurView style={styles.blurContainer}>
        {Object.keys(BUTTONS).map(item => {
          const {Icon} = BUTTONS[item];
          return (
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() => setActiveScreenName(item)}>
              <View style={styles.iconContainer}>
                <Icon tint={activeScreenName === item ? '#fff' : '#7F7F7F'} />
              </View>
              <Text
                style={[
                  styles.label,
                  {color: activeScreenName === item ? '#fff' : '#7F7F7F'},
                ]}>
                {BUTTONS[item].label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    position: 'absolute',
    width: '100%',
    height: '11.15%',
    bottom: 0,
    overflow: 'hidden',
    backgroundColor: '#25252525',
  },
  blurContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 24,
    aspectRatio: 1,
    marginBottom: 5,
  },
  label: {
    fontFamily: 'SF-Pro-Display-Regular',
  },
});

export default BottomBar;
