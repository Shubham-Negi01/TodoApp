import { PropTypes } from "prop-types";

export default function CounterButton({ value, increaseTotalCount, decreaseTotalCount }) {

   return (
      <>
         <div>
            <button className="counterButton" onClick={ () =>  increaseTotalCount(value) }>+{value}</button>
            <button className="counterButton" onClick={ () =>  decreaseTotalCount(value) }>-{value}</button>
         </div>
      </>
   );
}

CounterButton.propTypes = {
   value: PropTypes.number
}

CounterButton.defaultProps = {
   value: 1
}