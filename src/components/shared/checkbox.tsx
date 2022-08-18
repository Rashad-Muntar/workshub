import React from "react";
import { Checkbox} from '@chakra-ui/react'


interface Props {
    placeholder: string,
    icon?: string
}

function CheckboxCard({placeholder, icon}: Props) {
 

  return (
    <Checkbox size='lg'>
    <div className="flex items-center">
      <p className="mr-2">{placeholder}</p>
      {icon}
    </div>
  </Checkbox>
  );
}

export default CheckboxCard;
