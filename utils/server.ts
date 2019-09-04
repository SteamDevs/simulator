import express from 'express'

export class Server {


    public app: express.Application
    public port: number
    private static instance : Server

    public static get getInstance(){
        if( this.instance == null ){
            this.instance = new this
        }
        return this.instance
    }

    constructor(){
        this.app = express()
        this.port = Number( process.env.PORT ) || 3002
    }

    startAPP( callback : any ){
        this.app.listen( this.port, callback )
    }
}