function labelSort(l){
	let a = l
	let c = []
	while(c.toString()!=a.toString()){
		c = a
		let b = []
		let labels = []
		let cur = 0
		let min = 0
		let max = 0
		for(let i=0;i<a.length;i++){
			labels.push(a[i]<a[i-1]?--cur:a[i]>a[i-1]?++cur:cur)
			min = cur<min?cur:min
			max = cur>max?cur:max
		}
		for(let i=min;i<=max;i++){
			b.push(...a.filter((_,id)=>labels[id]===i))
		}
		a = b
		console.log(a)
	}
	return a
}
function randomList(a){
	let b=[]
	for(i=0;i<a;i++){
		b.push(Math.floor(Math.random()*10))
	}
	return b
}
labelSort(randomList(20))