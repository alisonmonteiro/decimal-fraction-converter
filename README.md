# decimal-fraction-converter

> Conversor de decimal para fração em NodeJS :1234:

## Instalação

```
npm install --save decimal-fraction-converter
```

## Utilização
```javascript
var conv = require('decimal-fraction-converter')

conv.convert(0.5, true)
//=> { numerator: 1, denominator: 2 }

var fraction = conv.convert(0.5);
//=> { numerator: 5, denominator: 10 }

fraction.simplify();
//=> { numerator: 1, denominator: 2 }

fraction.written();
//=> 'cinco décimos'

conv.simplify({
  numerator: 10,
  denominator: 20
}).written();
//=> 'um meio'

conv.written({
  numerator: 10,
  denominator: 20
});
//=> 'dez vinte avos'
```

## Testes

```
ava ./teste.js
```

### ...
Este script foi criado apenas para estudo. O método `writen()` foi baseado no/utiliza o repositório [frac-por-extenso](https://github.com/theuves/frac-por-extenso)