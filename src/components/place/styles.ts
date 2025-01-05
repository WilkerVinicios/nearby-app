import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        width: "100%",
        height: 120,
        padding: 8,
        borderWidth: 1,
        borderColor: colors.gray[200],
        borderRadius: 12,
        gap: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 116,
        height: 104,
        borderRadius: 8,
        backgroundColor: colors.gray[200],
    },
    content: {
        flex: 1,
        gap: 4,
    },
    name: {
        fontSize: 16,
        fontFamily: fontFamily.medium,
        color: colors.gray[600],
    },
    description: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
    },
    footer: {
        flexDirection: "row",
        gap: 7,
        marginTop: 10,
    },
    tickets: {
        fontSize: 12,
        fontFamily: fontFamily.regular,
        color: colors.gray[400],
    },
})