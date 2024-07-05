import React, { useState } from 'react';
import StacksList from '../shared/StacksList';
import { useGameContext } from '../../providers/GameProvider';

export default function CardsReading({ active = true }) {
	const [cards, setCards] = useState(() => {
		const gameContext = useGameContext();
		return gameContext.cards;
	});
	return (
		<div className='py-8 rounded-lg bg-neutral-950'>
			<StacksList stacks={cards} />
		</div>
	);
}
