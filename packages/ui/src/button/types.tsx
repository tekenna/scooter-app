import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "normal" | "outline" | "custom" | "success" | "warning" | "error";
  size?: "big" | "medium" | "small" | "large";
  variantColor?: string;
  active?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}
