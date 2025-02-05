import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "@/components/ui/text";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
export default function LandingPage() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Avatar className="w-16 h-16 mt-6 ">
        <AvatarImage
          source={{
            uri: "https://github.com/shadcn.png",
          }}
        />
      </Avatar>
      <View className="m-6">
        <Text className="text-2xl font-bold">Welcome LiveShopper</Text>
        <View className="flex-row gap-4">
          <Text className="text-lg">About</Text>
          <Text className="text-lg">Services</Text>
          <Text className="text-lg">Contact</Text>
        </View>
      </View>

      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-4xl font-bold text-center">
          Your Success is Our Mission
        </Text>
        <Text className="text-lg text-center">
          We provide top-notch solutions to help your business grow and succeed.
          Join us today and take the first step towards a brighter future.
        </Text>
        <TouchableOpacity className="bg-primary p-4 rounded-md mt-4">
          <Text className="text-white text-center">Get Started</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center items-center mt-4">
        <Text className="text-lg text-center">
          &copy; 2023 Your Company Name. All rights reserved.
        </Text>
      </View>
    </View>
  );
}
