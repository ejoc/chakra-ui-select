# chakra-ui-select

> Chakra ui select

[![NPM](https://img.shields.io/npm/v/chakra-ui-select.svg)](https://www.npmjs.com/package/chakra-ui-select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save chakra-ui-select
```

## Basic Usage

```tsx
import React, { Component } from 'react'
import { chakra, ChakraProvider, extendTheme, Icon } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { matchSorter } from 'match-sorter'

import {
  theme as selectTheme,
  SelectSingle,
  SelectControl,
  SelectIndicator,
  SelectMenu,
  SelectMenuList,
  SelectOption,
  SelectValue
} from 'chakra-ui-select'

const theme = extendTheme({
  components: { ...selectTheme }
})

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'pear', label: 'Pear' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'banana', label: 'Banana' }
]

const fruitValues = fruits.map((item) => item.value)
const itemToString = (item: Option | null) => item?.label ?? ''

function Example() {
  return (
    <ChakraProvider theme={theme}>
      <SelectSingle my={4} itemToString={itemToString}>
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
      </SelectSingle>
    </ChakraProvider>
  )
}
```

## Autocomplete example

```tsx
function AutocompleteExample() {
  return (
    <SelectSingle my={4} itemToString={itemToString} defaultValue={fruits[1]}>
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
                  <SelectOption key={option.value} value={option} index={index}>
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
    </SelectSingle>
  )
}
```

## Select Single Wrapper example

```tsx
function SelectSingleWrapper() {
  return <SelectSingle options={fruits} placeholder='Select' isSearchable />
}
```

## Select Multiple example

```tsx
function SelectMultipleExample() {
  return (
    <SelectMultiple my={4} w='full' itemToString={itemToString}>
      {({ selectedItems, inputValue, getLabelProps }) => {
        const getFilteredItems = (items: Option[]) => {
          return items.filter((item: Option) => {
            if (inputValue) {
              return (
                selectedItems.indexOf(item) < 0 &&
                itemToString(item)
                  .toLowerCase()
                  .startsWith(inputValue.toLowerCase())
              )
            }
            return selectedItems.indexOf(item) < 0
          })
        }
        const items = getFilteredItems(fruits)
        return (
          <>
            <SelectControl>
              <SelectValueContainer>
                {selectedItems?.map((selectedItem, index) => (
                  <SelectedItemTag
                    key={`issues-item-${index}`}
                    index={index}
                    selectedItem={selectedItem}
                  >
                    {selectedItem.label}
                  </SelectedItemTag>
                ))}
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
                  <SelectOption key={option.value} value={option} index={index}>
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
    </SelectMultiple>
  )
}
```

## Select Multiple Wrapper example

```tsx
function SelectMultipleWrapperExample() {
  return <SelectMultipleWrapper options={fruits} placeholder='Select' />
}
```

## License

MIT © [ejoc](https://github.com/ejoc)
