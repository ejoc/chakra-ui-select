import React from 'react'
import {
  chakra,
  ChakraProps,
  HTMLChakraProps,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
  forwardRef
} from '@chakra-ui/system'
import { dataAttr, MaybeRenderProp, runIfFn } from '@chakra-ui/utils'
import Downshift, {
  ControllerStateAndHelpers,
  DownshiftProps,
  GetItemPropsOptions
} from 'downshift'
import { SelectProvider, useSelect } from './use-select'

export interface SelectLabelProps extends HTMLChakraProps<'span'> {}

export const SelectLabel = forwardRef<SelectLabelProps, 'span'>(
  (props, ref) => {
    const styles = useStyles()
    return <chakra.span ref={ref} __css={styles.label} {...props} />
  }
)

export interface SelectIndicatorProps extends HTMLChakraProps<'div'> {}

export const SelectIndicator = forwardRef<SelectIndicatorProps, 'div'>(
  ({ children, ...props }, ref) => {
    return (
      <chakra.div
        ref={ref}
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
)

export interface SelectControlProps extends HTMLChakraProps<'button'> {}

export const SelectControl = forwardRef<SelectControlProps, 'button'>(
  (props, ref) => {
    const { getToggleButtonProps } = useSelect()
    const styles = useStyles()

    return (
      <chakra.button
        ref={ref}
        __css={styles.control}
        {...getToggleButtonProps()}
        {...props}
      />
    )
  }
)

export type SelectOptionProps<Item = any> = Omit<
  GetItemPropsOptions<Item>,
  'item' | 'disabled' | 'value'
> &
  Omit<ChakraProps, 'value'> & {
    value: GetItemPropsOptions<Item>['item']
    isDisabled?: boolean
    children: MaybeRenderProp<{
      isSelected?: boolean
      isActive?: boolean
    }>
  }

export function SelectOption<Item = any>({
  children,
  value,
  index,
  isDisabled,
  ...props
}: SelectOptionProps<Item>) {
  const { getItemProps, selectedItem, highlightedIndex } = useSelect()
  const styles = useStyles()
  const isSelected = selectedItem === value
  const isActive = highlightedIndex === index
  return (
    <chakra.li
      bg={isActive ? 'gray.50' : 'white'}
      data-disabled={dataAttr(isDisabled)}
      {...getItemProps({
        item: value,
        index
      })}
      aria-selected={props.isSelected ? 'true' : `${isSelected}`}
      __css={styles.option}
      {...props}
    >
      {runIfFn(children, {
        isSelected,
        isActive
      })}
    </chakra.li>
  )
}

export interface SelectMenuListProps extends HTMLChakraProps<'ul'> {}

export const SelectMenuList = forwardRef<SelectMenuListProps, 'ul'>(
  ({ children, ...props }, ref) => {
    const { getMenuProps, isOpen } = useSelect()
    const styles = useStyles()

    if (!isOpen) return null

    return (
      <chakra.ul
        ref={ref}
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
)

export interface SelectMenuProps extends HTMLChakraProps<'div'> {}

export const SelectMenu = forwardRef<SelectMenuProps, 'div'>((props, ref) => {
  const styles = useStyles()
  return (
    <chakra.div
      ref={ref}
      __css={{
        pos: 'absolute',
        ...styles.menu
      }}
      {...props}
    />
  )
})

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
  const styles = useMultiStyleConfig('Select', {})
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
