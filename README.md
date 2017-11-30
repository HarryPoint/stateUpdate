```
import stateUpdate from 'index.js'
let a = {
  xx: 'xx',
  yy: 'yy'
}
let b = {
  xx: 'hahah',
  yy: 'xcfsdf'
}
stateUpdate(a, b)
```

>  a = {
>    xx: 'hahah',
>    yy: 'xcfsdf'
>  }

```
import stateUpdate from 'index.js'
let a = [2, 4, 5]
let b = {
  xx: 'hahah',
  yy: 'xcfsdf'
}
stateUpdate(a, b, 1)
```

>  a = [2, { xx: 'hahah', yy: 'xcfsdf' }, 5]

```
import stateUpdate from 'index.js'
let a = {
  xx: 'xx',
  yy: 'yy'
}
let b = {
  xx: 'hahah',
  yy: 'xcfsdf',
  other: 'sdfsdfsdf'
}
stateUpdate(a, b)
```

>  a = {
>    xx: 'hahah',
>    yy: 'xcfsdf'
>  }
