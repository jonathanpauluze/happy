import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../services/api';

import mapMarker from '../images/map-marker.png';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: FC = () => {
  const navigation = useNavigation();
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useFocusEffect(() => {
    api.get('/orphanages').then(response => {
      const orphanages = response.data;

      setOrphanages(orphanages);
    });
  });

  function handleNavigateToOrphanageDetails(id: number) {
    navigation.navigate('OrphanageDetails', { id }); 
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate('SelectMapPosition'); 
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -22.6776796,
          longitude: -43.2618207,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}
      >
        { orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 2.7,
                y: 0.8,
              }}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            >
              <Callout
                tooltip={true}
                onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}
              >
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>
                    { orphanage.name }
                  </Text>
                </View>
              </Callout>
            </Marker>
          );
        }) }
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          { orphanages.length }
          &nbsp;
          { orphanages.length > 1
            ? 'orfanatos encontrados'
            : 'orfanato encontrado' }
        </Text>
        <RectButton
          style={styles.createOrphanageButton}
          onPress={handleNavigateToCreateOrphanage}
        >
          <Feather name="plus" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  calloutContainer: {
    width: 160,
    height: 56,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
  },

  calloutText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
    color: '#0089A5',
  },

  footer: {
    position: 'absolute',
    right: 24,
    bottom: 32,
    left: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 24,
    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 3,
  },

  footerText: {
    fontFamily: 'Nunito_700Bold',
    color: '#8Fa7B3',
  },

  createOrphanageButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 54,
    height: 56,
    borderRadius: 20,
    backgroundColor: '#15C3D6',
  }
});

export default OrphanagesMap;
