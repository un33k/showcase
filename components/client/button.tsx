import { ReactNode } from "react"
import clsx from "clsx"

import CircleLoading from "../server/circle-loading"
import { buttonBaseStyles, buttonVariantStyles } from "./button.css"

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
      {!!prefix ? <div className="h-4 w-4">{prefix}</div> : null}
      {!loading && <span>{text}</span>}
      {loading && <CircleLoading size="sm" />}
      {!!sufix ? <div className="h-4 w-4">{sufix}</div> : null}
    </button>
  )
}
