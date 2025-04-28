import {
    BasicMarkdown,
    Box,
    CircularProgress,
    lighten,
    styled,
    useTheme
} from "@layer5/sistent";
import { CheckCircle, Error, Info, Warning } from "@mui/icons-material";
import { SnackbarContent } from "notistack";
import React, { forwardRef } from "react";

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
    color: theme.palette.text.primary,
    marginRight: "0.75rem",
    height: "1.5rem !important",
    width: "1.5rem !important"
}));

export const ThemeResponsiveSnackbar = forwardRef((props, forwardedRef) => {
    const theme = useTheme();
    const { variant = "info", message, action, key } = props;

    // Function to determine the icon based on variant
    const getIcon = () => {
        const iconProps = { style: { marginRight: "0.5rem" } };
        switch (variant) {
            case "error":
                return <Error {...iconProps} />;
            case "success":
                return <CheckCircle {...iconProps} />;
            case "warning":
                return <Warning {...iconProps} />;
            case "info":
                return <Info {...iconProps} />;
            case "loading":
                return <StyledCircularProgress />;
            default:
                return null;
        }
    };

    return (
        <StyledSnackbarContent ref={forwardedRef} variant={variant} theme={theme}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.5rem 1rem",
                    width: "100%"
                }}
            >
                {getIcon()}
                <BasicMarkdown content={message} />
                <Box marginLeft={"auto"} paddingLeft={"0.5rem"}>
                    {action && action(key)}
                </Box>
            </div>
        </StyledSnackbarContent>
    );
});

ThemeResponsiveSnackbar.displayName = "ThemeResponsiveSnackbar";

export const StyledSnackbarContent = styled(SnackbarContent)(({ theme, variant }) => {
    const notificationColors = {
        success: theme.palette.text.success,
        info: theme.palette.text.info,
        warning: theme.palette.text.warning,
        error: theme.palette.text.error
    };

    const baseColor = notificationColors[variant] || notificationColors.info;
    const backgroundColor =
        theme.palette.mode === "light" ? lighten(baseColor || "#323232", 0.95) : "#323232";

    return {
        backgroundColor,
        color: baseColor,
        pointerEvents: "auto",
        borderRadius: "0.3rem",
        boxShadow: `0 0px 4px ${theme.palette.background.tabs}`
    };
});
