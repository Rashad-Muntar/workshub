import { AiOutlineFileText, AiOutlineUnorderedList } from 'react-icons/ai'
import { BsGrid } from 'react-icons/bs'
import { BiBot, BiBookmark } from 'react-icons/bi'
import { FiFilter } from 'react-icons/fi'
import Customebutton from '../shared/button'

const Filters = () => {
  const blackBtnFilters =
    'sm:rounded-md mb-2 rounded-2xl mr-3 sm:mr-0 font-semibold'
  const whiteBtnFilters =
    'sm:rounded-md rounded-2xl rounded-md mb-2 whitespace-nowrap font-semibold'

  return (
    <div className="w-full flex justify-between mb-6">
      <div className="flex flex-wrap">
        <Customebutton
          title="All jobs"
          variant="secondaryDark"
          color="white"
          styles={`${blackBtnFilters}`}
          leftIcon={<BsGrid />}
        />
        <Customebutton
          variant="secondaryWhite"
          title="Recommended Jobs"
          color="btnBg"
          // styles='mx-0 sm:mx-3 md:mr-6'
          styles={`${whiteBtnFilters} mx-0 sm:mx-3 md:mr-6`}
          leftIcon={<BiBot />}
        />
        <Customebutton
          variant="secondaryWhite"
          color="btnBg"
          title="Saved jobs"
          styles={`${whiteBtnFilters} mr-3`}
          leftIcon={<BiBookmark />}
        />
        <Customebutton
          variant="secondaryWhite"
          color="btnBg"
          title="Applied to"
          styles={`${whiteBtnFilters} mr-3`}
          leftIcon={<AiOutlineFileText />}
        />
        <Customebutton
          variant="primary"
          color="white"
          title="Filters"
          styles={`${whiteBtnFilters} inline-flex sm:hidden`}
          leftIcon={<FiFilter />}
        />
      </div>

      <div className="flex hidden sm:inline-flex bg-text-white box-boarder h-[40px] items-center p-0 m-0">
        <AiOutlineUnorderedList fontSize="25px" fontWeight="bold"  className='mx-3 p-0'/>
        <BsGrid className='mx-3' fontSize="25px" />
      </div>
    </div>
  )
}

export default Filters
