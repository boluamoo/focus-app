import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fontSizes, spacing } from "../../utils/sizes";
import { RoundedButton } from "../../components/RoundedButton";


const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things you've focused on</Text>
            <ScrollView>
              <FlatList
                style={{ flex: 1 }}
                contentContainerStyle={{ flex: 1, alignItems: "flex-start" }}
                data={focusHistory}
                renderItem={HistoryItem}
              />
            </ScrollView>
            <View
              style={[
                styles.clearContainer,
                { alignSelf: "center", padding: spacing.md },
              ]}
            >
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? "red" : "green",
    fontSize: fontSizes.md,
  }),
  title: {
    fontSize: fontSizes.lg,
    color: "white",
  },
});
