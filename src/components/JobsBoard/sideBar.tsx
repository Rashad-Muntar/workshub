import Search from '../shared/search'
import Button from '../shared/button'
import { locations, stacks } from '../shared/filterData'
import { FiGlobe } from 'react-icons/fi'
import { TbCertificate2 } from 'react-icons/tb'
import RadioCard from '../shared/radio'
import SelectInput from '../shared/select'
import SliderInput from '../shared/SliderInput'
import { SearchBox } from 'react-instantsearch-hooks-web'
import { Box } from '@chakra-ui/react'

import CheckboxCard from '../shared/checkbox'

const SideBar = () => {
  let locationStyles = 'bg-secondary-50 opacity-30 text-secondary-500 font-medium m-0.5'
  let stackStyles = 'bg-primary-100 text-primary-default opacity-30 font-medium m-0.5 px-1 rounded-sm'
  //   const [currentValue, setCurrentValue] = useState('')
  return (
    <Box className="bg-white py-5 px-4">
      <Box className="mb-8">
        <p>Search within jobs</p>
        <Search
          showIcon={false}
          placeholder="Type to search"
          variant='flushed'
        />
      </Box>

      <Box className="mb-8">
        <p>Tags</p>
        <Search
          showIcon={false}
          placeholder="Type to search tags"
          variant='flushed'
        />
        <Box className="flex flex-wrap mt-6">
          {stacks.map((stack, index) => (
            <Button title={stack} styles={stackStyles} key={index} />
          ))}
        </Box>
      </Box>

      <Box className="mb-8">
        <p>Location</p>
        
        <Search
          showIcon={false}
          placeholder="Type to search location"
          variant='flushed'
        />
        <Box className="flex flex-wrap mt-6">
          {locations.map((location, index) => (
            <Button title={location} styles={locationStyles} key={index} />
          ))}
        </Box>
      </Box>

      <Box className="mb-8 flex flex-col">
        <CheckboxCard
          placeholder="Remote"
          icon={<FiGlobe className="text-secondary-default" />}
        />
        <CheckboxCard
          placeholder="Sponsorship offered"
          icon={<TbCertificate2 className="text-secondary-default" />}
        />
      </Box>

      <Box className="mb-8">
        <Box className="flex justify-between">
          <p>Compensation</p>
          <small>Clear</small>
        </Box>
        <Box className="flex justify-between">
          <RadioCard placeholder="Yealy" value="1" />
          <RadioCard placeholder="Daily" value="2" />
        </Box>
        <Box className="flex items-center justify-between">
          <SelectInput />
          <p className="w-[50%] flex justify-end">$25k -- $100k</p>
        </Box>
        <SliderInput />
        <CheckboxCard placeholder="Display 'Competitive'" />
      </Box>

      <Box className="mb-8">
        <p>Role type</p>
        <Box className='flex flex-col'>
          <CheckboxCard placeholder="Full time" />
          <CheckboxCard placeholder="Contract" />
          <CheckboxCard placeholder="Intern" />
        </Box>
      </Box>
      <Button title='Apply-filter' styles='flex items-center justify-center w-full bg-btnBg text-white h-[42px]'/>
      <Button title='Apply-filter' styles='flex items-center justify-center w-full text-btnBg h-[42px] mt-12'/>
    </Box>
  )
}

export default SideBar
