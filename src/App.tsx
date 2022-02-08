// Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import './App.scss';
import Form from './components/form/Form'
import { generalFormVld } from './_validations/generalForm';

function App() {
  const initState = {
    name : '',
    age  : ''
  }

  const handleSubmit = (form: unknown) => {
    console.log(form);
  }

  return (
    <div>
      <Form 
        initState = {initState}
        schema    = {generalFormVld}
        Submit    = {handleSubmit}
        submitBtn = {{
          text : 'Submit'
        }}
        elements={[
          {
            category   : 'label',
            parameters : {
              innerText: 'Name'
            }
          },
          {
            category   : 'input',
            parameters : {
              name: 'name',
              type: 'text',
            }
          },
          {
            category   : 'label',
            parameters : {
              innerText: 'Age'
            }
          },
          {
            category   : 'input',
            parameters : {
              name: 'age',
              type: 'text',
            }
          }
        ]}
      />
    </div>
  );
}

export default App;
