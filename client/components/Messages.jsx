import React from 'react';
import moment from 'moment';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.messagesEnd = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { messageBox, time, name } = this.props;
    let i = 0;
    function mapFunc(value, index) {
      i += 1;
      if (index === messageBox.length - 1) {
        return (
          <div key={i}>
            <div className="messageBox">
              <div className="messageBlurb">
                <div className="messageContent">
                  {value.message}
                </div>
              </div>
            </div>
            <div className="sent">
              Sent.
            </div>
          </div>
        );
      }
      return (
        <div key={i} className="messageBox">
          <div className="messageBlurb">
            <div className="messageContent">
              {value.message}
            </div>
          </div>
        </div>
      );
    }
    const messageBoxView = messageBox.map(mapFunc);
    if (messageBox.length > 0) {
      return (
        <div className="messagesContainer">
          <div>
            {messageBoxView}
          </div>
          <div
            style={{ float: 'left', clear: 'both' }}
            ref={(el) => { this.messagesEnd = el; }}
          />
        </div>
      );
    }
    return (
      <div>
        <div className="subtitle-content">
          Got questions?
          <span> </span>
          {name}
          <span> </span>
          can help!
        </div>
        <div
          style={{ float: 'left', clear: 'both' }}
          ref={(el) => { this.messagesEnd = el; }}
        />
      </div>
    );
  }
}

export default Messages;
