const Bath = (props) => {
  return (  
    <div className="bath" id={`${props.size}-bath`}>
      {props.size} Bath
    </div>
  );
}

export default Bath;