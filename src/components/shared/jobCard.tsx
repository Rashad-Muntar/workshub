import Image from 'next/image'
import Button from './button'
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai'
import { BiBookmark } from 'react-icons/bi'
import { FiGlobe } from 'react-icons/fi'

const JobCard = ({ hit }) => {
  let locationStyles =
    'bg-primary-100 text-primary-default  font-medium m-0.5 px-1'
  let remoteStyles =
    'bg-secondary-100 items-center text-secondary-default px-2 font-medium m-0.5'
  console.log(hit)
  return (
    <div className="relative bg-white rounded-lg p-6 shadow-md min-h-[18rem]">
      <div className="flex">
        <div className="mr-6">
          <img src={hit.company.logo} alt="" className="w-12" />
        </div>

        <div>
          <p className="font-bold">{hit.title}</p>
          <small>
            {hit.company.name}, {hit.location?.country}Location
          </small>
        </div>
      </div>
      <div className="flex flex-wrap my-3">
        {hit.tags.map((tag) => (
          <Button title={tag.label} styles={locationStyles} />
        ))}
      </div>

      <div className='w-full relative'>
        <small className=" whitespace-pre-wrap border-2 md:text-ellipsis overflow-hidden">
          {hit.description.substring(0, 90)}
        </small>
      </div>

      <div className="flex  w-[80%] flex-wrap">
        <p>
          ${hit.remuneration?.min}-{hit.remuneration?.max} + Equity
        </p>
        <div className="flex items-center px-3">
          {' '}
          <AiOutlineClockCircle className="box-content pr-2" />
          {hit['role-type']}
        </div>
        <div className="flex items-center">
          {' '}
          <AiOutlineCalendar />
          Date
        </div>
      </div>
      <div className="flex flex-wrap my-3">
        {hit.remote === true ? (
          <Button title="Remote" styles={remoteStyles} leftIcon={<FiGlobe />} /> 
        ):
          <Button />
        }
      </div>

      <div className="flex justify-between items-center">
        <BiBookmark className="w-[16px] h-[20px]" />
        <div className="flex items-center">
          <Button
            title="Apply"
            styles="border-primary-default border-[1px] hover:bg-primary-100 text-primary-default px-[32px] rounded-md py-[10px]"
          />
          <Button
            title="Apply"
            styles="bg-primary-default hover:bg-primary-100 text-white px-[32px] rounded-md py-[10px] ml-4"
          />
        </div>
      </div>
    </div>
  )
}

export default JobCard
