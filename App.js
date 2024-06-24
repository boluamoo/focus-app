import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Focus } from "./src/features/focus/Focus";
import { colors } from "./src/utils/colors";
import { Timer } from "./src/features/timer/Timer";
import { spacing } from "./src/utils/sizes";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  useEffect(() => {
    if (focusSubject) {
      setFocusHistory([...focusHistory, focusSubject]);
    }
  }, [focusSubject]);

  return (
    <SafeAreaView style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            setFocusSubject(null);
          }}
          clearSubject={() => setFocusSubject(null)}
        />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: spacing.xl,
  },
});
