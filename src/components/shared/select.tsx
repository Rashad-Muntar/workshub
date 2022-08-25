import { Select } from "@chakra-ui/react"
import { currency } from "./filterData"
const SelectInput = () => {
  return (
    <Select placeholder="Select option" bg="primary.background">
      {
        currency.map((symbol, index) => (
          <option key={index} value={symbol}>{symbol}</option>
        ))
      }
    </Select>
  )
}

export default SelectInput
