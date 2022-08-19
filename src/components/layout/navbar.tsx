import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BiBot } from 'react-icons/bi'
import { BsChat } from 'react-icons/bs'
import { AiOutlineCaretDown } from 'react-icons/ai'

import {
  faVolleyball,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-regular-svg-icons'
import Search from '../shared/search'
import Button from '../shared/button'
import MenuItems from './menuItems'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-3 h-24">
      <div className="flex w-[40%] justify-between h-full">
        <div className="flex items-center mr-12">
          <FontAwesomeIcon icon={faVolleyball} fontSize={35} />
          <div className=" ml-3">
            <p className="m-0 p-0 font-bold">FUNCTIONAL</p>
            <small className="m-0 p-0">WORKS</small>
          </div>
        </div>

        <div className="h-full">
          <MenuItems />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="hidden sm:inline-flex h-full">
          <Search
            style=" h-full items-center hidden md:inline-flex"
            inputStyle="w-full h-full"
            placeholder='Search...'
          />
          <Search
            style=" h-full items-center inline-flex md:hidden"
            inputStyle="w-full h-full"
            placeholder='Search...'
          />
          <Button
            title="Write Article"
            styles="border-[1px] border-primary-default bg-primary-default hover:bg-primary-100 hover:text-primary-default text-white px-[32px] ml-3 rounded-md py-[10px] hidden lg:block "
          />
          <Button
            title="Write Article"
            styles="bg-primary-default hover:bg-primary-100 text-white px-[32px] rounded-md py-[10px] inline-flex md:hidden"
          />
        </div>
        <BsChat className="mx-6 w-[23px] h-[23px]" />
        <div className="flex items-center">
          <BiBot className="bg-primary-default text-white rounded-full p-1 w-[48px] h-[48px]"/>
          <AiOutlineCaretDown className="m-3 hidden lg:inline-flex" />
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="block lg:hidden ml-3"
          fontSize={40}
        />
      </div>
    </div>
  )
}

export default Navbar
