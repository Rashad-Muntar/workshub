import { useState } from 'react'
import Link from 'next/link'
import {
  AiOutlineCaretDown,
  AiOutlineFile,
  AiOutlinePlusCircle,
} from 'react-icons/ai'
import { BsGrid } from 'react-icons/bs'
import { BiBot, BiBookmark } from 'react-icons/bi'

BsGrid
const MenuItems = () => {
  const [showJobs, setShowJobs] = useState(false)
  const [showArticle, setShowArticle] = useState(false)

  const showJobsHandler = () => {
    setShowJobs(!showJobs)
  }

  const showArticlesHandler = () => {
    setShowArticle(!showArticle)
  }

  return (
    <div className="flex hidden md:inline-flex h-full ">
      <div className="relative">
        <div className="flex items-center border-b-2 h-full">
          <p onClick={showJobsHandler}>Jobsboard</p>
          <AiOutlineCaretDown className="ml-3" />
        </div>
        {showJobs && (
          <div className="absolute bg-white p-3 min-w-[248px] flex flex-col rounded-lg shadow-md">
            <div className="flex items-center">
              <BsGrid className="mr-3" />
              <Link href="https://functional.works-hub.com/jobs">
                Jobsboard
              </Link>
            </div>
            <div className="flex items-center">
              <BiBot className="mr-3" />
              <Link href="https://functional.works-hub.com/jobs">
                Recommended Jobs
              </Link>
            </div>
            <div className="flex items-center">
              <BiBookmark className="mr-3" />
              <Link href="https://functional.works-hub.com/jobs">
                Saved Jobs
              </Link>
            </div>

            <div className="flex items-center">
              <AiOutlineFile className="mr-3" />
              <Link href="https://functional.works-hub.com/jobs">
                Applied Jobs
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="relative">
        <div className="flex items-center h-full px-10">
          <p onClick={showArticlesHandler}>Articles</p>
          <AiOutlineCaretDown className="ml-3" />
        </div>
        {showArticle && (
          <div className="absolute bg-white p-3 min-w-[248px] flex flex-col rounded-lg shadow-md">
            <div className="flex items-center">
              <AiOutlineFile className="mr-3" />
              <Link href="https://functional.works-hub.com/jobs">
                All articles
              </Link>
            </div>
            <div className="flex items-center">
              <AiOutlinePlusCircle className="mr-3" />
              <Link href="https://functional.works-hub.com/jobs">
                Write and articles
              </Link>
            </div>

            <div className="flex items-center">
              <BiBookmark className="mr-3" />
              <Link href="https://functional.works-hub.com/jobs">
                Saved articles
              </Link>
            </div>
            <div></div>
          </div>
        )}
      </div>
      <div className="flex items-center">
        <Link href="https://functional.works-hub.com/companies">Companies</Link>
      </div>
    </div>
  )
}

export default MenuItems
