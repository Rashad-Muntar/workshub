import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

interface Props {
  style?: string
  showIcon?: boolean
  placeholder: string
  variant?: string
}

const Search = ({ style, variant, showIcon = true, placeholder }: Props) => {

  return (
  
      <div className={style}>
        <InputGroup>
          {showIcon && (
            <InputLeftElement
              pointerEvents="none"
              children={
                <FiSearch
                  fontSize={30}
                  className="text-background pr-3 box-content"
                />
              }
            />
          )}
          <Input
            id="search"
            name="search"
            variant={variant}
            type="text"
            placeholder={placeholder}
            
          />
        </InputGroup>
      </div>

  )
}

export default Search
