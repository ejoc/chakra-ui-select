import { getColor, mode } from '@chakra-ui/theme-tools'

const parts = ['control', 'menu', 'list', 'option', 'label', 'button']

type Dict = Record<string, any>

const baseStyleMenu = {
  pos: 'absolute',
  mt: 1,
  w: 'full',
  zIndex: 2,
  overflow: 'auto',
  maxH: 60,
  rounded: 'md'
}

function baseStyleList(props: Dict) {
  return {
    py: 1,
    rounded: 'md',
    w: 'full',
    bg: mode(`#fff`, `gray.700`)(props),
    boxShadow: mode(`lg`, `dark-lg`)(props),
    border: '1px',
    borderColor: 'gray.100'
  }
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
    textAlign: 'left',
    cursor: 'default',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minH: 10,
    transition: 'all 0.2s',
    outline: 0,
    _focusWithin: {
      outline: 'none',
      borderColor: 'gray.400',
      boxShadow: `0 0 0 1px ${getColor(theme, 'gray.400')}`
    },
    _focus: {
      outline: 'none',
      borderColor: 'gray.400',
      boxShadow: `0 0 0 1px ${getColor(theme, 'gray.400')}`
    },
    _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed'
    },
    _hover: {
      borderColor: 'gray.400',
      _disabled: {
        borderColor: 'gray.300'
      }
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

const baseStyleButton = {
  zIndex: 0,
  pos: 'absolute',
  inset: 0,
  w: '100%',
  h: '100%',
  cursor: 'default',
  _focus: { outline: 'none' },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed'
  }
}

const baseStyle = (props: Dict) => ({
  menu: baseStyleMenu,
  list: baseStyleList(props),
  option: baseStyleOption(props),
  control: baseStyleControl(props),
  label: baseStyleLabel(props),
  button: baseStyleButton
})

export default {
  parts,
  baseStyle
}
