import Octicons from "@expo/vector-icons/Octicons";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function home() {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>User Name</Text>
        <Octicons name="bell" size={24} color="#a1a1a1" />
      </View>

      <View style={styles.SearchView}>
        <Octicons name="search" size={20} color="#a1a1a1" />
        <TextInput
          placeholder="Search.."
          style={styles.input}
          autoFocus={false}
        />
      </View>

      <Pressable style={styles.chatView}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/4140/4140073.png",
          }}
          style={styles.profilePic}
        />
        <View style={styles.chatContent}>
          <View style={styles.textContainer}>
            <Text style={styles.nametext}>Kusal Mendis</Text>
            <Text style={styles.msgtext}>Hello😍</Text>
          </View>
          <Text style={styles.time}>10:20 PM</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  headerView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  SearchView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e8e8e8",
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 10,
    borderRadius: 25,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  chatView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  profilePic: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },
  chatContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    gap: 2,
  },
  nametext: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  msgtext: {
    fontSize: 15,
    color: "#a1a1a1",
  },
  time: {
    fontSize: 14,
    color: "#a1a1a1",
  },
});
