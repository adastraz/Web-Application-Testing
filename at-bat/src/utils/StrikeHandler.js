const StrikeHandler = props => {
    if (props.strike<2){
      props.setStrike(props.strike+1)
  }else{
      props.setStrike(0)
      props.setBall(0)
    }
  }
  export default StrikeHandler