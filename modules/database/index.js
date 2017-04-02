const SHORT_SENTENCES = [
    'The chicken crossed the road.',
    'Watering hole elephants',
    'Pretty camera photos',
    'Longhorn bulls roaming.',
    'Pleasure in aesthetics.',
    'Arrows of elvish origin.',
    'Walking on the beach.',
    'Going shopping.',
    'The apples are nice.',
    'Winter is my favourite season'
];

const LONG_SENTENCES = [
    'I have spread the fire of my wrath across entire continents, and sat alone upon tall thrones.',
    'There is something profoundly cynical, my friends, in the notion of paradise after death.',
    'Wise words are like arrows flung at your forehead.',
    'There is no struggle too vast, no odds too overwhelming, for even should we fail - should we fall - we will know that we have lived.',
    'Name none of the fallen, for they stood in our place, and stand there still in each moment of our lives.',
    'Such is the vastness of his genius that he can outwit even himself.',
    'The harder the world, the fiercer the honour.',
    'Contemplating suicide, he summoned a dragon.',
    'Oh, the physical manifestation of ambition.',
    'The soul knows no greater anguish than to take a breath that begins with love and ends with grief.'
];

const VERIFICATION = [
    'A creative man is motivated by the desire to achieve, not by the desire to beat others.',
    'The hardest thing to explain is the glaringly evident which everybody had decided not to see.',
    'The question isn`t who is going to let me; it`s who is going to stop me.',
    'Whenever you think you are facing a contradiction, check your premises.',
    'Happiness is that state of consciousness which proceeds from the achievement of one`s values.',
    'The hardest thing to explain is the glaringly evident which everybody has decided not to see.',
    'The man who does not value himself, cannot value anything or anyone.',
    'The truth is not for all men but only for those who seek it.',
    'Never think of pain or danger or enemies a moment longer than is necessary to fight them.',
    'You have been the one encounter in my life that can never be repeated.',
    'The purpose of morality is to teach you, not to suffer and die, but to enjoy yourself and live.'
];

const shortSentences = {data: SHORT_SENTENCES, numberOfWords: 36, numberOfLetters: 267};
const longSentences = {data: LONG_SENTENCES, numberOfWords: 140, numberOfLetters: 801};
const verification = {data: VERIFICATION, numberOfWords: 166, numberOfLetters: 934};

module.exports = {shortSentences: shortSentences, longSentences: longSentences, verification: verification}
