import * as React from "react";
import { ReactNode } from "react";

export interface ReactComponentProps {
    children: React.ReactNode
}

export interface LayoutProps {
  children: ReactNode
}

export interface PageRouteProps {
  pageRoute: string;
}

export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}
