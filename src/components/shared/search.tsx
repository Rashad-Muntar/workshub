import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import { useFormik } from 'formik'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FiSearch } from 'react-icons/Fi'

interface Props {
  style: string
  inputStyle: string
}

const Search = ({ style, inputStyle }: Props) => {
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
        <FiSearch fontSize={30} className="text-background pr-3 box-content" />
        <Input
          type="text"
          placeholder="Search..."
          id="search"
          name="search"
          onChange={formik.handleChange}
          value={formik.values.email}
          // style={inputStyle}
          className={inputStyle}
        />
      </div>
    </form>
  )
}

export default Search
