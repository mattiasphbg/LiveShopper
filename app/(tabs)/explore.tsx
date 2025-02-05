import { StyleSheet, Image, Platform, View } from "react-native";
import { Text } from "@/components/ui/text";

export default function TabTwoScreen() {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
