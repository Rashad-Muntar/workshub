import { ArrowRightIcon } from "@chakra-ui/icons"

const SliceHelper = (arg) => {
    arg = arg.toString()
    if(arg.length > 5){
        arg = arg.slice(0,3)
    }else{
        arg = arg.slice(0,2)
    }
    return arg
}

export default SliceHelper