import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Nunito_600SemiBold } from '@expo-google-fonts/nunito';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header: FC<HeaderProps> = ({ title, showCancel = true }) => {
  const navigation = useNavigation();

  function handleGoBackToHomePage() {
    navigation.navigate('OrphanagesMap');
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15B6D6" />
      </BorderlessButton>

      <Text style={styles.title}>{ title }</Text>

      { showCancel ? (
        <BorderlessButton onPress={handleGoBackToHomePage}>
          <Feather name="x" size={24} color="#FF669D" />
        </BorderlessButton>
      ): (
        <View />
      ) }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#DDE3F0',
    backgroundColor: '#F9FAFC'
  },

  title: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
    color: '#8FA7B3',
  }
})

export default Header;
