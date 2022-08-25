import { AiOutlineFileText, AiOutlineUnorderedList } from 'react-icons/ai'
import { BsGrid } from 'react-icons/bs'
import { BiBot, BiBookmark } from 'react-icons/bi'
import { FiFilter } from 'react-icons/fi'
import Customebutton from './button'

const Filters = () => {
  const blackBtnFilters =
    'sm:rounded-md rounded-2xl bg-primary-text mr-3 sm:mr-0 text-white  flex items-center my-1 h-10 px-6 font-semibold'
  const whiteBtnFilters =
    'sm:rounded-md rounded-2xl rounded-md bg-white whitespace-nowrap my-1 flex items-center h-10 px-6 py-2.5 font-semibold'

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
          styles={`${whiteBtnFilters} mx-0 sm:mx-3 md:mr-6 text-primary-text`}
          leftIcon={<BiBot />}
        />
        <Customebutton
          variant="secondaryWhite"
          color="btnBg"
          title="Saved jobs"
          styles={`${whiteBtnFilters} mr-3 text-primary-text`}
          leftIcon={<BiBookmark />}
        />
        <Customebutton
          variant="secondaryWhite"
          color="btnBg"
          title="Applied to"
          styles={`${whiteBtnFilters} mr-3 text-primary-text`}
          leftIcon={<AiOutlineFileText />}
        />
        <Customebutton
          variant="primary"
          color="white"
          title="Filters"
          styles={`${whiteBtnFilters} inline-flex sm:hidden bg-primary-default`}
          leftIcon={<FiFilter />}
        />
      </div>

      <div className="flex hidden sm:inline-flex">
        <Customebutton
          variant="secondaryWhite"
          color="btnBg"
          styles="flex items-center h-10 px-3 py-2.5 font-semibold"
          leftIcon={<AiOutlineUnorderedList />}
        />
        <Customebutton
          variant="secondaryWhite"
          color="btnBg"
          styles="bg-white text-primary-text flex items-center h-10  px-3 py-2.5 font-semibold"
          leftIcon={<BsGrid />}
        />
      </div>
    </div>
  )
}

export default Filters
