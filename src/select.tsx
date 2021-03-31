import React, { useImperativeHandle, useRef } from 'react'
import {
  chakra,
  ChakraProps,
  HTMLChakraProps,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
  forwardRef
} from '@chakra-ui/system'
import {
  dataAttr,
  MaybeRenderProp,
  runIfFn,
  cx,
  callAllHandlers
} from '@chakra-ui/utils'
import Icon from '@chakra-ui/icon'
import { SearchInput } from './search-input'
import Downshift, {
  ControllerStateAndHelpers,
  DownshiftProps,
  GetItemPropsOptions,
  PropGetters
} from 'downshift'
import { SelectProvider, useSelect } from './use-select'

export interface SelectLabelProps extends HTMLChakraProps<'div'> {}

export const SelectLabel = forwardRef<SelectLabelProps, 'div'>((props, ref) => {
  const styles = useStyles()
  return <chakra.div ref={ref} __css={styles.label} {...props} />
})

export interface SelectValueProps extends HTMLChakraProps<'div'> {}
export const SelectValue = forwardRef<SelectValueProps, 'div'>((props, ref) => {
  return (
    <chakra.div
      ref={ref}
      d='flex'
      alignItems='center'
      flexWrap='wrap'
      pos='relative'
      overflow='hidden'
      padding='2px 8px'
      boxSizing='border-box'
      {...props}
    />
  )
})

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
        padding='2px 8px'
        {...props}
      >
        {children}
      </chakra.div>
    )
  }
)

export interface ArrowIndicatorProps extends HTMLChakraProps<'div'> {}
export const ArrowIndicator = forwardRef<SelectIndicatorProps, 'div'>(
  (props, ref) => {
    return (
      <chakra.div
        ref={ref}
        as='span'
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
    const { selectedItem, clearSelection, inputRef } = useSelect()
    const _className = cx('chakra-select__clean-btn', className)

    if (!selectedItem) return null
    return (
      <chakra.div
        d='flex'
        padding={1}
        ref={ref}
        aria-hidden
        className={_className}
        zIndex={1}
        tabIndex={-1}
        outline='none'
        color='gray.500'
        _hover={{ color: 'gray.600' }}
        {...rest}
        onClick={callAllHandlers(onClick, (event: any) => {
          event.stopPropagation()
          clearSelection()
          inputRef?.current?.focus()
        })}
      >
        <Icon focusable='false' aria-hidden h={2} w={2}>
          <path
            fill='currentColor'
            d='M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z'
          />
        </Icon>
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

export interface SelectAutocomplete extends HTMLChakraProps<'div'> {}
export const SelectAutocomplete = forwardRef<SelectAutocomplete, 'div'>(
  (props, ref) => {
    const styles = useStyles()

    return <chakra.div ref={ref} __css={styles.control} {...props} />
  }
)

export const SelectButton = forwardRef<SelectControlProps, 'button'>(
  (props, ref) => {
    const { getToggleButtonProps, inputRef } = useSelect()
    return (
      <chakra.div
        pos='absolute'
        inset={0}
        w='100%'
        h='100%'
        cursor='default'
        ref={ref}
        {...getToggleButtonProps({
          onClick: () => inputRef?.current?.focus(),
          onBlur: (event) => {
            // @ts-ignore
            event.preventDownshiftDefault = true
          }
        })}
        {...props}
      />
    )
  }
)

export interface SelectSearchInputProps extends HTMLChakraProps<'input'> {}
export const SelectSearchInput = forwardRef<SelectSearchInputProps, 'input'>(
  (props, ref) => {
    const { getInputProps, isDisabled, inputRef } = useSelect()
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef?.current?.focus()
      }
    }))
    return (
      <SelectValue>
        <chakra.div
          m={0.5}
          pb={0.5}
          pt={0.5}
          visibility={isDisabled ? 'hidden' : 'visible'}
        >
          <SearchInput
            isDisabled={isDisabled}
            type='text'
            autoCapitalize='none'
            ref={inputRef}
            {...props}
            {...getInputProps()}
          />
        </chakra.div>
      </SelectValue>
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
    const { getMenuProps } = useSelect()
    const styles = useStyles()

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
        {children}
      </chakra.ul>
    )
  }
)

export interface SelectMenuProps extends HTMLChakraProps<'div'> {}

export const SelectMenu = forwardRef<SelectMenuProps, 'div'>((props, ref) => {
  const styles = useStyles()
  const { isOpen } = useSelect()
  if (!isOpen) return null
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
    isDisabled?: boolean
    onChange?(
      selectedItem: Item | null,
      stateAndHelpers?: ControllerStateAndHelpers<Item>
    ): void
    children: MaybeRenderProp<{
      isOpen: boolean
      highlightedIndex: number | null
      selectedItem: Item | null
      onClose?(): void
      inputValue?: string | null
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
      // inputValue=''
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
