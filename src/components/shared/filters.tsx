import Button from './button'
import { AiOutlineFileText, AiOutlineUnorderedList } from 'react-icons/ai'
import { BsGrid } from 'react-icons/bs'
import { BiBot, BiBookmark } from 'react-icons/bi'
import { FiFilter } from 'react-icons/fi'

const Filters = () => {
  return (
    <div className="w-full flex justify-between mb-6">
      <div className="flex flex-wrap">
        <Button
          title="All jobs"
          styles="bg-primary-text mr-3 sm:mr-0 text-white flex items-center my-1 h-10 px-6 font-semibold"
          leftIcon={<BsGrid />}
        />
        <Button
          title="Recommended Jobs"
          styles="bg-white mx-0 sm:mx-3 whitespace-nowrap text-primary-text my-1 flex items-center h-10 px-6 py-2.5 font-semibold"
          leftIcon={<BiBot />}
        />
        <Button
          title="Saved jobs"
          styles="bg-white mr-3 text-primary-text flex items-center my-1 h-10 py-2.5 px-6 font-semibold"
          leftIcon={<BiBookmark />}
        />
        <Button
          title="Applied to"
          styles="bg-white text-primary-text flex items-center h-10 my-1 px-6 py-2.5 font-semibold"
          leftIcon={<AiOutlineFileText />}
        />
        <Button
          title="Applied to"
          styles="bg-primary-default text-white flex items-center h-10 my-1 px-6 py-2.5 font-semibold inline-flex sm:hidden"
          leftIcon={<FiFilter />}
        />
      </div>

      <div className="flex hidden sm:inline-flex">
        <Button
          styles="bg-white text-primary-text  flex items-center h-10 px-6 py-2.5 font-semibold"
          leftIcon={<AiOutlineUnorderedList />}
        />
        <Button
          styles="bg-white text-primary-text flex items-center h-10  px-6 py-2.5 font-semibold"
          leftIcon={<BsGrid />}
        />
      </div>
    </div>
  )
}

export default Filters
