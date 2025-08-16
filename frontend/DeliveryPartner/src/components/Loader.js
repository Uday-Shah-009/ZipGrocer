import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing
} from 'react-native-reanimated';

const Loader = () => {
  const spin = useSharedValue(0);

  // Start infinite rotation
  spin.value = withRepeat(
    withTiming(360, { duration: 1000, easing: Easing.linear }),
    -1 // infinite
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${spin.value}deg` }] // ✅ string with units
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.spinner, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: 40,
    height: 40,
    borderWidth: 4,
    borderColor: '#ccc',
    borderTopColor: '#4CAF50', // green top border
    borderRadius: 20,
  },
});

export default Loader;
