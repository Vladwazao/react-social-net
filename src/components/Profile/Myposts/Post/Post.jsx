import classes from './Post.module.css';

const Post = (props) => {
    return (
            <div className={classes.item}>
            {props.message}
            <div>
                <span>Like</span> {props.likeCount}
            </div>
            </div>
    );
}

export default Post;