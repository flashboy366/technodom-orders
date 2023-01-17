import {
  FieldValues,
  UseFieldArrayReturn,
  UseFormReturn,
} from 'react-hook-form'
import { createContext, ReactNode, useContext } from 'react'

type AllFormMethods<TFieldValues extends FieldValues = FieldValues> =
  UseFormReturn<TFieldValues> & UseFieldArrayReturn

const FieldArrayFormContext = createContext<AllFormMethods | null>(null)

FieldArrayFormContext.displayName = 'RHFArrayContext'

export const useFieldArrayFormContext = <
  TFieldValues extends FieldValues
>(): AllFormMethods<TFieldValues> => {
  return useContext(FieldArrayFormContext) as AllFormMethods<TFieldValues>
}

export declare type FieldArrayFormProviderProps<
  TFieldValues extends FieldValues = FieldValues
> = {
  children: ReactNode
} & AllFormMethods<TFieldValues>

export const FieldArrayFormProvider = <TFieldValues extends FieldValues>({
  children,
  ...props
}: FieldArrayFormProviderProps<TFieldValues>) => {
  return (
    <FieldArrayFormContext.Provider value={{ ...props } as AllFormMethods}>
      {children}
    </FieldArrayFormContext.Provider>
  )
}
