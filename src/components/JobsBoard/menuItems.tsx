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

  const showArticlesHandler = () => {
    setShowArticle(!showArticle)
  }

  return (
    <div className="flex hidden md:inline-flex h-full ">
      <div
        className="relative"
        onMouseEnter={() => setShowJobs(true)}
        onMouseLeave={() => setShowJobs(false)}
      >
        <div className="flex items-center border-b-2 border-text-white hover:border-background-primary h-full">
          <p>Jobs</p>
          <AiOutlineCaretDown className="ml-3" />
        </div>
        {showJobs && (
          <div className="absolute bg-text-white z-10 p-3 min-w-[248px] flex flex-col rounded-lg shadow-md">
            <div className="flex items-center pb-2 hover:text-text-primaryPink">
              <BsGrid className="mr-3 hover" />
              <Link href="https://functional.works-hub.com/jobs">
                Jobsboard
              </Link>
            </div>
            <div className="flex items-center pb-2 hover:text-text-primaryPink">
              <BiBot className="mr-3" />
              <Link href="https://functional.works-hub.com/jobs">
                Recommended Jobs
              </Link>
            </div>
            <div className="flex items-center pb-2 hover:text-text-primaryPink">
              <BiBookmark className="mr-3" />
              <Link href="https://functional.works-hub.com/jobs">
                Saved Jobs
              </Link>
            </div>

            <div className="flex items-center pb-2 hover:text-text-primaryPink">
              <AiOutlineFile className="mr-3" />
              <Link href="https://functional.works-hub.com/jobs">
                Applied Jobs
              </Link>
            </div>
          </div>
        )}
      </div>

      <div
        className="relative"
        onMouseEnter={() => setShowArticle(true)}
        onMouseLeave={() => setShowArticle(false)}
      >
        <div className="flex items-center h-full mx-10 border-b-2 border-text-white hover:border-background-primary">
          <p onClick={showArticlesHandler}>Articles</p>
          <AiOutlineCaretDown className="ml-3" />
        </div>
        {showArticle && (
          <div className="absolute bg-text-white p-3 z-10 min-w-[248px] flex flex-col rounded-lg shadow-md">
            <div className="flex items-center pb-2 hover:text-text-primaryPink">
              <AiOutlineFile className="mr-3" />
              <Link href="https://functional.works-hub.com/jobs">
                All articles
              </Link>
            </div>
            <div className="flex items-center pb-2 hover:text-text-primaryPink">
              <AiOutlinePlusCircle className="mr-3" />
              <Link href="https://functional.works-hub.com/jobs">
                Write and articles
              </Link>
            </div>

            <div className="flex items-center pb-2 hover:text-text-primaryPink">
              <BiBookmark className="mr-3" />
              <Link href="https://functional.works-hub.com/jobs">
                Saved articles
              </Link>
            </div>
            <div></div>
          </div>
        )}
      </div>
      <div className="flex items-center border-b-2 border-text-white hover:border-background-primary">
        <Link href="https://functional.works-hub.com/companies">Companies</Link>
      </div>
    </div>
  )
}

export default MenuItems
