interface Props {
  title: string
  menuitems: []
}

const MenuProducer = ({ title, menuitems }: Props) => {
  return (
    <div className="flex hidden md:inline-flex h-full ">
      <div className="relative">
        <div className="flex items-center border-b-2 border-text-white hover:border-background-primary h-full">
          <p>{title}</p>
          <AiOutlineCaretDown className="ml-3" />
        </div>
      </div>
    </div>
  )
}

export default MenuProducer
