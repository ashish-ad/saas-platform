import { ReactNode } from "react";

interface maxWidthWrapperInput {
  className?: string,
  children: ReactNode
}

const MaxWidthWrapper = (maxWidthWrapperInput: maxWidthWrapperInput) => { // Need to define the type of input you sending inside the a function.
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        {maxWidthWrapperInput.children /* Need destructure the object passed in as variable by using dot notation. */ }
    </div>
  )
}

export default MaxWidthWrapper