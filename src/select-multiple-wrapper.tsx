import React, { Fragment } from 'react'
import Icon from '@chakra-ui/icon'
import { chakra } from '@chakra-ui/system'
import {
  ArrowIndicator,
  SelectButton,
  SelectControl,
  SelectSearchInput,
  SelectValueContainer,
  SelectMenu,
  SelectMenuList,
  SelectOption
} from './select'
import {
  SelectMultiple,
  SelectMultipleProps,
  SelectedItemTag
} from './select-multiple'
import { DownshiftProps } from 'downshift'
import { FormControlOptions, FormLabel } from '@chakra-ui/form-control'

interface Option {
  value: string
  label: string
}

interface FilterOptionArgs<Item> {
  items: Item[]
  selectedItems: Item[]
  getOptionLabel: (item: Item | null) => string
  inputValue: string | null
}

function defaultFilterOption<Item>({
  items,
  inputValue,
  selectedItems,
  getOptionLabel
}: FilterOptionArgs<Item>): Item[] {
  return items.filter((item) => {
    if (inputValue) {
      return (
        selectedItems.indexOf(item) < 0 &&
        getOptionLabel(item).toLowerCase().startsWith(inputValue.toLowerCase())
      )
    }
    return selectedItems.indexOf(item) < 0
  })
}

export type SelectMutipleWrapperProps<Item> = FormControlOptions &
  Pick<SelectMultipleProps<Item>, 'value' | 'onChange' | 'defaultValue'> & {
    options: Item[]
    label?: string
    placeholder?: string
    isSearchable?: boolean
    noOptionsMessage?(inputValue: string | null): string | null
    getOptionLabel?: DownshiftProps<Item>['itemToString']
    getOptionKey?: (item: Item) => string
    filterOption?(args: FilterOptionArgs<Item>): Item[]
  }

export function SelectMultipleWrapper<Item = Option>({
  options,
  getOptionLabel = (i) => (i === null ? '' : ((i as unknown) as Option).label),
  getOptionKey = (i) => (i === null ? '' : ((i as unknown) as Option).value),
  filterOption = defaultFilterOption,
  placeholder,
  isSearchable,
  value,
  onChange,
  isDisabled,
  label,
  noOptionsMessage = () => 'No options'
}: SelectMutipleWrapperProps<Item>) {
  return (
    <SelectMultiple
      isDisabled={isDisabled}
      itemToString={getOptionLabel}
      value={value}
      onChange={onChange}
    >
      {({ selectedItems, inputValue, getLabelProps }) => {
        const showPlaceholder =
          selectedItems.length <= 0 && !isSearchable && !!placeholder
        const items = filterOption({
          items: options,
          selectedItems,
          inputValue,
          getOptionLabel
        })
        const noOptionsMsg = noOptionsMessage(inputValue)
        const showNoOptionsMsg = items.length <= 0 && !!noOptionsMsg
        return (
          <Fragment>
            {!!label && <FormLabel {...getLabelProps()}>{label}</FormLabel>}
            <SelectControl>
              <SelectValueContainer>
                {selectedItems?.map((selectedItem, index) => (
                  <SelectedItemTag
                    key={`legal_practice-item-${index}`}
                    index={index}
                    selectedItem={selectedItem}
                  >
                    {getOptionLabel(selectedItem)}
                  </SelectedItemTag>
                ))}
                {isSearchable && (
                  <SelectSearchInput placeholder={placeholder} />
                )}
                {showPlaceholder && (
                  <chakra.span color='gray.400' fontWeight='normal'>
                    {placeholder}
                  </chakra.span>
                )}
              </SelectValueContainer>
              <SelectButton aria-label='toggle menu'>
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
                {items.map((option, index) => {
                  const key = getOptionKey(option)
                  const label = getOptionLabel(option)
                  return (
                    <SelectOption
                      key={JSON.stringify(key)}
                      value={option}
                      index={index}
                    >
                      {label}
                    </SelectOption>
                  )
                })}
                {showNoOptionsMsg && (
                  <chakra.div py={2} pl={3} pr={9} color='gray.900'>
                    {noOptionsMsg}
                  </chakra.div>
                )}
              </SelectMenuList>
            </SelectMenu>
          </Fragment>
        )
      }}
    </SelectMultiple>
  )
}
