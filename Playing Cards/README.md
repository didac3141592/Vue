# Card component with VUE

The aim of this exercise is to create a re-usable card component with Vue. [Snapshot](https://oscarm.tinytake.com/tt/NTA2MDU2MV8xNTkwNTcwOA).

## Requirements

1. Create a new component named 'poker-card' in Vue that represents the card 'red_joker'. <poker-card></poker-card>
2. When you click a card, this must be flipped. You may have to change the image of 'red_joker' to 'back'; and play with 'v-if' 'v-else'
   1. BONUS: use <transition> to animate the card with some kind of fade-in fade-out animation. You may have to modify your HTML structure!

3. Try to add some instances of the same card. Check that you can click and flip each card. 

```javascript
<poker-card></poker-card>
<poker-card></poker-card>
<poker-card></poker-card>
```

4. Use a prop to allow the component to be reusable. The component must hold two additional information:
   1. The image of the card
   2. The value of the card. We commonly value by a well-know acronym of this card. For example, "8 of clubs" is "8C"; whereas "king of diamonds" is "KD", and so on.
   3. Make sure you can show two or three card to assure that your component wors.
   4. To check that you are correctly passing the card value; try to console.log it when the card is clicked.

5. Write a Vue App that will create as many card as there are in the poker deck. Think about which numbers are in the deck and what types of cards there are. You may store this information in different arrays, and then generate all the values and paths to images for each card.
