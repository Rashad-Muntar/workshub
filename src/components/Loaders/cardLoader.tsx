import {
  Flex,
  Box,
  Skeleton,
  Stack,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react'

function CardLoader() {
  return (
    <Flex>
      <Stack>
        <Flex>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={2} spacing="4" />
        </Flex>

        <Skeleton height="20px" width="70px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
      <Stack>
        <Flex>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={2} spacing="4" />
        </Flex>

        <Skeleton height="20px" width="70px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
      <Stack>
        <Flex>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={2} spacing="4" />
        </Flex>

        <Skeleton height="20px" width="70px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    </Flex>
  )
}

export default CardLoader
