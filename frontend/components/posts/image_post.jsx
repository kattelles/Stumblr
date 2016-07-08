const React = require('react');
const hashHistory = require("react-router").hashHistory;
const SessionStore = require("../../stores/session_store");
const LikeActions = require("../../actions/like_actions");
const PostStore = require("../../stores/post_store");
const EditPost = require("./edit_post");
const DeletePost = require("./delete_post");
const Modal = require("react-modal");

const ImagePost = React.createClass({

  getInitialState() {
    return ({modalOpen: false, modalType: ""});
  },

  onModalClose() {
    this.setState({modalOpen: false});
  },

  modalOpen(type) {
    this.setState({modalType: type, modalOpen: true});
  },

  avatarClick() {
    let url = "blogs/" + this.props.post.user.id;
    hashHistory.push(url);
  },


  likeClick() {
    LikeActions.like({
      like: {
      user_id: SessionStore.currentUser().id,
      post_id: this.props.post.id }
    });
  },

  unlikeClick() {
    let _like;
    let cu = SessionStore.currentUser().id;
    this.props.post.likes.forEach (like => {
      if (like.user_id === cu) {
        _like = like;
      }
    });

    LikeActions.unlike(_like.id);
  },

  render: function() {

    let footerToggle;

    if (SessionStore.currentUser().id === this.props.post.user_id) {
      footerToggle = (  <div id='post-toggle'>
          <img id="edit-post" onClick={this.modalOpen.bind(this, "Edit")}
            src="https://res.cloudinary.com/kattelles/image/upload/v1467762938/edit_cfkgyz.png"/>
          <img id="delete-post" onClick={this.modalOpen.bind(this, "Delete")}
            src="https://res.cloudinary.com/kattelles/image/upload/v1467762790/rubbish-bin_fns4jh.png"/>

        </div>);
    } else if (this.props.isLiked) {
        footerToggle = <div onClick={this.unlikeClick} id='post-toggle'>
          <img src="https://res.cloudinary.com/kattelles/image/upload/v1467744183/hearts_f0tsvw.png" /></div>;
    } else {
      footerToggle = <div onClick={this.likeClick} id='post-toggle'>
      <img src="https://res.cloudinary.com/kattelles/image/upload/v1467744232/dislike_lm7egs.png" />
      </div>;
    }

    let settingsModal;

    switch (this.state.modalType) {
      case "Edit":
        settingsModal = <EditPost close={this.onModalClose}
          post={this.props.post}/>;
        break;
      case "Delete":
        settingsModal = <DeletePost close={this.onModalClose}
          post={this.props.post}/>;
        break;
    }

    let tags = this.props.post.tags.map(tag => {
      return (<div key={tag.id} className="tag"> #{tag.name} </div>);
    });

    return (
      <div id="post">
        <img id="post-avatar" onClick={this.avatarClick}
          src={this.props.post.user.avatar}/>

      <div id="image-post">

        <div onClick={this.avatarClick} id="post-header">
          {this.props.post.user.username}
        </div>

        <div>
          <img id="image-image" src={this.props.post.image_url}/>
        </div>

        <div id="image-caption">
          {this.props.post.image_caption}
        </div>

        <div className="tags"> {tags} </div>

        <div id="post-footer">
          <div id="post-likes">
            {this.props.post.likes.length} likes
          </div>

            {footerToggle}

        </div>
      </div>

          <Modal
            className="post-edit-modal"
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            onAfterOpen={this.onModalOpen}>
            {settingsModal}
          </Modal>
      </div>
    );
  }

});

module.exports = ImagePost;
