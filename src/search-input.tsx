import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { chakra, forwardRef, HTMLChakraProps } from '@chakra-ui/system'
import { cx } from '@chakra-ui/utils'

export interface SearchInputProps extends HTMLChakraProps<'input'> {
  wrapperStyle?: HTMLChakraProps<'div'>
  className?: string
  placeholderIsMinWidth?: boolean
  extraWidth?: string | number
  isDisabled?: boolean
}

const sizerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  visibility: 'hidden',
  height: 0,
  overflow: 'scroll',
  whiteSpace: 'pre'
}

const copyStyles = (styles: CSSStyleDeclaration, node: HTMLDivElement) => {
  node.style.fontSize = styles.fontSize
  node.style.fontFamily = styles.fontFamily
  node.style.fontWeight = styles.fontWeight
  node.style.fontStyle = styles.fontStyle
  node.style.letterSpacing = styles.letterSpacing
  node.style.textTransform = styles.textTransform
}

export const SearchInput = forwardRef<SearchInputProps, 'input'>(
  (props, ref) => {
    const {
      wrapperStyle,
      className,
      placeholder,
      minWidth,
      placeholderIsMinWidth,
      isDisabled,
      ...inputProps
    } = props
    const [inputWidth, setInputWidth] = useState(minWidth)
    const inputRef = useRef<HTMLInputElement>(null)
    const sizerRef = useRef<HTMLDivElement>(null)
    const placeHolderSizerRef = useRef<HTMLDivElement>(null)
    const _className = cx('chakra-select__search-input', className)
    const sizerValue = props.defaultValue || props.value || ''

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef?.current?.focus()
      }
    }))

    useEffect(() => {
      copyInputStyles()
    }, [])

    useEffect(() => {
      if (!sizerRef || typeof sizerRef.current?.scrollWidth === 'undefined') {
        return
      }

      let newInputWidth
      if (
        placeholder &&
        (!props.value || (props.value && placeholderIsMinWidth))
      ) {
        newInputWidth =
          Math.max(
            sizerRef.current.scrollWidth,
            placeHolderSizerRef.current?.scrollWidth as number
          ) + 2
      } else {
        newInputWidth = sizerRef.current?.scrollWidth + 2
      }

      if (minWidth && newInputWidth < minWidth) {
        newInputWidth = minWidth
      }
      if (newInputWidth !== inputWidth) {
        setInputWidth(newInputWidth)
      }
    }, [sizerValue, minWidth, inputWidth, placeholderIsMinWidth, placeholder])

    const copyInputStyles = () => {
      if (!window.getComputedStyle || !inputRef?.current) {
        return
      }
      const inputNode = inputRef.current
      const inputStyles = inputNode && window.getComputedStyle(inputNode)
      if (!inputStyles) {
        return
      }
      if (sizerRef.current) {
        copyStyles(inputStyles, sizerRef.current)
      }
      if (placeHolderSizerRef.current) {
        copyStyles(inputStyles, placeHolderSizerRef.current)
      }
    }

    const _wrapperStyle = {
      d: 'inline-block',
      visibility: isDisabled ? 'hidden' : 'visible',
      color: 'gray.800',
      ...wrapperStyle
    } as HTMLChakraProps<'div'>

    const _inputProps = {
      w: `${inputWidth}px`,
      border: 0,
      fontSize: 'inherit',
      outline: 0,
      padding: 0,
      color: 'inherit',
      boxSizing: 'content-box',
      background: '0px center',
      ...inputProps
    } as HTMLChakraProps<'input'>

    return (
      <chakra.div className={_className} {..._wrapperStyle}>
        <chakra.input
          placeholder={placeholder}
          {..._inputProps}
          ref={inputRef}
        />
        <chakra.div ref={sizerRef} sx={sizerStyle}>
          {sizerValue}
        </chakra.div>
        {placeholder && (
          <chakra.div ref={placeHolderSizerRef} sx={sizerStyle}>
            {placeholder}
          </chakra.div>
        )}
      </chakra.div>
    )
  }
)
