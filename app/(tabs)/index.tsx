import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
} from "react-native";
import Colors from "@/constants/Color";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButtons from "@/components/CategoryButtons";
import { useState } from "react";
import Listing from "@/components/Listing";
import listingData from "@/data/destinations.json";
import groupData from "@/data/groups.json";
import GrpoupListings from "@/components/GrpoupListings";
const Page = () => {
  const [Category, setCategory] = useState("");

  const onCatChange = (category: string) => {
    setCategory(category);
  };
  const headerHeignt = useHeaderHeight();
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),
          
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="notifications" size={20} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />

      <View style={[styles.container, { paddingTop: headerHeignt }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headingTxt}>Explore The Beautiful World!</Text>
        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons
              name="search"
              size={18}
              style={{ marginRight: 5 }}
              color={Colors.black}
            />
            <TextInput placeholder="Search..." />
          </View>
          <TouchableOpacity style={styles.filterBtn} onPress={() => {}}>
            <Ionicons name="options" size={28} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <CategoryButtons onCagtegoryChanged={onCatChange} />
        <Listing listings={listingData} category={Category} />
        <GrpoupListings listings={groupData} />

        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingTxt: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    alignItems: "center",
    gap: 5,
    padding: 16,
    borderRadius: 10,
  },
  searchSectionWrapper: { marginVertical: 20, flexDirection: "row", gap: 20 },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    // marginLeft:20,
    alignItems: "center",
  },
});

export default Page;
