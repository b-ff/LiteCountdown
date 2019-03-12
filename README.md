# LiteCountdown
Lite native JS class for making a countdown given time duration as string

## Demo

[See the demo](https://codepen.io/b-ff/pen/jJGdgd) (Powered by CodePen)

## Usage

```javascript
new LiteCountdown(selector, [duration, [callback]])
```

### selector
— any type of selector accepted by [document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
  
### duration
— *(optional)* string representing time duration in variative form from 'HH:MM:SS' till 'YY:mm:dd:HH:MM:SS' where every part representing count of related items

*Default value: '23:59:59'*

### callback
— *(optional)* any function that should be fired once the countdown is finished

## Roadmap
* Add unit-tests
* Provide a minified version
* Make available as NPM-module
* Make a method to force-stop/pause/resume countdown
