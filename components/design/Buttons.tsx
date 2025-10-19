import React from "react";
import { Pressable, Text } from "react-native";

type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "error"
  | "warning"
  | "info";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  title: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  fullWidth?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  borderRadius?: "sm" | "md" | "lg" | "xl" | "full";
  onPress?: () => void;
  className?: string;
}

/**
 * Design System Button Component
 * Supports variants, color themes, and sizes.
 */
export default function Button({
  title,
  variant = "solid",
  color = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  borderRadius = "md",
  onPress,
  className = "",
}: ButtonProps) {
  // Base styles
  const baseStyle = `rounded-xl justify-center items-center active:opacity-80`;
  const disabledStyle = disabled ? "opacity-50" : "";

  // Variant styles
  const variantStyles: Record<ButtonVariant, string> = {
    solid: `bg-${color}-600`,
    outline: `border border-${color}-600 bg-transparent`,
    ghost: `bg-transparent`,
  };

  // Text colors
  const textColor = variant === "solid" ? "text-white" : `text-${color}-600`;

  // Size styles
  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-3 py-2",
    md: "px-8 py-3",
    lg: "px-12 py-4",
  };

  const borderRadiusStyles: Record<string, string> = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };
  const fullWidthStyle = fullWidth ? "w-full" : "";

  return (
    <Pressable
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyle} ${className} ${fullWidthStyle} ${borderRadiusStyles[borderRadius]}`}
      onPress={!disabled ? onPress : undefined}
    >
      <Text className={`${textColor} font-semibold text-lg`}>{title}</Text>
    </Pressable>
  );
}
