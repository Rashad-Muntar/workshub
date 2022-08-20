import algoliasearch from 'algoliasearch/lite'
import { Hits } from 'react-instantsearch-hooks-web'
import JobCard from './jobCard'
import { useHits } from 'react-instantsearch-hooks-web';
import { Grid, GridItem } from '@chakra-ui/react';


const JobsList = () => {
  return (
    <Grid templateColumns='repeat(1, 1fr)' gap={3}>
      <Hits hitComponent={JobCard}/>
    </Grid>
  )
}

export default JobsList
