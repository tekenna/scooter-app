"use client";
import cn from "classnames";
import { forwardRef } from "react";
import { ButtonProps } from "./types";

const classes = {
  root: " flex items-center justify-center ",
  normal: "btn btn-neutral",
  disabled: "btn btn-disabled cursor-not-allowed",
  outline: "btn-outline",
  small: "h-[24px]",
  medium: "h-[36px]",
  big: "h-[56px]",
  success: "btn btn-success",
  warning: "btn btn-warning",
  error: "btn btn-error",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = "normal",
      size = "medium",
      children,
      active,
      loading = false,
      disabled = false,
      ...rest
    } = props;
    const classesName = cn(
      classes.root + " btn ",
      {
        [classes.normal]: !disabled && variant === "normal",
        [classes.disabled]: disabled && variant === "normal",
        [classes.small]: size === "small",
        [classes.big]: size === "big",
        [classes.success]: !disabled && variant === "success",
        [classes.warning]: !disabled && variant === "warning",
        [classes.error]: !disabled && variant === "error",
      },
      className
    );

    if (loading) {
      return (
        <button className="btn btn-square">
          <span className="loading loading-spinner"></span>
        </button>
      );
    }

    return (
      <button
        aria-pressed={active}
        data-variant={variant}
        ref={ref}
        className={classesName}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export const ButtonFill = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = "normal",
      size = "medium",
      children,
      active,
      loading = false,
      disabled = false,
      onClick,
      ...rest
    } = props;

    const classesName = cn(
      classes.root + " btn ",
      {
        [classes.normal]: !disabled && variant === "normal",
        [classes.disabled]: disabled && variant === "normal",
        [classes.small]: size === "small",
        [classes.big]: size === "big",
        [classes.success]: !disabled && variant === "success",
        [classes.warning]: !disabled && variant === "warning",
        [classes.error]: !disabled && variant === "error",
      },
      className
    );

    return (
      <button
        aria-pressed={active}
        data-variant={variant}
        ref={ref}
        className={classesName}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {loading ? <span className="loading loading-spinner"></span> : children}
      </button>
    );
  }
);

export const RoundButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = "outline",
      size,
      children,
      active,
      loading = false,
      disabled = false,
      onClick,
      ...rest
    } = props;

    const classesName = cn(
      classes.root + " rounded-full",
      {
        [classes.normal]: !disabled && variant === "normal",
        [classes.disabled]: disabled && variant === "normal",
        [classes.success]: !disabled && variant === "success",
        [classes.warning]: !disabled && variant === "warning",
        [classes.error]: !disabled && variant === "error",
      },
      className
    );

    return (
      <button
        aria-pressed={active}
        data-variant={variant}
        ref={ref}
        className={classesName}
        disabled={disabled}
        {...rest}
        onClick={onClick}
      >
        {loading ? <span className="loading loading-spinner"></span> : children}
      </button>
    );
  }
);
export const ButtonOutline = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variantColor,
      size = "medium",
      children,
      active,
      loading = false,
      disabled = false,
      onClick,
      ...rest
    } = props;
    
    const classesName = cn(
      classes.root +
        ` border-2 border-[${variantColor}] text-[${variantColor}] `,
      className
    );

    return (
      <button
        aria-pressed={active}
        ref={ref}
        className={classesName}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {loading ? <span className="loading loading-spinner"></span> : children}
      </button>
    );
  }
);
