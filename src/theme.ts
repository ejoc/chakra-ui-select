import { getColor, mode } from '@chakra-ui/theme-tools'

const parts = ['control', 'menu', 'list', 'option', 'label']

type Dict = Record<string, any>

function baseStyleMenu(props: Dict) {
  return {
    pos: 'absolute',
    mt: 1,
    w: 'full',
    rounded: 'md',
    bg: mode(`#fff`, `gray.700`)(props),
    zIndex: 1,
    boxShadow: mode(`lg`, `dark-lg`)(props)
  }
}

const baseStyleList = {
  minW: 60,
  py: 1,
  fontSize: 'base',
  overflow: 'auto',
  borderRadius: 'md',
  border: '1px',
  borderColor: 'gray.50',
  _focus: { outline: 'none' }
}

function baseStyleOption(props: Dict) {
  return {
    py: 2,
    pl: 3,
    pr: 9,
    color: mode(`gray.900`, `gray.50`)(props),
    pos: 'relative',
    userSelect: 'none',
    cursor: 'default',
    fontWeight: 'normal',
    transition: 'background 50ms ease-in 0s',
    _focus: {
      bg: mode(`gray.100`, `whiteAlpha.100`)(props)
    },
    _active: {
      bg: mode(`gray.100`, `whiteAlpha.200`)(props)
    },
    _expanded: {
      bg: mode(`gray.100`, `whitxeAlpha.100`)(props)
    },
    _selected: {
      bg: 'gray.50',
      fontWeight: 'semibold'
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed'
    }
  }
}

function baseStyleControl(props: Dict) {
  const { theme } = props
  return {
    bg: 'white',
    position: 'relative',
    w: 'full',
    border: '1px',
    borderColor: 'gray.300',
    rounded: 'md',
    shadow: 'base',
    pl: 3,
    pr: 10,
    py: 2,
    textAlign: 'left',
    cursor: 'default',
    _focus: {
      outline: 'none',
      borderColor: 'gray.400',
      boxShadow: `0 0 0 1px ${getColor(theme, 'gray.400')}`
    },
    _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed'
    }
  }
}

function baseStyleLabel(props: Dict) {
  return {
    d: 'block',
    fontSize: 'sm',
    fontWeight: 'medium',
    color: mode(`gray.700`, `gray.50`)(props)
  }
}

const baseStyle = (props: Dict) => ({
  menu: baseStyleMenu(props),
  list: baseStyleList,
  option: baseStyleOption(props),
  control: baseStyleControl(props),
  label: baseStyleLabel(props)
})

export default {
  parts,
  baseStyle
}
