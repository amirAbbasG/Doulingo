import {useState, useMemo} from "react";
import {
    FlatList,
    Pressable,
    Text,
    TextInput,
    View,
    Dimensions,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {router} from "expo-router";
import {Image} from "expo-image";
import Ionicons from "@react-native-vector-icons/ionicons";

import {images} from "@/constants/images";
import {languages} from "@/data/languages";
import type {Language} from "@/types/learning";
import {useLanguageStore} from "@/store/language-store";

const {width: SCREEN_WIDTH} = Dimensions.get("window");

function LanguageCard({
    language,
    isSelected,
    onSelect,
}: {
    language: Language;
    isSelected: boolean;
    onSelect: () => void;
}) {
    return (
        <Pressable
            onPress={onSelect}
            className={`flex-row items-center rounded-2xl px-4 py-4 ${
                isSelected ? "bg-[#f0edff]" : ""
            }`}
        >
            <Image
                source={{uri: language.flag}}
                style={{width: 48, height: 48, borderRadius: 999}}
                contentFit="cover"
            />
            <View className="ml-4 flex-1">
                <Text className="font-semibold text-[17px] text-text-primary">
                    {language.name}
                </Text>
                <Text className="mt-0.5 text-body-sm text-text-secondary">
                    {language.nativeName} &bull; {language.learners} learners
                </Text>
            </View>
            {isSelected ? (
                <View className="h-7 w-7 items-center justify-center rounded-full bg-lingua-purple">
                    <Ionicons name="checkmark" size={18} color="#fff" />
                </View>
            ) : (
                <Ionicons name="chevron-forward" size={22} color="#9CA3AF" />
            )}
        </Pressable>
    );
}

export default function LanguageSelectScreen() {
    const [search, setSearch] = useState("");
    const selectedLanguage = useLanguageStore(
        (state) => state.selectedLanguage
    );
    const setSelectedLanguage = useLanguageStore(
        (state) => state.setSelectedLanguage
    );

    const imageSize = SCREEN_WIDTH


    const filteredLanguages = useMemo(
        () =>
            languages.filter(
                (l) =>
                    l.name.toLowerCase().includes(search.toLowerCase()) ||
                    l.nativeName.toLowerCase().includes(search.toLowerCase())
            ),
        [search]
    );

    const handleSelect = (language: Language) => {
        setSelectedLanguage(language);
        router.push("/");
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF"}}>
            <View className="flex-1 px-5">
                <View className="relative flex flex-row items-center w-full ">
                    <Pressable
                        onPress={() => router.back()}
                        className=" h-10 w-10 items-center justify-center"
                    >
                        <Ionicons
                            name="chevron-back"
                            size={28}
                            color="#0D132B"
                        />
                    </Pressable>

                    <Text className="text-h3 text-text-primary absolute left-1/2 -translate-x-1/2 ">
                        Choose a language
                    </Text>
                </View>

                <View className="mt-5 flex-row items-center rounded-2xl bg-surface px-4 py-2">
                    <Ionicons name="search" size={24} color="#9CA3AF" />
                    <TextInput
                        className="ml-2 flex-1 text-[16px] text-text-primary"
                        placeholder="Search language..."
                        placeholderTextColor="#9CA3AF"
                        value={search}
                        onChangeText={setSearch}
                    />
                    {search.length > 0 && (
                        <Pressable onPress={() => setSearch("")}>
                            <Ionicons
                                name="close-circle"
                                size={20}
                                color="#9CA3AF"
                            />
                        </Pressable>
                    )}
                </View>

                <View className="mt-5 flex-1">
                    <FlatList
                        data={filteredLanguages}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{gap: 4, paddingBottom: 16}}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => (
                            <LanguageCard
                                language={item}
                                isSelected={item.id === selectedLanguage?.id}
                                onSelect={() => handleSelect(item)}
                            />
                        )}
                    />
                </View>
            </View>

            <View
                style={{
                    height: imageSize,
                    maxHeight: 240,
                }}
                className="w-full overflow-hidden flex items-center  mb-5"
            >
                <Image
                    source={images.earth}
                    style={{
                        width: imageSize,
                        aspectRatio: 1,
                        top: -64
                    }}
                    contentFit="contain"
                />
            </View>
        </SafeAreaView>
    );
}
