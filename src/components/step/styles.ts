import { StyleSheet } from "react-native";
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
    container: {
        width: "100%",
        gap: 16,
        flexDirection: "row",
    },
    title: {
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.gray[600],
    },
    description: {
        fontFamily: fontFamily.regular,
        fontSize: 14,
        color: colors.gray[500],
        marginTop: 4,
    },
    details: {
        flex: 1
    }
})