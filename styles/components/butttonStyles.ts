export const overrides = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: '4px',
      },
      sizes: {
        small: {
          fontSize: '11px',
          padding: '8px',

          borderRadius: '2px',
        },
        medium: {
          fontSize: '13px',
          paddingLeft: '13px',
          paddingRight: '13px',
          paddingTop: '10px',
          paddingBottom: '10px',
        },
        large: {
          fontSize: '14px',
          padding: '32px',
        },
      },
      variants: {
        primary: {
          bg: '#ef8374',
          color: 'white',
          border: '1px solid #ef8374',
          _hover: {
            bg: '#ffe9e7',
            color: '#ef8374',
          },
        },
        primarySmall: {
          bg: '#ffe9e7',
        },
        secondary: {
          bg: 'transparent',
          border: '1px solid #ef8374',
          color: '#ef8374',
          _hover: {
            bg: '#ffe9e7',
            color: 'ef8374',
          },
        },
        secondarySmall: {
          bg: '#DAF3F2',
        },
        secondaryDark: {
          bg: '#454E54',
          color: 'white',
          borderRadius: '8px'
        },
        secondaryWhite: {
            bg: 'white',
            borderRadius: '8px'
          },
      },
    },
  },
}
