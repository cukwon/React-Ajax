import React, { Component } from 'react';
import { PostWrapper, Navigator,Post} from "../../components";
import * as service from '../../services/Post'

class PostContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            postId:1,
            fetchIng: false,
            post:{
                title: null,
                body: null
            },
            comments:[]
        };
    }

    changePostId = (offset) => {
        const  { postId } = this.state
        offset < 0 ? this.fetchPostInfo(postId-1) : this.fetchPostInfo(postId+1)
    }

    fetchPostInfo = async ( postId ) => {
        this.setState({fetch:true});
        try {
            const info = await Promise.all([
                service.getPost(postId),
                service.getComments(postId)
            ]);
            console.log(info);
            const {id, title, body} = info[0].data;
            const comments = info[1].data;
            this.setState({
                postId: id,
                post: {
                    title: title,
                    body: body
                },
                fetching: false,
                comments: comments
            });
        }catch (e) {
           this.setState({fetch:false});
           console.log('errer',e)
            window.alert('없는 페이지이거나 페이지를 불러올수 없습니다.')
        }
    };

    componentDidMount() {
        const { postId } = this.state;
        this.fetchPostInfo(postId);
    }

    render () {
        const { postId, post, comments, fetching } = this.state;
        return (
            <PostWrapper>
                <Navigator postId={postId} disabled={fetching} onChange={this.changePostId}/>
                <Post post={post} comments={comments}/>
            </PostWrapper>
        );
    };
}

export default PostContainer;