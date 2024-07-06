import React, { useState } from 'react';
import { useGameContext } from '../../providers/GameProvider';
import StacksList from '../shared/StacksList';

export default function CardsReading() {
	const { cards } = useGameContext();
	const [gameCards] = useState(() => [...cards]);

	return (
		<div className='py-8 rounded-lg bg-neutral-950'>
			<StacksList stacks={gameCards} />
		</div>
	);
}
