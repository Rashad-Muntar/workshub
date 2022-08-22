import Button from './button'
import { AiOutlineFileText, AiOutlineUnorderedList } from 'react-icons/ai'
import { BsGrid } from 'react-icons/bs'
import { BiBot, BiBookmark } from 'react-icons/bi'
import { FiFilter } from 'react-icons/fi'

const Filters = () => {
  const blackBtnFilters = "sm:rounded-md rounded-2xl bg-primary-text mr-3 sm:mr-0 text-white  flex items-center my-1 h-10 px-6 font-semibold"
  const whiteBtnFilters = "sm:rounded-md rounded-2xl rounded-md bg-white whitespace-nowrap text-primary-text my-1 flex items-center h-10 px-6 py-2.5 font-semibold"
  
  return (
    <div className="w-full flex justify-between mb-6">
      <div className="flex flex-wrap">
        <Button
          title="All jobs"
          styles={`${blackBtnFilters}`}
          leftIcon={<BsGrid />}
        />
        <Button
          title="Recommended Jobs"
          styles={`${whiteBtnFilters} mx-0 sm:mx-3`}
          leftIcon={<BiBot />}
        />
        <Button
          title="Saved jobs"
          styles={`${whiteBtnFilters} mr-3`}
          leftIcon={<BiBookmark />}
        />
        <Button
          title="Applied to"
          styles={`${whiteBtnFilters} mr-3`}
          leftIcon={<AiOutlineFileText />}
        />
        <Button
          title="Filters"
          styles={`${whiteBtnFilters} inline-flex sm:hidden`}
          leftIcon={<FiFilter />}
        />
      </div>

      <div className="flex hidden sm:inline-flex">
        <Button
          styles="bg-white text-primary-text  flex items-center h-10 px-3 py-2.5 font-semibold"
          leftIcon={<AiOutlineUnorderedList />}
        />
        <Button
          styles="bg-white text-primary-text flex items-center h-10  px-3 py-2.5 font-semibold"
          leftIcon={<BsGrid />}
        />
      </div>
    </div>
  )
}

export default Filters
