import { useState } from 'react'
import { useFormik, Field } from 'formik'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'

interface Props {
  placeholder: string
  value: string
}
const RadioCard = ({ placeholder, value }: Props) => {
    const [currentValue, setCurrentValue] = useState('')

    const radioHandler  = () => {
        console.log(value)
        setCurrentValue(value)
    }
  return (
 
      <div>
        <input className='mr-2 bg-background' type="radio" value={currentValue} name={'answerOption'} onClick={radioHandler}/>
        {placeholder}
      </div>

  )
}

export default RadioCard
