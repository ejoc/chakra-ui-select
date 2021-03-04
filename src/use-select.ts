import {
  ControllerStateAndHelpers,
  UseMultipleSelectionReturnValue
} from 'downshift'
import { createContext } from '@chakra-ui/utils'

type SelectContext<Item = any> = ControllerStateAndHelpers<Item> &
  Partial<UseMultipleSelectionReturnValue<Item>>
const [SelectProvider, useSelect] = createContext<SelectContext>({
  strict: false,
  name: 'DownshiftContext'
})

export { SelectProvider, useSelect }
