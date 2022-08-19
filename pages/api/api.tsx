import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, Highlight } from 'react-instantsearch-hooks-web';
import JobsList from '../../src/components/shared/jobsList';
import Search from '../../src/components/shared/search';
import JobCard from '../../src/components/shared/jobCard';

const searchClient = algoliasearch(
  'MVK698T35T',
  '16892df9d986a3976fbf0e13047d6d1b'
);

interface Props {
  placeholder: string

}
export const Fetch = ({placeholder}: Props) => {
  return (
    <InstantSearch searchClient={searchClient} indexName="instant_search">
      <Search placeholder={placeholder}/>
      <Hits hitComponent={JobCard} />
    </InstantSearch>
  );
}

