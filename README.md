# chakra-ui-select

> Chakra ui select

[![NPM](https://img.shields.io/npm/v/chakra-ui-select.svg)](https://www.npmjs.com/package/chakra-ui-select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save chakra-ui-select
```

## Usage

```tsx
import React, { Component } from 'react'
import { chakra, ChakraProvider, extendTheme, Icon } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import {
  theme as selectTheme,
  Select,
  SelectControl,
  SelectLabel,
  SelectIndicator,
  SelectMenu,
  SelectMenuList,
  SelectOption
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
                <SelectLabel>{selectedItem ?? 'Select'}</SelectLabel>
                <SelectIndicator>
                  <Icon as={ChevronDownIcon} />
                </SelectIndicator>
              </SelectControl>
              <SelectMenu zIndex={10}>
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

## License

MIT © [ejoc](https://github.com/ejoc)
