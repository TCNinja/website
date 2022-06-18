import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ICard from '../../../../common/models/card';
import GameTitles from '../../../../common/game';

const HeaderSearch = () => {
    
    const options = indexedCards.map((option) => {
        const gameTitle = option.game;
        return {
            gameTitle,
          ...option,
        };
      });
    return(
        <Box>
            <Autocomplete
            // freeSolo
            id="search-bar"
            options={options.sort((a, b) => -b.title.localeCompare(a.title))}
            groupBy={(option) => option.gameTitle}
            getOptionLabel={(option) => option.title}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search Cards" />}
            />
        </Box>
    )
}

const indexedCards: ICard[] = [ 
    {id: '1', title: "Magic Card 1", game: GameTitles.M}
];

export default HeaderSearch;