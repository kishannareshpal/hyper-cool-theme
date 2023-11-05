module.exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: '#a277ff',
    cursorAccentColor: '#110f18',
    foregroundColor: '#edecee',
    backgroundColor: '#2E2532',
    selectionColor: '#a394f033',
    borderColor: '#0f0f0f',
    fontWeightBold: 'normal',
    colors: {
      black: '#110f18',
      red: '#DD403A',
      green: '#CDC1FF',
      yellow: '#EF8354',
      blue: '#5E4AE3',
      magenta: '#a277ff',
      cyan: '#edecee',
      white: '#EDF2F4',
      lightBlack: '#4d4d4d',
      lightRed: '#FF7086',
      lightGreen: '#a277ff',
      lightYellow: '#FFF07C',
      lightBlue: '#a277ff',
      lightMagenta: '#a277ff',
      lightCyan: '#ADE8F4',
      lightWhite: '#EDEDF4',
    },
  })
}
