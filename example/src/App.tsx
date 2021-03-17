import React, { useState } from 'react'
import { chakra, ChakraProvider, extendTheme, Icon } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons';

import {
  theme as selectTheme,
  Select,
  SelectControl,
  SelectLabel,
  SelectIndicator,
  SelectMenu,
  SelectMenuList,
  SelectOption,
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
  { value: 'banana', label: 'Banana' },
];

const fruitValues = fruits.map(item => item.value)

type Option = {
  value: string
  label: string
}

const App = () => {
  const [selected, setSelected] = useState<Option | null>()
  return (
    <ChakraProvider theme={theme}>
      <chakra.div my={4} maxW="lg" mx="auto">
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
                    <SelectOption
                      key={option}
                      value={option}
                      index={index}
                    >
                      {option}
                    </SelectOption>
                  ))}
                </SelectMenuList>
                </SelectMenu>
              </>
            )
          }}
        </Select>


        <Select my={4} itemToString={(item) => item?.label ?? 'Select'}>
          {({ selectedItem }) => {
            return (
              <>
              <SelectControl>
                <SelectLabel>{selectedItem?.label ?? 'Select'}</SelectLabel>
                <SelectIndicator>
                  <Icon as={ChevronDownIcon} />
                </SelectIndicator>
              </SelectControl>
              <SelectMenu zIndex={10}>
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
          value={selected}
          onChange={(changes) => setSelected(changes)}
          itemToString={(item) => item?.label ?? 'Select'}
        >
          <SelectControl>
            <SelectLabel>{selected?.label ?? 'Select'}</SelectLabel>
            <SelectIndicator>
              <Icon as={ChevronDownIcon} />
            </SelectIndicator>
          </SelectControl>
          <SelectMenu zIndex={10}>
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
        </Select>

        {/* <SelectMultiple
          w="full"
          // value={[]}
          // onChange={(changes) => console.log('changes', changes)}
          itemToString={(item: any) =>
            item?.label ?? "label"
          }
        >
          {({ selectedItems, getFilteredItems }) => {
            return (
              <>
                <SelectMultipleControl>
                  {selectedItems?.length ? (
                    <SelectedList>
                      {selectedItems?.map((selectedItem, index) => (
                        <SelectedItemTag
                          key={`issues-item-${index}`}
                          index={index}
                          selectedItem={selectedItem}
                        >
                          {selectedItem.label}
                        </SelectedItemTag>
                      ))}
                    </SelectedList>
                  ) : (
                    <span>
                      label
                    </span>
                  )}
                  <SelectIndicator>
                    <Icon as={ChevronDownIcon} />
                  </SelectIndicator>
                </SelectMultipleControl>
                <SelectMenu zIndex={10}>
                  <SelectMenuList>
                    {getFilteredItems(fruits).map((option, index) => (
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
            );
          }}
        </SelectMultiple> */}
      </chakra.div>
    </ChakraProvider>
  )
}

export default App
