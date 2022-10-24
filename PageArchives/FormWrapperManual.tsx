import { ReactNode } from "react"
import './assets/css/base.css'



type FormWrapperProps = {
  title: string
  children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2>
        {title}
      </h2>
      <div>
        {children}
      </div>
    </>
  )
}