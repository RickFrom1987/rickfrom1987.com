import React from 'react';
import View from 'react-flexbox';

import * as Colors from './constants/Colors';

class TagList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      <div {...props} row style={tagListStyle}>
        {tagListHtml}
      </div>
    );
  }
}

TagList.propTypes = {
  style: React.PropTypes.object,
  tags: React.PropTypes.array,
};

export default TagList;
