import { useCheckbox,  chakra, Flex, Text, Icon } from '@chakra-ui/react'
import { ImCheckmark } from 'react-icons/im'

interface Props {
  placeholder: string
  icon?: string
}

const CheckboxCard = ({ placeholder, icon }: Props) => {
  const CustomCheckbox = (props: any) => {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox(props)

    return (
      <chakra.label
        display="flex"
        flexDirection="row"
        alignItems="center"
        gridColumnGap={2}
        borderColor="green.500"
        rounded="lg"
        mb="10px"
        cursor="pointer"
        {...htmlProps}
      >
        <input {...getInputProps()} hidden />
        <Flex
          alignItems="center"
          justifyContent="center"
          border="1px solid"
          borderColor={state.isChecked ? 'primary.default' : 'background'}
          w={4}
          h={4}
          {...getCheckboxProps()}
        >
          {state.isChecked && (
            <Icon
              as={ImCheckmark}
              w={3}
              h={3}
              color="primary.default"
              fontWeight="5px"
            />
          )}
        </Flex>
        <Flex>
          <Text fontSize="xs" {...getLabelProps()}>
            {placeholder}
          </Text>
          <Text ml="8px">{icon}</Text>
        </Flex>
      </chakra.label>
    )
  }

  return (
    <div>
      <CustomCheckbox />
    </div>
  )
}

export default CheckboxCard
