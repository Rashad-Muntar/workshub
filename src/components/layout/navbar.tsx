import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BiBot } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { BsChat } from 'react-icons/bs'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { SearchBox } from 'react-instantsearch-hooks-web'
import { Box } from '@chakra-ui/react'
import { faVolleyball, faBars } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-regular-svg-icons'
import Search from '../shared/search'
import Button from '../shared/button'
import MenuItems from './menuItems'

const Navbar = () => {
  return (
    <Box className="flex justify-between items-center px-3 h-24 bg-white">
      <Box className="flex w-[40%] justify-between h-full">
        <Box className="flex items-center mr-12">
          <FontAwesomeIcon icon={faVolleyball} fontSize={35} className="text-primary-default"/>
          <Box className=" ml-3">
            <p className="m-0 p-0 font-bold">FUNCTIONAL</p>
            <small className="m-0 p-0">WORKS</small>
          </Box>
        </Box>

        <Box className="h-full">
          <MenuItems />
        </Box>
      </Box>
      <Box className="flex justify-between items-center">
        <Box className="hidden sm:inline-flex h-full">
          <Box className="hidden md:inline-flex flex border-[1px] border-background hover:shadow-sm items-center pl-1">
            <FiSearch fontSize={22} className="text-text " />
            <SearchBox className="MyCustomSearchBox" searchAsYouType={false} />
          </Box>
          <Box className="hidden inline-flex md:hidden border-[1px] border-background items-center hover:shadow-sm pl-1">
            <FiSearch fontSize={22} className="text-text " />
            <SearchBox className="MyCustomSearchBox" searchAsYouType={false} />
          </Box>
          <Button
            title="Write Article"
            styles="border-[1px] border-primary-default bg-primary-default hover:bg-primary-100 hover:text-primary-default text-white px-[32px] ml-3 rounded-md py-[10px] hidden lg:block "
          />
          <Button
            title="Write Article"
            styles="bg-primary-default hover:bg-primary-100 text-white px-[32px] rounded-md py-[10px] inline-flex md:hidden"
          />
        </Box>
        <BsChat className="mx-6 w-[23px] h-[23px]" />
        <Box className="flex items-center">
          <BiBot className="bg-primary-default text-white rounded-full p-1 w-[48px] h-[48px]" />
          <AiOutlineCaretDown className="m-3 hidden lg:inline-flex" />
        </Box>
        <FontAwesomeIcon
          icon={faBars}
          className="block lg:hidden ml-3"
          fontSize={25}
        />
      </Box>
    </Box>
  )
}

export default Navbar
