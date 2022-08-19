import algoliasearch from 'algoliasearch/lite'
import { Hits } from 'react-instantsearch-hooks-web'
import JobCard from './jobCard'
import { useHits } from 'react-instantsearch-hooks-web';


const JobsList = () => {
  return (
    <div className='w-[74%]'>
      <Hits hitComponent={JobCard}/>
    </div>
  )
}

export default JobsList
