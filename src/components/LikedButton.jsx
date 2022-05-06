import { Component } from 'react';
import "../styles/LikedButton.css";

class LikeButton extends Component {
    state = {
        hasLiked: false,
        hasDisliked: false,
        like: 100,
        disLike: 25
      }
    
      handleLike = () => {
        if(!this.state.hasDisliked) {
          this.setState({
            hasLiked: !this.state.hasLiked
          });
        }else {
          this.setState({
            hasLiked: true,
            hasDisliked: false
          });
        }
      }
    
       handleDislike = () => {
        if(!this.state.hasLiked) {
          this.setState({
            hasDisliked: !this.state.hasDisliked
          });
        }else {
          this.setState({
            hasLiked: false,
            hasDisliked: true
          });
        }
      }


    render() {
        const { hasDisliked, hasLiked } = this.state;
        const classLikeButton = `like-button ${hasLiked ? 'liked': ''}`;
        const classDisLikeButton = `dislike-button ${hasDisliked ? 'disliked': ''}`;
        
        return (
            <>
                <div>
                    <button className={classLikeButton} onClick={this.handleLike}>
                    Like |{' '}
                    <span className="likes-counter">
                        {this.state.hasLiked ? this.state.like + 1 : this.state.like}
                    </span>
                    </button>
                    <button className={classDisLikeButton} onClick={this.handleDislike}>
                    Dislike |{' '}
                    <span className="dislikes-counter">
                        {this.state.hasDisliked ? this.state.disLike + 1 : this.state.disLike}
                    </span>
                    </button>
                </div>
                {/* <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                   .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                  }
                  .likes-counter {
                    color: #006400;
                  }
                  .dislikes-counter {
                    color: #0000CD;
                  }
                `}</style> */}
            </>
        );
    }
}

export default LikeButton;

/****
 * Codility Exercise 8 Frontend ReactLikeButton 
 * 
   Create a simple like button component with React.

 * Build a "like button" component using React 16. The component should be the default export (use export default).

Requirements:
1. There should be a like button:

The content of the like button should be in the following format: "Like | 100", where 100 is the total number of likes.
It should have a "like-button" class.
Wrap the number of likes in a span with a "likes-counter" class.
The initial number of likes in the counter should be 100.
2. Users can add a like. By clicking the button:

The number of likes should increase by one.
Like button should have "liked" class in addition to the "like-button" class (you can use the classnames tool for that).
3. Users can undo their like by clicking again on the button:

The counter should decrease by one.
"liked" class should be removed.
Assessment/Tools:
Only two imports are allowed: react (v16.8.6) and classnames (v2.2.5). Both are at the top of the starting code.
Use the animation below as a reference for your solution.
Design/styling is not assessed and will not affect the score. You should focus only on implementing the requirements.
The "Preview" tab will display your component. You can use it for testing purposes.

 */