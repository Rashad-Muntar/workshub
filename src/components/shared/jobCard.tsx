import Customebutton from './button'
// import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai'
import { BiBookmark } from 'react-icons/bi'
import { FiGlobe } from 'react-icons/fi'
import { Box, Flex, Text, GridItem, useMediaQuery } from '@chakra-ui/react'
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
  role,
}: Props) => {
  let tagsStyles =
    'bg-primary-100 text-primary-default box-content text-[11px] m-0.5 p-1'
  let remoteStyles =
    'bg-secondary-100 items-center text-secondary-default px-2 font-medium m-0.5'

  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')

  return (
    <GridItem
      colSpan={isLargerThan1024 ? 1 : 2}
      bg="primary.white"
      p="24px"
      borderRadius="8px"
      className="flex flex-col justify-between h-[100%] w-[100%] drop-shadow-md"
    >
      <Flex>
        <Box
          mr="15px"
          w="48px"
          h="48px"
          minH="48px"
          minW="48px"
          position="relative"
        >
          <Image
            src={logo}
            className="absolute w-12 rounded-[4px]"
            alt="job image"
            layout="fill"
          />
        </Box>

        <Box>
          <Text
            textAlign="center"
            noOfLines={1}
            fontWeight="bold"
            fontSize="18px"
          >
            {title}
          </Text>
          <Text fontSize="sm" noOfLines={1}>
            {name}, {country}
          </Text>
        </Box>
      </Flex>

      <Box className="mt-[16px]">
        <Flex wrap="wrap">
          {tags?.map((tag) => (
            <Customebutton
              title={tag.label.toUpperCase()}
              styles="m-[1.5px]"
              color="primary.default"
              size="small"
              variant="primarySmall"
            />
          ))}
        </Flex>

        <Box w="100%" mt="16px">
          <Text fontSize="xs" noOfLines={2}>
            {description?.substring(0, 90)}
          </Text>
        </Box>
      </Box>

      <Box className="">
        <Box className="flex  w-[90%] flex-wrap">
          <p className="font-semibold">
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
            <Customebutton
              size="small"
              variant="secondarySmall"
              color="secondary.default"
              title="Remote"
              leftIcon={<FiGlobe />}
            />
          )}
        </Box>
      </Box>
      <Box className="">
        <Box className="flex justify-between items-center">
          <BiBookmark className="w-[23px] h-[23px]" />
          <Box className="flex ">
            <Customebutton
              size="medium"
              variant="secondary"
              title="More info"
            />
            <Customebutton
              size="medium"
              variant="primary"
              title="Apply"
              styles="ml-5"
            />
          </Box>
        </Box>
      </Box>
    </GridItem>
  )
}

// const CustomHits = connectHits(Hits)

export default JobCard
