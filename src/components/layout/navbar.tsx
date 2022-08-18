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
            style="border-2 border-background h-full items-center hidden md:inline-flex"
            inputStyle="w-full h-full"
            placeholder='Search...'
          />
          <Search
            style="border-2 border-background  h-full items-center inline-flex md:hidden"
            inputStyle="w-full h-full"
          />
          <Button
            title="Write Article"
            styles="bg-primary-default w-[rem] whitespace-nowrap text-white px-[32px] ml-3 rounded-md py-[10px] hidden lg:block "
          />
          <Button
            title="Write Article"
            styles="bg-primary-default w-[10rem] whitespace-nowrap text-white px-[32px] rounded-md py-[10px] inline-flex md:hidden"
          />
        </div>
        <BsChat fontSize={40} className="mx-6" />
        <div className="flex items-center">
          <BiBot fontSize={40} className="bg-primary-default text-white rounded-full box-content p-3 "/>
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
