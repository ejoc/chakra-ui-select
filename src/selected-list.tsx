import React from 'react'
import { chakra, HTMLChakraProps } from '@chakra-ui/system'
import { Tag, TagCloseButton, TagLabel, TagProps } from '@chakra-ui/tag'
import { UseMultipleSelectionGetSelectedItemPropsOptions } from 'downshift'
import { useSelect } from './use-select'

export type SelectTagProps<
  Item = any
> = UseMultipleSelectionGetSelectedItemPropsOptions<Item> & TagProps

export function SelectedItemTag({
  children,
  selectedItem,
  ...props
}: SelectTagProps) {
  const { removeSelectedItem } = useSelect()
  return (
    <Tag size='sm' m='2px' {...props}>
      <TagLabel color='primary' fontWeight='semibold'>
        {children}
      </TagLabel>
      <TagCloseButton
        onClick={(e) => {
          e.stopPropagation()
          removeSelectedItem?.(selectedItem)
        }}
      />
    </Tag>
  )
}

export interface SelectedListProps extends HTMLChakraProps<'div'> {}

export function SelectedList(props: SelectedListProps) {
  return (
    <chakra.div
      d='flex'
      alignItems='center'
      flex='1 1 0%'
      flexWrap='wrap'
      pos='relative'
      overflow='hidden'
      {...props}
    />
  )
}
