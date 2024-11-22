import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	components: {
		Button: {
			sizes: {
				sm: {
					fontSize: "md",
				},
			},
			variants: {
				base: {
					bg: "yellow.500",
					fontSize: "lg",
				},
				sm: {
					bg: "teal.500",
					fontSize: "lg",
				},
				md: {
					bg: "orange.500",
					fontSize: "xl",
				},
			},
		},
	},
});
