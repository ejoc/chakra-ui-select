import React, { useState } from 'react'
import { chakra, ChakraProvider, Icon } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons';

import {
  Select,
  SelectMultiple,
  SelectControl,
  SelectedItemTag,
  SelectMultipleControl,
  SelectedList,
  SelectLabel,
  SelectIndicator,
  SelectMenu,
  SelectMenuList,
  SelectOption,
} from 'chakra-ui-select'

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
    <ChakraProvider>
      <chakra.div my={4} maxW="lg" mx="auto">
        <Select my={4} itemToString={(item) => item?.label ?? 'Select'}>
          {({ selectedItem }) => {
            return (
              <>
              <SelectControl>
                {selectedItem ? <SelectLabel>{selectedItem}</SelectLabel> : <SelectLabel>Select</SelectLabel>}
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
                  {/* <SelectOption item="apple" index={0}>apple</SelectOption>
                  <SelectOption item="pear" index={1}>pear</SelectOption>
                  <SelectOption item="orange" index={2}>orange</SelectOption>
                  <SelectOption item="grape" index={3}>grape</SelectOption>
                  <SelectOption item="banana" index={4}>banana</SelectOption> */}
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
                {selectedItem ? <SelectLabel>{selectedItem.label}</SelectLabel> : <SelectLabel>Select</SelectLabel>}
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
            {selected ? <SelectLabel>{selected.label}</SelectLabel> : <SelectLabel>Select</SelectLabel>}
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

        <SelectMultiple
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
        </SelectMultiple>
      </chakra.div>
    </ChakraProvider>
  )
}

export default App
