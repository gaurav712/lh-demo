import {useContext, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from 'react-native';
import {SidebarContext} from '../context/SidebarContext';
import {BlurView} from '@react-native-community/blur';
import CheckBox from './CheckBox';
import ChevronRight from '../assets/icons/ChevronRight';

const ANIMATION_DURATION = 200; // in ms

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useContext(SidebarContext);
  const {width} = useWindowDimensions();
  const animatedValue = useRef(new Animated.Value(-1 * width)).current;

  const [groups, setGroups] = useState<Record<string, any>>({
    CreatedBy: false,
    Location: false,
    Time: false,
    Availability: false,
  });

  const [plans, setPlans] = useState<Record<string, any>>({
    Events: false,
    Hangs: false,
    Groups: false,
    CoHangs: false,
  });

  const [filters, setFilters] = useState<Record<string, any>>({
    CreatedBy: {
      All: false,
      BestBuddies: false,
      CloseBuddies: false,
      Buddies: false,
      Acquaintances: false,
    },
    Location: {
      NearMe: false,
      Brooklyn: false,
      Manhattan: false,
      Queens: false,
      StatenIsland: false,
    },
    Time: {
      SignUpCloseTime: false,
      UpcomingHangs: false,
    },
    Availability: {
      LimitedTickets: false,
      UpcomingHangs: false,
    },
  });

  const togglePlan = (filterKey: string) => {
    setPlans(prev => ({
      ...prev,
      [filterKey]: !prev[filterKey],
    }));
  };

  const toggleGroup = (groupKey: string) => {
    setGroups(prev => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  };

  const toggleFilter = (groupKey: string, filterKey: string) => {
    setFilters(prev => ({
      ...prev,
      [groupKey]: {
        ...prev[groupKey],
        [filterKey]: !prev[groupKey][filterKey],
      },
    }));
  };

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
              <View style={styles.contentContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View>
                    <View style={styles.plansHeading}>
                      <Text style={styles.header}>Plans</Text>
                      <TouchableOpacity style={styles.editButton}>
                        <BlurView style={styles.buttonBlurContainer} />
                        <Text style={styles.editButtonText}>Edit</Text>
                      </TouchableOpacity>
                    </View>
                    {Object.keys(plans).map(item => (
                      <TouchableOpacity
                        key={item}
                        style={styles.optionContainer}
                        onPress={() => togglePlan(item)}>
                        <CheckBox
                          label={item.replace(/([A-Z])/g, ' $1').trim()}
                          value={plans[item]}
                        />
                      </TouchableOpacity>
                    ))}
                  </View>
                  <Text style={styles.filtersHeading}>Filters</Text>
                  {Object.keys(groups).map(groupKey => (
                    <View key={groupKey}>
                      <TouchableOpacity
                        style={styles.dropdownHeader}
                        onPress={() => toggleGroup(groupKey)}>
                        <Text style={styles.dropdownText}>
                          {groupKey.replace(/([A-Z])/g, ' $1').trim()}
                        </Text>
                        <View
                          style={[
                            styles.chevronIcon,
                            {
                              transform: [
                                {rotate: groups[groupKey] ? '90deg' : '0deg'},
                              ],
                            },
                          ]}>
                          <ChevronRight />
                        </View>
                      </TouchableOpacity>
                      {groups[groupKey] &&
                        Object.keys(filters[groupKey]).map(filterKey => (
                          <TouchableOpacity
                            key={filterKey}
                            style={styles.optionContainer}
                            onPress={() => toggleFilter(groupKey, filterKey)}>
                            <CheckBox
                              label={filterKey
                                .replace(/([A-Z])/g, ' $1')
                                .trim()}
                              value={filters[groupKey][filterKey]}
                            />
                          </TouchableOpacity>
                        ))}
                    </View>
                  ))}
                </ScrollView>
                <View style={styles.footer}>
                  <TouchableOpacity style={styles.applyButton}>
                    <BlurView style={styles.buttonBlurContainer} />
                    <Text style={styles.applyText}>Apply</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cancelButton}>
                    <BlurView style={styles.buttonBlurContainer} />
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  plansHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'SF-Pro-Display-Semibold',
  },
  editButton: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  buttonBlurContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#5E5E5E80',
  },
  editButtonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'SF-Pro-Display-Semibold',
  },
  filtersHeading: {
    marginTop: 10,
    fontSize: 20,
    color: '#fff',
    fontFamily: 'SF-Pro-Display-Semibold',
  },
  dropdownHeader: {
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chevronIcon: {
    width: 12,
    aspectRatio: 1,
  },
  dropdownText: {
    fontSize: 16,
    color: '#7F7F7F',
    fontFamily: 'SF-Pro-Display-Semibold',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  applyButton: {
    padding: 7,
    flex: 1,
    marginRight: 5,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#3D3D3D33',
    borderWidth: 1,
    borderColor: '#ffffff40',
  },
  cancelButton: {
    padding: 7,
    flex: 1,
    marginLeft: 5,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#00000080',
    borderWidth: 1,
    borderColor: '#ffffff40',
  },
  applyText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'SF-Pro-Display-Semibold',
  },
  cancelText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'SF-Pro-Display-Semibold',
  },
});

export default Sidebar;
