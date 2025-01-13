export function formatNumber(inputNumber: number) {
  if (typeof inputNumber !== "number" && typeof inputNumber !== "string") {
    throw new Error("Input must be a number or a numeric string")
  }

  const [integerPart, decimalPart] = inputNumber.toString().split(".")

  // Format the integer part with commas
  const formattedInteger = new Intl.NumberFormat("en-US").format(
    Number(integerPart)
  )

  // Append the decimal part if it exists
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger
}
