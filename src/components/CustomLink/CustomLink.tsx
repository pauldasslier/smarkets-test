import { Link as RouterLink, useResolvedPath, useMatch } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { FC } from 'react';

const CustomLink: FC<LinkProps> = ({ children, to, ...props }) => {
    const resolved = useResolvedPath(to);
    const hasMatch = !!useMatch({ path: resolved.pathname, end: true });
  
    return (
        <Link
            to={to}
            underline="none"
            component={RouterLink}
            color={hasMatch ? 'secondary' : 'primary'}
        >
          {children}
        </Link>
    );
}

export default CustomLink;