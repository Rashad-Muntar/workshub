import Search from '../shared/search'
import Button from '../shared/button'
const SideBar = () => {
    let locationStyles  = "bg-secondary-50 text-secondary-500 font-medium m-0.5"

  return (
    <div className="bg-white py-5 px-4">
      <div className="mb-8">
        <p>Search within jobs</p>
        <Search
          showIcon={false}
          style="border-2 border-b-background"
          placeholder="Type to search"
        />
      </div>

      <div className="mb-8">
        <p>Tags</p>
        <Search
          showIcon={false}
          style="border-2 border-b-background"
          placeholder="Type to search tags"
        />
      </div>

      <div className="mb-8">
        <p>Location</p>
        <Search
          showIcon={false}
          style="border-2 border-b-background"
          placeholder="Type to search location"
        />
        <div className='flex flex-wrap'>
            <Button title='UNITED KINGDOM' styles={locationStyles}/>
            <Button title='UNITED STATES' styles={locationStyles}/>
            <Button title='EUROPE' styles={locationStyles}/>
            <Button title='AMERICAS' styles={locationStyles}/>
            <Button title='LONDON' styles={locationStyles}/>
            <Button title='NEW YORK' styles={locationStyles}/>
            <Button title='GERMANY' styles={locationStyles}/>
            <Button title='SAN FRANCISCO' styles={locationStyles}/>
            <Button title='BERLIN' styles={locationStyles}/>
            <Button title='ASIA' styles={locationStyles}/>
            <Button title='FRANCE' styles={locationStyles}/>
            <Button title='PARIS' styles={locationStyles}/>
            <Button title='JAPAN' styles={locationStyles}/>
        </div>
      </div>


    </div>
  )
}

export default SideBar
