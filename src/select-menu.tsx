import {
  chakra,
  ChakraProps,
  HTMLChakraProps,
  useStyles
} from '@chakra-ui/system'
import { dataAttr } from '@chakra-ui/utils'
import { GetItemPropsOptions } from 'downshift'
import React from 'react'
import { useSelect } from './use-select'

export type SelectOptionProps<Item = any> = Omit<
  GetItemPropsOptions<Item>,
  'item' | 'disabled' | 'value'
> &
  Omit<ChakraProps, 'value'> & {
    value: GetItemPropsOptions<Item>['item']
    isDisabled?: boolean
  }

export function SelectOption<Item = any>({
  children,
  value,
  index,
  isDisabled,
  ...props
}: SelectOptionProps<Item>) {
  const { getItemProps, selectedItem } = useSelect()
  const styles = useStyles()
  const isSelected = selectedItem === value
  return (
    <chakra.li
      data-disabled={dataAttr(isDisabled)}
      {...getItemProps({
        item: value,
        index
      })}
      aria-selected={props.isSelected ? 'true' : `${isSelected}`}
      __css={styles.option}
      {...props}
    >
      {children}
    </chakra.li>
  )
}

export interface SelectMenuListProps extends HTMLChakraProps<'ul'> {}

export function SelectMenuList({ children, ...props }: SelectMenuListProps) {
  const { getMenuProps, isOpen } = useSelect()
  const styles = useStyles()

  if (!isOpen) return null

  return (
    <chakra.ul
      __css={{
        ...styles.list,
        fontSize: { base: 'base', sm: 'sm' }
      }}
      {...getMenuProps()}
      {...props}
    >
      {isOpen && children}
    </chakra.ul>
  )
}

export interface SelectMenuProps extends HTMLChakraProps<'div'> {}

export function SelectMenu(props: SelectMenuProps) {
  const styles = useStyles()
  return (
    <chakra.div
      __css={{
        pos: 'absolute',
        ...styles.menu
      }}
      {...props}
    />
  )
}
