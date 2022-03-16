/**
 *  подключаем import myWowComponent from './myWow.js';
 *  создаем переменную, например let block1 = new MyWowComponent('#block1');
 *  где '#block1' - написан по селектору querySelector
 *  устанавливаем анимацию и её скорость
 *  block1.riseLeft('1s'); или block1.riseRight('1s');
 *  скорость ставим как в css для параметра transition, вполне можно писать так '2s ease-in'
 */
export default class MyWowComponent{
	Block;
	constructor(location) {
		this.Block = document.querySelector(location);
	}

	riseLeft(animDuration,withOpacity,Height){
		this.rise(animDuration,'translate(-120%)',withOpacity, Height)
	}
	riseRight(animDuration,withOpacity,Height){
		this.rise(animDuration,'translate(120%)',withOpacity, Height)
	}
	rise(animDuration,turn, withOpacity = true,Height = 0.2){
		let transform;
		let opacity;
		transform = this.Block.style.transform;
		opacity = this.Block.style.opacity;
		if (withOpacity)
		this.Block.style.opacity = '0';
		this.Block.style.transform = `${turn}`;
		window.addEventListener('scroll',() => {
			// console.log(this.Block.getBoundingClientRect().y + this.Block.getBoundingClientRect().height - window.innerHeight)
			if (this.Block.getBoundingClientRect().y - window.innerHeight + window.innerHeight * Height < 0) {
				setTimeout(() => {
					this.Block.style.opacity = opacity;
					this.Block.style.transition = `${animDuration}`
					this.Block.style.transform = `${transform}`
				},2)
			}
		});
	}
}
