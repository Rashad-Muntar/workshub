import type { NextPage } from 'next'
import CustomeHead from '../src/components/Head'
import Navbar from '../src/components/layout/navbar'
import styles from '../styles/Home.module.css'
import Filters from '../src/components/shared/filters'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-hooks-web'
import MainSection from '../src/components/JobsBoard/mainSection'
import { Box } from '@chakra-ui/react'
import Footer from '../src/components/layout/footer'

const searchClient = algoliasearch(
  'MVK698T35T',
  '16892df9d986a3976fbf0e13047d6d1b'
)

const Home: NextPage = () => {
  return (
    <>
      <CustomeHead title="Jobsboard | Functional works functional.works-hub.com/" />
      <Box className={styles.container}>
        <InstantSearch searchClient={searchClient} indexName="jobs">
          <Navbar />
          <main className={styles.main}>
            <Filters />
            <MainSection />
          </main>
        </InstantSearch>
        <Footer />
      </Box>
    </>
  )
}

export default Home
