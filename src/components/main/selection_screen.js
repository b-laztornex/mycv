const SelectionScreen = ({viewChange}) => {

  return (
    <div>
      <h2>SelectionScreen</h2>
      <p onClick={()=>{viewChange(1)}}>
        Style Mode
      </p>
      <p  onClick={()=>{viewChange(2)}}>
        Terminal Mode
      </p>
    </div>
  )
}
export default SelectionScreen;