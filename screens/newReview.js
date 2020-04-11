import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
  title: yup.string().required().min(2),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("num1-5", "Rating is between 1 and 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: "",
          body: "",
          rating: "",
        }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Film name'
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder='Write review here'
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder='Star rating (1-5)'
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType='numeric'
            />
            <Button
              title='Submit review'
              color='pink'
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}