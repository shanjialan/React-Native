/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
    Dimensions,
    Platform
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {homepage_block_page} from "../../从零玩转Vue全家桶+项目实战⑿/NeteaseCloudMusicApi-master";

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.sectionContainer}>Hello World!</Text>
      <Text style={styles.sectionTitle}>2021年5月27日</Text>
      <Text style={styles.sectionTitle}>单佳兰</Text>
      <Text style = {
        styles.sectionTitle
      }>当前屏幕的宽高分别为:{Dimensions.get('window').width+'\n'}{Dimensions.get('window').height+'\n'}
      {Dimensions.get('window').scale}</Text>
      <Text style={styles.sectionTitle}>当前运行的平台为：{Platform.OS}</Text>
      <View><Text>View不能直接放文字，必须写在text中</Text></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    top:'50%',
    marginTop: 32,
    paddingHorizontal: 24,
    fontSize:48,
    textAlign:'center'
  },
  sectionTitle: {
    textAlign:'center',
    top:'60%',
    fontSize: 24,
    fontWeight: '600',
    color:'blue',
    fontWeight:'bold'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
