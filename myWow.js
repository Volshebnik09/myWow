/**
 *  подключаем в html <script defer src="myWow.js"></script>
 *  создаем переменную, например let block1 = new myWowComponent('#block1');
 *  где '#block1' - написан по селектору querySelector
 *  устанавливаем анимацию и её скорость
 *  block1.riseLeft('1s'); или block1.riseRight('1s');
 *  скорость ставиться по примеру 0.1s; 1s; 2s и т.п.
 */
class myWowComponent{
	Block;
	constructor(location) {
		this.Block = document.querySelector(location);
	}

	riseLeft(animDuration){
		this.rise(animDuration,'translate(-120%)')
	}
	riseRight(animDuration){
		this.rise(animDuration,'translate(120%)')
	}
	rise(animDuration,turn){
		let transform;
		transform = this.Block.style.transform;
		this.Block.style.transform = `${turn}`;
		window.addEventListener('scroll',() => {
			// console.log(this.Block.getBoundingClientRect().y + this.Block.getBoundingClientRect().height - window.innerHeight)
			if (this.Block.getBoundingClientRect().y - window.innerHeight + this.Block.getBoundingClientRect().height* 0.8 < 0) {
				setTimeout(() => {
					this.Block.style.transition = `${animDuration}`
					this.Block.style.transform = `${transform}`
				},2)
			}
		});
	}


}

