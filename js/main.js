let hands = [
    document.querySelector('.secondsHand'),
    document.querySelector('.minutesHand'),
    document.querySelector('.hoursHand')

]


setInterval(()=>{

        const now = new Date()

        let rotationValues = [
            now.getSeconds()*6,
            now.getMinutes()*6+now.getSeconds()/10,
            now.getHours()*30+now.getMinutes()/2
        ]
            let key=0

        hands.forEach((hand)=>{
            hand.style.transform = `rotate(${rotationValues[key]}deg)`
            key++
        })


},1000)


