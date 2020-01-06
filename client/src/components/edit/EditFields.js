import React from 'react';

import Container from '../common/Container';
import Button from '../common/Button';
import Input from '../common/Input';
import TextArea from '../common/TextArea';

const EditFields = () => {
  return (
    <Container>
      <Input 
        placeholder="Title"
      />
      <TextArea 
        placeholder="Body"
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button>
          Save note
        </Button>
        <Button className="button--secondary">
          Remove Note
        </Button>
      </div>
    </Container>
  )
}

export default EditFields;