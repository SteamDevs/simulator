import { Request, Response } from 'express'
import { testModel } from '../models/test'


export class Test {
    private static instance : Test

    public static get getInstance(){
        if( this.instance == null ){
            this.instance =  new this
        }
        return this.instance  
    }

    constructor(){}

    public sendTest(req: Request, res: Response){
        let data = new testModel({ 
            nameTest : req.body.name,
            type : true
        })
        data.save( (err, newTest)=>{
            if( err){
                return res.status(500)
                .json(err)
            }
            res.status(201).json(newTest)
        })
    }

    public getTest(req: Request, res: Response ){
        testModel.find({}, (err, tests)=>{
            if( err){
                return res.status(500)
                .json(err)
            }
            res.status(201).json(tests)
        })
    }
}
