import React, { useState } from 'react';
import Card from '../shared/Card';
import { useGameContext } from '../../providers/GameProvider';

export default function CardReveal() {
	const { cards } = useGameContext();
	const [gameCards] = useState(() => [...cards]);

	const userCard = gameCards[1][3];
	return (
		<div className='py-12 flex items-center justify-center rounded-lg bg-neutral-950'>
			<Card card={userCard} />
		</div>
	);
}
