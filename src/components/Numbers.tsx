import React, { FC } from 'react';
import Button, { ButtonClickHandler } from './Button/Button';

const renderButtons = (onClickNumber: ButtonClickHandler) => {
    let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return numbers.map((num: number) => <Button 
        key={num} 
        text={num.toString()} 
        clickHandler={onClickNumber} 
    />);
};

type Props = {
    onClickNumber: ButtonClickHandler,
};

const Numbers: FC<Props> = ( { onClickNumber } ) => (
    <section className="numbers">
        {renderButtons(onClickNumber)}
    </section>
)

export default Numbers;