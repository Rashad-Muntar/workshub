import { Select } from "@chakra-ui/react"
const SelectInput = () => {
  return (
    <Select placeholder="Select option" className="my-3">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  )
}

export default SelectInput
