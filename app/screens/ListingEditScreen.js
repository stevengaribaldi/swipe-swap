import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from '../componets/forms';
import Screen from '../componets/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(1000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  { label: 'one:6', value: 1 },
  { label: 'one:12', value: 2 },
  { label: 'mezco', value: 3 },
];
function ListingEditScreen() {
  return (
    <>
      <Screen style={styles.container}>
        <AppForm
          initialValues={{
            title: '',
            price: '',
            description: '',
            category: null,
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <FormField maxLength={255} name="title" placeholder="Title" />
          <FormField
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price"
          />
          <Picker items={categories} name="category" placeholder="Category" />
          <FormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
          />
          <SubmitButton title="Post" />
        </AppForm>
      </Screen>
    </>
  );
}
const styles = StyleSheet.create({
  container: { padding: 20 },
});

export default ListingEditScreen;