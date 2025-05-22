"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ToastContextType = {
  toasts: string[];
  addToast: (message: string) => void;
  removeToast: (index: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<string[]>([]);

  const addToast = (message: string) => {
    setToasts((prev) => [...prev, message]);
  };

  const removeToast = (index: number) => {
    setToasts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-2 z-50">
        {toasts.map((toast, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white px-4 py-2 rounded shadow"
            onClick={() => removeToast(index)}
          >
            {toast}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
