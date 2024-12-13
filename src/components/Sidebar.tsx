import {useContext, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  ScrollView,
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

const ANIMATION_DURATION = 200; // in ms

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useContext(SidebarContext);
  const {width} = useWindowDimensions();
  const animatedValue = useRef(new Animated.Value(-1 * width)).current;

  const [groups, setGroups] = useState<Record<string, any>>({
    Plans: false,
    CreatedBy: false,
    Location: false,
    Time: false,
    Availability: false,
  });

  const [filters, setFilters] = useState<Record<string, any>>({
    Plans: {
      Events: false,
      Hangs: false,
      Groups: false,
      CoHangs: false,
    },
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
              <BlurView style={styles.blurContainer}>
                <View style={styles.contentContainer}>
                  <Text style={styles.header}>Filters</Text>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    {Object.keys(groups).map(groupKey => (
                      <View key={groupKey}>
                        <TouchableOpacity
                          style={styles.dropdownHeader}
                          onPress={() => toggleGroup(groupKey)}>
                          <Text style={styles.dropdownText}>
                            {groupKey.replace(/([A-Z])/g, ' $1').trim()}
                          </Text>
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
                                onValueChange={() =>
                                  toggleFilter(groupKey, filterKey)
                                }
                              />
                            </TouchableOpacity>
                          ))}
                      </View>
                    ))}
                  </ScrollView>
                  <View style={styles.footer}>
                    <TouchableOpacity style={styles.applyButton}>
                      <Text style={styles.applyText}>Apply</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton}>
                      <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </BlurView>
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
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  dropdownHeader: {
    marginTop: 20,
    borderRadius: 5,
  },
  dropdownText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  applyButton: {
    backgroundColor: '#6A0572',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  cancelButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
  },
  applyText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelText: {
    color: '#000',
    textAlign: 'center',
  },
});

export default Sidebar;
