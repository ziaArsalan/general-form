// Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Form from './components/form/Form';
import { generalFormVld } from './_validations/generalForm';
function App() {
    var initState = {
        name: '',
        age: ''
    };
    var handleSubmit = function (form) {
        console.log(form);
    };
    return (React.createElement("div", null,
        React.createElement(Form, { initState: initState, schema: generalFormVld, Submit: handleSubmit, submitBtn: {
                text: 'Submit'
            }, elements: [
                {
                    category: 'label',
                    parameters: {
                        innerText: 'Name'
                    }
                },
                {
                    category: 'input',
                    parameters: {
                        name: 'name',
                        type: 'text',
                    }
                },
                {
                    category: 'label',
                    parameters: {
                        innerText: 'Age'
                    }
                },
                {
                    category: 'input',
                    parameters: {
                        name: 'age',
                        type: 'text',
                    }
                }
            ] })));
}
export default App;
