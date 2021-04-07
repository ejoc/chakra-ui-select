import { ControllerStateAndHelpers } from 'downshift'
import { createContext } from '@chakra-ui/react-utils'
import { RefObject } from 'react'

type SelectContext<Item = any> = ControllerStateAndHelpers<Item> & {
  isDisabled?: boolean
  inputRef: RefObject<HTMLInputElement>
}
const [SelectProvider, useSelect] = createContext<SelectContext>({
  strict: false,
  name: 'DownshiftContext'
})

export { SelectProvider, useSelect }
