import React from 'react';

import { connect } from 'react-redux';

import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

class Details extends React.Component {
  render(){
    return (
      <Item.Group>
      <Item>
      <Item.Image src='/assets/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>My Neighbor Totoro</Item.Header>
        <Item.Meta>
          <span className='cinema'>IFC Cinema</span>
        </Item.Meta>
        <Item.Description>paragraph</Item.Description>
        <Item.Extra>
          <Button primary floated='right'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
          <Label>Limited</Label>
        </Item.Extra>
      </Item.Content>
      </Item>
      </Item.Group>
    )
  }
}

function mapStateToProps(state){
  return {
    loans: state.loans,
  }
}

export default connect(mapStateToProps)(Details);