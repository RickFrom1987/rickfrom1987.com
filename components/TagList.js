import React from 'react';
import PropTypes from 'prop-types';
import * as Colors from './Constants/Colors';

class TagList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  static propTypes = {
    style: PropTypes.object,
    tags: PropTypes.array,
  }

  _randomColor = () => {
    const COLORS = ['#3B1B6'];
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  render() {
    const { style, tags, ...props } = this.props;
    const tagListStyle = {
      fontSize: 12,
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '12px 0',
    };
    const tagStyle = {
      display: 'inline-block',
      marginBottom: 6,
      marginRight: 6,
      padding: 6,
      cursor: 'pointer',
      backgroundColor: 'rgba(255,255,255,0.25)',
      color: '#F8F8FF',
      boxShadow: '0px 0px 1px #7FDBFF',
    };

    let tagListHtml;
    if (tags) {
      tagListHtml = tags.map((tag, i) => {
        return (
          <div key={i} style={tagStyle}>
            {tag}
          </div>
        )
      });
    }
    return (
      <div {...props} style={tagListStyle}>
        {tagListHtml}
      </div>
    );
  }
}

export default TagList;
