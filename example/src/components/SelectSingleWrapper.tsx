import React, { Fragment } from 'react'
import Icon from '@chakra-ui/icon'
import { chakra } from '@chakra-ui/system'
import {
  SelectSingle,
  SelectControl,
  SelectMenu,
  SelectOption,
  SelectSearchInput,
  SelectButton,
  SelectSingleProps,
  SelectValueContainer,
  ArrowIndicator,
  SelectMenuList
} from 'chakra-ui-select'
import { FormControlOptions } from '@chakra-ui/form-control'
import { DownshiftProps } from 'downshift'

export interface Option {
  value: string
  label: string
}

interface FilterOptionArgs<Item> {
  items: Item[]
  getOptionLabel: (item: Item | null) => string
  inputValue: string | null
}

export type SelectSingleWrapperProps<Item> = FormControlOptions &
  Pick<SelectSingleProps<Item>, 'value' | 'onChange' | 'defaultValue'> & {
    options: Item[]
    placeholder?: string
    isSearchable?: boolean
    noOptionsMessage?(inputValue: string | null): string | null | undefined
    getOptionLabel?: DownshiftProps<Item>['itemToString']
    getOptionKey?: (item?: Item) => string
    filterOption?(args: FilterOptionArgs<Item>): Item[]
  }

function defaultFilterOption<Item>({
  items,
  inputValue,
  getOptionLabel
}: FilterOptionArgs<Item>): Item[] {
  return items.filter(
    (item) =>
      !inputValue ||
      getOptionLabel(item).toLowerCase().startsWith(inputValue.toLowerCase())
  )
}

export function SelectSingleWrapper<Item = Option>({
  options,
  getOptionLabel = (i) => (i === null ? '' : ((i as unknown) as Option).label),
  getOptionKey = (i) => (i === null ? '' : ((i as unknown) as Option).value),
  value,
  onChange,
  isSearchable,
  placeholder,
  noOptionsMessage = () => 'No options',
  filterOption = defaultFilterOption
}: SelectSingleWrapperProps<Item>) {
  return (
    <SelectSingle
      itemToString={getOptionLabel}
      value={value}
      onChange={onChange}
    >
      {({ selectedItem, inputValue }) => {
        const items = isSearchable
          ? filterOption({
              items: options,
              inputValue,
              getOptionLabel
            })
          : options
        const showPlaceholder = !selectedItem && !isSearchable && !!placeholder
        const noOptionsMsg = noOptionsMessage(inputValue)
        const showNoOptionsMsg = items.length <= 0 && !!noOptionsMsg
        return (
          <Fragment>
            <SelectControl>
              <SelectValueContainer>
                {!isSearchable && selectedItem && (
                  <chakra.span>{getOptionLabel(selectedItem)}</chakra.span>
                )}
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
                {items.map((option, index) => (
                  <SelectOption
                    key={getOptionKey(option)}
                    value={option}
                    index={index}
                  >
                    {getOptionLabel(option)}
                  </SelectOption>
                ))}
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
    </SelectSingle>
  )
}
