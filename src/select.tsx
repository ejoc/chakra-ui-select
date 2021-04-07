import React, { Fragment, useImperativeHandle, useRef } from 'react'
import {
  chakra,
  ChakraProps,
  HTMLChakraProps,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
  forwardRef
} from '@chakra-ui/system'
import { dataAttr, runIfFn, cx, callAllHandlers } from '@chakra-ui/utils'
import { MaybeRenderProp } from '@chakra-ui/react-utils'
import Icon from '@chakra-ui/icon'
import { SearchInput } from './search-input'
import Downshift, {
  ControllerStateAndHelpers,
  DownshiftProps,
  GetItemPropsOptions,
  PropGetters
} from 'downshift'
import { SelectProvider, useSelect } from './use-select'
import { FormControlOptions, useFormControl } from '@chakra-ui/form-control'

export interface SelectValueContainerProps extends HTMLChakraProps<'div'> {}
export function SelectValueContainer(props: SelectValueContainerProps) {
  return (
    <chakra.div
      d='flex'
      alignItems='center'
      flex='1 1 0%'
      flexWrap='wrap'
      padding='2px 8px'
      pos='relative'
      overflow='hidden'
      {...props}
    />
  )
}

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
        pr={2}
        pos='absolute'
        insetY={0}
        right={0}
        {...props}
      >
        {children}
      </chakra.div>
    )
  }
)

export interface ArrowIndicatorProps extends HTMLChakraProps<'div'> {}
export const ArrowIndicator = forwardRef<ArrowIndicatorProps, 'div'>(
  (props, ref) => {
    return (
      <chakra.div
        ref={ref}
        pos='absolute'
        insetY={0}
        right={0}
        pr={2}
        display='flex'
        alignItems='center'
        pointerEvents='none'
        color='gray.500'
        {...props}
      />
    )
  }
)

export const SelectClearIndicator = forwardRef<ArrowIndicatorProps, 'div'>(
  (props, ref) => {
    const { onClick, className, ...rest } = props
    const { selectedItem, clearSelection, inputRef, isDisabled } = useSelect()
    const _className = cx('chakra-select__clean-btn', className)

    if (!selectedItem || isDisabled) return null
    return (
      <chakra.div
        d='flex'
        p={2}
        ref={ref}
        aria-hidden
        className={_className}
        zIndex={1}
        tabIndex={-1}
        outline='none'
        color='gray.500'
        w='100%'
        h='100%'
        alignItems='center'
        justifyContent='center'
        _hover={{ color: 'gray.600' }}
        {...rest}
        onClick={callAllHandlers(onClick, (event: any) => {
          event.stopPropagation()
          clearSelection()
          inputRef?.current?.focus()
        })}
      >
        <Icon focusable='false' aria-hidden boxSize='1em' stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </Icon>
      </chakra.div>
    )
  }
)

export interface SelectControlProps extends HTMLChakraProps<'div'> {}

export const SelectControl = forwardRef<SelectControlProps, 'div'>(
  (props, ref) => {
    const { isDisabled } = useSelect()
    const ownProps = useFormControl({ isDisabled, ...props })
    const styles = useStyles()

    return <chakra.div ref={ref} __css={styles.control} {...ownProps} />
  }
)

export type SelectButtonProps = HTMLChakraProps<'button'> & FormControlOptions
export const SelectButton = forwardRef<SelectButtonProps, 'button'>(
  (props, ref) => {
    const {
      getToggleButtonProps,
      inputRef,
      isDisabled,
      isOpen,
      getDropdownProps
    } = useSelect()
    const button = useFormControl({ isDisabled, ...props })
    const styles = useStyles()
    return (
      <chakra.button
        __css={styles.button}
        ref={ref}
        {...button}
        {...getToggleButtonProps({
          ...getDropdownProps?.({ preventKeyAction: isOpen }),
          onClick: () => inputRef?.current?.focus()
        })}
      />
    )
  }
)

export interface SelectSearchInputProps extends HTMLChakraProps<'input'> {}
export const SelectSearchInput = forwardRef<SelectSearchInputProps, 'input'>(
  (props, ref) => {
    const {
      getInputProps,
      isDisabled,
      inputRef,
      getDropdownProps,
      selectedItems
    } = useSelect()
    const input = useFormControl({ isDisabled, ...props })
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef?.current?.focus()
      }
    }))
    const placeholder =
      selectedItems && selectedItems.length > 0 ? '' : props.placeholder
    return (
      <Fragment>
        <chakra.div
          zIndex={1}
          m={0.5}
          pb={0.5}
          pt={0.5}
          visibility={isDisabled ? 'hidden' : 'visible'}
        >
          <SearchInput
            tabIndex={-1}
            isDisabled={isDisabled}
            type='text'
            autoCapitalize='none'
            {...input}
            {...getInputProps({
              ref: inputRef,
              ...getDropdownProps?.({
                placeholder: placeholder,
                ref: inputRef
              })
            })}
          />
        </chakra.div>
      </Fragment>
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
  (props, ref) => {
    const { isOpen } = useSelect()
    const styles = useStyles()
    if (!isOpen) return null
    return <chakra.ul ref={ref} __css={styles.list} {...props} />
  }
)

export interface SelectMenuProps extends HTMLChakraProps<'div'> {}

export const SelectMenu = forwardRef<SelectMenuProps, 'div'>((props, ref) => {
  const styles = useStyles()
  const { getMenuProps } = useSelect()
  return (
    <chakra.div ref={ref} __css={styles.menu} {...getMenuProps()} {...props} />
  )
})

export type SelectProps<Item = any> = Omit<ChakraProps, 'onChange'> &
  FormControlOptions &
  Pick<DownshiftProps<Item>, 'itemToString' | 'defaultIsOpen' | 'getItemId'> & {
    isOpen?: boolean
    defaultHighlightedIndex?: number
    value?: Item | null
    defaultValue?: Item
    onChange?(
      selectedItem: Item | null | undefined,
      stateAndHelpers?: ControllerStateAndHelpers<Item>
    ): void
    children: MaybeRenderProp<{
      isOpen: boolean
      highlightedIndex: number | null
      selectedItem: Item | null
      onClose?(): void
      inputValue: string | null
      getLabelProps: PropGetters<Item>['getLabelProps']
    }>
  }

export function Select<Item = any>({
  children,
  defaultValue,
  defaultIsOpen,
  onChange,
  itemToString,
  isDisabled,
  ...props
}: SelectProps<Item>) {
  const styles = useMultiStyleConfig('SelectSingle', {})
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <Downshift
      onChange={onChange}
      initialSelectedItem={defaultValue}
      defaultIsOpen={defaultIsOpen}
      itemToString={itemToString}
    >
      {(downshift) => (
        <chakra.div pos='relative' {...props} {...downshift.getRootProps()}>
          <StylesProvider value={styles}>
            <SelectProvider value={{ ...downshift, isDisabled, inputRef }}>
              {runIfFn(children, {
                inputValue: downshift.inputValue,
                isOpen: downshift.isOpen,
                highlightedIndex: downshift.highlightedIndex,
                selectedItem: downshift.selectedItem,
                getLabelProps: downshift.getLabelProps
              })}
            </SelectProvider>
          </StylesProvider>
        </chakra.div>
      )}
    </Downshift>
  )
}
