function about( input ){
    let state = {
        "state" : null
    }
    state.state = input
    handdleHeader('about')
    return `<div>
        <p style="color:#FC3;margin-left:30px;" > Hi Poor Man!</p>
    </div>`
}
