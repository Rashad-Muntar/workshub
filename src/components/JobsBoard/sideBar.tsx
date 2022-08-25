import Search from '../shared/search'
import Customebutton from '../shared/button'
import { locations, stacks } from '../shared/filterData'
import { FiGlobe } from 'react-icons/fi'
import { TbCertificate2 } from 'react-icons/tb'
import RadioCard from '../shared/radio'
import SelectInput from '../shared/select'
import SliderInput from '../shared/SliderInput'
import { Box, Text, Flex } from '@chakra-ui/react'

import CheckboxCard from '../shared/checkbox'

const SideBar = () => {

  return (
    <Box bg="primary.white" py="20px" px="16px" borderRadius="8px">
      <Box mb="32px">
        <Flex mb="16px" justify="space-between">
          <Text fontWeight="semibold" fontSize="16px">
            Search within jobs
          </Text>
          <small>Clear</small>
        </Flex>

        <Search
          showIcon={false}
          placeholder="Type to search"
          variant="flushed"
        />
      </Box>

      <Box className="mb-8">
        <Flex mb="16px" justify="space-between">
          <Text fontWeight="semibold" fontSize="16px">
            Tags
          </Text>
          <small>Clear</small>
        </Flex>
        <Search
          showIcon={false}
          placeholder="Type to search tags"
          variant="flushed"
        />
        <Flex wrap="wrap" mt="24px">
          {stacks.map((stack, index) => (
            <Customebutton
              title={stack}
              styles="m-0.5 opacity-30"
              key={index}
              color="primary.default"
              size="small"
              variant="primarySmall"
            />
          ))}
        </Flex>
      </Box>

      <Box className="mb-8" mb="32px">
        <Flex mb="16px" className="flex justify-between">
          <Text fontWeight="semibold" fontSize="16px">
            Location
          </Text>
          <small>Clear</small>
        </Flex>

        <Search
          showIcon={false}
          placeholder="Type to search location"
          variant="flushed"
        />
        <Flex wrap="wrap" mt="24px">
          {locations.map((location, index) => (
            <Customebutton
              title={location}
              key={index}
              styles="m-0.5 opacity-30"
              color="secondary.default"
              size="small"
              variant="secondarySmall"
            />
          ))}
        </Flex>
      </Box>

      <Flex mb="32px" direction="column">
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
        <Flex mb="16px" justify="space-between">
          <Text fontWeight="semibold" fontSize="16px">
            Compensation
          </Text>
          <small>Clear</small>
        </Flex>
        <Flex justify="space-between">
          <RadioCard placeholder="Yealy" value="1" />
          <RadioCard placeholder="Daily" value="2" />
        </Flex>
        <Flex justify="space-between" my="12px" alignItems="center">
          <SelectInput />
          <Text className="w-[75%] flex justify-end">$25k - $100k</Text>
        </Flex>
        <SliderInput />
        <CheckboxCard placeholder="Display 'Competitive'" />
      </Box>

      <Box className="mb-8">
        <Text fontWeight="semibold" fontSize="16px">
          Role type
        </Text>
        <Flex direction="column">
          <CheckboxCard placeholder="Full time" />
          <CheckboxCard placeholder="Contract" />
          <CheckboxCard placeholder="Intern" />
        </Flex>
      </Box>
      <Customebutton
        title="Apply-filter"
        // size="medium"
        variant="secondaryDark"
        // color="white"
        styles="w-full bg-btnBg "
      />
      <Text className="flex items-center justify-center w-full text-btnBg h-[42px] mt-12">
        Apply-filter
      </Text>
    </Box>
  )
}

export default SideBar
