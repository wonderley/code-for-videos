def find_goose(n_players, n_ducks):
    return n_ducks % n_players

if __name__ == '__main__':
    players = ['Ajay', 'Barry', 'Camilla', 'Drago', 'Emily']
    n_ducks = 22
    goose_position = find_goose(len(players), n_ducks)
    goose_name = players[goose_position]
    print(f'The goose is {goose_name} (position {goose_position})')
