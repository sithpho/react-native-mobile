import React, { Component } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View
} from 'react-native'

// import Login from './screen/Login'
import ReactAlert from './homework/week02/index'
class App extends Component {
  render () {
    return (
      <ReactAlert />
      // <SafeAreaView>
      //   <View
      //     style={styles.container}
      //   >
      //     <ScrollView horizontal>
      //       <View style={styles.box}>
      //         <Text style={styles.text}>1</Text>
      //       </View>
      //       <View style={styles.box}>
      //         <Text style={styles.text}>2</Text>
      //       </View>
      //       <View style={styles.box}>
      //         <Text style={styles.text}>3</Text>
      //       </View>
      //     </ScrollView>
      //   </View>
      // </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    flexDirection: 'row',
    backgroundColor: '#000'
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20
  }
})

export default App