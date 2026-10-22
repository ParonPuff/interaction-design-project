//Code by smoljames from https://github.com/jamezmca/json-db/blob/main/dbFunctions.js
import axios from "axios";
export default class Database{
	static cars = [{"REG":"ABC123","RANGE":"123","COLOR":"BLUE","TYPE":"Audi"}];
	static async created(){
		try{
			const res = await axios.get('http://localhost:3000/Cars')
			this.cars = res.data
		}catch(err){
			console.log(err)
		}
	}
	static removeCar(obj){
		axios.delete(`http://localhost:3000/Cars/${obj.REG}`)
		this.cars = this.cars.filter((x) => x.REG !== obj.REG)
	}
	static async addCar(obj){
		try{
			const res = await axios.post(`http://localhost:3000/Cars`, obj)
			this.cars = [...this.cars, res.data]
			console.log(res)
			console.log(this.cars)
		}catch(err){
			console.log("ERROR")
		}
	}
}
