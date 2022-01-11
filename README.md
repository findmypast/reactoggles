# reactoggles - DEPRECATED

Higher-order components for React to enable toggling of components

## Usage

To have a component selectively render, use ToggleOn:

```javascript
function shouldComponentDisplay() {
  /* toggling logic here */
}
const ToggledComponent = ToggleOn(Component, shouldComponentDisplay);

class MyPage extends Component {
  render() {
    return(
      <ToggledComponent />
    )
  }
}
```

To render one of two components, use ToggleAB. The first component passed to ToggleAB will render if the function returns a truthy value, the second if it returns falsey.

```javascript
function shouldComponentADisplay() {
  /* toggling logic here */
}
const ToggledComponent = ToggleOn(ComponentA, ComponentB, shouldComponentADisplay);

class MyPage extends Component {
  render() {
    return(
      <ToggledComponent />
    )
  }
}
```

As with any higher-order components, any props passed to `ToggledComponent` in these examples will be passed unchanged to the component that ends up rendering (if any). This allows for completely transparent operation if you want to do, for example:

```javascript
import Button from './components/button'
Button = ToggleOn(Button, shouldButtonDisplay);

class MyPage extends Component {
  render() {
    return(
      /* Other content... */
      <Button className='button-join' text='Join Us!' />
    )
  }
}
```
