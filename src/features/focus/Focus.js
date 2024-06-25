import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import { TextInput } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, paddingSizes, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text
          className="
        text-white font-bold text-2xl
        "
        >
          What would you like to focus on?
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onSubmitEditing={({ nativeEvent: { text } }) => {
              setTmpItem(text);
            }}
          />
          <RoundedButton
            style={styles.rounded}
            size={50}
            title="+"
            onPress={() => {
              addSubject(tmpItem);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  input: {
    backgroundColor: colors.white,
    height: 50,
    borderRadius: 5,
    padding: spacing.md,
    flex: 1,
  },
  rounded: {
    justifyContent: "center",
    alignItems: "center",
  },
});
