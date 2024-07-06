import React, { useEffect, useState, useCallback } from 'react';
import useGameDeck from '../../hooks/useGameDeck';
import StacksList from '../shared/StacksList';
import { CgCardSpades } from 'react-icons/cg';
import { TbCards } from 'react-icons/tb';
import {
	select21Cards,
	shuffleCards,
	deckBuilder,
} from '../../utils/helpers/gameHelpers';
import { useGameToggleContext } from '../../providers/GameProvider';

export default function CardsSelector({ active = true }) {
	const { saveCards } = useGameToggleContext();
	const { cards: suits } = useGameDeck();

	const deck = deckBuilder(suits);
	const [selectedCards, setSelectedCards] = useState(() =>
		select21Cards(deck)
	);

	const handleSelectCards = useCallback(() => {
		setSelectedCards(select21Cards(deck));
	}, []);

	const handleShuffleCards = useCallback(() => {
		setSelectedCards(shuffleCards(selectedCards));
	}, []);

	useEffect(() => {
		saveCards(selectedCards);
	}, [selectedCards]);

	return (
		<div className='flex flex-col pb-8 rounded-lg bg-neutral-950'>
			<div className='flex flex-row py-4 px-6 items-center justify-end space-x-2'>
				<button
					title='Añadir nuevas cartas'
					className='p-2 rounded-lg opacity-60 hover:cursor-pointer hover:bg-neutral-900 hover:opacity-100'
					disabled={!active}
					onClick={handleSelectCards}>
					<CgCardSpades size={20} />
				</button>
				<button
					title='Barajar cartas'
					className='p-2 rounded-lg opacity-60 hover:cursor-pointer hover:bg-neutral-900 hover:opacity-100'
					disabled={!active}
					onClick={handleShuffleCards}>
					<TbCards size={20} />
				</button>
			</div>
			<StacksList stacks={selectedCards} showLabels={false} />
		</div>
	);
}
