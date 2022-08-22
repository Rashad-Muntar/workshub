import Button from './button'
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai'
import { BiBookmark } from 'react-icons/bi'
import { FiGlobe } from 'react-icons/fi'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import { connectHits } from 'react-instantsearch-dom'
import { Index, useHits, UseHitsProps } from 'react-instantsearch-hooks-web'
import JobCard from '../shared/jobCard'

const JobList = (props: UseHitsProps) => {
  const { hits } = useHits(props)

  hits.map((hit) => {
    console.log(hit)
  })

  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={3}>
      {hits.map((hit: any, index) => (
        <JobCard
          key={index}
          name={hit.company?.name}
          logo={hit.company.logo}
          title={hit.title}
          country={hit.location?.country}
          description={hit.description}
          minSalary={hit.remuneration?.min}
          maxSalary={hit.remuneration?.max}
          role={'role-type'}
          remote={hit.remote}
          tags={hit.tags}
        />
      ))}
    </Grid>
  )
}

export default JobList
