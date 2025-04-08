"use client";
import {
  composeRenderProps,
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "./utils";

export interface ButtonProps extends RACButtonProps {
  variant?: "orange" | "yellow" | "green" | "red";
  elevation?: "elevation-1" | "elevation-2" | "elevation-3" | "elevation-4";
  styles?: "soft" | "solid" | "outline";
}

const button = tv({
  extend: focusRing,
  base: "cursor-default rounded-lg border px-5 py-2 text-center text-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition dark:shadow-none",
  variants: {
    variant: {
      orange: "",
      yellow: "",
      green: "",
      red: "",
    },
    elevation: {
      "elevation-1": "",
      "elevation-2": "",
      "elevation-3": "",
      "elevation-4": "",
    },
    styles: {
      soft: "",
      solid: "",
      outline: "",
    },
    size: {
      icon: "flex items-center justify-center border-0 p-1 text-gray-600 hover:bg-black/[5%] pressed:bg-black/10 disabled:bg-transparent dark:text-zinc-400 dark:hover:bg-white/10 dark:pressed:bg-white/20",
    },
    isDisabled: {
      true: "",
    },
  },
  compoundVariants: [
    {
      elevation: "elevation-1",
      variant: "red",
      class:
        "border-red-elevation-1-border text-red-text-primary hover:text-red-text-primary-hover bg-red-elevation-1 hover:bg-red-elevation-1-hover",
    },
    {
      elevation: "elevation-2",
      variant: "red",
      class:
        "border-red-elevation-2-border text-red-text-primary hover:text-red-text-primary-hover bg-red-elevation-2 hover:bg-red-elevation-2-hover",
    },
    {
      elevation: "elevation-3",
      variant: "red",
      class:
        "border-red-elevation-3-border bg-red-elevation-3 hover:bg-red-elevation-3-hover",
    },
    {
      elevation: "elevation-4",
      variant: "red",
      class:
        "border-red-elevation-4-border bg-red-elevation-4 hover:bg-red-elevation-4-hover",
    },
    {
      styles: "solid",
      variant: "red",
      class: "bg-red border-none text-background",
    },
    {
      styles: "outline",
      elevation: "elevation-1",
      variant: "red",
      class: "",
    },
  ],
  defaultVariants: {
    variant: "green",
  },
});
export function Button(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({
          ...renderProps,
          variant: props.variant,
          elevation: props.elevation,
          styles: props.styles,
          isDisabled: props.isDisabled,
          className,
        })
      )}
    />
  );
}
