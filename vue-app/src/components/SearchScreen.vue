<template>
	<button class="backButton" @click="$emit('exitDialog')"><span class="material-icons">arrow_back_ios</span></button>
	<ul>
	<div  v-for="car in Cars" :key="car.REG" class="AddCar" @click="$emit('Navigate',this.AddCar)">
		<h1><span class="material-icons">directions_car</span>   Car {{ car.REG }}</h1>
	</div>
	</ul>
</template>
<script>
	import CarInformationScreen from './CarInformationScreen.vue'
	import Database from '../database/dbFunctions.js';
	export default{
		expose: ['setCars'],
		Components:{
			CarInformationScreen: CarInformationScreen,
		},
		data(){
			return{
				AddCar: CarInformationScreen,
				Cars: Database.cars
			};
		},
		mounted(){
		},
		methods:{
		}
	}
</script>
<style>
	.backButton{
		background-color: var(--offWhite);
		border-radius: 100%;
		width: 32px;
		height: 32px;
		align-items: center;
		border:none;
		box-shadow: 0px 0.25px 1px rgba(0,0,0, 0.5);
		transition: box-shadow 0.1s linear;
	}
	.backButton:hover{
		cursor: pointer;
		box-shadow: 1px 1px 1px rgba(0,0,0, 0.5);
	}
	.backButton > span{
		margin-bottom: -0.5px;
		margin-right: -8px;
	}
	.AddCar{
		cursor: pointer;
		width: 100%;
		font-size: 30px;
		background-color: var(--offWhite);
		margin-top: 10px;
		border-radius: 5px;
		padding: 5px;
		box-shadow: 0px 0.25px 1px rgba(0,0,0, 0.5);
		transition: box-shadow 0.1s linear;
	}
	.AddCar:hover{
		box-shadow: 1px 1px 1px rgba(0,0,0, 0.5);
	}
	.AddCar > h1 > span{
		color: var(--offWhite);
		background-color: var(--yellow);
		padding: 5px;
	}
</style>