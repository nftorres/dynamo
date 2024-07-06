import React from 'react';
import DeckThumbnail from '../shared/DeckThumnail.jsx';
import useDecks from '../../hooks/useDecks.js';

export default function DeckSelector() {
	const decks = useDecks();
	return (
		<div className='w-full px-8 py-12 bg-neutral-950 rounded-lg'>
			<div className='flex flex-row items-center justify-center space-x-4'>
				{Object.entries(decks).map(([key, deck]) => (
					<DeckThumbnail key={key} deckThumbnail={deck} />
				))}
			</div>
		</div>
	);
}
