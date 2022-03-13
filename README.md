# инструция
 *  подключаем import myWowComponent from './myWow.js';
 *  создаем переменную, например let block1 = new MyWowComponent('#block1');
 *  где '#block1' - написан по селектору querySelector
 *  устанавливаем анимацию и её скорость
 *  block1.riseLeft('1s'); или block1.riseRight('1s');
 *  скорость ставиться по примеру 0.1s; 1s; 2s и т.п.
## пример подключения
type="module" - обязателен!!!
``` html
<script type="module" >
	import MyWowComponent from './myWow.js';
	const block5 = new MyWowComponent('#block5');
	block5.riseRight('1s')
</script>
```

