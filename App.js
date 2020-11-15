/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


export default class MyHomeApp extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>HOME</Text>
        <Text>
        Before we jump into Electrode Native Navigation, it’s essential to understand what Electrode Native is, and why we have created this framework. Electrode Native allows for the combination of multiple MiniApps (React Native applications) into a single container. The container is generated entirely by the Electrode Native platform and is packaged as an AAR library for Android and as a Framework for iOS (these libraries are similar to standard third-party libraries that Android and iOS developers are familiar with).
        </Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: "#65DD33",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: "#CCDFD4",
  }
});

