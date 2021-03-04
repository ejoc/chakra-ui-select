import React from 'react'
import { chakra, ChakraProps, HTMLChakraProps } from '@chakra-ui/system'
import { MaybeRenderProp, runIfFn } from '@chakra-ui/utils'
import Downshift, { ControllerStateAndHelpers, DownshiftProps } from 'downshift'
import { SelectProvider, useSelect } from './use-select'

export interface SelectLabelProps extends HTMLChakraProps<'span'> {}

export function SelectLabel(props: SelectLabelProps) {
  return (
    <chakra.span
      d='block'
      fontSize='sm'
      fontWeight='medium'
      color='gray.700'
      {...props}
    />
  )
}

export interface SelectIndicatorProps extends HTMLChakraProps<'div'> {}

export function SelectIndicator({ children, ...props }: SelectIndicatorProps) {
  return (
    <chakra.div
      d='flex'
      flexShrink={0}
      alignItems='center'
      alignSelf='stretch'
      {...props}
    >
      <chakra.div
        as='span'
        position='absolute'
        insetY={0}
        right={0}
        display='flex'
        alignItems='center'
        pr={2}
        pointerEvents='none'
      >
        {children}
      </chakra.div>
    </chakra.div>
  )
}

export interface SelectControlProps extends HTMLChakraProps<'button'> {}

export function SelectControl(props: SelectControlProps) {
  const { getToggleButtonProps } = useSelect()
  // const theme = useTheme()

  return (
    <chakra.button
      bg='white'
      position='relative'
      w='full'
      border='1px'
      borderColor='gray.300'
      rounded='md'
      shadow='base'
      pl={3}
      pr={10}
      py={2}
      textAlign='left'
      cursor='default'
      _focus={{
        outline: 'none',
        borderColor: 'gray.400'
        // boxShadow: `0 0 0 1px ${getColor(theme, 'gray.400')}`
      }}
      _readOnly={{ boxShadow: 'none !important', userSelect: 'all' }}
      _disabled={{
        opacity: 0.4,
        cursor: 'not-allowed'
      }}
      {...props}
      {...getToggleButtonProps()}
    />
  )
}

export type SelectProps<Item = any> = Omit<ChakraProps, 'onChange'> &
  Pick<DownshiftProps<Item>, 'itemToString' | 'defaultIsOpen'> & {
    isOpen?: boolean
    defaultHighlightedIndex?: number
    defaultValue?: Item
    value?: Item
    onChange?(
      selectedItem: Item | null,
      stateAndHelpers?: ControllerStateAndHelpers<Item>
    ): void
    children: MaybeRenderProp<{
      isOpen: boolean
      highlightedIndex: number | null
      selectedItem: Item | null
      onClose?(): void
    }>
  }

export function Select<Item = any>({
  children,
  defaultValue,
  defaultIsOpen,
  onChange,
  itemToString,
  ...props
}: SelectProps<Item>) {
  return (
    <Downshift
      onChange={onChange}
      defaultIsOpen={defaultIsOpen}
      itemToString={itemToString}
    >
      {(downshift) => (
        <chakra.div pos='relative' {...props} {...downshift.getRootProps()}>
          <SelectProvider value={downshift}>
            {runIfFn(children, {
              isOpen: downshift.isOpen,
              highlightedIndex: downshift.highlightedIndex,
              selectedItem: downshift.selectedItem
            })}
          </SelectProvider>
        </chakra.div>
      )}
    </Downshift>
  )
}
