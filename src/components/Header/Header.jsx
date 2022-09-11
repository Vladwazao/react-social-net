import classes from './Header.module.css';

const Header = () => {
    return (
        <div>
            <header className={classes.header}>
                <img alt='logo' src='https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0'/>
            </header>
        </div>
    );
}

export default Header;