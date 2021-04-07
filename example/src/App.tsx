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
  SelectMenu,
  SelectMenuList,
  SelectOption,
  SelectSearchInput,
  ArrowIndicator,
  SelectButton,
  SelectValueContainer,
  SelectSingle
} from 'chakra-ui-select'

const theme = extendTheme({
  components: {
    SelectSingle: selectTheme.SelectSingle,
    SelectMultiple: selectTheme.SelectMultiple
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

const itemToString = (item: Option | null) => item?.label ?? ''

const App = () => {
  const [selected, setSelected] = useState<Option | null | undefined>()

  return (
    <ChakraProvider theme={theme}>
      <chakra.div my={4} maxW='lg' mx='auto'>
        <Select my={4}>
          {({ selectedItem }) => {
            return (
              <>
                <SelectControl>
                  <SelectValueContainer>
                    <chakra.span d='block' isTruncated>
                      {selectedItem ?? 'Select'}
                    </chakra.span>
                  </SelectValueContainer>
                  <SelectButton>
                    <ArrowIndicator>
                      <Icon
                        aria-hidden
                        boxSize='1em'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M19 9l-7 7-7-7'
                        />
                      </Icon>
                    </ArrowIndicator>
                  </SelectButton>
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
                  <SelectValueContainer>
                    <chakra.span d='block' isTruncated>
                      {itemToString(selectedItem)}
                    </chakra.span>
                  </SelectValueContainer>
                  <SelectButton aria-label='toggle menu'>
                    <ArrowIndicator>
                      <Icon as={ChevronDownIcon} boxSize='1em' />
                    </ArrowIndicator>
                  </SelectButton>
                </SelectControl>
                <SelectMenu>
                  <SelectMenuList>
                    {fruits.map((option, index) => (
                      <SelectOption
                        key={option.value}
                        value={option}
                        index={index}
                      >
                        {itemToString(option)}
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
          defaultValue={fruits[3]}
        >
          {({ selectedItem }) => (
            <>
              <SelectControl>
                <SelectValueContainer>
                  {itemToString(selectedItem)}
                </SelectValueContainer>
                <SelectButton aria-label='toggle menu'>
                  <ArrowIndicator>
                    <Icon as={ChevronDownIcon} boxSize='1em' />
                  </ArrowIndicator>
                </SelectButton>
              </SelectControl>
              <SelectMenu>
                <SelectMenuList>
                  {fruits.map((option, index) => (
                    <SelectOption
                      key={option.value}
                      value={option}
                      index={index}
                    >
                      {itemToString(option)}
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
                <SelectControl>
                  <SelectValueContainer>
                    <SelectSearchInput placeholder='Select' />
                  </SelectValueContainer>
                  <SelectButton aria-label='toggle menu'>
                    <ArrowIndicator>
                      <Icon as={ChevronDownIcon} />
                    </ArrowIndicator>
                  </SelectButton>
                </SelectControl>
                <SelectMenu>
                  <SelectMenuList>
                    {items.map((option, index) => (
                      <SelectOption
                        key={option.value}
                        value={option}
                        index={index}
                      >
                        {itemToString(option)}
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
                <SelectControl>
                  <SelectValueContainer>
                    <SelectSearchInput placeholder='Select' />
                  </SelectValueContainer>
                  <SelectButton aria-label='toggle menu'>
                    <ArrowIndicator>
                      <Icon as={ChevronDownIcon} boxSize='1em' />
                    </ArrowIndicator>
                  </SelectButton>
                </SelectControl>
                <SelectMenu>
                  <SelectMenuList>
                    {items.map((option, index) => (
                      <SelectOption
                        key={option.value}
                        value={option}
                        index={index}
                      >
                        {itemToString(option)}
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

        <SelectSingle options={fruits} placeholder='Select' isSearchable />
      </chakra.div>
    </ChakraProvider>
  )
}

export default App
