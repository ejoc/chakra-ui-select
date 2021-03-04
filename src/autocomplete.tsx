import { chakra, HTMLChakraProps } from '@chakra-ui/system'
import React from 'react'
import { useSelect } from './use-select'

export interface SearchInputProps extends HTMLChakraProps<'input'> {}

export function SearchInput(props: SearchInputProps) {
  const { getInputProps } = useSelect()
  return <chakra.input {...props} {...getInputProps()} />
}

export function Autocomplete() {
  return <chakra.div>autocomplete</chakra.div>
}
