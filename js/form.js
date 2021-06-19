class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME");
        title.position(130,0);
    
        var input= createInput("Name");
        input.position(130,160);
        var button=createButton("PLAY")
        button.position(250,200);

        button.mousePressed(function(){
            input.hide()
            button.hide()
            playerCount=playerCount+1;
            player.updateCount(playerCount);

            var name = input.value();
            player.update(name);

            var greeting=createElement('h2');
            greeting.html("hello "+name);
            greeting.position(130,160);
        })
    }
}