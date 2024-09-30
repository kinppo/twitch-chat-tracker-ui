'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Toast from '@/components/Popup/Toast';

export type TType = 'success' | 'error' | 'info' | 'warning';
export type TSetTost = Dispatch<SetStateAction<TToastContext['toast'] | null>>;

export type TToast = {
  type?: TType | undefined;
  msg: string;
  setToast: TSetTost;
};

type TToastContext = {
  toast: {
    type?: TType;
    msg: string;
  } | null;
  setToast: TSetTost;
};

const ToastContext = createContext<TToastContext | null>(null);

export default function ToastContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [toast, setToast] = useState<TToastContext['toast'] | null>(null);

  const closeAfterDelay = () => {
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  useEffect(() => {
    if (toast != null) closeAfterDelay();
  }, [toast]);

  return (
    <ToastContext.Provider
      value={useMemo(() => ({ toast, setToast }), [toast])}
    >
      {children}
      {toast != null && (
        <Toast type={toast?.type} msg={toast.msg} setToast={setToast} />
      )}
    </ToastContext.Provider>
  );
}

export const useToastContext = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      'useToastContext must be used within ToastContextProvider!',
    );
  }
  return context;
};
