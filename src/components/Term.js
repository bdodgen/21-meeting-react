const Term = (props) => {
  return (
    <div>
      <dl>{props.term}</dl>
      <dd>{props.definition}</dd>
    </div>
  )
}

export default Term;