import { useState } from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import { useFormik } from 'formik'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FiSearch } from 'react-icons/fi'
import { SearchBox, InstantSearch } from 'react-instantsearch-hooks-web'
import algoliasearch from 'algoliasearch/lite';

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
            // value={formik.values.email}
            // onChange={formik.handleChange}
            variant={variant}
            type="text"
            placeholder={placeholder}
          />
            {/* <SearchBox /> */}
        </InputGroup>
      </div>

  )
}

export default Search
