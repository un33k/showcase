import { HTMLAttributes, HTMLProps, ReactNode } from "react"
import clsx from "clsx"

import CircleLoading from "../server/circle-loading"

interface Props {
  text: string
  type?: "button" | "submit" | "reset"
  className?: string
  variant?: "solid" | "outline"
  color?: "slate" | "blue" | "white"
  prefix?: ReactNode
  sufix?: ReactNode
  loading?: boolean
  onClick?: () => void
}

export function Button(props: Props) {
  const {
    text,
    type = "button",
    variant = "solid",
    color = "slate",
    className,
    prefix,
    sufix,
    loading,
    onClick,
  } = props
  const modifiedClassName = clsx(
    buttonBaseStyles[variant],
    buttonVariantStyles[variant][color],
    className
  )

  return (
    <button type={type} className={modifiedClassName} onClick={onClick}>
      {!!prefix ? <div className="w-4 h-4">{prefix}</div> : null}
      {!loading && <span>{text}</span>}
      {loading && <CircleLoading size="sm" />}
      {!!sufix ? <div className="w-4 h-4">{sufix}</div> : null}
    </button>
  )
}

export const buttonBaseStyles = {
  solid:
    "space-x-1 group inline-flex items-center justify-center rounded-lg py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  outline:
    "space-x-1 group inline-flex ring-1 items-center justify-center rounded-lg py-2 px-4 text-sm focus:outline-none dark:text-white",
}

export const buttonVariantStyles = {
  solid: {
    slate:
      "bg-slate-900 text-white hover:bg-slate-700 hover:text-white active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
    blue: "bg-blue-600 text-white hover:text-white hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600",
    white:
      "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
  },
  outline: {
    slate:
      "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300",
    blue: "ring-blue-200 text-blue-700 hover:text-blue-900 hover:ring-blue-300 active:bg-blue-100 active:text-blue-600 focus-visible:outline-slate-600 focus-visible:ring-blue-300",
    white:
      "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white",
  },
}