// utils/notification-handlers.js
import { IconButton } from "@layer5/sistent";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";
import React, { useCallback } from "react";

export const useNotificationHandlers = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleNotification = useCallback(
    (type, msg) => {
      let message = typeof msg === "string" ? msg : msg?.response?.data;
      enqueueSnackbar(message, {
        variant: type,
        action: key => (
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => closeSnackbar(key)}
          >
            <CloseIcon />
          </IconButton>
        ),
        autoHideDuration: 8000,
        style: {
          display: "flex",
          flexWrap: "nowrap"
        }
      });
    },
    [enqueueSnackbar, closeSnackbar]
  );

  const handleSuccess = useCallback(
    message => {
      handleNotification("success", message);
    },
    [handleNotification]
  );

  const handleError = useCallback(
    message => {
      handleNotification("error", message);
    },
    [handleNotification]
  );

  const handleInfo = useCallback(
    message => {
      handleNotification("info", message);
    },
    [handleNotification]
  );

  const handleWarn = useCallback(
    message => {
      handleNotification("warning", message);
    },
    [handleNotification]
  );

  return { handleSuccess, handleError, handleInfo, handleWarn };
};
