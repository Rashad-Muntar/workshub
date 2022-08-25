import { BiBot } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsChat } from 'react-icons/bs'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { TbBallFootball } from 'react-icons/tb'
import { SearchBox } from 'react-instantsearch-hooks-web'
import Customebutton from '../shared/button'
import MenuItems from '../JobsBoard/menuItems'

const Navbar = () => {
  return (
    <div className="flex justify-between h-[60px]  items-center px-3 bg-text-white">

      <div className="flex justify-between h-full">
        <div className="flex items-center box-content sm:mr-12 mr-0">
          <TbBallFootball fontSize={47} className="text-text-primaryPink" />
          <div className=" ml-1">
            <p className="m-0 p-0 font-bold leading-none text-[12px]">
              FUNCTIONAL
            </p>
            <small className="m-0 p-0 leading-none">WORKS</small>
          </div>
        </div>

        <div className="h-full">
          <MenuItems />
        </div>
      </div>

      <div className="flex sm:pl-[30px] pl-0 justify-end items-center">
        <div className="hidden sm:inline-flex h-full">
          <div className="hidden md:inline-flex flex border-[1px] border-background hover:shadow-sm items-center pl-1 rounded-md">
            <FiSearch fontSize={22} className="text-text " />
            <SearchBox className="MyCustomSearchdiv" searchAsYouType={false} />
          </div>
          <div className="hidden inline-flex md:hidden border-[1px] border-background items-center hover:shadow-sm pl-1 rounded-md">
            <FiSearch fontSize={22} className="text-text " />
            <SearchBox className="MyCustomSearchdiv" searchAsYouType={false} />
          </div>
          <Customebutton
            size="medium"
            variant="primary"
            title="Write Article"
            styles="hidden lg:block ml-[20px] h-[40px]"
          />
          <Customebutton
            size="medium"
            variant="primary"
            title="Write Article"
            styles="inline-flex md:hidden"
          />
        </div>
     
          <BsChat className="ml-4 mr-3" fontSize="23px" />
          <div className="flex items-center">
            <BiBot
              fontSize="35px"
              className="bg-background-primary text-text-white rounded-full p-1"
            />
            <AiOutlineCaretDown className="m-3 hidden lg:inline-flex" />
          </div>
          <GiHamburgerMenu className="block lg:hidden ml-3" fontSize={24} />
       
      </div>
    </div>
  )
}

export default Navbar
