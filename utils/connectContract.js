import abiJSON from "./Web3RSVP.json"
import {ethers} from "ethers"


function connectContract(){
	const contractAddress="0x338a80d465e7a3d0c2156a0675763edD56375dEe"
	const contractABI=abiJSON.abi;
	let rsvpContract;
	try{
		const {ethereum} = window

		if(ethereum){
			const provider=new ethers.providers.Web3Provider(ethereum);
			const signer=provider.getSigner();
			rsvpContract= new ethers.Contract(contractAddress,contractABI,signer);
		}else{
			console.log("Ethereum object doesn't exist!");
		}
	}catch(error){
		console.log('ERROR:',error);
	}
	return rsvpContract
}


export default connectContract