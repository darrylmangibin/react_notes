import React from 'react';

import Input from '../common/Input';
import Container from '../common/Container';
import TextArea from '../common/TextArea';
import Button from '../common/Button';

const CreateFields = () => {
  return (
    <Container>
      <Input 
        placeholder="Title"
      />
      <TextArea 
        placeholder="Body"
      />
      <Button>
        Save note
      </Button>
    </Container>
  )
}

export default CreateFields;