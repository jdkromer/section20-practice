import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css'

const MainHeader = () => {
    return <header className={classes.header}>
        <div className={classes.logo}>Great Quotes</div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink ClassName={(navData) => navData.isActive ? classes.active : ''} to='/quotes'>All Quotes</NavLink>
                </li>
                <li>
                    <NavLink ClassName={(navData) => navData.isActive ? classes.active : ''} to='/new-quote'>Add a Quote</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainHeader;