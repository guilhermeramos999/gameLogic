const sql= require('mysql2')

class Dao
{
    conn = sql.createConnection({
        host: "localhost",
        user: 'root',
        password: 'Guilherme10@',
        database: 'gamelogic'
    })

    insert(char){
        const insertStmt = `INSERT INTO char_info (level,name,class,life,mana,damage) VALUES('${char.level}','${char.nick}','${char.class}','${char.life}','${char.mana}','${char.damage}')`

        this.conn.query(insertStmt,function (err,result,fields) {
            if(err){
                console.error(err)
            }
        })
    }
}

module.exports = Dao