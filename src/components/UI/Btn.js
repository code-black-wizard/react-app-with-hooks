import React from 'react';
import PropTypes from 'prop-types';

function Btn(props) {
  return (
    <button onClick={props.loadData} disabled={props.submitStatus ? null : 'disabled'} type="button" className="btn btn-success">Load more news</button>
  )
}

Btn.propTypes = {
  loadData: PropTypes.func.isRequired,
  submitStatus: PropTypes.bool
};

export default Btn