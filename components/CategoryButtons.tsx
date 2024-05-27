import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import Colors from "@/constants/Color";
import destinationCategories from "@/data/categories";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

type props = {
  onCagtegoryChanged: (category: string) => void;
};
const CategoryButtons = ({ onCagtegoryChanged }: props) => {
  const scrollRef = useRef<ScrollView>(null);
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const [ActiveIndex, setActiveIndex] = useState(0);
  const handleSelectCategory = (index: number) => {
    const selected = itemRef.current[index];

    setActiveIndex(index);

    selected?.measureLayout(
      scrollRef.current as any, // casting to any to avoid type issues
      (x, y, width, height) => {
        scrollRef.current?.scrollTo({ x: x - 20, y: 0, animated: true });
      },
      () => {}
    );

    onCagtegoryChanged(destinationCategories[index].title);
  };

  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            style={
              ActiveIndex === index
                ? [styles.categoryBtn, { backgroundColor: Colors.primaryColor }]
                : styles.categoryBtn
            }
            key={index}
            ref={(el) => (itemRef.current[index] = el)}
            onPress={() => handleSelectCategory(index)}
          >
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={20}
              color={ActiveIndex === index ? Colors.white : Colors.black}
            />
            <Text
              style={
                ActiveIndex === index
                  ? [styles.categoryBtnTxt, { color: Colors.white }]
                  : styles.categoryBtnTxt
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.black,
  },
  categoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryBtnTxt: { marginLeft: 5, color: Colors.black },
  categoryBtnActive: {},
});

export default CategoryButtons;
