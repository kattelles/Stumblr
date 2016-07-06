const React = require('react');
const SessionStore = require("../../stores/session_store");
const hashHistory = require("react-router").hashHistory;
const Modal = require("react-modal");
const TextForm = require("./forms/text_form");
const ImageForm = require("./forms/image_form");
const QuoteForm = require("./forms/quote_form");
const LinkForm = require("./forms/link_form");
const VideoForm = require("./forms/video_form");
const AudioForm = require("./forms/audio_form");
const PostStore = require("../../stores/post_store");

const PostForm = React.createClass({
  getInitialState() {
    return({user: {}, modalOpen: false, postType: ""});
  },

  componentDidMount(){
    this.listener = SessionStore.addListener(this._onChange);
    this.setState({user: SessionStore.currentUser()});
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  _onChange() {
    this.setState({user: SessionStore.currentUser()});
  },

  avatarClick() {
    let cu = SessionStore.currentUser();
    let url = "blogs/" + cu.id;
    hashHistory.push(url);
  },

  onModalClose() {
    this.setState({modalOpen: false});
  },


  onClick(type) {
    this.setState({postType: type, modalOpen: true});
  },

  render() {
    let avatar = this.state.user.avatar;
    let component;

    switch (this.state.postType) {
      case "TextForm":
        component = <TextForm submitButton="Post" user={this.state.user}
          close={this.onModalClose}/>;
        break;
      case "ImageForm":
        component = <ImageForm submitButton="Post" user={this.state.user}
          close={this.onModalClose}/>;
        break;
      case "QuoteForm":
        component = <QuoteForm submitButton="Post" user={this.state.user}
          close={this.onModalClose}/>;
        break;
      case "LinkForm":
        component = <LinkForm submitButton="Post" user={this.state.user}
          close={this.onModalClose}/>;
        break;
      case "AudioForm":
        component = <AudioForm submitButton="Post" user={this.state.user}
          close={this.onModalClose}/>;
        break;
      case "VideoForm":
        component = <VideoForm submitButton="Post" user={this.state.user}
          close={this.onModalClose}/>;
        break;
  }


    return (
      <div className="feed-form">

        <img id="post-form-avatar" onClick={this.avatarClick} src={avatar}/>

      <div className="post-form">
        <div onClick={this.onClick.bind(this, "TextForm")} id="new-post-label-text">
          <img id="new-post-label-img" src="https://res.cloudinary.com/kattelles/image/upload/v1467240866/text_nyqjm3.png"/>
          <div id="post-label">Text</div>
        </div>

        <div onClick={this.onClick.bind(this, "ImageForm")} id="new-post-label-photo">
          <img id="new-post-label-img" src="https://res.cloudinary.com/kattelles/image/upload/v1467240873/camera_x4i8lc.png"/>
          <div id="post-label">Image</div>
        </div>

        <div onClick={this.onClick.bind(this, "QuoteForm")} id="new-post-label-quote">
          <img id="new-post-label-img" src="https://res.cloudinary.com/kattelles/image/upload/v1467240870/quote_pvuc3i.png"/>
          <div id="post-label">Quote</div>
        </div>

        <div onClick={this.onClick.bind(this, "LinkForm")} id="new-post-label-link">
          <img id="new-post-label-img" src="https://res.cloudinary.com/kattelles/image/upload/v1467240863/link_sgldrd.png"/>
          <div id="post-label">Link</div>
        </div>

        <div onClick={this.onClick.bind(this, "AudioForm")} id="new-post-label-link">
          <img id="new-post-label-img" src="https://res.cloudinary.com/kattelles/image/upload/v1467590081/imageedit_11_4622279752_haln2b.png"/>
          <div id="post-label">Audio</div>
        </div>

        <div onClick={this.onClick.bind(this, "VideoForm")} id="new-post-label-link">
          <img id="new-post-label-img" src="https://res.cloudinary.com/kattelles/image/upload/v1467590082/imageedit_9_8364659514_er0b6n.png"/>
          <div id="post-label">Video</div>
        </div>




      </div>

      <Modal
        className="post-form-modal"
        isOpen={this.state.modalOpen}
        onRequestClose={this.onModalClose}
        onAfterOpen={this.onModalOpen}>
        {component}
      </Modal>

    </div>
    );
  }

});

module.exports = PostForm;

// <img id="post-form-avatar" src={this.state.user.avatar}/>
