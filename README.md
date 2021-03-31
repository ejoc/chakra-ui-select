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

import {
  theme as selectTheme,
  Select,
  SelectControl,
  SelectIndicator,
  SelectMenu,
  SelectMenuList,
  SelectOption,
  SelectValue
} from 'chakra-ui-select'

const theme = extendTheme({
  components: {
    SelectSingle: selectTheme
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

function Example() {
  return (
    <ChakraProvider theme={theme}>
      <Select my={4}>
        {({ selectedItem }) => {
          return (
            <>
              <SelectControl>
                <SelectValue>{selectedItem ?? 'Select'}</SelectValue>
                <SelectIndicator>
                  <ArrowIndicator>
                    <Icon as={ChevronDownIcon} />
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
    </ChakraProvider>
  )
}
```

## Autocomplete example

```tsx
function AutocompleteExample() {
  return (
    <Select my={4} itemToString={itemToString} defaultValue={fruits[1]}>
      <SelectAutocomplete>
        <SelectSearchInput placeholder='Select' />
        <SelectButton aria-label='toggle menu'>
          <SelectIndicator>
            <SelectClearIndicator />
            <ArrowIndicator>
              <Icon as={ChevronDownIcon} />
            </ArrowIndicator>
          </SelectIndicator>
        </SelectButton>
      </SelectAutocomplete>
      <SelectMenu>
        <SelectMenuList>
          {fruits.map((option, index) => (
            <SelectOption key={option.value} value={option} index={index}>
              {option.label}
            </SelectOption>
          ))}
        </SelectMenuList>
      </SelectMenu>
    </Select>
  )
}
```

## License

MIT © [ejoc](https://github.com/ejoc)
