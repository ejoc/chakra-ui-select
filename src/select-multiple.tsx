import React, { useCallback, useRef } from 'react'
import Downshift, {
  PropGetters,
  useMultipleSelection,
  DownshiftProps,
  UseMultipleSelectionStateChange,
  UseMultipleSelectionGetSelectedItemPropsOptions
} from 'downshift'
import {
  chakra,
  HTMLChakraProps,
  StylesProvider,
  useMultiStyleConfig
} from '@chakra-ui/system'
import { runIfFn } from '@chakra-ui/utils'
import { MaybeRenderProp } from '@chakra-ui/react-utils'
import { Tag, TagLabel, TagCloseButton, TagProps } from '@chakra-ui/tag'
import { FormControlOptions } from '@chakra-ui/form-control'
import { useSelect, SelectProvider } from './use-select'

export type SelectTagProps<
  Item = any
> = UseMultipleSelectionGetSelectedItemPropsOptions<Item> & TagProps

export function SelectedItemTag({
  children,
  selectedItem,
  index,
  ...props
}: SelectTagProps) {
  const { removeSelectedItem, getSelectedItemProps, inputRef } = useSelect()
  return (
    <Tag
      size='sm'
      m='2px'
      zIndex={1}
      {...props}
      {...getSelectedItemProps?.({ selectedItem, index })}
    >
      <TagLabel color='primary' fontWeight='semibold'>
        {children}
      </TagLabel>
      <TagCloseButton
        cursor='default'
        _focus={{ outline: 'none' }}
        onClick={(e) => {
          e.stopPropagation()
          removeSelectedItem?.(selectedItem)
          inputRef.current?.focus()
        }}
      />
    </Tag>
  )
}

export type SelectMultipleProps<Item = any> = Omit<
  HTMLChakraProps<'div'>,
  'onChange'
> &
  FormControlOptions &
  Pick<
    DownshiftProps<Item>,
    'itemToString' | 'defaultIsOpen' | 'isOpen' | 'defaultHighlightedIndex'
  > & {
    initialSelectedItems?: Array<Item>
    defaultSelectedItems?: Array<Item>
    value?: Item[] | undefined
    onChange?: (changes: UseMultipleSelectionStateChange<Item>) => void
    children: MaybeRenderProp<{
      isOpen: boolean
      highlightedIndex: number | null
      onClose?(): void
      inputValue: string | null
      selectedItems: Array<Item>
      getLabelProps: PropGetters<Item>['getLabelProps']
    }>
  }

export function SelectMultiple<Item = any>({
  id,
  children,
  onChange,
  initialSelectedItems = [],
  defaultSelectedItems,
  itemToString,
  value,
  isDisabled,
  defaultHighlightedIndex = 0,
  defaultIsOpen,
  isOpen,
  ...props
}: SelectMultipleProps<Item>) {
  const inputRef = useRef<HTMLInputElement>(null)
  const styles = useMultiStyleConfig('SelectMultiple', {})
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems
  } = useMultipleSelection({
    defaultSelectedItems,
    initialSelectedItems,
    onSelectedItemsChange: onChange,
    ...(value && {
      selectedItems: value
    })
  })

  const getStateAndHelpers = useCallback(
    (downshift) => {
      return {
        ...downshift,
        selectedItems,
        getDropdownProps,
        getSelectedItemProps,
        removeSelectedItem
      }
    },
    [selectedItems, getDropdownProps, getSelectedItemProps, removeSelectedItem]
  )

  const stateReducer = useCallback((state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.keyDownSpaceButton:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          highlightedIndex: state.highlightedIndex,
          isOpen: true,
          inputValue: ''
        }
      default:
        return changes
    }
  }, [])

  const onStateChange = useCallback(
    ({ type, selectedItem }) => {
      switch (type) {
        case Downshift.stateChangeTypes.keyDownEnter:
        case Downshift.stateChangeTypes.keyDownSpaceButton:
        case Downshift.stateChangeTypes.clickItem:
          if (selectedItem) {
            addSelectedItem(selectedItem as never)
          }
          break
        default:
          break
      }
    },
    [addSelectedItem]
  )
  return (
    <Downshift
      id={id}
      stateReducer={stateReducer}
      onStateChange={onStateChange}
      selectedItem={null}
      itemToString={itemToString}
      initialHighlightedIndex={defaultHighlightedIndex}
      initialIsOpen={defaultIsOpen}
      isOpen={isOpen}
    >
      {(downshift) => {
        const ctx = { ...getStateAndHelpers(downshift), isDisabled, inputRef }
        return (
          <chakra.div
            position='relative'
            {...props}
            {...downshift.getRootProps()}
          >
            <StylesProvider value={styles}>
              <SelectProvider value={ctx}>
                {runIfFn(children, {
                  inputValue: downshift.inputValue,
                  isOpen: downshift.isOpen,
                  highlightedIndex: downshift.highlightedIndex,
                  selectedItems,
                  getLabelProps: downshift.getLabelProps
                })}
              </SelectProvider>
            </StylesProvider>
          </chakra.div>
        )
      }}
    </Downshift>
  )
}
