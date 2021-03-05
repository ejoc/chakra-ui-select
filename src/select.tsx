import React from 'react'
import {
  chakra,
  ChakraProps,
  HTMLChakraProps,
  StylesProvider,
  useMultiStyleConfig,
  useStyles
} from '@chakra-ui/system'
import { dataAttr, MaybeRenderProp, runIfFn } from '@chakra-ui/utils'
import Downshift, {
  ControllerStateAndHelpers,
  DownshiftProps,
  GetItemPropsOptions
} from 'downshift'
import { SelectProvider, useSelect } from './use-select'

export interface SelectLabelProps extends HTMLChakraProps<'span'> {}

export function SelectLabel(props: SelectLabelProps) {
  const styles = useStyles()
  return <chakra.span __css={styles.label} {...props} />
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
  const styles = useStyles()

  return (
    <chakra.button
      __css={styles.control}
      {...getToggleButtonProps()}
      {...props}
    />
  )
}

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
  const styles = useMultiStyleConfig('Select', props)
  return (
    <Downshift
      onChange={onChange}
      defaultIsOpen={defaultIsOpen}
      itemToString={itemToString}
    >
      {(downshift) => (
        <chakra.div pos='relative' {...props} {...downshift.getRootProps()}>
          <StylesProvider value={styles}>
            <SelectProvider value={downshift}>
              {runIfFn(children, {
                isOpen: downshift.isOpen,
                highlightedIndex: downshift.highlightedIndex,
                selectedItem: downshift.selectedItem
              })}
            </SelectProvider>
          </StylesProvider>
        </chakra.div>
      )}
    </Downshift>
  )
}
