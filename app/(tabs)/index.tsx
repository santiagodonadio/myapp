import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function MineScreen() {
  const router = useRouter();

  // Temporary fake data before Firebase
  const whiteboards = [
    { id: "1", title: "Grocery List" },
    { id: "2", title: "Workout Routine" },
    { id: "3", title: "Project Ideas" }
  ];

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Whiteboards</Text>

        {/* Plus button */}
        <TouchableOpacity onPress={() => console.log("Create new board")}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>

      {/* SECTION LABEL */}
      <Text style={styles.sectionLabel}>My Whiteboards</Text>

      {/* LIST */}
      <FlatList
        data={whiteboards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.row}
            onPress={() => console.log("Open board:", item.title)}
          >
            <Text style={styles.rowText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: "#fff",
  },

  // HEADER ROW
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // center title
    marginBottom: 40,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "600",
    position: "absolute", // keep title centered regardless of + button width
    left: 0,
    right: 0,
    textAlign: "center",
  },

  plus: {
    fontSize: 32,
    fontWeight: "300",
    position: "absolute",
    right: 0,
    paddingHorizontal: 5,
  },

  // SECTION LABEL
  sectionLabel: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  // ROWS
  row: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  rowText: {
    fontSize: 18,
  },
});
