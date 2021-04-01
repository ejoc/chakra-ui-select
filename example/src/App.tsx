import React, { useState } from 'react'
import {
  chakra,
  ChakraProvider,
  extendTheme,
  FormControl,
  FormLabel,
  Icon
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { matchSorter } from 'match-sorter'

import {
  theme as selectTheme,
  Select,
  SelectControl,
  SelectIndicator,
  SelectMenu,
  SelectMenuList,
  SelectOption,
  SelectSearchInput,
  SelectClearIndicator,
  ArrowIndicator,
  SelectButton,
  SelectValue,
  SelectAutocomplete
} from 'chakra-ui-select'

const theme = extendTheme({
  components: {
    SelectSingle: selectTheme,
    Autocomplete: selectTheme
  }
})

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'pear', label: 'Pear' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'banana', label: 'Banana' }
]

const fruitValues = fruits.map((item) => item.value)

type Option = {
  value: string
  label: string
}

const App = () => {
  const [selected, setSelected] = useState<Option | null | undefined>()

  const itemToString = (item: Option | null) => item?.label ?? ''

  return (
    <ChakraProvider theme={theme}>
      <chakra.div my={4} maxW='lg' mx='auto'>
        <Select my={4}>
          {({ selectedItem }) => {
            return (
              <>
                <SelectControl>
                  <SelectValue>{selectedItem ?? 'Select'}</SelectValue>
                  <SelectIndicator>
                    <ArrowIndicator>
                      <Icon aria-hidden w={6} h={6} as={ChevronDownIcon} />
                    </ArrowIndicator>
                  </SelectIndicator>
                </SelectControl>
                <SelectMenu>
                  <SelectMenuList>
                    {fruitValues.map((option, index) => (
                      <SelectOption key={option} value={option} index={index}>
                        {option}
                      </SelectOption>
                    ))}
                  </SelectMenuList>
                </SelectMenu>
              </>
            )
          }}
        </Select>

        <Select
          my={4}
          value={selected}
          onChange={(changes) => setSelected(changes)}
          itemToString={itemToString}
        >
          {({ selectedItem }) => {
            return (
              <>
                <SelectControl>
                  <SelectValue>{itemToString(selectedItem)}</SelectValue>
                  <SelectIndicator>
                    <SelectClearIndicator />
                    <ArrowIndicator>
                      <Icon as={ChevronDownIcon} w={6} h={6} />
                    </ArrowIndicator>
                  </SelectIndicator>
                </SelectControl>
                <SelectMenu>
                  <SelectMenuList>
                    {fruits.map((option, index) => (
                      <SelectOption
                        key={option.value}
                        value={option}
                        index={index}
                      >
                        {option.label}
                      </SelectOption>
                    ))}
                  </SelectMenuList>
                </SelectMenu>
              </>
            )
          }}
        </Select>

        <Select
          my={4}
          isDisabled
          itemToString={itemToString}
          defaultValue={fruits[2]}
        >
          {({ selectedItem }) => (
            <>
              <SelectControl>
                <SelectValue>{itemToString(selectedItem)}</SelectValue>
                <SelectIndicator>
                  <SelectClearIndicator />
                  <ArrowIndicator>
                    <Icon as={ChevronDownIcon} w={6} h={6} />
                  </ArrowIndicator>
                </SelectIndicator>
              </SelectControl>
              <SelectMenu>
                <SelectMenuList>
                  {fruits.map((option, index) => (
                    <SelectOption
                      key={option.value}
                      value={option}
                      index={index}
                    >
                      {option.label}
                    </SelectOption>
                  ))}
                </SelectMenuList>
              </SelectMenu>
            </>
          )}
        </Select>

        <Select my={4} itemToString={itemToString} defaultValue={fruits[1]}>
          {({ inputValue }) => {
            const getFilteredItems = (items: Option[]) => {
              return matchSorter(items, inputValue ?? '', { keys: ['label'] })
            }
            const items = getFilteredItems(fruits)
            return (
              <>
                <SelectAutocomplete>
                  <SelectSearchInput placeholder='Select' />
                  <SelectButton aria-label='toggle menu'>
                    <SelectIndicator>
                      <SelectClearIndicator />
                      <ArrowIndicator>
                        <Icon as={ChevronDownIcon} w={6} h={6} />
                      </ArrowIndicator>
                    </SelectIndicator>
                  </SelectButton>
                </SelectAutocomplete>
                <SelectMenu>
                  <SelectMenuList>
                    {items.map((option, index) => (
                      <SelectOption
                        key={option.value}
                        value={option}
                        index={index}
                      >
                        {option.label}
                      </SelectOption>
                    ))}
                    {items.length <= 0 && (
                      <chakra.div py={2} pl={3} pr={9}>
                        No found
                      </chakra.div>
                    )}
                  </SelectMenuList>
                </SelectMenu>
              </>
            )
          }}
        </Select>

        <Select my={4} itemToString={itemToString}>
          {({ inputValue, getLabelProps }) => {
            const getFilteredItems = (items: Option[]) => {
              return matchSorter(items, inputValue ?? '', { keys: ['label'] })
            }
            const items = getFilteredItems(fruits)
            return (
              <FormControl>
                <FormLabel {...getLabelProps()}>Select a fruit</FormLabel>
                <SelectAutocomplete>
                  <SelectSearchInput placeholder='Select' />
                  <SelectButton aria-label='toggle menu'>
                    <SelectIndicator>
                      <SelectClearIndicator />
                      <ArrowIndicator>
                        <Icon as={ChevronDownIcon} w={6} h={6} />
                      </ArrowIndicator>
                    </SelectIndicator>
                  </SelectButton>
                </SelectAutocomplete>
                <SelectMenu>
                  <SelectMenuList>
                    {items.map((option, index) => (
                      <SelectOption
                        key={option.value}
                        value={option}
                        index={index}
                      >
                        {option.label}
                      </SelectOption>
                    ))}
                    {items.length <= 0 && (
                      <chakra.div py={2} pl={3} pr={9}>
                        No found
                      </chakra.div>
                    )}
                  </SelectMenuList>
                </SelectMenu>
              </FormControl>
            )
          }}
        </Select>
      </chakra.div>
    </ChakraProvider>
  )
}

export default App
