const Clicker = () => {
  const clicked = (e) => {
    e.preventDefault()
    console.log('fart noises ensue')
    // return () => {
    //   console.log('no fart noises but yes clicky')
    // }
  }
  return (
    <a href="https://www.google.com" target="_blank" onClick={clicked} onMouseEnter={(e) =>
      e.target.style = 'background-color: red;'
    }> CLICK MAH PURDY FACE!</a >
  )
}

export default Clicker;