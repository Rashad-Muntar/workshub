import { Grid, GridItem } from "@chakra-ui/react"
import SideBar from "./sideBar"
import JobsList from "../shared/jobsList"
const MainSection  = () => {
    return (
        <Grid  templateColumns='repeat(5, 1fr)' gap={4}>
            <GridItem colSpan={1}>
                <SideBar />
            </GridItem>
            <GridItem colSpan={4} >
                <JobsList />
            </GridItem>
        </Grid>
    )
}

export default MainSection