import Button from './button'
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai'
import { BiBookmark } from 'react-icons/bi'
import { FiGlobe } from 'react-icons/fi'
import { Box, GridItem, useMediaQuery } from '@chakra-ui/react'
import { connectHits } from 'react-instantsearch-dom'


interface Props {
  title: string
  logo: string
  country: string
  name: string
  tags: []
  description: string
  minSalary: string
  maxSalary: string
  remote: boolean
  role: string
}

const JobCard = ({
  title,
  logo,
  country,
  name,
  tags,
  description,
  minSalary,
  maxSalary,
  remote,
  role
}: Props) => {
  let locationStyles =
    'bg-primary-100 text-primary-default  font-medium m-0.5 px-1'
  let remoteStyles =
    'bg-secondary-100 items-center text-secondary-default px-2 font-medium m-0.5'

    const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')

  return (
    <GridItem colSpan={isLargerThan1024 ? 1 : 2} bg="primary.white" p="24px" borderRadius="8px" className="flex flex-col justify-between h-[100%] w-[100%]">
      <Box className=" flex">
        <Box className="mr-6">
          <img src={logo} alt="" className="w-12 rounded-[4px]" />
        </Box>

        <Box>
          <p className="card-title">{title}</p>
          <small>
            {name}, {country}
          </small>
        </Box>
      </Box>
      
      <Box className="mt-[16px]">
        <Box className="flex flex-wrap">
          {tags?.map((tag) => (
            <Button title={tag.label} styles={locationStyles} />
          ))}
        </Box>

        <Box className="w-full mt-[16px]">
          <small className="description">
            {description?.substring(0, 90)}
          </small>
        </Box>
      </Box>

      <Box className="">
        <Box className="flex  w-[90%] flex-wrap">
          <p className='font-semibold'>
            ${minSalary}-{maxSalary} + Equity
          </p>
          <Box className="flex items-center px-3">
            {' '}
            <AiOutlineClockCircle className="box-content pr-2" />
            {[role]}
          </Box>
          <Box className="flex items-center">
            {' '}
            <AiOutlineCalendar />
            Date
          </Box>
        </Box>
        <Box className="flex flex-wrap my-3">
          {remote === true && (
            <Button
              title="Remote"
              styles={remoteStyles}
              leftIcon={<FiGlobe />}
            />
          )}
        </Box>
      </Box>
      <Box className="">
        <Box className="flex justify-between items-center">
          <BiBookmark className="w-[23px] h-[23px]" />
          <Box className="flex ">
            <Button
              title="More info"
              styles="border-primary-default border-[1px] hover:bg-primary-100 text-primary-default px-[0.8rem] rounded-sm py-[.4rem]"
            />
            <Button
              title="Apply"
              styles="border-primary-default border-[1px] bg-primary-default hover:bg-primary-100 hover:text-primary-default text-white px-[0.8rem] rounded-sm ml-4"
            />
          </Box>
        </Box>
      </Box>
    </GridItem>
  )
}

// const CustomHits = connectHits(Hits)

export default JobCard
