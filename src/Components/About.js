import React, { Component } from 'react';
import styled from 'styled-components';

class About extends Component {

  render() {
    return (
      <div className={this.props.className}>
        <p style={{width: '600px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in tortor vitae ipsum aliquet rhoncus. Mauris diam neque, convallis viverra finibus id, rhoncus non turpis. Morbi sit amet lacus dui. Mauris porta metus vitae nibh finibus consectetur. Ut faucibus mauris et dolor viverra auctor. Nulla gravida nisl imperdiet diam ultrices, vitae tristique velit porttitor. Donec mattis convallis accumsan. Phasellus id metus ornare, tempor felis at, convallis nulla.
        </p>
      </div>
    );
  }
}

export default styled(About)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;