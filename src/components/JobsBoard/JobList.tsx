import { Grid, Text, Heading } from '@chakra-ui/react'
import { useHits, UseHitsProps } from 'react-instantsearch-hooks-web'
import JobCard from '../shared/jobCard'
import { Pagination } from 'react-instantsearch-hooks-web'

const JobList = (props: UseHitsProps) => {
  const { hits } = useHits(props)

  const promoted = hits.slice(10,12)
  console.log(promoted)
  // hits.map((hit) => {
  //   console.log(hit)
  // })

  return (
    <>
      <Heading as="h2" fontSize="16px" fontWeight="600" mb="10px" lineHeight="22px">Promoted jobs</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        {promoted.map((hit: any, index) => (
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
      <Text as="h2" color="text" fontSize="16px" mb="7px" mt="20px">{`We found ${hits.length} jobs matching your criteria`}</Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
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
      <Pagination padding={2} showLast={true} className="MyCustomPagination selectedItem" />
    </>
  )
}

export default JobList
