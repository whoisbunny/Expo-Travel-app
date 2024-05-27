import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import  Listingtype  from "@/types/Listing";
import Colors from "@/constants/Color";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

type Prop = {
  listings: any[];
  category: string;
};
const Listing = ({ listings, category }: Prop) => {
  const [Loading, setLoading] = useState(false)
  useEffect(() => {

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
    
  }, [category])
  
  const renderItems: ListRenderItem<Listingtype> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.bookmark}>
              <Ionicons
                name="bookmark-outline"
                size={20}
                color={Colors.white}
              />
            </View>
            <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </Text>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <View style={{ alignItems: "center", flexDirection: "row" }}>
                <FontAwesome5
                  name="map-marker-alt"
                  color={Colors.primaryColor}
                />
                <Text style={styles.itemLocationText}>{item.location}</Text>
              </View>
              <Text style={styles.itemPriceText}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };
  return (
    <View>
      <FlatList
        data={Loading ? []:listings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listing;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 220,
  },
  image: {
    borderRadius: 10,
    height: 200,
    width: 200,
    marginBottom: 30,
  },
  bookmark: {
    position: "absolute",
    top: 185,
    right: 30,
    borderRadius: 30,
    backgroundColor: Colors.primaryColor,
    borderWidth: 2,
    padding: 10,
    borderColor: Colors.white,
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: Colors.black,
  },
  itemLocationText: {
    fontSize: 12,
    marginLeft: 5,
  },
  itemPriceText: {
    color: Colors.primaryColor,
    fontWeight: "600",
    fontSize: 12,
  },
});
