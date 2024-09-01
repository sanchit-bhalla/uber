import RideCard from "@/components/RideCard";
import { icons, images } from "@/constants";
import { useUser, useAuth } from "@clerk/clerk-expo";
import * as Location from "expo-location";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Rides = () => {
  const { user } = useUser();

  return (
    <SafeAreaView>
      <FlatList
        data={[]}
        renderItem={({ item }) => <RideCard />}
        className="px-5"
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={() => (
          <View className="flex flex-col items-center justify-center">
            <Image source={images.noResult} className="w-40 h-40" />
            <Text className="text-sm">No recent rides found!</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="flex flex-row items-center justify-between my-5">
            <Text className="text-2xl font-JakartaExtraBold">
              Welcome {user?.firstName}👋
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Rides;
