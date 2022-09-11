import classes from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = () => {
    return (
        <div>
            <div>
                    My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={classes.posts}>
                    <Post message='Hi! How are you?' likeCount='9999' />
                    <Post message='You all are awesome' likeCount='99' />

                </div> 
            </div>
        </div>
    );
}

export default Myposts;