import Myposts from './Myposts/Myposts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div className={classes.content}>
                <div>
                    <img alt='beach' src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' />
                </div>
                 <div>
                    <img alt='ava' src='https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg'></img>
                </div> 
                <div>
                    ava + description
                </div>
                <Myposts/>
            </div>
        </div>
    );
}

export default Profile;