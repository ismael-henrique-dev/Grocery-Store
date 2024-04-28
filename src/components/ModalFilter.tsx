

export const ModalFilter = ({open, close}:any) => {
  if (open) {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center flex-wrap ">
        <div className="bg-zinc-200 rounded-lg sm:w-auto w-full md:h-[500px] h-[100%] fixed p-6 top-0 sm:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center flex-col overflow-hidden ">
          <h1>TESTE</h1>
        </div>
      </div>
    )
  }
}