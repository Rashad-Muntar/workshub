import Search from '../shared/search'
import Button from '../shared/button'
import { locations, stacks } from '../shared/filterData'
import { FiGlobe } from 'react-icons/fi'
import { TbCertificate2 } from 'react-icons/tb'
import RadioCard from '../shared/radio'
import SelectInput from '../shared/select'
import SliderInput from '../shared/SliderInput'

import CheckboxCard from '../shared/checkbox'

const SideBar = () => {
  let locationStyles = 'bg-secondary-50 text-secondary-500 font-medium m-0.5'
  //   const [currentValue, setCurrentValue] = useState('')
  return (
    <div className="bg-white py-5 px-4">
      <div className="mb-8">
        <p>Search within jobs</p>
        <Search
          showIcon={false}
          placeholder="Type to search"
        />
      </div>

      <div className="mb-8">
        <p>Tags</p>
        <Search
          showIcon={false}
          placeholder="Type to search tags"
        />
        <div className="flex flex-wrap mt-6">
          {stacks.map((stack, index) => (
            <Button title={stack} styles={locationStyles} key={index} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <p>Location</p>

        <input
          type="checkbox"
          class="appearance-none indeterminate:bg-gray-300 ..."
        />
        <Search
          showIcon={false}
          placeholder="Type to search location"
        />
        <div className="flex flex-wrap mt-6">
          {locations.map((location, index) => (
            <Button title={location} styles={locationStyles} key={index} />
          ))}
        </div>
      </div>

      <div className="mb-8 flex flex-col">
        <CheckboxCard
          placeholder="Remote"
          icon={<FiGlobe className="text-secondary-default" />}
        />
        <CheckboxCard
          placeholder="Sponsorship offered"
          icon={<TbCertificate2 className="text-secondary-default" />}
        />
      </div>

      <div className="mb-8">
        <div className="flex justify-between">
          <p>Compensation</p>
          <small>Clear</small>
        </div>
        <div className="flex justify-between">
          <RadioCard placeholder="Yealy" value="1" />
          <RadioCard placeholder="Daily" value="2" />
        </div>
        <div className="flex items-center justify-between">
          <SelectInput />
          <p className="w-[50%] flex justify-end">$25k -- $100k</p>
        </div>
        <SliderInput />
        <CheckboxCard placeholder="Display 'Competitive'" />
      </div>

      <div className="mb-8">
        <p>Role type</p>
        <div className='flex flex-col'>
          <CheckboxCard placeholder="Full time" />
          <CheckboxCard placeholder="Contract" />
          <CheckboxCard placeholder="Intern" />
        </div>
      </div>
      <Button title='Apply-filter' styles='flex items-center justify-center w-full bg-btnBg text-white h-[42px]'/>
      <Button title='Apply-filter' styles='flex items-center justify-center w-full text-btnBg h-[42px] mt-12'/>
    </div>
  )
}

export default SideBar
