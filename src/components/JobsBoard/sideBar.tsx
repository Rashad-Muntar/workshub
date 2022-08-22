import Search from '../shared/search'
import Button from '../shared/button'
import { locations, stacks } from '../shared/filterData'
import { FiGlobe } from 'react-icons/fi'
import { TbCertificate2 } from 'react-icons/tb'
import RadioCard from '../shared/radio'
import SelectInput from '../shared/select'
import SliderInput from '../shared/SliderInput'
import { Box, Text, Flex } from '@chakra-ui/react'

import CheckboxCard from '../shared/checkbox'

const SideBar = () => {
  let locationStyles = 'bg-secondary-50 opacity-30 text-secondary-500 font-medium m-0.5'
  let stackStyles = 'bg-primary-100 text-primary-default opacity-30 font-medium m-0.5 px-1 rounded-sm'
  
  return (
    <Box bg="primary.white" py="20px" px="16px">
      <Box mb="32px">
        <Text mb="16px" fontWeight="medium">Search within jobs</Text>
        <Search
          showIcon={false}
          placeholder="Type to search"
          variant='flushed'
        />
      </Box>

      <Box className="mb-8">
        <Text mb="16px">Tags</Text>
        <Search
          showIcon={false}
          placeholder="Type to search tags"
          variant='flushed'
        />
        <Flex className="flex-wrap mt-6">
          {stacks.map((stack, index) => (
            <Button title={stack} styles={stackStyles} key={index} />
          ))}
        </Flex>
      </Box>

      <Box className="mb-8">
        <Text mb="16px">Location</Text>
        
        <Search
          showIcon={false}
          placeholder="Type to search location"
          variant='flushed'
        />
        <Flex className="flex flex-wrap mt-6">
          {locations.map((location, index) => (
            <Button title={location} styles={locationStyles} key={index} />
          ))}
        </Flex>
      </Box>

      <Flex className="mb-8 flex flex-col">
        <CheckboxCard
          placeholder="Remote"
          icon={<FiGlobe className="text-secondary-default" />}
        />
        <CheckboxCard
          placeholder="Sponsorship offered"
          icon={<TbCertificate2 className="text-secondary-default" />}
        />
      </Flex>

      <Box className="mb-8">
        <Flex className="flex justify-between">
          <Text>Compensation</Text>
          <small>Clear</small>
        </Flex>
        <Box className="flex justify-between">
          <RadioCard placeholder="Yealy" value="1" />
          <RadioCard placeholder="Daily" value="2" />
        </Box>
        <Flex className="flex items-center justify-between">
          <SelectInput />
          <Text className="w-[50%] flex justify-end">$25k -- $100k</Text>
        </Flex>
        <SliderInput />
        <CheckboxCard placeholder="Display 'Competitive'" />
      </Box>

      <Box className="mb-8">
        <Text>Role type</Text>
        <Flex className='flex-col'>
          <CheckboxCard placeholder="Full time" />
          <CheckboxCard placeholder="Contract" />
          <CheckboxCard placeholder="Intern" />
        </Flex>
      </Box>
      <Button title='Apply-filter' styles='flex items-center justify-center w-full bg-btnBg text-white h-[42px]'/>
      <Button title='Apply-filter' styles='flex items-center justify-center w-full text-btnBg h-[42px] mt-12'/>
    </Box>
  )
}

export default SideBar
