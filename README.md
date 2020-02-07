# useModal - React custom hook

Hook to wrap a component and show it as a modal.

It returns:
- Wrapped component as a new component.
- Status as a boolean.
- Toggle function.

## Why useModal?

With this hook, you can easily render components showing them as a modal:
- View components as a modals.
- Share logic to the modal component.
- Call toggle function to open/close the modal.

## Usage

Just install:

```console
npm install react-hook-usemodal
```

And import the hook:

```javascript
import useModal from 'react-hook-usemodal';
```

Use it in your component:

```javascript
import Form from '../components/Form';

const YourComponent = props => {
  ...
  const [Modal, show, toggle] = useModal(Form);

  return <Modal />
  ...
}
```

Optional, you can share logic as a params:


```javascript
  return <Modal prop1={'string'} prop2={() => console.log(123)} />
```

## Full Example
([Check it in deployed example](https://github.com/franlol/useModal-example))
#### Component to show as modal:


```javascript
import React from 'react'

import './item.css';

export default props => {
  return (
    <div className='form-example'>
      <h1>Item component</h1>
      <input placeholder="Username.." />
      <button>Add</button>
      <br />
      <button onClick={props.closeModal}>cancel</button>
    </div>
  )
}
```


#### Main component, where you call the modal:


```javascript
import React from 'react';

import useModal from 'useModal';
import Item from './Item/Item';

function App() {
  const [Modal, show, toggle] = useModal(Item)

  return (
    <div className="App">
      {show && <Modal closeModal={toggle} />}
      <button onClick={() => toggle(!show)}>Add user</button>
    </div>
  );
}

export default App;
```
