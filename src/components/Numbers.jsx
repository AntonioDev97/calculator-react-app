import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';

const renderButtons = onClickNumber => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return numbers.map(num => <Button 
        key={num} 
        text={num.toString()} 
        clickHandler={onClickNumber} 
    />);
};

const Numbers = ( { onClickNumber } ) => (
    <section className="numbers">
        {renderButtons(onClickNumber)}
    </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers;