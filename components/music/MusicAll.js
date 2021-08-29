import * as React from "react";
import style from "./Styles";
import { View, FlatList, Text, Image } from "react-native";
import Music from "../../assets/musicData/music.json";
function MusicList() {
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: style.container.flexDirection,
          justifyContent: style.container.justifyContent,
          padding: style.container.padding,
          width: style.container.width,
        }}
      >
        <View style={{ flexDirection: style.left_container.flexDirection }}>
          <Image
            source={require("../../assets/images/musicIcon.jpg")}
            style={{
              width: style.left_container.width,
              height: style.left_container.height,
            }}
          />
          <View style={{ flexDirection: style.mid_container.flexDirection }}>
            <Text
              style={{
                fontWeight: style.mid_container.fontWeight,
                marginLeft: style.mid_container.marginLeft,
              }}
            >
              {Music.data[item].name}
            </Text>
            <Text> {Music.data[item].artistName} </Text>
            <Text> {"#" + Music.data[item].tags.toString()} </Text>
          </View>
        </View>
        <View
          style={{
            alignSelf: style.right_container.alignSelf,
            borderRadius: style.right_container.borderRadius,
            backgroundColor: style.right_container.backgroundColor,
          }}
        >
          <Text style={{ padding: style.right_container.padding }}>Choose</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{ backgroundColor: "#f3f3f3" }}>
      <FlatList
        data={Object.keys(Music.data)}
        keyExtractor={(index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
export default MusicList;
