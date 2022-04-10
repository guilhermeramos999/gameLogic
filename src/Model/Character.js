class Character
{
    level = 1
    nick;
    _class;
    life;
    mana;
    damage;

    get level(){
        return this.level
    }
    get nick(){
        return this.nick
    }
    get class(){
        return this._class
    }
    get life(){
        return this.life
    }
    get mana(){
        return this.mana
    }
    get damage(){
        return this.damage
    }
    
    constructor(nick,_class){
        this.nick = nick
        this._class = _class
        
        this.completeStatus()
    }

    completeStatus(){
        let classList = {
            warrior: {
                damage:200,
                life:300,
                mana:100
            },
            mage: {
                damage:400,
                life: 100,
                mana:330
            }
        }

        if(this._class == 'Warrior'){
            this.damage = classList.warrior.damage
            this.life = classList.warrior.life
            this.mana = classList.warrior.mana
        }else if(this._class == 'Mage'){
            this.damage = classList.mage.damage
            this.life = classList.mage.life
            this.mana = classList.mage.mana
        }
    }
}

module.exports = Character