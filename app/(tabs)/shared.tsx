import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

export default function SharedScreen() {
  const sharedBoards = [
    { id: "1", title: "Trip Planning" },
    { id: "2", title: "Group Study Notes" },
    { id: "3", title: "Gym Split" },
  ];

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Whiteboards</Text>

        <TouchableOpacity onPress={() => console.log("Create shared board")}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>

      {/* SECTION LABEL */}
      <Text style={styles.sectionLabel}>Shared Whiteboards</Text>

      {/* LIST */}
      <FlatList
        data={sharedBoards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.row}
            onPress={() => console.log("Open shared board:", item.title)}
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

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "600",
    position: "absolute",
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

  sectionLabel: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  row: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  rowText: {
    fontSize: 18,
  },
});
