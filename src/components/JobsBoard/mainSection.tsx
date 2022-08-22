import { Grid, GridItem, useMediaQuery, Show } from '@chakra-ui/react'
import SideBar from './sideBar'
import JobList from './JobList'

const MainSection = () => {
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)')

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4} className="w-[auto]">
      <Show breakpoint="(min-width: 770px)">
        <GridItem colSpan={1}>
          <SideBar />
        </GridItem>
      </Show>
      <GridItem colSpan={isLargerThan770 ? 4 : 5}>
        <JobList />
      </GridItem>
    </Grid>
  )
}

export default MainSection
