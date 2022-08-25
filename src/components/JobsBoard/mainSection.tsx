import { Grid, GridItem, useMediaQuery, Show } from '@chakra-ui/react'
import SideBar from './sideBar'
import JobList from './JobList'
// import { Pagination } from 'react-instantsearch-hooks-web'

const MainSection = () => {
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)')

  return (
    <Grid templateColumns="repeat(8, 1fr)" gap={4}>
      <Show breakpoint="(min-width: 770px)">
        <GridItem colSpan={2}>
          <SideBar />
        </GridItem>
      </Show>
      <GridItem colSpan={isLargerThan770 ? 6 : 8}>
        <JobList />
      </GridItem>
      
    </Grid>
  )
}

export default MainSection
