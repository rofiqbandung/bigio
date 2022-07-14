import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { Card } from './Card.js'
import logo from './logo.svg';
import './App.css';

const style = {
  width: 400,
}
export const Container = () => {
  {
    const [cards, setCards] = useState([
      {
				id: 1,
				text: 'Alat 1',
				textDalam1: 'Combo 1',
				textDalam2: 'Combo 2',
				textDalam3: 'Combo 3',
			},
			{
				id: 2,
				text: 'Alat 2',
				textDalam1: 'Combo 1',
				textDalam2: 'Combo 2',
				textDalam3: 'Combo 3',
				
			},
			{
				id: 3,
				text: 'Alat 3',
				textDalam1: 'Combo 1',
				textDalam2: 'Combo 2',
				textDalam3: 'Combo 3',

			},
			{
				id: 4,
				text: 'Alat 4',
				textDalam1: 'Combo 1',
				textDalam2: 'Combo 2',
				textDalam3: 'Combo 3',

			},
			{
				id: 5,
				text: 'Alat 5',
				textDalam1: 'Combo 1',
				textDalam2: 'Combo 2',
				textDalam3: 'Combo 3',

			},
			{
				id: 6,
				text: 'Alat 6',
				textDalam1: 'Combo 1',
				textDalam2: 'Combo 2',
				textDalam3: 'Combo 3',

			},
			{
				id: 7,
				text: 'Alat 7',
				textDalam1: 'Combo 1',
				textDalam2: 'Combo 2',
				textDalam3: 'Combo 3',

			},
    ])
    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        }),
      )
    }, [])
    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
		  textDalam1={card.textDalam1}
		  textDalam2={card.textDalam2}
		  textDalam3={card.textDalam3}
          moveCard={moveCard}
        />
      )
    }, [])
    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    )
  }
}

export default Container
