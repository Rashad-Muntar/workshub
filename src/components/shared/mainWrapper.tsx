import { PropsWithChildren } from "react"

const MainWrapper  = ({children}: PropsWithChildren) => {
    return (
        <div className="max-w-[1366px] w-[100%] border-2">
            {children}
        </div>
    )
}

export default MainWrapper