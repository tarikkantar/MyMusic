import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MusicList from "../music/MusicAll";
import MusicAcoustic from "../music/MusicAcoustic"
import MusicAmbient from "../music/MusicAmbient"
import MusicBlues from "../music/MusicBlues"
import MusicChildren from "../music/MusicChildren"
import MusicCinematic from "../music/MusicCinematic"
import MusicClassical from "../music/MusicClassical"
import MusicCountry from "../music/MusicCountry"
import MusicElectronic from "../music/MusicElectronic"
import MusicFolk from "../music/MusicFolk"
import MusicHipHop from "../music/MusicHipHop"
import MusicHoliday from "../music/MusicHoliday"
import MusicIndie from "../music/MusicIndie"
import MusicJazz from "../music/MusicJazz"
import MusicLatin from "../music/MusicLatin"
import MusicLounge from "../music/MusicLounge"
import MusicPop from "../music/MusicPop"
import MusicRock from "../music/MusicRock"
import MusicSoulRnb from "../music/MusicSoulRnb"
import MusicWorld from "../music/MusicWorld"
import style from "./Style";
const TopTab = createMaterialTopTabNavigator();
export default function MainTabNavigator() {
  return (
    <TopTab.Navigator
      initialRouteName="All"
      screenOptions={{
        tabBarActiveTintColor: style.topBar.tabBarActiveTintColor,
        tabBarInactiveTintColor: style.topBar.tabBarInactiveTintColor,
        tabBarStyle: {
          backgroundColor: style.topBar.backgroundColor,
        },
        tabBarIndicatorStyle: {
          backgroundColor: style.topBar.IndicatorBackgroundColor,
        },
        tabBarLabelStyle: {
          fontWeight: style.topBar.fontWeight,
        },
        tabBarScrollEnabled: true,
      }}
    > 
      <TopTab.Screen name="All" component={MusicList}></TopTab.Screen>
      <TopTab.Screen name="Acoustıc" component={MusicAcoustic}></TopTab.Screen>
      <TopTab.Screen name="Ambıent" component={MusicAmbient}></TopTab.Screen>
      <TopTab.Screen name="Blues" component={MusicBlues}></TopTab.Screen>
      <TopTab.Screen name="Chıldren" component={MusicChildren}></TopTab.Screen>
      <TopTab.Screen name="Cınematıc" component={MusicCinematic}></TopTab.Screen>
      <TopTab.Screen name="Classıcal" component={MusicClassical}></TopTab.Screen>
      <TopTab.Screen name="Country" component={MusicCountry}></TopTab.Screen>
      <TopTab.Screen name="Electronıc" component={MusicElectronic}></TopTab.Screen>
      <TopTab.Screen name="Folk" component={MusicFolk}></TopTab.Screen>
      <TopTab.Screen name="Hıp-Hop" component={MusicHipHop}></TopTab.Screen>
      <TopTab.Screen name="Holıday" component={MusicHoliday}></TopTab.Screen>
      <TopTab.Screen name="Indıe" component={MusicIndie}></TopTab.Screen>
      <TopTab.Screen name="Jazz" component={MusicJazz}></TopTab.Screen>
      <TopTab.Screen name="Latın" component={MusicLatin}></TopTab.Screen>
      <TopTab.Screen name="Lounge" component={MusicLounge}></TopTab.Screen>
      <TopTab.Screen name="Pop" component={MusicPop}></TopTab.Screen>
      <TopTab.Screen name="Rock" component={MusicRock}></TopTab.Screen>
      <TopTab.Screen name="Soul-Rnb" component={MusicSoulRnb}></TopTab.Screen>
      <TopTab.Screen name="World" component={MusicWorld}></TopTab.Screen>
    </TopTab.Navigator>
  );
}
