"use client"
import AnimatedCounter from "./animated-counter"

interface AnimatedStatProps {
  value: string
  label: string
  className?: string
  valueClassName?: string
  labelClassName?: string
}

export default function AnimatedStat({
  value,
  label,
  className = "",
  valueClassName = "",
  labelClassName = "",
}: AnimatedStatProps) {
  // Determine if the value has a prefix or suffix
  const getValueParts = () => {
    let prefix = ""
    let suffix = ""
    let numericValue = value

    if (value.startsWith("+")) {
      prefix = "+"
      numericValue = value.substring(1)
    } else if (value.startsWith("-")) {
      prefix = "-"
      numericValue = value.substring(1)
    }

    if (value.endsWith("%")) {
      suffix = "%"
      numericValue = numericValue.substring(0, numericValue.length - 1)
    }

    return { prefix, suffix, numericValue }
  }

  const { prefix, suffix, numericValue } = getValueParts()

  return (
    <div className={className}>
      <AnimatedCounter value={numericValue} prefix={prefix} suffix={suffix} className={valueClassName} />
      <div className={labelClassName}>{label}</div>
    </div>
  )
}
