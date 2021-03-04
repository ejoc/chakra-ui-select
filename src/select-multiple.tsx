import React, { useCallback } from 'react'
import { ChakraProps, chakra, HTMLChakraProps } from '@chakra-ui/system'
import { MaybeRenderProp, runIfFn } from '@chakra-ui/utils'
import Downshift, {
  DownshiftProps,
  useMultipleSelection,
  UseMultipleSelectionStateChange
} from 'downshift'
import { SelectProvider, useSelect } from './use-select'

export interface SelectMultipleControlProps extends HTMLChakraProps<'div'> {}

export function SelectMultipleControl(props: SelectMultipleControlProps) {
  const { getToggleButtonProps, getDropdownProps, isOpen } = useSelect()
  // const theme = useTheme()

  return (
    <chakra.div
      cursor='default'
      position='relative'
      w='full'
      backgroundColor='white'
      textAlign='left'
      transition='all'
      lineHeight='base'
      fontSize={{ base: 'sm', md: 'md' }}
      alignItems='center'
      rounded='lg'
      d='flex'
      flexWrap='wrap'
      justifyContent='space-between'
      shadow='base'
      border='1px'
      borderColor='transparent'
      fontWeight='semibold'
      color='primary'
      px={{ base: 4, md: 5 }}
      pt={8}
      pb={2}
      m={0}
      boxSizing='border-box'
      height='auto'
      _hover={{ borderColor: 'gray.300' }}
      _readOnly={{ boxShadow: 'none !important', userSelect: 'all' }}
      _focus={{
        outline: 'none',
        zIndex: 1,
        borderColor: 'gray.400'
        // boxShadow: `0 0 0 1px ${getColor(theme, 'gray.400')}`
      }}
      _disabled={{
        opacity: 0.4,
        cursor: 'not-allowed'
      }}
      // _invalid={{
      //   color: getColor(theme, 'red.500'),
      //   boxShadow: `0 0 0 1px ${getColor(theme, 'red.500')}`,
      //   borderColor: getColor(theme, 'red.500')
      // }}
      {...props}
      {...getToggleButtonProps(
        getDropdownProps?.({ preventKeyAction: isOpen })
      )}
    />
  )
}

export type SelectMultipleProps<Item = any> = Omit<ChakraProps, 'onChange'> &
  Pick<DownshiftProps<Item>, 'itemToString'> & {
    isDisabled?: boolean
    isInvalid?: boolean
    isReadOnly?: boolean
    initialSelectedItems?: Array<Item>
    defaultSelectedItems?: Array<Item>
    value?: Item[] | undefined
    onChange?: (changes: UseMultipleSelectionStateChange<Item>) => void
    children: MaybeRenderProp<{
      isOpen?: boolean
      onClose?(): void
      highlightedIndex?: number
      selectedItems: Array<Item>
      getFilteredItems(options: Item[]): Item[]
    }>
  }

export function SelectMultiple<Item = any>({
  children,
  onChange,
  initialSelectedItems = [],
  defaultSelectedItems,
  itemToString,
  value,
  ...props
}: SelectMultipleProps<Item>) {
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

  const getFilteredItems = useCallback(
    (items: Array<Item>) =>
      items.filter((item: Item) => selectedItems.indexOf(item) < 0),
    [selectedItems]
  )

  const getStateAndHelpers = useCallback(
    (downshift) => {
      return {
        ...downshift,
        selectedItems,
        getDropdownProps,
        getSelectedItemProps,
        removeSelectedItem,
        getFilteredItems
      }
    },
    [
      selectedItems,
      getFilteredItems,
      getDropdownProps,
      getSelectedItemProps,
      removeSelectedItem
    ]
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
      stateReducer={stateReducer}
      onStateChange={onStateChange}
      selectedItem={null}
      itemToString={itemToString}
    >
      {(downshift) => (
        <chakra.div
          position='relative'
          {...props}
          {...downshift.getRootProps()}
        >
          <SelectProvider value={getStateAndHelpers(downshift)}>
            {runIfFn(children, {
              isOpen: downshift.isOpen,
              selectedItems,
              getFilteredItems
            })}
          </SelectProvider>
        </chakra.div>
      )}
    </Downshift>
  )
}
