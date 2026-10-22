<template>
	<button class="backButton" @click="$emit('Navigate',this.MenuScreen)"><span class="material-icons">arrow_back_ios</span></button>
	<div class="MainContainer">
		<h1><span class="material-icons">directions_car</span>    Add car</h1>
		<div class="SecondaryContainer">
			<h1>Information about car</h1>
			<va-input v-model="REG" class="textField" placeholder="REG:"></va-input><br>
			<va-input v-model="RANGE" class="textField" placeholder="Range:"></va-input><br>
			<va-input v-model="COLOR" class="textField" placeholder="Color:"></va-input><br>
			<va-input v-model="TYPE" class="textField" placeholder="Type:"></va-input><br>
			<va-button @click="AddCar" style="align-self: flex-end;">Add car</va-button>
		</div>
	</div>
</template>

<script>
	import MenuScreen from './MenuScreen.vue'
	import Database from '../database/dbFunctions.js'
	export default{
		Components:{
			MenuScreen: MenuScreen,
		},
		data(){
			return{
				MenuScreen: MenuScreen,
				REG: "",
				RANGE: "",
				COLOR: "",
				TYPE: "",
			}
		},
		methods:{
			AddCar(){
				const obj = {
					"REG":this.REG,
					"RANGE":this.RANGE,
					"COLOR":this.COLOR,
					"TYPE":this.TYPE
				}
				Database.addCar(obj);
			}
		}
	}
</script>

<style scoped>
	.MainContainer{
		margin: 10px;
		background-color: var(--offWhite);
		padding: 20px;
		font-size: 30px;
	}
	.MainContainer > h1{
		margin-bottom: 20px;
	}
	.MainContainer > h1 > span{
		padding: 5px;
		color: var(--offWhite);
		background-color: var(--yellow);
	}
	.SecondaryContainer{
		background-color: #d9d9d9;
		padding: 20px;
		display: flex;
		flex-direction: column;
	}
</style>