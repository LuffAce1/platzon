export default function platzom(str){
	let translation=str;
	//si la pabra termina en ar se le quitan estos 2 caracteres
	if(str.toLowerCase().endsWith('ar')){
		translation=str.slice(0,-2)
	}
	// si la palbra inicia con Z, se añade "pe" al final
	if(str.toLowerCase().startsWith('z')){
		//translation=translation+'pe'
		translation+='pe'
	}
	//si la palabra traducida tiene 10 o mas letras
	const length=translation.length
	if(length>=10){
		const firstHalf=translation.slice(0, Math.round(length/2))
		const SecondHalf=translation.slice(Math.round(length/2))
		translation=`${firstHalf}-${SecondHalf}`
	}
	//si la pabra original es un palindromo, ninuna regla anteiror cuenta y
	//se devuelve la misma palabra intercalando mayuscula y minuscula 
	const reverse=(str)=> str.split('').reverse().join('')

	function minMay(){
		const length=str.length
		let translation=''
		let capitalize= true
		for(let i=0;i<length;i++){
			const char= str.charAt(i)
			translation+=capitalize? char.toUpperCase() : char.toLowerCase()
			capitalize=!capitalize
		}
		return translation
	}

	str=str.toLowerCase()

	if(str==reverse(str)){
		return minMay(str)
	}

	return translation
}
