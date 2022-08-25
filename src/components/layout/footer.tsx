import React from 'react'
import Link from 'next/link'
import { Box, Flex, Text, Show, useMediaQuery} from '@chakra-ui/react'
import { MdEmail } from 'react-icons/md'
import { TbBallFootball } from 'react-icons/tb'
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

import Image from 'next/image'
import logo from '../../../public/footer.svg'

const Footer = () => {
  const [isLargerThan1008] = useMediaQuery('(min-width: 1008px)')
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  const currentYear = new Date().getFullYear()
  return (
    <Box bg="background.footer" h="100%" minH="534px" pt="40px" color="text.white">
      <Flex justify="space-between" px={isLargerThan1008 ? "40px" : "15px"}>
        <Box>
          <Flex mb={isLargerThan1008 ? "58px" : "28px"} alignItems="center">
            <TbBallFootball
              fontSize={47}
              className="text-text-primaryPink"
            />
            <Text fontSize="18px" fontWeight="bold" ml="8px">
              Workshub
            </Text>
          </Flex>
          <Box fontSize="13px ">
            <Flex h="30px" alignItems="center">
              <MdEmail color="yellow" className="mr-1" />
              hello@works-hub.com
            </Flex>
            <Flex h="30px" alignItems="center">
              <MdEmail color="red" className="mr-1" />
              Ground Floor, Verse Building, 18 Brunswick Place, London, N1 6DZ
            </Flex>
            <Flex h="30px" alignItems="center">
              <MdEmail color="green" className="mr-1" />
              08 E 16th Street, New York, NY 10003
            </Flex>
          </Box>
        </Box>
        <Show breakpoint="(min-width: 1008px)">
          <Box position="relative" width="100%" maxW="492px" h="auto">
            <Image src={logo} layout="fill" className="absolute" />
          </Box>
        </Show>
      </Flex>
      <Flex w="100%" justify="space-between" pt="35px" px={isLargerThan1008 ? "40px" : "15px"} wrap="wrap">
      {/* pb="20px" px="40px" */}
        <Flex minW="197px" mb="20px" direction="column" className='Footer-links-wrapper'>
          <Text mb="15px" fontWeight="bold">
            WorksHub
          </Text>
          <Link href="#">Companies</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Sitemap</Link>
          <Link href="#">Metrics</Link>
          <Link href="#">Functional Works</Link>
          <Link href="#">Blockchain works</Link>
          <Link href="#">Javascript works</Link>
          <Link href="#">AI works</Link>
          <Link href="#">Golang works</Link>
          <Link href="#">Java works</Link>
          <Link href="#">Python works</Link>
          <Link href="#">Remote</Link>
        </Flex>
        <Flex  minW="197px" mb="20px" direction="column" className='Footer-links-wrapper'>
          <Text mb="15px" fontWeight="bold">
            For companies
          </Text>
          <Link href="#">For employers</Link>
          <Link href="#">Register company</Link>
          <Link href="#">pricing and plans</Link>
          <Link href="#">Request a demo</Link>
          <Link href="#">Terms and service</Link>
        </Flex>
        <Flex  minW="197px" mb="20px" direction="column" className='Footer-links-wrapper'>
          <Text mb="15px" fontWeight="bold">
            Jobs
          </Text>
          <Link href="#">Scala jobs</Link>
          <Link href="#">Closure jobs</Link>
          <Link href="#">ClosureScript jobs</Link>
          <Link href="#">Haskell jobs</Link>
          <Link href="#">Erlang jobs</Link>
          <Link href="#">Elixir jobs</Link>
          <Link href="#">Elm jobs</Link>
          <Link href="#">ReasonML jobs</Link>
          <Link href="#">Ocaml jobs</Link>
        </Flex>
        <Flex minW="197px" mb="20px" direction="column" className='Footer-links-wrapper'>
          <Text mb="15px" fontWeight="bold">
            Locations
          </Text>
          <Link href="#">Jobs in New York</Link>
          <Link href="#">Jobs in London</Link>
          <Link href="#"> Jobs in San Francisco</Link>
          <Link href="#">Jobs in Berlin</Link>
          <Link href="#">Jobs in Barcelona</Link>
          <Link href="#">Remote Jobs</Link>
        </Flex>
        <Flex minW="197px" mb="20px" direction="column" className='Footer-links-wrapper'>
          <Text mb="15px" fontWeight="bold">
            Articles
          </Text>
          <Link href="#">Scala articles</Link>
          <Link href="#">Closure articles</Link>
          <Link href="#">ClosureScript articles</Link>
          <Link href="#">Haskell articles</Link>
          <Link href="#">Arlang articles</Link>
          <Link href="#">Elixir aricles</Link>
          <Link href="#">F# articles</Link>
        </Flex>
      </Flex>
      <Flex
        fontSize="12px"
        color="#6E7F89"
        justifyContent="space-between"
        alignItems={isLargerThan1008 ? "center" : "" }
        bg="white"
        minH="60px"
        pt="16px"
        px="40px"
        pb="20px"
        direction={isLargerThan1008 ? "row" : "column"}
      >
        <Flex>
          <BsLinkedin fontSize="32px" className="mr-[8px] rounded-full" />
          <BsTwitter fontSize="32px" className="mr-[8px]" />
          <BsFacebook fontSize="32px" className="mr-[8px]" />
          <BsGithub fontSize="32px" className="mr-[8px]" />
        </Flex>
        <Flex mt= "10px">
          <Text>&copy;{`${currentYear} Functional Works`}</Text>
          <Text className="px-2 mx-2 border-x-2 ">
            <Link href="#">Privacy Policy</Link>
          </Text>
          <Link href="#">Workshub clone by Rashad</Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
