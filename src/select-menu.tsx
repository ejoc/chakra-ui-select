import { chakra, ChakraProps, HTMLChakraProps } from '@chakra-ui/system'
import { GetItemPropsOptions } from 'downshift'
import React from 'react'
import { useSelect } from './use-select'

export type SelectOptionProps<Item = any> = Omit<
  GetItemPropsOptions<Item>,
  'item' | 'disabled' | 'value'
> &
  Omit<ChakraProps, 'value'> & {
    value: GetItemPropsOptions<Item>['item']
  }

export function SelectOption<Item = any>({
  children,
  value,
  index,
  ...props
}: SelectOptionProps<Item>) {
  const { getItemProps, highlightedIndex } = useSelect()
  const isActive = highlightedIndex === index
  return (
    <chakra.li
      transition='ease-in-out'
      color='gray.900'
      bg={isActive ? 'gray.50' : 'white'}
      cursor='default'
      userSelect='none'
      pos='relative'
      py={2}
      pl={3}
      pr={9}
      {...props}
      {...getItemProps({
        item: value,
        index
      })}
    >
      {children}
    </chakra.li>
  )
}

export interface SelectMenuListProps extends HTMLChakraProps<'ul'> {}

export function SelectMenuList({ children, ...props }: SelectMenuListProps) {
  const { getMenuProps, isOpen } = useSelect()

  return (
    <chakra.ul
      maxH={60}
      rounded='xl'
      py={1}
      fontSize={{ base: 'base', sm: 'sm' }}
      overflow='auto'
      _focus={{ outline: 'none' }}
      {...props}
      {...getMenuProps()}
      p={0}
    >
      {isOpen && children}
    </chakra.ul>
  )
}

export interface SelectMenuProps extends HTMLChakraProps<'div'> {}

export function SelectMenu(props: SelectMenuProps) {
  return (
    <chakra.div
      pos='absolute'
      mt={1}
      w='full'
      rounded='md'
      bg='white'
      shadow='lg'
      {...props}
    />
  )
}
