<template>
	<button class="backButton" @click="$emit('Navigate',this.SearchScreen)"><span class="material-icons">arrow_back_ios</span></button>
	<div class="MainContainer">
		<h1><span class="material-icons">directions_car</span>    Information about car JZJ 00X</h1>
		<div class="SecondaryContainer">
			<h1>Car information:</h1>
			<h2>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. </h2>
		</div>
		<va-button style="align-self: flex-end;" color="danger" size="large" icon="clear">Remove car</va-button>
	</div>
</template>

<script>
	import SearchScreen from './SearchScreen.vue'
	export default{
		Components:{
			SearchScreen: SearchScreen,
		},
		data(){
			return{
				SearchScreen: SearchScreen,
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