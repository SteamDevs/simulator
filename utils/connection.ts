import * as mongoose from 'mongoose';

export const configDB  = async ( URL_DATABASE : string ) => {
    return new Promise( (resolve, reject)=>{
        mongoose.connect(URL_DATABASE, { useNewUrlParser: true, useFindAndModify: false});
	    mongoose.connection.on('open', () => {
            console.info('Connected to DB.');
            resolve()
	    });
	    mongoose.connection.on('error', (err: any) => {
            console.error(err);
            reject(err)
	    });
    })
} 