import { memo } from 'react';
import { ListItemIcon, MenuList, MenuItem } from '@material-ui/core';
import { SportsMma, SportsSoccer, SportsBasketball } from '@material-ui/icons';
import { SportEvents } from '../../interfaces';
import { CustomLink } from '../../components';

const CATEGORIES: { name: SportEvents, Icon: React.ElementType }[] = [
    { name: 'football', Icon: SportsSoccer },
    { name: 'basketball', Icon: SportsBasketball },
    { name: 'mma', Icon: SportsMma },
];

const Categories = () => (
    <MenuList>
        {CATEGORIES.map(({ name, Icon }) => (
            <CustomLink
                key={name}
                to={`/sport/${name}`}
            >
                <MenuItem>
                    <ListItemIcon>
                        <Icon
                            color="primary" 
                            fontSize="medium" 
                        />
                    </ListItemIcon>
                    {name}
                </MenuItem>
            </CustomLink>
        ))}
    </MenuList>
);

export default memo(Categories);
