export function selectPlayer(player) {
  console.log('A player has been selected:', player.name);
  return {
    type: 'PLAYER_SELECTED',
    payload: player
  };
};
