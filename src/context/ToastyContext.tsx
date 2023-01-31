import { createContext, ReactNode } from "react";
import { useState } from "react";
import Alert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

export type ToastyContextType = {
  showToast: (message: String, type: AlertProps["severity"]) => void;
};

const ToastyContext = createContext<ToastyContextType | null>(null);

export function ToastyProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<ReactNode>();
  const [type, setType] = useState<AlertProps["severity"]>();
  const [open, setOpen] = useState<boolean>(false);

  const showToast = (message: String, type: AlertProps["severity"]) => {
    setMessage(message);
    setType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setMessage(null);
    setOpen(false);
  };

  return (
    <ToastyContext.Provider value={{ showToast }}>
      <>
        {message && type ? (
          <Snackbar
            open={open}
            autoHideDuration={3500}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            sx={{ width: 600 }}
          >
            <Alert sx={{ minWidth: 400 }} severity={type}>
              {message}
            </Alert>
          </Snackbar>
        ) : (
          <></>
        )}
        {children}
      </>
    </ToastyContext.Provider>
  );
}

export default ToastyContext;
