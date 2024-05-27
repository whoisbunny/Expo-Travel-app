import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { GroupType } from "@/types/GroupType";
import Colors from "@/constants/Color";
import { Ionicons } from "@expo/vector-icons";
const GrpoupListings = ({ listings }: { listings: GroupType[] }) => {
  const renderitems: ListRenderItem<GroupType> = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.itemTxt}>{item.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="star" size={20} color={Colors.primaryColor} />
            <Text style={styles.itemRating}>{item.rating}</Text>
            <Text style={styles.itemReview}>({item.reviews})</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={styles.title}>Top Travel Groups</Text>
      <FlatList
        data={listings}
        renderItem={renderitems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GrpoupListings;

const styles = StyleSheet.create({
  title: {
    fontWeight: "600",
    fontSize: 22,
    color: Colors.black,
    marginBottom: 10,
  },
  image: { width: 80, height: 100, borderRadius: 10 },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    flexDirection: "row",
    gap: 10,
  },
  itemTxt: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: Colors.black,
  },
  itemRating: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 5,
    color: Colors.black,
  },
  itemReview: {
    fontSize: 14,
    color: "#999",
  },
});
