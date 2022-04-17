import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css'

const MainHeader = () => {
    return <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to='/quotes'>All Quotes</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/new-quote'>Add a Quote</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainHeader;