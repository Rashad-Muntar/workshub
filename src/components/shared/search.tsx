import { useState } from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import { useFormik } from 'formik'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FiSearch } from 'react-icons/fi'

interface Props {
  style?: string
  showIcon?:boolean
  placeholder:string
  variant?:string
}

const Search = ({ style, variant, showIcon=true, placeholder }: Props) => {

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={style}>
      <InputGroup>
     { showIcon && <InputLeftElement
      pointerEvents='none'
      children={<FiSearch fontSize={30} className="text-background pr-3 box-content" />}
    />
     }
    <Input id="search" name="search" value={formik.values.email} onChange={formik.handleChange} variant={variant} type='text' placeholder={placeholder} />
  </InputGroup>
      </div>
     
    </form>
  )
}

export default Search
