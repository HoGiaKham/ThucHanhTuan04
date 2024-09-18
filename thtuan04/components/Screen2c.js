import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Screen2c() {
  const [checkedLower, setCheckedLower] = useState(false);
  const [checkedUpper, setCheckedUpper] = useState(false);
  const [checkedNumber, setCheckedNumber] = useState(false);
  const [checkedSpecial, setCheckedSpecial] = useState(false);

  const toggleCheckboxLower = () => {
    setCheckedLower(!checkedLower);
  };

  const toggleCheckboxUpper = () => {
    setCheckedUpper(!checkedUpper);
  };

  const toggleCheckboxNumber = () => {
    setCheckedNumber(!checkedNumber);
  };

  const toggleCheckboxSpecial = () => {
    setCheckedSpecial(!checkedSpecial);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD {'\n'}GENERATOR</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="lightgray"
      />
      <View style={styles.rowContainer}>
        <Text style={styles.message}>Password length</Text>
        <TextInput
          style={styles.lengthInput}
          placeholderTextColor="lightgray"
        />
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.message}>Include lower case letters</Text>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={toggleCheckboxLower}
        >
          <Text style={styles.checkbox}>
            {checkedLower ? '✔️' : '⬜'} {/* Dấu tích khi checked, ô trống khi chưa */}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.message}>Include upper case letters</Text>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={toggleCheckboxUpper}
        >
          <Text style={styles.checkbox}>
            {checkedUpper ? '✔️' : '⬜'} {/* Dấu tích khi checked, ô trống khi chưa */}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.message}>Include number</Text>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={toggleCheckboxNumber}
        >
          <Text style={styles.checkbox}>
            {checkedNumber ? '✔️' : '⬜'} {/* Dấu tích khi checked, ô trống khi chưa */}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.message}>Include special symbol</Text>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={toggleCheckboxSpecial}
        >
          <Text style={styles.checkbox}>
            {checkedSpecial ? '✔️' : '⬜'} {/* Dấu tích khi checked, ô trống khi chưa */}
          </Text>
        </TouchableOpacity>

      </View>
    <TouchableOpacity style= {styles.endtouch}>
    <View style={styles.end}>GENERATE PASSWORD

     </View> 
               </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80,
    backgroundColor: '#000080',
    borderWidth: 15,
    borderColor: '#ADD8E6',
    borderRadius: 50,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    height: 50,
    width: '90%',
    backgroundColor: '#003366',
    marginBottom: 50,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  message: {
    fontSize: 15,
    textAlign: 'left',
    color: 'white',
    width: '70%', 
    fontWeight: 'bold',
    fontFamily: 'Arial',
    marginBottom: 0,
  },
  lengthInput: {
    height: 35,
    width: '50%',
    backgroundColor: 'white',
    marginLeft: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    height: 35,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 10, 
    borderWidth: 0, //
  },
  checkbox: {
    fontSize: 40, 
    color: 'white', 
  },

  endtouch:{
    marginTop: 'auto',
    paddingBottom: 80,
  },
  end: {
    fontFamily: 'arial',
    fontSize: 20,
    fontWeight:'bold',
    color: 'white',
    borderWidth: 2,
    borderColor: 'blue', 
    borderRadius: 10, 
    backgroundColor: '#8A2BE2',
    padding: 10, 
    textAlign: 'center', 
  }
});
