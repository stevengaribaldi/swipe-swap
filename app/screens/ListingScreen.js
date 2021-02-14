import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import useApi from '../hooks/useApi';
import ActivityIndicator from '../componets/ActivityIndicator';
import Card from '../componets/Card';
import Button from '../componets/AppButton';
import listingsApi from '../api/listings';
import Screen from '../componets/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import AppText from '../componets/AppText';

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);
  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <Button title="Retry" onPress={getListingsApi.request} />
          </>
        )}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={`$${item.price}`}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
});
export default ListingsScreen;
